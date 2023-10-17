const { createProxyMiddleware } = require('http-proxy-middleware');

const API_URL = process.env.API_URL || '/api';

module.exports = function setupProxy(app) {
  app.use(
    API_URL,
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
};
