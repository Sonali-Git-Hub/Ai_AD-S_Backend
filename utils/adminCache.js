/**
 * adminCache.js
 * ─────────────────────────────────────────────────────────────────
 * Lightweight in-process cache for Admin Dashboard heavy queries.
 * Uses a plain JS Map — zero dependencies, works in single-instance Node.
 *
 * TTLs (seconds):
 *   analytics      → 5 min   (main overview stats)
 *   errorDrillDown → 3 min   (per-mode error breakdown)
 *   chatStats      → 2 min   (chat session stats row)
 *
 * On millions of users this dramatically reduces DB load because:
 * - 100 admins refreshing simultaneously → 1 DB query (not 100)
 * - Background revalidation keeps data fresh without blocking requests
 * ─────────────────────────────────────────────────────────────────
 */

const store = new Map(); // key → { data, expiresAt, freshAt }

/**
 * Get a cached value.
 * @returns { hit: boolean, data: any, stale: boolean }
 */
export const cacheGet = (key) => {
    const entry = store.get(key);
    if (!entry) return { hit: false };
    const now = Date.now();
    if (now > entry.expiresAt) {
        store.delete(key);
        return { hit: false };
    }
    return { hit: true, data: entry.data, stale: now > entry.freshAt };
};

/**
 * Set a cached value.
 * @param {string} key
 * @param {any}    data
 * @param {number} ttlSeconds       — hard expiry (cache miss after this)
 * @param {number} freshSeconds     — stale-while-revalidate window (default = ttl/2)
 */
export const cacheSet = (key, data, ttlSeconds = 300, freshSeconds = null) => {
    const now = Date.now();
    store.set(key, {
        data,
        expiresAt: now + ttlSeconds * 1000,
        freshAt:   now + (freshSeconds ?? Math.floor(ttlSeconds / 2)) * 1000,
    });
};

/** Manually invalidate a key or all keys matching a prefix */
export const cacheInvalidate = (keyOrPrefix) => {
    for (const k of store.keys()) {
        if (k === keyOrPrefix || k.startsWith(keyOrPrefix)) {
            store.delete(k);
        }
    }
};

/** Returns cache stats for debugging */
export const cacheStats = () => ({
    keys: store.size,
    entries: [...store.entries()].map(([k, v]) => ({
        key: k,
        expiresIn: Math.round((v.expiresAt - Date.now()) / 1000) + 's',
        stale: Date.now() > v.freshAt,
    })),
});
