import { Storage } from '@google-cloud/storage';
import { GoogleAuth } from 'google-auth-library';
import logger from '../utils/logger.js';

// GoogleAuth instance — used to get an auth client for IAM-based signing
const auth = new GoogleAuth({ scopes: ['https://www.googleapis.com/auth/cloud-platform'] });

// ---------------------------------------------------------------------------
// Google Cloud Storage — aisa_objects bucket
// Impersonated Signed URL Architecture
// ---------------------------------------------------------------------------

const BUCKET_NAME = 'aisa_objects';
const TARGET_PRINCIPAL = process.env.VIDEO_SERVICE_ACCOUNT || 'video-signer@ai-mall-484810.iam.gserviceaccount.com';

let storage;
let bucket;

try {
    process.env.GOOGLE_CLOUD_UNIVERSE_DOMAIN = 'googleapis.com';
    storage = new Storage({
        projectId: process.env.GCP_PROJECT_ID || 'ai-mall-484810',
        universe_domain: 'googleapis.com',
    });
    bucket = storage.bucket(BUCKET_NAME);
    logger.info(`[GCS] Storage initialized with Impersonation for ${TARGET_PRINCIPAL}`);
} catch (error) {
    logger.error(`[GCS] Failed to initialize storage: ${error.message}`);
    storage = new Storage({ projectId: process.env.GCP_PROJECT_ID || 'ai-mall-484810' });
    bucket = storage.bucket(BUCKET_NAME);
}

/**
 * Generates a V4 Signed URL for a GCS object.
 *
 * Strategy 1 (Primary):  serviceAccountEmail + authClient  — works with user ADC + impersonation.
 *   The `serviceAccountEmail` option tells the SDK to call IAM signBlob as the SA,
 *   bypassing the need for a local client_email in the credential file.
 *
 * Strategy 2 (Fallback): Plain getSignedUrl — works when running on GCP with an SA attached.
 *
 * Strategy 3 (Last resort): makePublic — for local dev without signing perms.
 *
 * @param {string} gcsPath - Path within the bucket (e.g. 'generated_images/foo.png')
 * @param {number} [expiresInMinutes=10080] - Default 7 days (V4 max)
 * @returns {Promise<string>}
 */
export const getSignedUrl = async (gcsPath, expiresInMinutes = 10080) => {
    const expires = Date.now() + expiresInMinutes * 60 * 1000;

    // --- Strategy 1: IAM signBlob via serviceAccountEmail + authClient (handles user ADC) ---
    try {
        const authClient = await auth.getClient();
        const file = bucket.file(gcsPath);
        const [url] = await file.getSignedUrl({
            version: 'v4',
            action: 'read',
            expires,
            serviceAccountEmail: TARGET_PRINCIPAL,
            authClient,
        });
        logger.info(`[GCS] Signed URL generated via IAM serviceAccountEmail.`);
        return url;
    } catch (err) {
        logger.warn(`[GCS] IAM serviceAccountEmail signing failed (${err.message?.substring(0, 100)}) — trying plain getSignedUrl...`);
    }

    // --- Strategy 2: Plain getSignedUrl (works on GCP with attached SA) ---
    try {
        const file = bucket.file(gcsPath);
        const [url] = await file.getSignedUrl({
            version: 'v4',
            action: 'read',
            expires,
        });
        logger.info(`[GCS] Signed URL generated via plain getSignedUrl.`);
        return url;
    } catch (err) {
        logger.warn(`[GCS] Plain getSignedUrl failed (${err.message?.substring(0, 100)}) — trying makePublic...`);
    }

    // --- Strategy 3: Backend proxy URL — zero signing needed, works with plain ADC ---
    // The /api/media/proxy endpoint downloads via the Storage SDK (ADC) and streams to client.
    const rawGcsUrl = `https://storage.googleapis.com/${BUCKET_NAME}/${gcsPath}`;
    const BACKEND = process.env.LOCAL_BACKEND_URL || 'http://localhost:8080';
    const proxyUrl = `${BACKEND}/api/media/proxy?url=${encodeURIComponent(rawGcsUrl)}`;
    logger.warn(`[GCS] All signing strategies failed — falling back to backend proxy: ${proxyUrl}`);
    return proxyUrl;
};


/**
 * Uploads a Buffer to the aisa_objects GCS bucket and returns a signed URL.
 *
 * @param {Buffer}  fileBuffer
 * @param {Object}  options
 * @param {string}  options.folder      - Logical folder prefix (e.g. 'generated_images')
 * @param {string}  [options.filename]  - Override filename (without folder)
 * @param {string}  [options.mimeType]  - MIME type (default: 'image/png')
 * @returns {Promise<{ publicUrl: string, gcsPath: string }>}
 */
export const uploadToGCS = async (fileBuffer, options = {}) => {
    const {
        folder = 'uploads',
        filename = `file_${Date.now()}.png`,
        mimeType = 'image/png',
    } = options;

    const gcsPath = `${folder}/${filename}`;
    const file = bucket.file(gcsPath);

    logger.info(`[GCS] Uploading to gs://${BUCKET_NAME}/${gcsPath} ...`);

    await file.save(fileBuffer, {
        metadata: { contentType: mimeType },
        resumable: false,
    });

    const resultUrl = await getSignedUrl(gcsPath);

    logger.info(`[GCS] Upload success, Signed URL generated.`);

    return { publicUrl: resultUrl, gcsPath };
};

export const gcsFilename = (base = 'file', ext = 'png') =>
    `${base}_${Date.now()}.${ext}`;

/**
 * Downloads a file from GCS directly via the SDK (bypasses HTTP auth, no 403 issues).
 * Accepts a full GCS URL (gs:// or https://storage.googleapis.com/...) or a raw gcsPath.
 *
 * @param {string} urlOrPath - Full GCS URL or raw path like 'logos/file.png'
 * @returns {Promise<{ buffer: Buffer, contentType: string }>}
 */
export const downloadFromGCS = async (urlOrPath) => {
    let gcsPath = urlOrPath;

    if (urlOrPath.startsWith('gs://')) {
        gcsPath = urlOrPath.replace(`gs://${BUCKET_NAME}/`, '');
    } else if (urlOrPath.includes('storage.googleapis.com')) {
        const urlObj = new URL(urlOrPath);
        gcsPath = urlObj.pathname.replace(`/${BUCKET_NAME}/`, '');
    }

    logger.info(`[GCS] Downloading via SDK: ${gcsPath}`);
    const file = bucket.file(gcsPath);
    const [contents] = await file.download();
    const [metadata] = await file.getMetadata();
    const contentType = metadata?.contentType || 'image/png';
    return { buffer: contents, contentType };
};

export default { uploadToGCS, gcsFilename, getSignedUrl, downloadFromGCS };
