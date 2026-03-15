// 游戏逻辑 - 认识数字
module.exports = {
  id: 'number-learn',
  name: '认识数字',
  
  generateQuestion() {
    const nums = [
      { val: 1, display: '1', icon: '1️⃣', id: 1 },
      { val: 2, display: '2', icon: '2️⃣', id: 2 },
      { val: 3, display: '3', icon: '3️⃣', id: 3 },
      { val: 4, display: '4', icon: '4️⃣', id: 4 },
      { val: 5, display: '5', icon: '5️⃣', id: 5 }
    ];
    
    const target = nums[Math.floor(Math.random() * nums.length)];
    const options = [...nums].sort(() => Math.random() - 0.5);
    
    return {
      target,
      options: options.map(n => ({ ...n, displayId: n.id })),
      question: `点击数字${target.val}`,
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