// 游戏管理器 - 统一管理所有游戏
const fs = require('fs');
const path = require('path');
const gameList = require('./list');

// 动态加载所有游戏
const games = {};
const gameFiles = fs.readdirSync(__dirname).filter(f => f.endsWith('.js') && f !== 'list.js' && f !== 'index.js');

gameFiles.forEach(file => {
  const game = require(path.join(__dirname, file));
  if (game.id) {
    games[game.id] = game;
  }
});

const GameManager = {
  // 获取游戏列表
  getGameList() {
    return gameList.map(g => ({
      ...g,
      hasLogic: !!games[g.id]
    }));
  },
  
  // 获取单个游戏信息
  getGameById(gameId) {
    return gameList.find(g => g.id === gameId);
  },
  
  // 获取游戏逻辑
  getGameLogic(gameId) {
    return games[gameId];
  },
  
  // 生成题目
  generateQuestion(gameId) {
    const game = games[gameId];
    if (!game || !game.generateQuestion) {
      return null;
    }
    return game.generateQuestion();
  },
  
  // 检查答案
  checkAnswer(gameId, answer, question) {
    const game = games[gameId];
    if (!game || !game.checkAnswer) {
      return false;
    }
    return game.checkAnswer(answer, question);
  },
  
  // 获取语音提示
  getSpeakText(gameId, question) {
    const game = games[gameId];
    if (!game || !game.speakQuestion) {
      return question?.question || '';
    }
    return game.speakQuestion(question);
  },
  
  // 获取所有已实现逻辑的游戏数量
  getImplementedCount() {
    return Object.keys(games).length;
  }
};

module.exports = GameManager;