const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// 模拟用户数据存储
const users = new Map();
let currentUser = null;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
};

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try { resolve(body ? JSON.parse(body) : {}); }
      catch (e) { resolve({}); }
    });
    req.on('error', reject);
  });
}

async function handleApi(req, res) {
  const url = req.url.split('?')[0];
  const method = req.method;
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  res.setHeader('Content-Type', 'application/json');

  // 注册
  if (url === '/api/register' && method === 'POST') {
    const { username, password } = await parseBody(req);
    if (!username || !password) {
      res.writeHead(400);
      res.end(JSON.stringify({ success: false, message: '请填写完整信息' }));
      return;
    }
    if (users.has(username)) {
      res.writeHead(400);
      res.end(JSON.stringify({ success: false, message: '用户名已存在' }));
      return;
    }
    users.set(username, { password, score: 0, createdAt: new Date().toISOString() });
    res.writeHead(200);
    res.end(JSON.stringify({ success: true, message: '注册成功' }));
    return;
  }

  // 登录
  if (url === '/api/login' && method === 'POST') {
    const { username, password } = await parseBody(req);
    const user = users.get(username);
    if (!user || user.password !== password) {
      res.writeHead(401);
      res.end(JSON.stringify({ success: false, message: '用户名或密码错误' }));
      return;
    }
    currentUser = username;
    res.writeHead(200);
    res.end(JSON.stringify({ success: true, username, score: user.score }));
    return;
  }

  // 获取用户
  if (url === '/api/user' && method === 'GET') {
    if (currentUser) {
      const user = users.get(currentUser);
      res.writeHead(200);
      res.end(JSON.stringify({ username: currentUser, score: user?.score || 0 }));
    } else {
      res.writeHead(200);
      res.end(JSON.stringify({ username: null }));
    }
    return;
  }

  // 登出
  if (url === '/api/logout' && method === 'POST') {
    currentUser = null;
    res.writeHead(200);
    res.end(JSON.stringify({ success: true }));
    return;
  }

  // 保存分数
  if (url === '/api/score' && method === 'POST') {
    const { score, username } = await parseBody(req);
    if (username && users.has(username)) {
      const user = users.get(username);
      user.score = (user.score || 0) + score;
    }
    res.writeHead(200);
    res.end(JSON.stringify({ success: true }));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not Found' }));
}

function serveStatic(req, res) {
  let filePath = req.url.split('?')[0];
  if (filePath === '/') filePath = '/index.html';
  
  const fullPath = path.join(__dirname, 'public', filePath);
  const ext = path.extname(fullPath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  
  fs.readFile(fullPath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err2, content2) => {
          if (err2) { res.writeHead(404); res.end('Not Found'); }
          else { res.writeHead(200, { 'Content-Type': 'text/html' }); res.end(content2); }
        });
      } else { res.writeHead(500); res.end('Server Error'); }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api/')) { handleApi(req, res); return; }
  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(`🎮 幼儿游戏服务器已启动 - http://localhost:${PORT}`);
});