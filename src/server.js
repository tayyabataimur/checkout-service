import http from 'node:http';
import { publicConfig } from './config.js';

const port = Number(process.env.PORT || 4173);

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  if (req.url === '/config') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(publicConfig()));
    return;
  }
  res.writeHead(404, { 'content-type': 'application/json' });
  res.end(JSON.stringify({ error: 'not_found' }));
});

server.listen(port, () => {
  console.log(`checkout-service → http://127.0.0.1:${port}`);
});
