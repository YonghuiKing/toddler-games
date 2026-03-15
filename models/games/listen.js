// 游戏逻辑 - 听指令
module.exports = {
  id: 'listen',
  name: '听指令',
  
  generateQuestion() {
    const items = [
      { name: '苹果', icon: '🍎', id: 1 },
      { name: '橙子', icon: '🍊', id: 2 },
      { name: '香蕉', icon: '🍌', id: 3 },
      { name: '葡萄', icon: '🍇', id: 4 }
    ];
    
    const target = items[Math.floor(Math.random() * items.length)];
    const options = [...items].sort(() => Math.random() - 0.5);
    
    return {
      target,
      options: options.map(o => ({ ...o, displayId: o.id })),
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