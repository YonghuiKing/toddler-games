// 游戏逻辑 - 数一数
module.exports = {
  id: 'count',
  name: '数一数',
  
  generateQuestion() {
    const count = Math.floor(Math.random() * 4) + 1; // 1-4个，更适合幼儿
    const fruits = [
      { icon: '🍎', name: '苹果' },
      { icon: '🍊', name: '橙子' },
      { icon: '🍋', name: '柠檬' },
      { icon: '🍇', name: '葡萄' },
      { icon: '🍓', name: '草莓' },
      { icon: '🍑', name: '桃子' }
    ];
    const fruit = fruits[Math.floor(Math.random() * fruits.length)];
    
    return {
      items: Array(count).fill({ ...fruit, id: 0 }),
      count,
      question: `数一数有几个${fruit.name}？`,
      correctAnswer: count,
      displaySize: 80 // 统一更大的显示尺寸
    };
  },
  
  checkAnswer(answer, question) {
    return answer === question.correctAnswer;
  },
  
  speakQuestion(question) {
    return question.question;
  }
};