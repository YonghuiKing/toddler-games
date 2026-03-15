// 游戏逻辑 - 动物叫声
module.exports = {
  id: 'animal-sound',
  name: '动物叫声',
  
  generateQuestion() {
    const animals = [
      { name: '小狗', icon: '🐶', sound: '汪汪', id: 1 },
      { name: '小猫', icon: '🐱', sound: '喵喵', id: 2 },
      { name: '小牛', icon: '🐮', sound: '哞哞', id: 3 },
      { name: '小羊', icon: '🐑', sound: '咩咩', id: 4 },
      { name: '小鸡', icon: '🐔', sound: '咯咯', id: 5 },
      { name: '小鸭', icon: '🦆', sound: '嘎嘎', id: 6 }
    ];
    
    const target = animals[Math.floor(Math.random() * animals.length)];
    const options = [...animals].sort(() => Math.random() - 0.5);
    
    return {
      target,
      options: options.map((a, i) => ({ ...a, displayId: i + 1 })),
      question: `谁在叫${target.sound}？`,
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