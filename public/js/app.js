// 首页逻辑
document.addEventListener('DOMContentLoaded', () => {
  renderGameCards();
  checkUserStatus();
  // 显示游戏总数
  document.getElementById('totalGames').textContent = GAMES.length;
});

function renderGameCards() {
  const grid = document.getElementById('gameGrid');
  GAMES.forEach((game, index) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.setProperty('--card-color', game.color);
    card.style.setProperty('--card-color-2', game.color2);
    card.innerHTML = `
      <span class="game-number">${index + 1}</span>
      <span class="game-icon">${game.icon}</span>
      <h3 class="game-title">${game.name}</h3>
      <span class="game-age">${game.age}</span>
    `;
    card.onclick = () => location.href = `/game.html?game=${game.id}`;
    grid.appendChild(card);
  });
}

async function checkUserStatus() {
  try {
    const res = await fetch('/api/user');
    const data = await res.json();
    if (data.username) updateUserUI(data.username, data.score);
  } catch (e) { console.log('未登录'); }
}

function updateUserUI(username, score = 0) {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const userInfo = document.getElementById('userInfo');
  if (username) {
    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';
    userInfo.style.display = 'flex';
    document.getElementById('usernameDisplay').textContent = username;
    document.getElementById('totalScore').textContent = score;
  }
}

// 弹窗控制
document.getElementById('loginBtn')?.addEventListener('click', () => document.getElementById('loginModal').classList.add('active'));
document.getElementById('registerBtn')?.addEventListener('click', () => document.getElementById('registerModal').classList.add('active'));
document.querySelectorAll('.close').forEach(btn => btn.onclick = (e) => e.target.closest('.modal').classList.remove('active'));
document.querySelectorAll('.modal').forEach(m => m.onclick = (e) => { if (e.target === m) m.classList.remove('active'); });

// 登录
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const u = document.getElementById('loginUsername').value;
  const p = document.getElementById('loginPassword').value;
  const res = await fetch('/api/login', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username:u, password:p}) });
  const data = await res.json();
  if (data.success) {
    document.getElementById('loginModal').classList.remove('active');
    updateUserUI(data.username, data.score);
    speak(`欢迎回来，${data.username}！`);
  } else { alert(data.message); }
});

// 注册
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const u = document.getElementById('registerUsername').value;
  const p = document.getElementById('registerPassword').value;
  const res = await fetch('/api/register', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({username:u, password:p}) });
  const data = await res.json();
  if (data.success) { alert('注册成功！请登录'); document.getElementById('registerModal').classList.remove('active'); document.getElementById('loginModal').classList.add('active'); }
  else { alert(data.message); }
});

// 退出
document.getElementById('logoutBtn')?.addEventListener('click', async () => {
  await fetch('/api/logout', {method:'POST'});
  updateUserUI(null);
  speak('已退出登录');
});