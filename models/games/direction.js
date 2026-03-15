// 游戏逻辑 - 上下左右
module.exports = {
  id: 'direction',
  name: '上下左右',
  
  generateQuestion() {
    const directions = [
      { name: '上面', arrow: '⬆️', id: 'top' },
      { name: '下面', arrow: '⬇️', id: 'bottom' },
      { name: '左边', arrow: '⬅️', id: 'left' },
      { name: '右边', arrow: '➡️', id: 'right' }
    ];
    
    const target = directions[Math.floor(Math.random() * directions.length)];
    
    return {
      target,
      directions,
      question: `点击${target.name}`,
      displaySize: 120
    };
  },
  
  checkAnswer(answer, question) {
    return answer === question.target.id;
  },
  
  speakQuestion(question) {
    return question.question;
  }
};