// 游戏逻辑 - 天气认知
module.exports = {
  id: 'weather',
  name: '天气认知',
  
  generateQuestion() {
    const weather = [
      { name: '晴天', icon: '☀️', id: 1 },
      { name: '多云', icon: '☁️', id: 2 },
      { name: '下雨', icon: '🌧️', id: 3 },
      { name: '雪天', icon: '❄️', id: 4 }
    ];
    
    const target = weather[Math.floor(Math.random() * weather.length)];
    const options = [...weather].sort(() => Math.random() - 0.5);
    
    return {
      target,
      options: options.map((w, i) => ({ ...w, displayId: i + 1 })),
      question: `点击${target.name}`,
      displaySize: 100
    };
  },
  
  checkAnswer(answer, question) {
    return answer === question.target.id;
  },
  
  speakQuestion(question) {
    return question.question;
  }
};