// 游戏逻辑 - 配对
module.exports = {
  id: 'match',
  name: '配对',
  
  generateQuestion() {
    const icons = [
      { icon: '🐶', name: '小狗' },
      { icon: '🐱', name: '小猫' },
      { icon: '🐰', name: '小兔' },
      { icon: '🦊', name: '狐狸' },
      { icon: '🐼', name: '熊猫' },
      { icon: '🐨', name: '考拉' },
      { icon: '🦁', name: '狮子' },
      { icon: '🐯', name: '老虎' }
    ];
    
    const target = icons[Math.floor(Math.random() * icons.length)];
    
    const options = [target];
    const others = icons.filter(i => i.icon !== target.icon).sort(() => Math.random() - 0.5);
    options.push(...others.slice(0, 2));
    options.sort(() => Math.random() - 0.5);
    
    return {
      target,
      options: options.map((o, i) => ({ ...o, id: i + 1 })),
      question: `找出和${target.icon}一样的`,
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