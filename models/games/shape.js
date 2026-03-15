// 游戏逻辑 - 形状识别
module.exports = {
  id: 'shape',
  name: '形状识别',
  
  generateQuestion() {
    const shapes = [
      { name: '圆形', icon: '⭕', id: 1 },
      { name: '方形', icon: '⬜', id: 2 },
      { name: '三角形', icon: '🔺', id: 3 },
      { name: '心形', icon: '❤️', id: 4 },
      { name: '星星', icon: '⭐', id: 5 }
    ];
    
    const target = shapes[Math.floor(Math.random() * shapes.length)];
    const others = shapes.filter(s => s.id !== target.id).sort(() => Math.random() - 0.5);
    const options = [target, ...others.slice(0, 2)].sort(() => Math.random() - 0.5);
    
    return {
      target,
      options: options.map((s, i) => ({ ...s, displayId: i + 1 })),
      question: `找出${target.name}`,
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