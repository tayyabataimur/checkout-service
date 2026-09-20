// Resolves runtime configuration.
// Secret values come from the environment and are used server-side only —
// they must never be serialized into an HTTP response.
export function getConfig() {
  return {
    region: process.env.REGION || 'eu-west-1',
    checkoutTimeoutMs: Number(process.env.CHECKOUT_TIMEOUT_MS || 8000),
    // secrets: read from env, never returned to clients
    apiKey: process.env.API_KEY,
    customerId: process.env.CUSTOMER_ID
  };
}

// Public view of config — safe to return over HTTP.
export function publicConfig() {
  const { region, checkoutTimeoutMs } = getConfig();
  return { region, checkoutTimeoutMs };
}
