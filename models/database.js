// 数据库模型 - 用户、游戏记录
const mysql = require('mysql2/promise');
const config = require('../config');

let pool = null;

// 初始化数据库连接池
async function initDatabase() {
  if (!config.database.enable) {
    console.log('📦 数据库未启用，使用内存存储');
    return false;
  }
  
  try {
    pool = mysql.createPool({
      host: config.database.host,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
      database: config.database.database,
      waitForConnections: true,
      connectionLimit: 10
    });
    
    // 创建表
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        total_score INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS game_records (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        game_id VARCHAR(50) NOT NULL,
        score INT NOT NULL,
        correct_count INT DEFAULT 0,
        wrong_count INT DEFAULT 0,
        time_spent INT DEFAULT 0,
        played_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);
    
    console.log('✅ MySQL数据库连接成功');
    return true;
  } catch (e) {
    console.log('⚠️ 数据库连接失败，使用内存存储', e.message);
    return false;
  }
}

// 内存存储（测试模式）
const memoryStorage = {
  users: new Map(),
  records: [],
  currentUser: null
};

// 用户相关操作
const User = {
  // 注册
  async register(username, password) {
    if (config.database.enable && pool) {
      const [rows] = await pool.execute('SELECT id FROM users WHERE username = ?', [username]);
      if (rows.length > 0) {
        throw new Error('用户名已存在');
      }
      const [result] = await pool.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
      return { id: result.insertId, username };
    } else {
      // 内存存储
      if (memoryStorage.users.has(username)) {
        throw new Error('用户名已存在');
      }
      const id = memoryStorage.users.size + 1;
      memoryStorage.users.set(username, { id, username, password, totalScore: 0 });
      return { id, username };
    }
  },
  
  // 登录
  async login(username, password) {
    if (config.database.enable && pool) {
      const [rows] = await pool.execute('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
      if (rows.length === 0) {
        throw new Error('用户名或密码错误');
      }
      memoryStorage.currentUser = rows[0].id;
      return { id: rows[0].id, username: rows[0].username, score: rows[0].total_score };
    } else {
      const user = memoryStorage.users.get(username);
      if (!user || user.password !== password) {
        throw new Error('用户名或密码错误');
      }
      memoryStorage.currentUser = user.id;
      return { id: user.id, username: user.username, score: user.totalScore || 0 };
    }
  },
  
  // 获取当前用户
  async getCurrentUser() {
    if (config.database.enable && pool && memoryStorage.currentUser) {
      const [rows] = await pool.execute('SELECT id, username, total_score FROM users WHERE id = ?', [memoryStorage.currentUser]);
      if (rows.length > 0) {
        return { id: rows[0].id, username: rows[0].username, score: rows[0].total_score };
      }
    } else if (memoryStorage.currentUser) {
      for (const user of memoryStorage.users.values()) {
        if (user.id === memoryStorage.currentUser) {
          return { id: user.id, username: user.username, score: user.totalScore || 0 };
        }
      }
    }
    return null;
  },
  
  // 更新分数
  async addScore(userId, score) {
    if (config.database.enable && pool) {
      await pool.execute('UPDATE users SET total_score = total_score + ? WHERE id = ?', [score, userId]);
    } else {
      for (const user of memoryStorage.users.values()) {
        if (user.id === userId) {
          user.totalScore = (user.totalScore || 0) + score;
          break;
        }
      }
    }
  },
  
  // 登出
  logout() {
    memoryStorage.currentUser = null;
  },
  
  // 获取用户游戏记录
  async getRecords(userId, limit = 10) {
    if (config.database.enable && pool) {
      const [rows] = await pool.execute(
        'SELECT * FROM game_records WHERE user_id = ? ORDER BY played_at DESC LIMIT ?',
        [userId, limit]
      );
      return rows;
    } else {
      return memoryStorage.records.filter(r => r.userId === userId).slice(-limit).reverse();
    }
  }
};

// 游戏记录相关操作
const GameRecord = {
  // 保存游戏记录
  async save(userId, gameId, score, correctCount, wrongCount, timeSpent) {
    if (config.database.enable && pool) {
      await pool.execute(
        'INSERT INTO game_records (user_id, game_id, score, correct_count, wrong_count, time_spent) VALUES (?, ?, ?, ?, ?, ?)',
        [userId, gameId, score, correctCount, wrongCount, timeSpent]
      );
    } else {
      memoryStorage.records.push({
        id: memoryStorage.records.length + 1,
        userId,
        gameId,
        score,
        correctCount,
        wrongCount,
        timeSpent,
        playedAt: new Date()
      });
    }
    
    // 更新用户总分
    await User.addScore(userId, score);
  },
  
  // 获取所有用户的最高分排行
  async getLeaderboard(limit = 10) {
    if (config.database.enable && pool) {
      const [rows] = await pool.execute(
        'SELECT u.username, MAX(gr.score) as max_score, COUNT(gr.id) as play_count FROM game_records gr JOIN users u ON gr.user_id = u.id GROUP BY u.id ORDER BY max_score DESC LIMIT ?',
        [limit]
      );
      return rows;
    } else {
      // 简单实现：返回所有用户的总分
      const scores = [];
      for (const user of memoryStorage.users.values()) {
        const userRecords = memoryStorage.records.filter(r => r.userId === user.id);
        const maxScore = userRecords.reduce((max, r) => Math.max(max, r.score), 0);
        scores.push({ username: user.username, max_score: maxScore, play_count: userRecords.length });
      }
      return scores.sort((a, b) => b.max_score - a.max_score).slice(0, limit);
    }
  }
};

module.exports = {
  initDatabase,
  User,
  GameRecord
};