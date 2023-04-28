const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

http.createServer(function(req, res) {
  // Set the headers to allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  // Proxy the request to the API endpoint
  proxy.web(req, res, { target: 'https://rest-api.hellomoon.io/v0/nft/collection/stats' });
}).listen(8000);

console.log('Proxy server running on port 8000');
