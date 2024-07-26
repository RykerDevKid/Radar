const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'https://www.alwood.net/page/elementary-home', changeOrigin: true }));

app.listen(3001, () => {
  console.log('Proxy server running on port 3001');
});