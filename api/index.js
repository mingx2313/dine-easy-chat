import server from '../dist/server/server.js';

export default async function handler(req, res) {
  const proto = (req.headers['x-forwarded-proto'] || 'https').split(',')[0].trim();
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
  const url = `${proto}://${host}${req.url}`;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value !== undefined) {
      headers.set(key, Array.isArray(value) ? value.join(', ') : value);
    }
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const body = chunks.length > 0 ? Buffer.concat(chunks) : undefined;

  const request = new Request(url, {
    method: req.method,
    headers,
    body: ['GET', 'HEAD'].includes(req.method) ? undefined : body,
  });

  const response = await server.fetch(request);

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));

  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}
