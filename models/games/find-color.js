// 游戏逻辑 - 找颜色
module.exports = {
  id: 'find-color',
  name: '找颜色',
  
  generateQuestion() {
    const colors = [
      { name: '红色', icon: '🍎', color: '#FF0000' },
      { name: '橙色', icon: '🍊', color: '#FF8C00' },
      { name: '黄色', icon: '🍋', color: '#FFD700' },
      { name: '绿色', icon: '🍏', color: '#32CD32' },
      { name: '蓝色', icon: '🫐', color: '#1E90FF' },
      { name: '紫色', icon: '🍇', color: '#9370DB' }
    ];
    
    const target = colors[Math.floor(Math.random() * colors.length)];
    
    // 3个选项，更适合幼儿
    const options = [target];
    const otherColors = colors.filter(c => c.name !== target.name);
    const shuffled = otherColors.sort(() => Math.random() - 0.5);
    options.push(...shuffled.slice(0, 2));
    options.sort(() => Math.random() - 0.5);
    
    return {
      target,
      options: options.map((c, i) => ({ ...c, id: i + 1 })),
      question: `找出${target.name}的水果`,
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