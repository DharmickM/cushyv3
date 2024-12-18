import sdk from '@api/basiq3';

// In-memory token storage
let tokenCache: {
  token: string;
  expiresAt: number;
} | null = null;

export async function getToken() {
  // Check if we have a valid token in memory
  if (tokenCache && tokenCache.expiresAt > Date.now()) {
    return tokenCache.token;
  }

  try {
    sdk.auth(`Basic ${process.env.BASIQ_API_KEY}`);
    const { data } = await sdk.postToken(
      { scope: 'SERVER_ACCESS' }, 
      { 'BASIQ-version': '3.0' }
    );
    
    // Store token in memory with 30-minute expiry
    tokenCache = {
      token: data.access_token,
      expiresAt: Date.now() + (1800 - 60) * 1000 // 30 minutes (1800s) minus 60s buffer
    };
    
    return data.access_token;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
