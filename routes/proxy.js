const express = require('express');
const https = require('https');
const http = require('http');
const router = express.Router();

router.get('/', (req, res) => {
  const url = decodeURIComponent(req.query.url);
  if (!url) return res.status(400).send('Missing URL');

  const client = url.startsWith('https') ? https : http;

  client.get(url, (streamRes) => {
    res.setHeader('Content-Type', streamRes.headers['content-type'] || 'application/vnd.apple.mpegurl');
    streamRes.pipe(res);
  }).on('error', (err) => {
    console.error(err);
    res.status(500).send('Proxy error');
  });
});

module.exports = router;
