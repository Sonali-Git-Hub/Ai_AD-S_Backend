import { GoogleAuth } from "google-auth-library";

async function test() {
  const auth = new GoogleAuth();

  const client = await auth.getClient();
  const creds = await auth.getCredentials();

  console.log("Client type:", client.constructor.name);
  console.log("Credentials:", creds);
}

test().catch(console.error);