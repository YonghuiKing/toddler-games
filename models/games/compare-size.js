// 游戏逻辑 - 比大小游戏
module.exports = {
  id: 'compare-size',
  name: '比大小',
  
  // 生成题目
  generateQuestion() {
    // 使用明确不同大小的物品
    const sizes = [
      { scale: 0.35, icon: '🍒', name: '樱桃', pixelSize: 50 },
      { scale: 0.5, icon: '🫐', name: '蓝莓', pixelSize: 60 },
      { scale: 0.7, icon: '🍓', name: '草莓', pixelSize: 80 },
      { scale: 0.9, icon: '🍊', name: '橙子', pixelSize: 100 },
      { scale: 1.1, icon: '🍎', name: '苹果', pixelSize: 120 },
      { scale: 1.4, icon: '🍈', name: '哈密瓜', pixelSize: 150 },
      { scale: 1.8, icon: '🍉', name: '西瓜', pixelSize: 180 }
    ];
    
    // 确保两个物体大小差异明显（至少差2档）
    let idx1, idx2;
    do {
      idx1 = Math.floor(Math.random() * sizes.length);
      idx2 = Math.floor(Math.random() * sizes.length);
    } while (Math.abs(idx1 - idx2) < 2);
    
    const item1 = sizes[idx1];
    const item2 = sizes[idx2];
    const askBigger = Math.random() > 0.5;
    
    return {
      item1: { ...item1, id: 1 },
      item2: { ...item2, id: 2 },
      askBigger,
      question: askBigger ? '哪个更大？' : '哪个更小？',
      correctId: askBigger 
        ? (item1.scale > item2.scale ? 1 : 2)
        : (item1.scale < item2.scale ? 1 : 2),
      pixelSize: Math.max(item1.pixelSize, item2.pixelSize)
    };
  },
  
  // 检查答案
  checkAnswer(answer, question) {
    return answer === question.correctId;
  },
  
  // 语音提示
  speakQuestion(question) {
    const item = question.askBigger ? '更大' : '更小';
    return `点击${item}的水果`;
  }
};