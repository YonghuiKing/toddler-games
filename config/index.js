// 配置文件
module.exports = {
  // 服务器配置
  server: {
    port: 3000
  },
  
  // 数据库配置
  database: {
    enable: false, // 是否启用MySQL，测试时设为false
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'toddler_games'
  },
  
  // 游戏配置
  game: {
    maxQuestions: 10,   // 每次游戏题目数量
    scorePerQuestion: 10 // 答对一题得分
  }
};