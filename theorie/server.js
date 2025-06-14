const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 7777;

const server = http.createServer((req, res) => {
  // Путь к файлу
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  // Расширение
  let ext = path.extname(filePath).toLowerCase();

  // MIME-типы
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',
    '.eot': 'application/vnd.ms-fontobject'
  };

  const contentType = mimeTypes[ext] || 'application/octet-stream';

  // Чтение файла
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`✅ Сервер работает: http://localhost:${PORT}`);
});
