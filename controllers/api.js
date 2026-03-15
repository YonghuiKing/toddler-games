// API控制器 - 处理所有API请求
const { User, GameRecord } = require('../models/database');
const config = require('../config');

const ApiController = {
  // 用户注册
  async register(req, res) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.fail('请填写完整信息');
      }
      const result = await User.register(username, password);
      res.success({ message: '注册成功', user: result });
    } catch (e) {
      res.fail(e.message);
    }
  },
  
  // 用户登录
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const result = await User.login(username, password);
      res.success({ username: result.username, score: result.score });
    } catch (e) {
      res.fail(e.message, 401);
    }
  },
  
  // 获取当前用户
  async getUser(req, res) {
    try {
      const user = await User.getCurrentUser();
      if (user) {
        res.success(user);
      } else {
        res.success({ username: null });
      }
    } catch (e) {
      res.fail(e.message);
    }
  },
  
  // 登出
  async logout(req, res) {
    try {
      User.logout();
      res.success({ message: '已退出' });
    } catch (e) {
      res.fail(e.message);
    }
  },
  
  // 获取游戏列表
  async getGames(req, res) {
    try {
      // 动态加载游戏配置
      const games = require('../models/games');
      const gameList = games.getGameList();
      res.success({ games: gameList });
    } catch (e) {
      res.fail(e.message);
    }
  },
  
  // 获取单个游戏配置
  async getGame(req, res) {
    try {
      const { gameId } = req.params;
      const games = require('../models/games');
      const game = games.getGameById(gameId);
      if (!game) {
        return res.fail('游戏不存在', 404);
      }
      res.success(game);
    } catch (e) {
      res.fail(e.message);
    }
  },
  
  // 生成游戏题目
  async generateQuestion(req, res) {
    try {
      const { gameId } = req.body;
      const games = require('../models/games');
      const question = games.generateQuestion(gameId);
      res.success(question);
    } catch (e) {
      res.fail(e.message);
    }
  },
  
  // 检查答案
  async checkAnswer(req, res) {
    try {
      const { gameId, answer, question } = req.body;
      const games = require('../models/games');
      const isCorrect = games.checkAnswer(gameId, answer, question);
      res.success({ correct: isCorrect });
    } catch (e) {
      res.fail(e.message);
    }
  },
  
  // 保存游戏记录
  async saveRecord(req, res) {
    try {
      const { gameId, score, correctCount, wrongCount, timeSpent } = req.body;
      const user = await User.getCurrentUser();
      
      if (user) {
        await GameRecord.save(user.id, gameId, score, correctCount, wrongCount, timeSpent);
        // 更新本地分数
        user.score = (user.score || 0) + score;
        res.success({ message: '记录已保存', user });
      } else {
        res.success({ message: '未登录，记录已保存(匿名)' });
      }
    } catch (e) {
      res.fail(e.message);
    }
  },
  
  // 获取用户游戏记录
  async getRecords(req, res) {
    try {
      const user = await User.getCurrentUser();
      if (!user) {
        return res.success({ records: [] });
      }
      const records = await User.getRecords(user.id);
      res.success({ records });
    } catch (e) {
      res.fail(e.message);
    }
  },
  
  // 获取排行榜
  async getLeaderboard(req, res) {
    try {
      const leaderboard = await GameRecord.getLeaderboard();
      res.success({ leaderboard });
    } catch (e) {
      res.fail(e.message);
    }
  },
  
  // 获取系统设置
  async getSettings(req, res) {
    res.success({
      databaseEnabled: config.database.enable,
      maxQuestions: config.game.maxQuestions,
      scorePerQuestion: config.game.scorePerQuestion
    });
  }
};

module.exports = ApiController;