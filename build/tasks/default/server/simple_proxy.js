var httpProxy = require('http-proxy'),
  fs = require('fs');


var proxy = httpProxy.createProxyServer({
  target: 'http://www.dev-charter.net',
  secure: true,
  ssl: {
    key: fs.readFileSync('./server/keys/development.key', 'utf8'),
    cert: fs.readFileSync('./server/keys/development.crt', 'utf8')
  },
  headers: {
    'X-Original-URL': 'https://dev-charter.net'
//    'X-Requested-With': 'XMLHttpRequest',
//    'Accept': 'application/json'
  }
}).listen(8443);




