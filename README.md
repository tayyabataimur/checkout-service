# checkout-service

Lightweight Node service that resolves runtime config and exposes a small checkout/health API.

## Run

```bash
npm install
npm start
```

Server listens on `PORT` (default `4173`).

## Config

Runtime config is resolved in `src/config.js`. Secrets are injected via environment
variables in CI/production and must never be returned in an HTTP response.
