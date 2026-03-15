// 游戏配置
const GAMES = [
  { id: 'compare-size', name: '比大小', icon: '🍎', age: '1-2岁', color: '#FF6B6B', color2: '#FF8E8E' },
  { id: 'find-color', name: '找颜色', icon: '🌈', age: '1-2岁', color: '#4ECDC4', color2: '#6EE7DE' },
  { id: 'count', name: '数一数', icon: '🔢', age: '2-3岁', color: '#FFE66D', color2: '#FFE997' },
  { id: 'match', name: '配对', icon: '🎯', age: '2-3岁', color: '#A29BFE', color2: '#B8B3FF' },
  { id: 'shape', name: '形状识别', icon: '⬟', age: '2-3岁', color: '#FD79A8', color2: '#FF9ECE' },
  { id: 'listen', name: '听指令', icon: '👂', age: '2-3岁', color: '#00B894', color2: '#2DD4AA' },
  { id: 'direction', name: '上下左右', icon: '🧭', age: '2-3岁', color: '#FDCB6E', color2: '#FFE066' },
  { id: 'weather', name: '天气认知', icon: '☁️', age: '1-2岁', color: '#74B9FF', color2: '#A3D1FF' },
  { id: 'animal-sound', name: '动物叫声', icon: '🐾', age: '1-2岁', color: '#E17055', color2: '#FF8A65' },
  { id: 'fruit-memory', name: '水果记忆', icon: '🧠', age: '2-3岁', color: '#00CEC9', color2: '#55EFC4' },
  { id: 'number-learn', name: '认识数字', icon: '1️⃣', age: '2-3岁', color: '#6C5CE7', color2: '#A29BFE' },
  { id: 'vehicle', name: '认识车辆', icon: '🚗', age: '1-2岁', color: '#E84393', color2: '#FD79A8' },
  { id: 'food-category', name: '食物分类', icon: '🥗', age: '2-3岁', color: '#00B894', color2: '#55EFC4' },
  { id: 'emotion', name: '表情识别', icon: '😊', age: '1-2岁', color: '#FDCB6E', color2: '#FFE066' },
  { id: 'body-parts', name: '身体部位', icon: '🧑', age: '1-2岁', color: '#0984E3', color2: '#74B9FF' },
  { id: 'time-day', name: '白天黑夜', icon: '🌞', age: '2-3岁', color: '#2D3436', color2: '#636E72' },
  { id: 'find-diff', name: '找不同', icon: '🔍', age: '2-3岁', color: '#D63031', color2: '#FF7675' },
  { id: 'bigger-smaller', name: '最大最小', icon: '📏', age: '2-3岁', color: '#E17055', color2: '#FAB1A0' },
  { id: 'same-diff', name: '相同不同', icon: '⚖️', age: '2-3岁', color: '#00CEC9', color2: '#81ECEC' },
  { id: 'sequence', name: '找规律', icon: '📋', age: '3岁', color: '#A29BFE', color2: '#B2BEC3' },
  { id: 'nature', name: '认识自然', icon: '🌳', age: '1-2岁', color: '#27AE60', color2: '#58D68D' },
  { id: 'clothing', name: '认识衣物', icon: '👕', age: '1-2岁', color: '#8E44AD', color2: '#A569BD' },
  { id: 'occupation', name: '职业认知', icon: '👮', age: '2-3岁', color: '#C0392B', color2: '#E74C3C' },
  { id: 'color-mix', name: '颜色混合', icon: '🎨', age: '2-3岁', color: '#E67E22', color2: '#F39C12' },
  { id: 'size-order', name: '大小排序', icon: '📊', age: '2-3岁', color: '#16A085', color2: '#1ABC9C' },
  { id: 'shadow', name: '影子匹配', icon: '👤', age: '2-3岁', color: '#34495E', color2: '#5D6D7E' },
  { id: 'odd-one', name: '找出另类', icon: '❓', age: '2-3岁', color: '#D35400', color2: '#E59866' },
  { id: 'complete-pic', name: '补全图案', icon: '🧩', age: '2-3岁', color: '#9B59B6', color2: '#BB8FCE' },
  { id: 'direction-turn', name: '转身游戏', icon: '🔄', age: '2-3岁', color: '#1ABC9C', color2: '#48C9B0' },
  { id: 'more-less', name: '多与少', icon: '🔢', age: '2-3岁', color: '#F1C40F', color2: '#F4D03F' },
  { id: 'position', name: '位置认知', icon: '📍', age: '2-3岁', color: '#E74C3C', color2: '#EC7063' },
  { id: 'coin', name: '认识钱币', icon: '💰', age: '3岁', color: '#F39C12', color2: '#F7DC6F' },
  { id: 'month', name: '认识月份', icon: '📅', age: '3岁', color: '#3498DB', color2: '#5DADE2' },
  { id: 'weekday', name: '认识星期', icon: '📆', age: '3岁', color: '#9B59B6', color2: '#AF7AC5' },
  { id: 'rhyme', name: '念儿歌', icon: '🎵', age: '1-2岁', color: '#1ABC9C', color2: '#48C9B0' },
  { id: 'instrument', name: '乐器认知', icon: '🎹', age: '1-2岁', color: '#8E44AD', color2: '#A569BD' },
  { id: 'opposite', name: '反义词', icon: '🔄', age: '2-3岁', color: '#E67E22', color2: '#F5B041' },
  { id: 'category', name: '分类游戏', icon: '📂', age: '2-3岁', color: '#2E86C1', color2: '#5DADE2' },
  { id: 'animal-food', name: '动物食物', icon: '🦁', age: '1-2岁', color: '#E74C3C', color2: '#F1948A' },
  { id: 'fruit-color', name: '水果颜色', icon: '🍓', age: '1-2岁', color: '#FF6B6B', color2: '#FF8A80' },
  { id: 'big-small', name: '大小认识', icon: '🐘', age: '1-2岁', color: '#3498DB', color2: '#85C1E9' },
  { id: 'tall-short', name: '高矮认识', icon: '👫', age: '1-2岁', color: '#9B59B6', color2: '#D2B4DE' },
  { id: 'heavy-light', name: '轻重认识', icon: '⚖️', age: '2-3岁', color: '#1ABC9C', color2: '#76D7C4' },
  { id: 'hot-cold', name: '冷热认识', icon: '🌡️', age: '1-2岁', color: '#E67E22', color2: '#F5B041' },
  { id: 'wet-dry', name: '干湿认识', icon: '💧', age: '1-2岁', color: '#3498DB', color2: '#AED6F1' },
  { id: 'loud-quiet', name: '声音大小', icon: '🔊', age: '1-2岁', color: '#F39C12', color2: '#F7DC6F' },
  { id: 'day-activity', name: '日常活动', icon: '📅', age: '2-3岁', color: '#2ECC71', color2: '#82E0AA' },
  { id: 'family', name: '家人认知', icon: '👨‍👩‍👧', age: '1-2岁', color: '#E91E63', color2: '#F48FB1' },
  { id: 'color-name', name: '颜色名称', icon: '🌈', age: '2-3岁', color: '#00BCD4', color2: '#80DEEA' },
  { id: 'count-animal', name: '数动物', icon: '🦁', age: '2-3岁', color: '#FF9800', color2: '#FFB74D' },
  { id: 'find-number', name: '找数字', icon: '🔢', age: '2-3岁', color: '#673AB7', color2: '#B39DDB' },
  { id: 'math-add', name: '简单加法', icon: '➕', age: '3岁', color: '#4CAF50', color2: '#81C784' },
  { id: 'math-sub', name: '简单减法', icon: '➖', age: '3岁', color: '#F44336', color2: '#EF9A9A' },
  { id: 'time-clock', name: '认识时钟', icon: '🕐', age: '3岁', color: '#795548', color2: '#BCAAA4' },
  { id: 'direction-compass', name: '东南西北', icon: '🧭', age: '3岁', color: '#607D8B', color2: '#B0BEC5' },
  { id: 'first-last', name: '第一最后', icon: '🏁', age: '2-3岁', color: '#FF5722', color2: '#FF8A65' },
  { id: 'middle', name: '中间位置', icon: '↔️', age: '2-3岁', color: '#9C27B0', color2: '#CE93D8' },
  { id: 'pair-socks', name: '配对袜子', icon: '🧦', age: '2-3岁', color: '#00BCD4', color2: '#80DEEA' },
  { id: 'finish-line', name: '谁先到', icon: '🏃', age: '2-3岁', color: '#E74C3C', color2: '#F1948A' },
  { id: 'weather-choice', name: '穿什么', icon: '👕', age: '2-3岁', color: '#03A9F4', color2: '#81D4FA' },
  { id: 'food-drink', name: '食物饮料', icon: '🍔', age: '1-2岁', color: '#FF9800', color2: '#FFCC80' },
  { id: 'live-nonlive', name: '生物非生物', icon: '🌱', age: '2-3岁', color: '#4CAF50', color2: '#A5D6A7' },
  { id: 'hard-soft', name: '软硬认识', icon: '🪨', age: '1-2岁', color: '#795548', color2: '#BCAAA4' },
  { id: 'smooth-rough', name: '光滑粗糙', icon: '✨', age: '2-3岁', color: '#9E9E9E', color2: '#E0E0E0' },
  { id: 'open-close', name: '开关门', icon: '🚪', age: '1-2岁', color: '#8D6E63', color2: '#BCAAA4' },
  { id: 'full-empty', name: '满与空', icon: '🫗', age: '1-2岁', color: '#2196F3', color2: '#90CAF9' },
  { id: 'move-static', name: '动与静', icon: '🏃', age: '1-2岁', color: '#FF5722', color2: '#FFAB91' },
  { id: 'same-group', name: '同类词', icon: '📚', age: '3岁', color: '#3F51B5', color2: '#9FA8DA' },
  { id: 'what-matter', name: '这是什么', icon: '❓', age: '1-2岁', color: '#E91E63', color2: '#F8BBD0' },
  { id: 'where-go', name: '去哪里', icon: '🏠', age: '2-3岁', color: '#009688', color2: '#80CBC4' },
  { id: 'feeling', name: '感觉认知', icon: '💓', age: '1-2岁', color: '#F06292', color2: '#F8BBD0' },
  { id: 'color-sort', name: '颜色排序', icon: '🔴', age: '2-3岁', color: '#F44336', color2: '#EF9A9A' },
  { id: 'shape-build', name: '搭积木', icon: '🧱', age: '2-3岁', color: '#795548', color2: '#A1887F' },
  { id: 'puzzle-2x2', name: '2x2拼图', icon: '🧩', age: '2-3岁', color: '#9C27B0', color2: '#BA68C8' },
  { id: 'follow-path', name: '走迷宫', icon: '🌀', age: '2-3岁', color: '#00BCD4', color2: '#4DD0E1' },
  { id: 'tap-order', name: '顺序点击', icon: '🔢', age: '2-3岁', color: '#FF5722', color2: '#FF8A65' },
  { id: 'memory-card', name: '记忆翻牌', icon: '🃏', age: '2-3岁', color: '#607D8B', color2: '#90A4AE' },
  { id: 'sound-match', name: '声音配对', icon: '🔊', age: '2-3岁', color: '#FF9800', color2: '#FFB74D' },
  { id: 'weather-feel', name: '天气感觉', icon: '🌤️', age: '1-2岁', color: '#03A9F4', color2: '#4FC3F7' },
  { id: 'fruit-taste', name: '水果味道', icon: '🍇', age: '1-2岁', color: '#E91E63', color2: '#F06292' },
  { id: 'animal-home', name: '动物的家', icon: '🏠', age: '1-2岁', color: '#8BC34A', color2: '#AED581' },
  { id: 'body-action', name: '身体动作', icon: '🧘', age: '1-2岁', color: '#3F51B5', color2: '#7986CB' },
  { id: 'count-fingers', name: '数手指', icon: '✋', age: '1-2岁', color: '#FFC107', color2: '#FFD54F' },
  { id: 'color-blocks', name: '颜色块', icon: '🟥', age: '1-2岁', color: '#F44336', color2: '#EF5350' },
  { id: 'shape-trace', name: '形状描边', icon: '⬜', age: '2-3岁', color: '#9E9E9E', color2: '#BDBDBD' },
  { id: 'line-trace', name: '线条描边', icon: '📏', age: '2-3岁', color: '#673AB7', color2: '#9575CD' },
  { id: 'dot-connect', name: '点连线', icon: '🔗', age: '2-3岁', color: '#009688', color2: '#4DB6AC' },
  { id: 'find-same-row', name: '同排找相同', icon: '➡️', age: '2-3岁', color: '#FF5722', color2: '#FF7043' },
  { id: 'count-legs', name: '数腿', icon: '🦵', age: '2-3岁', color: '#795548', color2: '#8D6E63' },
  { id: 'who-swim', name: '谁会游泳', icon: '🏊', age: '2-3岁', color: '#00BCD4', color2: '#26C6DA' },
  { id: 'who-fly', name: '谁会飞', icon: '✈️', age: '1-2岁', color: '#03A9F4', color2: '#29B6F6' },
  { id: 'who-crawl', name: '谁爬行', icon: '🐛', age: '2-3岁', color: '#8BC34A', color2: '#9CCC65' },
  { id: 'toy-category', name: '玩具分类', icon: '🧸', age: '1-2岁', color: '#E91E63', color2: '#F48FB1' },
  { id: 'kitchen-items', name: '厨房用品', icon: '🍳', age: '2-3岁', color: '#FF9800', color2: '#FFA726' },
  { id: 'bathroom', name: '卫生间用品', icon: '🚿', age: '2-3岁', color: '#2196F3', color2: '#42A5F5' },
  { id: 'room-items', name: '房间物品', icon: '🛏️', age: '1-2岁', color: '#9C27B0', color2: '#AB47BC' },
  { id: 'outdoor', name: '户外物品', icon: '🌳', age: '1-2岁', color: '#4CAF50', color2: '#66BB6A' },
  { id: 'transport-speed', name: '交通工具速度', icon: '🚀', age: '2-3岁', color: '#F44336', color2: '#E57373' },
  { id: 'food-hot-cold', name: '冷食热食', icon: '🍜', age: '1-2岁', color: '#FF5722', color2: '#FF8A65' },
  { id: 'liquid-solid', name: '液体固体', icon: '💧', age: '2-3岁', color: '#03A9F4', color2: '#4FC3F7' },
  { id: 'living-room', name: '客厅物品', icon: '🛋️', age: '1-2岁', color: '#795548', color2: '#8D6E63' },
  { id: 'office', name: '办公室物品', icon: '💼', age: '3岁', color: '#607D8B', color2: '#78909C' },
  { id: 'garden', name: '花园物品', icon: '🌷', age: '1-2岁', color: '#E91E63', color2: '#EC407A' },
  { id: 'farm', name: '农场动物', icon: '🐄', age: '1-2岁', color: '#8BC34A', color2: '#AED581' },
  { id: 'zoo', name: '动物园', icon: '🦁', age: '1-2岁', color: '#FF9800', color2: '#FFB74D' },
  { id: 'sea-animal', name: '海洋动物', icon: '🐳', age: '1-2岁', color: '#03A9F4', color2: '#29B6F6' },
  { id: 'insect', name: '昆虫认知', icon: '🐝', age: '2-3岁', color: '#FFC107', color2: '#FFCA28' },
  { id: 'bird', name: '鸟类认知', icon: '🐦', age: '1-2岁', color: '#4CAF50', color2: '#81C784' },
  { id: 'pet', name: '宠物认知', icon: '🐕', age: '1-2岁', color: '#9C27B0', color2: '#BA68C8' },
  { id: 'wild-animal', name: '野生动物', icon: '🦁', age: '2-3岁', color: '#FF5722', color2: '#FF7043' },
];

// 语音
function speak(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN'; u.rate = 0.9; u.pitch = 1.2;
    window.speechSynthesis.speak(u);
  }
}

const CORRECT_PRAISES = ['棒棒的！', '你好厉害！', '真聪明！', '太棒了！', '答对了！', '超级厉害！', '你好棒！', '真厉害！', '完美！', '太好了！'];
const ENCOURAGE_PRAISES = ['再试一次！', '加油！', '你可以的！', '没关系，再来！', '继续加油！', '别急，慢慢来！'];

function playCorrectSound() { speak(CORRECT_PRAISES[Math.floor(Math.random() * CORRECT_PRAISES.length)]); }
function playWrongSound() { speak(ENCOURAGE_PRAISES[Math.floor(Math.random() * ENCOURAGE_PRAISES.length)]); }

// 游戏逻辑
const GameLogic = {
  'compare-size': {
    generateQuestion() {
      const sizes = [0.6, 0.85, 1];
      const icons = ['🍇', '🍊', '🍎'];
      const idx1 = Math.floor(Math.random() * 3), idx2 = Math.floor(Math.random() * 3);
      const askBigger = Math.random() > 0.5;
      return {
        item1: { icon: icons[idx1], scale: sizes[idx1] },
        item2: { icon: icons[idx2], scale: sizes[idx2] },
        askBigger,
        question: askBigger ? '哪个更大？' : '哪个更小？',
        correctAnswer: askBigger ? (idx1 > idx2 ? 'left' : idx1 < idx2 ? 'right' : 'either') : (idx1 < idx2 ? 'left' : idx1 > idx2 ? 'right' : 'either')
      };
    },
    speakQuestion(q) { speak(`点击${q.askBigger ? '更大' : '更小'}的那个`); },
    check(answer, q) { return q.correctAnswer === 'either' || answer === q.correctAnswer; }
  },
  'find-color': {
    generateQuestion() {
      const colors = [
        { name: '红色', icon: '🍎' }, { name: '橙色', icon: '🍊' },
        { name: '黄色', icon: '🍋' }, { name: '绿色', icon: '🍇' },
        { name: '蓝色', icon: '🫐' }, { name: '紫色', icon: '🍆' }
      ];
      const target = colors[Math.floor(Math.random() * colors.length)];
      const options = [target, ...colors.filter(c => c.name !== target.name).sort(() => Math.random() - 0.5).slice(0, 3)].sort(() => Math.random() - 0.5);
      return { target, options, question: `找出${target.name}的水果` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'count': {
    generateQuestion() {
      const count = Math.floor(Math.random() * 3) + 1;
      const fruits = ['🍎', '🍊', '🍋', '🍇', '🍓', '🍑'];
      const fruit = fruits[Math.floor(Math.random() * fruits.length)];
      return { count, items: Array(count).fill(fruit), question: `数一数有几个${fruit}？` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.count; }
  },
  'match': {
    generateQuestion() {
      const icons = ['🐶', '🐱', '🐰', '🦊', '🐼', '🐨', '🦁', '🐯'];
      const target = icons[Math.floor(Math.random() * icons.length)];
      const options = [target, ...icons.filter(i => i !== target).sort(() => Math.random() - 0.5).slice(0, 3)].sort(() => Math.random() - 0.5);
      return { target, options, question: `找出和${target}一样的` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'shape': {
    generateQuestion() {
      const shapes = [
        { name: '圆形', icon: '⭕' }, { name: '方形', icon: '⬜' },
        { name: '三角形', icon: '🔺' }, { name: '心形', icon: '❤️' },
        { name: '星星', icon: '⭐' }
      ];
      const target = shapes[Math.floor(Math.random() * shapes.length)];
      const options = [target, ...shapes.filter(s => s.name !== target.name).sort(() => Math.random() - 0.5).slice(0, 3)].sort(() => Math.random() - 0.5);
      return { target, options, question: `找出${target.name}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'listen': {
    generateQuestion() {
      const items = [
        { name: '苹果', icon: '🍎' }, { name: '橙子', icon: '🍊' },
        { name: '香蕉', icon: '🍌' }, { name: '葡萄', icon: '🍇' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      const options = [...items].sort(() => Math.random() - 0.5);
      return { target, options, question: `点击${target.name}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'direction': {
    generateQuestion() {
      const dirs = [
        { name: '上面', icon: '⬆️', arrow: '↑' },
        { name: '下面', icon: '⬇️', arrow: '↓' },
        { name: '左边', icon: '⬅️', arrow: '←' },
        { name: '右边', icon: '➡️', arrow: '→' }
      ];
      const target = dirs[Math.floor(Math.random() * dirs.length)];
      const positions = ['top', 'bottom', 'left', 'right'];
      const pos = { top: '上面', bottom: '下面', left: '左边', right: '右边' };
      return { target, positions, pos, question: `点击${target.name}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target.name; }
  },
  'weather': {
    generateQuestion() {
      const weather = [
        { name: '晴天', icon: '☀️' }, { name: '多云', icon: '☁️' },
        { name: '下雨', icon: '🌧️' }, { name: '雪天', icon: '❄️' }
      ];
      const target = weather[Math.floor(Math.random() * weather.length)];
      const options = [...weather].sort(() => Math.random() - 0.5);
      return { target, options, question: `点击${target.name}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'animal-sound': {
    generateQuestion() {
      const animals = [
        { name: '小狗', icon: '🐶', sound: '汪汪' },
        { name: '小猫', icon: '🐱', sound: '喵喵' },
        { name: '小牛', icon: '🐮', sound: '哞哞' },
        { name: '小羊', icon: '🐑', sound: '咩咩' },
        { name: '小鸡', icon: '🐔', sound: '咯咯' },
        { name: '小鸭', icon: '🦆', sound: '嘎嘎' }
      ];
      const target = animals[Math.floor(Math.random() * animals.length)];
      const options = [...animals].sort(() => Math.random() - 0.5);
      return { target, options, question: `谁在叫${target.sound}？` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'fruit-memory': {
    generateQuestion() {
      const fruits = ['🍎', '🍊', '🍋', '🍇', '🍓', '🍑', '🥝', '🍒'];
      const selected = [...fruits].sort(() => Math.random() - 0.5).slice(0, 3);
      return { items: selected, question: '记住这些水果的位置' };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return true; }
  },
  'number-learn': {
    generateQuestion() {
      const nums = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣'];
      const numNames = ['一','二','三','四','五'];
      const idx = Math.floor(Math.random() * 5);
      const target = { icon: nums[idx], name: numNames[idx], val: idx + 1 };
      const options = [target, ...nums.map((n,i) => ({icon:n,name:numNames[i],val:i+1})).filter(x=>x.val!==target.val).sort(()=>Math.random()-0.5).slice(0,3)].sort(()=>Math.random()-0.5);
      return { target, options, question: `找出数字${target.val}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.val === q.target.val; }
  },
  'vehicle': {
    generateQuestion() {
      const vehicles = [
        { name: '汽车', icon: '🚗' }, { name: '公交车', icon: '🚌' },
        { name: '出租车', icon: '🚕' }, { name: '摩托车', icon: '🏍️' },
        { name: '自行车', icon: '🚲' }, { name: '火车', icon: '🚂' }
      ];
      const target = vehicles[Math.floor(Math.random() * vehicles.length)];
      const options = [...vehicles].sort(() => Math.random() - 0.5);
      return { target, options, question: `点击${target.name}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'food-category': {
    generateQuestion() {
      const foods = [
        { name: '米饭', icon: '🍚', category: '主食' },
        { name: '面条', icon: '🍜', category: '主食' },
        { name: '苹果', icon: '🍎', category: '水果' },
        { name: '香蕉', icon: '🍌', category: '水果' },
        { name: '胡萝卜', icon: '🥕', category: '蔬菜' },
        { name: '西兰花', icon: '🥦', category: '蔬菜' }
      ];
      const cats = ['主食', '水果', '蔬菜'];
      const cat = cats[Math.floor(Math.random() * cats.length)];
      const target = foods.filter(f => f.category === cat)[Math.floor(Math.random() * foods.filter(f => f.category === cat).length)];
      const options = [...foods].sort(() => Math.random() - 0.5);
      return { target, options, category: cat, question: `点击${cat}` };
    },
    speakQuestion(q) { speak(`点击${q.category}类的食物`); },
    check(answer, q) { return answer.category === q.category; }
  },
  'emotion': {
    generateQuestion() {
      const emotions = [
        { name: '开心', icon: '😊' }, { name: '难过', icon: '😢' },
        { name: '生气', icon: '😠' }, { name: '害怕', icon: '😨' },
        { name: '惊讶', icon: '😲' }, { name: '困', icon: '😴' }
      ];
      const target = emotions[Math.floor(Math.random() * emotions.length)];
      const options = [...emotions].sort(() => Math.random() - 0.5);
      return { target, options, question: `点击${target.name}的表情` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'body-parts': {
    generateQuestion() {
      const parts = [
        { name: '眼睛', icon: '👀' }, { name: '耳朵', icon: '👂' },
        { name: '鼻子', icon: '👃' }, { name: '嘴巴', icon: '👄' },
        { name: '手', icon: '✋' }, { name: '脚', icon: '🦶' }
      ];
      const target = parts[Math.floor(Math.random() * parts.length)];
      const options = [...parts].sort(() => Math.random() - 0.5);
      return { target, options, question: `点击${target.name}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'time-day': {
    generateQuestion() {
      const times = [
        { name: '白天', icon: '🌞' }, { name: '黑夜', icon: '🌙' },
        { name: '早上', icon: '🌅' }, { name: '晚上', icon: '🌃' }
      ];
      const target = times[Math.floor(Math.random() * times.length)];
      const options = [...times].sort(() => Math.random() - 0.5);
      return { target, options, question: `点击${target.name}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'find-diff': {
    generateQuestion() {
      const icons = ['⭐','❤️','🌸','🎈','🎀','🍭'];
      const idx = Math.floor(Math.random() * icons.length);
      const diffIdx = (idx + 1) % icons.length;
      const base = Array(6).fill(icons[idx]);
      base[Math.floor(Math.random()*6)] = icons[diffIdx];
      return { items: base, target: icons[diffIdx], question: '找出一个不同的' };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'bigger-smaller': {
    generateQuestion() {
      const nums = [1,2,3,4,5,6,7,8,9,10];
      const a = nums[Math.floor(Math.random()*10)];
      const b = nums[Math.floor(Math.random()*10)];
      const askBig = Math.random() > 0.5;
      return { a, b, askBig, question: askBig ? `哪个数字更大？` : `哪个数字更小？`, correct: askBig ? (a>b?a:b) : (a<b?a:b) };
    },
    speakQuestion(q) { speak(`数字${q.a}和${q.b}，${q.question}`); },
    check(answer, q) { return answer === q.correct; }
  },
  'same-diff': {
    generateQuestion() {
      const pairs = [
        { icon1: '🍎', icon2: '🍎', same: true },
        { icon1: '🍎', icon2: '🍊', same: false },
        { icon1: '🐶', icon2: '🐶', same: true },
        { icon1: '🐶', icon2: '🐱', same: false }
      ];
      const pair = pairs[Math.floor(Math.random() * pairs.length)];
      return { ...pair, question: pair.same ? '这两个一样吗？' : '这两个一样吗？', correct: pair.same };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.correct; }
  },
  'sequence': {
    generateQuestion() {
      const seqs = [
        { pattern: ['🔴','🔴','🔴','?'], answer: '🔴' },
        { pattern: ['🔴','🔴','🟡','?'], answer: '🟡' },
        { pattern: ['⭐','⭐','⭐','?'], answer: '⭐' },
        { pattern: ['❤️','❤️','❤️','?'], answer: '❤️' }
      ];
      const s = seqs[Math.floor(Math.random()*seqs.length)];
      return { ...s, question: '找规律，下一个是什么？', options: ['🔴','🟡','⭐','❤️'] };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.answer; }
  },
  'nature': {
    generateQuestion() {
      const items = [
        { name: '大树', icon: '🌳' }, { name: '小花', icon: '🌸' },
        { name: '小草', icon: '🌱' }, { name: '太阳', icon: '☀️' },
        { name: '月亮', icon: '🌙' }, { name: '星星', icon: '⭐' },
        { name: '云朵', icon: '☁️' }, { name: '山', icon: '⛰️' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      const options = [...items].sort(() => Math.random() - 0.5);
      return { target, options, question: `点击${target.name}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'clothing': {
    generateQuestion() {
      const items = [
        { name: '衣服', icon: '👕' }, { name: '裤子', icon: '👖' },
        { name: '鞋子', icon: '👟' }, { name: '帽子', icon: '🧢' },
        { name: '袜子', icon: '🧦' }, { name: '裙子', icon: '👗' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      const options = [...items].sort(() => Math.random() - 0.5);
      return { target, options, question: `点击${target.name}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'occupation': {
    generateQuestion() {
      const jobs = [
        { name: '警察', icon: '👮' }, { name: '医生', icon: '👨‍⚕️' },
        { name: '老师', icon: '👨‍🏫' }, { name: '厨师', icon: '👨‍🍳' },
        { name: '农民', icon: '👨‍🌾' }, { name: '司机', icon: '🚗' }
      ];
      const target = jobs[Math.floor(Math.random() * jobs.length)];
      const options = [...jobs].sort(() => Math.random() - 0.5);
      return { target, options, question: `点击${target.name}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'color-mix': {
    generateQuestion() {
      const mixes = [
        { name: '红色+黄色=橙色', result: '🟠', colors: ['🔴','🟡'] },
        { name: '蓝色+黄色=绿色', result: '🟢', colors: ['🔵','🟡'] },
        { name: '红色+蓝色=紫色', result: '🟣', colors: ['🔴','🔵'] }
      ];
      const m = mixes[Math.floor(Math.random() * mixes.length)];
      return { ...m, question: `${m.name}是什么颜色？`, options: mixes.map(x=>x.result) };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.result; }
  },
  'size-order': {
    generateQuestion() {
      const items = [
        { name: '大苹果', icon: '🍎', size: 3 },
        { name: '中苹果', icon: '🍎', size: 2 },
        { name: '小苹果', icon: '🍎', size: 1 }
      ];
      return { items, question: '从小到大排列', correct: [1,2,3] };
    },
    speakQuestion(q) { speak('从小到大点击'); },
    check(answer, q) { return answer === q.correct; }
  },
  'shadow': {
    generateQuestion() {
      const items = [
        { name: '猫', icon: '🐱', shadow: '🐈' },
        { name: '狗', icon: '🐕', shadow: '🐕‍🦺' },
        { name: '鸟', icon: '🐦', shadow: '🐤' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      const others = items.filter(i => i.name !== target.name);
      const options = [target.shadow, ...others.map(o => o.shadow)].sort(() => Math.random() - 0.5);
      return { target, options, question: `哪个是${target.name}的影子？` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target.shadow; }
  },
  'odd-one': {
    generateQuestion() {
      const sets = [
        { items: ['🍎','🍎','🍎','🍊'], target: '🍊' },
        { items: ['🐶','🐶','🐶','🐱'], target: '🐱' },
        { items: ['⭐','⭐','⭐','🌙'], target: '🌙' }
      ];
      const s = sets[Math.floor(Math.random() * sets.length)];
      return { ...s, question: '找出一个不同的' };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'complete-pic': {
    generateQuestion() {
      const pics = [
        { name: '苹果', full: '🍎', missing: '🍏' },
        { name: '笑脸', full: '😊', missing: '☺️' }
      ];
      const p = pics[Math.floor(Math.random() * pics.length)];
      return { ...p, question: `补全${p.name}`, options: [p.full, p.missing, '🍎', '🍊'] };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.full; }
  },
  'direction-turn': {
    generateQuestion() {
      const from = ['⬆️','⬇️','⬅️','➡️'];
      const to = ['⬇️','⬆️','➡️','⬅️'];
      const idx = Math.floor(Math.random() * 4);
      return { from: from[idx], to: to[idx], question: '转身后会变成什么？', options: to };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.to; }
  },
  'more-less': {
    generateQuestion() {
      const a = Math.floor(Math.random() * 5) + 1;
      const b = a + Math.floor(Math.random() * 3) + 1;
      const more = Math.random() > 0.5;
      return { a, b, more, question: more ? `哪个更多？` : `哪个更少？`, correct: more ? b : a };
    },
    speakQuestion(q) { speak(`${q.a}和${q.b}，${q.question}`); },
    check(answer, q) { return answer === q.correct; }
  },
  'position': {
    generateQuestion() {
      const items = [
        { name: '上面', icon: '⬆️' }, { name: '下面', icon: '⬇️' },
        { name: '前面', icon: '👆' }, { name: '后面', icon: '👇' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      return { target, question: `什么是${target.name}？`, options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'coin': {
    generateQuestion() {
      const coins = [
        { name: '1分钱', icon: '🪙', val: 1 },
        { name: '5分钱', icon: '🪙', val: 5 },
        { name: '1块钱', icon: '🪙', val: 10 },
        { name: '5块钱', icon: '🪙', val: 50 }
      ];
      const target = coins[Math.floor(Math.random() * coins.length)];
      return { target, question: `这是多少钱？`, options: coins };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.val === q.target.val; }
  },
  'month': {
    generateQuestion() {
      const months = [
        { name: '一月', icon: '❄️' }, { name: '二月', icon: '🌸' },
        { name: '三月', icon: '🌷' }, { name: '四月', icon: '🌺' }
      ];
      const target = months[Math.floor(Math.random() * months.length)];
      return { target, question: `点击${target.name}`, options: months };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'weekday': {
    generateQuestion() {
      const days = [
        { name: '周一', icon: '1️⃣' }, { name: '周二', icon: '2️⃣' },
        { name: '周三', icon: '3️⃣' }, { name: '周四', icon: '4️⃣' },
        { name: '周五', icon: '5️⃣' }, { name: '周六', icon: '6️⃣' },
        { name: '周日', icon: '0️⃣' }
      ];
      const target = days[Math.floor(Math.random() * days.length)];
      return { target, question: `点击${target.name}`, options: days };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'rhyme': {
    generateQuestion() {
      const rhymes = [
        { name: '小白兔', icon: '🐰', lyric: '小白兔，白又白' },
        { name: '小星星', icon: '⭐', lyric: '一闪一闪亮晶晶' }
      ];
      const target = rhymes[Math.floor(Math.random() * rhymes.length)];
      return { target, question: `听儿歌：${target.lyric}`, options: rhymes };
    },
    speakQuestion(q) { speak(q.lyric + '，是什么动物？'); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'instrument': {
    generateQuestion() {
      const inst = [
        { name: '钢琴', icon: '🎹' }, { name: '吉他', icon: '🎸' },
        { name: '小提琴', icon: '🎻' }, { name: '鼓', icon: '🥁' }
      ];
      const target = inst[Math.floor(Math.random() * inst.length)];
      return { target, question: `点击${target.name}`, options: inst };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'opposite': {
    generateQuestion() {
      const ops = [
        { name: '大', icon: '🐘', opp: '小', oppIcon: '🐜' },
        { name: '高', icon: '🏢', opp: '低', oppIcon: '🏠' },
        { name: '快', icon: '🚀', opp: '慢', oppIcon: '🐢' },
        { name: '热', icon: '🔥', opp: '冷', oppIcon: '🧊' }
      ];
      const o = ops[Math.floor(Math.random() * ops.length)];
      return { word: o.name, answer: o.opp, question: `${o.name}的反义词是什么？`, options: ops.map(x=>x.opp) };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.answer; }
  },
  'category': {
    generateQuestion() {
      const cats = [
        { name: '交通工具', items: ['🚗','🚌','🚂','✈️'] },
        { name: '水果', items: ['🍎','🍊','🍌','🍇'] },
        { name: '动物', items: ['🐶','🐱','🐰','🐼'] }
      ];
      const cat = cats[Math.floor(Math.random() * cats.length)];
      return { cat, question: `哪些是${cat.name}？`, items: cat.items, options: cats };
    },
    speakQuestion(q) { speak(`点击${q.cat.name}`); },
    check(answer, q) { return answer.name === q.cat.name; }
  },
  'animal-food': {
    generateQuestion() {
      const animals = [
        { name: '小狗', icon: '🐶', food: '🦴' },
        { name: '小猫', icon: '🐱', food: '🐟' },
        { name: '兔子', icon: '🐰', food: '🥕' },
        { name: '熊猫', icon: '🐼', food: '🎋' }
      ];
      const target = animals[Math.floor(Math.random() * animals.length)];
      const options = animals.map(a => a.food);
      return { target, question: `${target.name}喜欢吃什么？`, options: animals };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'fruit-color': {
    generateQuestion() {
      const fruits = [
        { name: '红苹果', icon: '🍎', color: '红色' },
        { name: '黄香蕉', icon: '🍌', color: '黄色' },
        { name: '绿西瓜', icon: '🍉', color: '绿色' },
        { name: '橙橘子', icon: '🍊', color: '橙色' }
      ];
      const target = fruits[Math.floor(Math.random() * fruits.length)];
      return { target, question: `${target.icon}是什么颜色？`, options: fruits };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.color === q.target.color; }
  },
  'big-small': {
    generateQuestion() {
      const pairs = [
        { big: '🐘', small: '🐭', bigName: '大象', smallName: '老鼠' },
        { big: '🐳', small: '🐟', bigName: '鲸鱼', smallName: '小鱼' }
      ];
      const p = pairs[Math.floor(Math.random() * pairs.length)];
      const which = Math.random() > 0.5;
      return { which, ...p, question: which ? '哪个更大？' : '哪个更小？', correct: which ? p.bigName : p.smallName };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.correct; }
  },
  'tall-short': {
    generateQuestion() {
      const pairs = [
        { tall: '🏢', short: '🏠', tallName: '楼房', shortName: '房子' },
        { tall: '👨', short: '👦', tallName: '大人', shortName: '小孩' }
      ];
      const p = pairs[Math.floor(Math.random() * pairs.length)];
      const which = Math.random() > 0.5;
      return { which, ...p, question: which ? '哪个更高？' : '哪个更矮？', correct: which ? p.tallName : p.shortName };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.correct; }
  },
  'heavy-light': {
    generateQuestion() {
      const pairs = [
        { heavy: '🐘', light: '🎈', heavyName: '大象', lightName: '气球' },
        { heavy: '📚', light: '🪶', heavyName: '书', lightName: '羽毛' }
      ];
      const p = pairs[Math.floor(Math.random() * pairs.length)];
      const which = Math.random() > 0.5;
      return { which, ...p, question: which ? '哪个更重？' : '哪个更轻？', correct: which ? p.heavyName : p.lightName };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.correct; }
  },
  'hot-cold': {
    generateQuestion() {
      const items = [
        { name: '热水', icon: '♨️' }, { name: '冰块', icon: '🧊' },
        { name: '太阳', icon: '☀️' }, { name: '雪人', icon: '⛄' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      return { target, question: `哪个是热的？`, options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === '热水' || answer.name === '太阳'; }
  },
  'wet-dry': {
    generateQuestion() {
      const items = [
        { name: '湿毛巾', icon: '🧖', wet: true },
        { name: '干毛巾', icon: '🧴', wet: false },
        { name: '游泳池', icon: '🏊', wet: true },
        { name: '沙漠', icon: '🏜️', wet: false }
      ];
      const isWet = Math.random() > 0.5;
      return { isWet, question: isWet ? '哪个是湿的？' : '哪个是干的？', options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return q.isWet ? answer.wet : !answer.wet; }
  },
  'loud-quiet': {
    generateQuestion() {
      const sounds = [
        { name: '大声', icon: '🔊' }, { name: '小声', icon: '🔈' },
        { name: '雷声', icon: '⛈️' }, { name: '耳语', icon: '🤫' }
      ];
      const isLoud = Math.random() > 0.5;
      return { isLoud, question: isLoud ? '哪个声音大？' : '哪个声音小？', options: sounds };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return (q.isLoud && (answer.name === '大声' || answer.name === '雷声')) || (!q.isLoud && (answer.name === '小声' || answer.name === '耳语')); }
  },
  'day-activity': {
    generateQuestion() {
      const activities = [
        { name: '早上起床', icon: '🌅' }, { name: '中午吃饭', icon: '🍚' },
        { name: '晚上睡觉', icon: '🌙' }, { name: '下午玩耍', icon: '🎈' }
      ];
      const target = activities[Math.floor(Math.random() * activities.length)];
      return { target, question: `${target.name}是在什么时候？`, options: activities };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'family': {
    generateQuestion() {
      const members = [
        { name: '爸爸', icon: '👨' }, { name: '妈妈', icon: '👩' },
        { name: '爷爷', icon: '👴' }, { name: '奶奶', icon: '👵' },
        { name: '哥哥', icon: '👦' }, { name: '姐姐', icon: '👧' }
      ];
      const target = members[Math.floor(Math.random() * members.length)];
      return { target, question: `点击${target.name}`, options: members };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'color-name': {
    generateQuestion() {
      const colors = [
        { name: '红色', icon: '🔴' }, { name: '蓝色', icon: '🔵' },
        { name: '黄色', icon: '🟡' }, { name: '绿色', icon: '🟢' }
      ];
      const target = colors[Math.floor(Math.random() * colors.length)];
      return { target, question: `这个颜色叫什么？`, options: colors };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'count-animal': {
    generateQuestion() {
      const animals = ['🐶','🐱','🐰','🦊'];
      const count = Math.floor(Math.random() * 3) + 1;
      return { items: Array(count).fill(animals[Math.floor(Math.random()*4)]), count, question: `数一数有几只动物？` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.count; }
  },
  'find-number': {
    generateQuestion() {
      const nums = ['1','2','3','4','5','6','7','8','9'];
      const target = nums[Math.floor(Math.random() * 9)];
      const others = nums.filter(n => n !== target).slice(0, 3);
      const options = [...others, target].sort(() => Math.random() - 0.5);
      return { target, options, question: `找出数字${target}` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'math-add': {
    generateQuestion() {
      const a = Math.floor(Math.random() * 5) + 1;
      const b = Math.floor(Math.random() * 3) + 1;
      const answer = a + b;
      const options = [answer, answer + 1, answer - 1, answer + 2].sort(() => Math.random() - 0.5);
      return { a, b, answer, options, question: `${a}加${b}等于几？` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.answer; }
  },
  'math-sub': {
    generateQuestion() {
      const a = Math.floor(Math.random() * 5) + 5;
      const b = Math.floor(Math.random() * 3) + 1;
      const answer = a - b;
      const options = [answer, answer + 1, answer - 1, answer + 2].sort(() => Math.random() - 0.5);
      return { a, b, answer, options, question: `${a}减${b}等于几？` };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.answer; }
  },
  'time-clock': {
    generateQuestion() {
      const times = [
        { name: '3点', hour: 3 }, { name: '6点', hour: 6 },
        { name: '9点', hour: 9 }, { name: '12点', hour: 12 }
      ];
      const target = times[Math.floor(Math.random() * times.length)];
      return { target, question: `这是几点？`, options: times };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.hour === q.target.hour; }
  },
  'direction-compass': {
    generateQuestion() {
      const dirs = [
        { name: '东', icon: '➡️' }, { name: '南', icon: '⬇️' },
        { name: '西', icon: '⬅️' }, { name: '北', icon: '⬆️' }
      ];
      const target = dirs[Math.floor(Math.random() * dirs.length)];
      return { target, question: `哪个是${target.name}？`, options: dirs };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'first-last': {
    generateQuestion() {
      const racers = ['🏃','🚶','🐢','🐇'];
      const names = ['第一名','第二名','第三名','第四名'];
      const target = names[Math.floor(Math.random() * 4)];
      return { target, racers, question: `谁是${target}？`, options: names };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'middle': {
    generateQuestion() {
      const items = ['🍎','🍊','🍋'];
      return { items, question: '哪个在中间？', correct: '🍊' };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.correct; }
  },
  'pair-socks': {
    generateQuestion() {
      const socks = ['🧦','🧦','🧦','🧦'];
      const idx = Math.floor(Math.random() * 4);
      socks[idx] = '🧦';
      return { socks, question: '找出相同的袜子', target: '🧦' };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'finish-line': {
    generateQuestion() {
      const racers = [
        { name: '小兔子', icon: '🐇', fast: true },
        { name: '小乌龟', icon: '🐢', fast: false }
      ];
      const target = Math.random() > 0.5 ? racers[0] : racers[1];
      return { target, question: '谁先到达终点？', options: racers };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'weather-choice': {
    generateQuestion() {
      const weather = [
        { name: '晴天', icon: '☀️', clothes: '👕' },
        { name: '下雨', icon: '🌧️', clothes: '🧥' }
      ];
      const target = weather[Math.floor(Math.random() * weather.length)];
      return { target, question: `天气${target.name}穿什么？`, options: weather };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'food-drink': {
    generateQuestion() {
      const foods = [
        { name: '汉堡', icon: '🍔', type: '食物' },
        { name: '可乐', icon: '🥤', type: '饮料' },
        { name: '苹果', icon: '🍎', type: '食物' },
        { name: '果汁', icon: '🧃', type: '饮料' }
      ];
      const isFood = Math.random() > 0.5;
      return { isFood, question: isFood ? '哪些是食物？' : '哪些是饮料？', options: foods };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return q.isFood ? answer.type === '食物' : answer.type === '饮料'; }
  },
  'live-nonlive': {
    generateQuestion() {
      const items = [
        { name: '小狗', icon: '🐶', live: true },
        { name: '石头', icon: '🪨', live: false },
        { name: '小花', icon: '🌸', live: true },
        { name: '汽车', icon: '🚗', live: false }
      ];
      const isLive = Math.random() > 0.5;
      return { isLive, question: isLive ? '哪些是有生命的？' : '哪些是没有生命的？', options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return q.isLive ? answer.live : !answer.live; }
  },
  'hard-soft': {
    generateQuestion() {
      const items = [
        { name: '石头', icon: '🪨', hard: true },
        { name: '棉花', icon: '☁️', hard: false },
        { name: '木头', icon: '🪵', hard: true },
        { name: '海绵', icon: '🧽', hard: false }
      ];
      const isHard = Math.random() > 0.5;
      return { isHard, question: isHard ? '哪些是硬的？' : '哪些是软的？', options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return q.isHard ? answer.hard : !answer.hard; }
  },
  'smooth-rough': {
    generateQuestion() {
      const items = [
        { name: '镜子', icon: '🪞', smooth: true },
        { name: '砂纸', icon: '📄', smooth: false },
        { name: '丝绸', icon: '🧣', smooth: true },
        { name: '砖头', icon: '🧱', smooth: false }
      ];
      const isSmooth = Math.random() > 0.5;
      return { isSmooth, question: isSmooth ? '哪些是光滑的？' : '哪些是粗糙的？', options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return q.isSmooth ? answer.smooth : !answer.smooth; }
  },
  'open-close': {
    generateQuestion() {
      const states = [
        { name: '开门', icon: '🚪', open: true },
        { name: '关门', icon: '🚪', open: false },
        { name: '开灯', icon: '💡', open: true },
        { name: '关灯', icon: '💡', open: false }
      ];
      const target = states[Math.floor(Math.random() * states.length)];
      return { target, question: `点击${target.name}`, options: states };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'full-empty': {
    generateQuestion() {
      const items = [
        { name: '满杯水', icon: '🥤', full: true },
        { name: '空杯子', icon: '🥤', full: false }
      ];
      const isFull = Math.random() > 0.5;
      return { isFull, question: isFull ? '哪个是满的？' : '哪个是空的？', options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return q.isFull ? answer.full : !answer.full; }
  },
  'move-static': {
    generateQuestion() {
      const items = [
        { name: '跑步的人', icon: '🏃', moving: true },
        { name: '静止的树', icon: '🌳', moving: false },
        { name: '汽车', icon: '🚗', moving: true },
        { name: '房子', icon: '🏠', moving: false }
      ];
      const isMoving = Math.random() > 0.5;
      return { isMoving, question: isMoving ? '哪个在动？' : '哪个是静止的？', options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return q.isMoving ? answer.moving : !answer.moving; }
  },
  'same-group': {
    generateQuestion() {
      const groups = [
        { name: '颜色', items: ['红','黄','蓝'] },
        { name: '动物', items: ['狗','猫','鸟'] }
      ];
      const g = groups[Math.floor(Math.random() * groups.length)];
      return { group: g, question: `哪些属于${g.name}？`, options: groups };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.group.name; }
  },
  'what-matter': {
    generateQuestion() {
      const items = [
        { name: '苹果', icon: '🍎' }, { name: '汽车', icon: '🚗' },
        { name: '花', icon: '🌸' }, { name: '飞机', icon: '✈️' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      return { target, question: `这是什么？`, options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'where-go': {
    generateQuestion() {
      const places = [
        { name: '回家', icon: '🏠', place: '家' },
        { name: '去学校', icon: '🏫', place: '学校' },
        { name: '去医院', icon: '🏥', place: '医院' },
        { name: '去公园', icon: '🌳', place: '公园' }
      ];
      const target = places[Math.floor(Math.random() * places.length)];
      return { target, question: `${target.name}去哪里？`, options: places };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.place === q.target.place; }
  },
  'feeling': {
    generateQuestion() {
      const feelings = [
        { name: '开心', icon: '😊' }, { name: '难过', icon: '😢' },
        { name: '生气', icon: '😠' }, { name: '害怕', icon: '😨' }
      ];
      const target = feelings[Math.floor(Math.random() * feelings.length)];
      return { target, question: `这是什么感觉？`, options: feelings };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'color-sort': {
    generateQuestion() {
      const colors = ['🔴','🔵','🟡','🔴','🔵','🟡'];
      const target = Math.random() > 0.5 ? '🔴' : '🔵';
      return { colors, target, question: `找出所有红色`, options: ['🔴','🔵','🟡'] };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'shape-build': {
    generateQuestion() {
      const shapes = ['🔴','🟨','🔺','🟩'];
      const target = shapes[Math.floor(Math.random() * 4)];
      return { shapes, target, question: `用${target}搭建`, options: shapes };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'puzzle-2x2': {
    generateQuestion() {
      const parts = ['🍎','🍊','🍋','🍇'];
      return { parts, question: '拼完整', options: parts };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return q.parts.includes(answer); }
  },
  'follow-path': {
    generateQuestion() {
      const path = ['➡️','➡️','⬇️','⬇️'];
      return { path, question: '跟着走', options: ['➡️','⬇️','⬅️','⬆️'] };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return q.path.includes(answer); }
  },
  'tap-order': {
    generateQuestion() {
      const nums = [1,2,3,4];
      return { nums, question: '按顺序点击1234', options: nums };
    },
    speakQuestion(q) { speak('按顺序点击1、2、3、4'); },
    check(answer, q) { return answer === 1; }
  },
  'memory-card': {
    generateQuestion() {
      const cards = ['🍎','🍊','🍋','🍇','🍎','🍊','🍋','🍇'];
      return { cards, question: '翻牌配对', options: ['🍎','🍊'] };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return true; }
  },
  'sound-match': {
    generateQuestion() {
      const sounds = [
        { name: '狗叫', icon: '🐶', sound: '汪汪' },
        { name: '猫叫', icon: '🐱', sound: '喵喵' }
      ];
      const target = sounds[Math.floor(Math.random() * sounds.length)];
      return { target, question: `什么动物${target.sound}？`, options: sounds };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'weather-feel': {
    generateQuestion() {
      const weather = [
        { name: '晴天热', icon: '☀️' },
        { name: '雨天冷', icon: '🌧️' }
      ];
      const target = weather[Math.floor(Math.random() * weather.length)];
      return { target, question: `这是什么天气感觉？`, options: weather };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'fruit-taste': {
    generateQuestion() {
      const fruits = [
        { name: '苹果', icon: '🍎', taste: '甜' },
        { name: '柠檬', icon: '🍋', taste: '酸' }
      ];
      const target = fruits[Math.floor(Math.random() * fruits.length)];
      return { target, question: `${target.icon}是什么味道？`, options: fruits };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.taste === q.target.taste; }
  },
  'animal-home': {
    generateQuestion() {
      const animals = [
        { name: '小狗', icon: '🐶', home: '狗窝' },
        { name: '小鸟', icon: '🐦', home: '鸟窝' }
      ];
      const target = animals[Math.floor(Math.random() * animals.length)];
      return { target, question: `${target.name}的家在哪里？`, options: animals };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'body-action': {
    generateQuestion() {
      const actions = [
        { name: '举手', icon: '✋' },
        { name: '拍手', icon: '👏' },
        { name: '点头', icon: '👤' },
        { name: '摇头', icon: '🙃' }
      ];
      const target = actions[Math.floor(Math.random() * actions.length)];
      return { target, question: `做${target.name}的动作`, options: actions };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'count-fingers': {
    generateQuestion() {
      const count = Math.floor(Math.random() * 5) + 1;
      return { count, question: `伸出${count}根手指`, options: [1,2,3,4,5] };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.count; }
  },
  'color-blocks': {
    generateQuestion() {
      const blocks = ['🟥','🟦','🟨','🟥','🟦','🟨'];
      const target = '🟥';
      return { blocks, target, question: '点击红色块', options: ['🟥','🟦','🟨'] };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'shape-trace': {
    generateQuestion() {
      const shapes = ['⬜','⭕','🔺','◇'];
      const target = shapes[Math.floor(Math.random() * shapes.length)];
      return { target, question: `描画${target}`, options: shapes };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'line-trace': {
    generateQuestion() {
      const lines = ['直线','曲线','折线'];
      const target = lines[Math.floor(Math.random() * 3)];
      return { target, question: `这是什么线？`, options: lines };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'dot-connect': {
    generateQuestion() {
      return { dots: 3, question: '把点连起来', options: ['1','2','3'] };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === '1'; }
  },
  'find-same-row': {
    generateQuestion() {
      const row = ['🍎','🍊','🍎','🍋'];
      const target = '🍎';
      return { row, target, question: '找相同的', options: ['🍎','🍊','🍋'] };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer === q.target; }
  },
  'count-legs': {
    generateQuestion() {
      const animals = [
        { name: '小狗', icon: '🐶', legs: 4 },
        { name: '小鸟', icon: '🐦', legs: 2 }
      ];
      const target = animals[Math.floor(Math.random() * animals.length)];
      return { target, question: `${target.name}有几条腿？`, options: animals };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.legs === q.target.legs; }
  },
  'who-swim': {
    generateQuestion() {
      const animals = [
        { name: '鱼', icon: '🐟', canSwim: true },
        { name: '猫', icon: '🐱', canSwim: false }
      ];
      const target = animals[Math.floor(Math.random() * animals.length)];
      return { target, question: `谁会游泳？`, options: animals };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.canSwim === q.target.canSwim; }
  },
  'who-fly': {
    generateQuestion() {
      const animals = [
        { name: '小鸟', icon: '🐦', canFly: true },
        { name: '小狗', icon: '🐶', canFly: false }
      ];
      const target = animals[Math.floor(Math.random() * animals.length)];
      return { target, question: `谁会飞？`, options: animals };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.canFly === q.target.canFly; }
  },
  'who-crawl': {
    generateQuestion() {
      const animals = [
        { name: '毛毛虫', icon: '🐛', canCrawl: true },
        { name: '兔子', icon: '🐰', canCrawl: false }
      ];
      const target = animals[Math.floor(Math.random() * animals.length)];
      return { target, question: `谁会爬行？`, options: animals };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.canCrawl === q.target.canCrawl; }
  },
  'toy-category': {
    generateQuestion() {
      const toys = [
        { name: '娃娃', icon: '🧸', type: '毛绒' },
        { name: '积木', icon: '🧱', type: '拼搭' }
      ];
      const target = toys[Math.floor(Math.random() * toys.length)];
      return { target, question: `${target.name}是什么类型玩具？`, options: toys };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'kitchen-items': {
    generateQuestion() {
      const items = [
        { name: '锅', icon: '🍳' },
        { name: '碗', icon: '🥣' },
        { name: '勺子', icon: '🥄' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      return { target, question: `点击厨房用品`, options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'bathroom': {
    generateQuestion() {
      const items = [
        { name: '牙刷', icon: '🪥' },
        { name: '毛巾', icon: '🧖' },
        { name: '洗发水', icon: '🧴' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      return { target, question: `点击卫生间用品`, options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'room-items': {
    generateQuestion() {
      const items = [
        { name: '床', icon: '🛏️' },
        { name: '桌子', icon: '🪑' },
        { name: '灯', icon: '💡' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      return { target, question: `点击房间物品`, options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'outdoor': {
    generateQuestion() {
      const items = [
        { name: '树', icon: '🌳' },
        { name: '花', icon: '🌸' },
        { name: '草', icon: '🌱' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      return { target, question: `点击户外物品`, options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'transport-speed': {
    generateQuestion() {
      const trans = [
        { name: '飞机最快', icon: '✈️', speed: 'fast' },
        { name: '汽车较快', icon: '🚗', speed: 'medium' },
        { name: '自行车慢', icon: '🚲', speed: 'slow' }
      ];
      const target = trans[Math.floor(Math.random() * trans.length)];
      return { target, question: `哪个最快？`, options: trans };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'food-hot-cold': {
    generateQuestion() {
      const foods = [
        { name: '热汤', icon: '🍲', hot: true },
        { name: '冰淇淋', icon: '🍦', hot: false }
      ];
      const isHot = Math.random() > 0.5;
      return { isHot, question: isHot ? '哪些是热的？' : '哪些是冷的？', options: foods };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return q.isHot ? answer.hot : !answer.hot; }
  },
  'liquid-solid': {
    generateQuestion() {
      const items = [
        { name: '水', icon: '💧', liquid: true },
        { name: '冰', icon: '🧊', liquid: false },
        { name: '果汁', icon: '🧃', liquid: true }
      ];
      const isLiquid = Math.random() > 0.5;
      return { isLiquid, question: isLiquid ? '哪些是液体？' : '哪些是固体？', options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return q.isLiquid ? answer.liquid : !answer.liquid; }
  },
  'living-room': {
    generateQuestion() {
      const items = [
        { name: '沙发', icon: '🛋️' },
        { name: '电视', icon: '📺' },
        { name: '茶几', icon: '🪵' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      return { target, question: `点击客厅物品`, options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'office': {
    generateQuestion() {
      const items = [
        { name: '电脑', icon: '💻' },
        { name: '打印机', icon: '🖨️' },
        { name: '文件夹', icon: '📁' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      return { target, question: `点击办公室物品`, options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'garden': {
    generateQuestion() {
      const items = [
        { name: '花', icon: '🌷' },
        { name: '草', icon: '🌱' },
        { name: '蝴蝶', icon: '🦋' }
      ];
      const target = items[Math.floor(Math.random() * items.length)];
      return { target, question: `点击花园物品`, options: items };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'farm': {
    generateQuestion() {
      const animals = [
        { name: '奶牛', icon: '🐄' },
        { name: '小猪', icon: '🐖' },
        { name: '马', icon: '🐴' }
      ];
      const target = animals[Math.floor(Math.random() * animals.length)];
      return { target, question: `点击农场动物`, options: animals };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'zoo': {
    generateQuestion() {
      const animals = [
        { name: '狮子', icon: '🦁' },
        { name: '大象', icon: '🐘' },
        { name: '长颈鹿', icon: '🦒' }
      ];
      const target = animals[Math.floor(Math.random() * animals.length)];
      return { target, question: `点击动物园动物`, options: animals };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'sea-animal': {
    generateQuestion() {
      const animals = [
        { name: '鲸鱼', icon: '🐳' },
        { name: '海豚', icon: '🐬' },
        { name: '海星', icon: '⭐' }
      ];
      const target = animals[Math.floor(Math.random() * animals.length)];
      return { target, question: `点击海洋动物`, options: animals };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'insect': {
    generateQuestion() {
      const insects = [
        { name: '蜜蜂', icon: '🐝' },
        { name: '蝴蝶', icon: '🦋' },
        { name: '蚂蚁', icon: '🐜' }
      ];
      const target = insects[Math.floor(Math.random() * insects.length)];
      return { target, question: `点击昆虫`, options: insects };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'bird': {
    generateQuestion() {
      const birds = [
        { name: '小鸟', icon: '🐦' },
        { name: '鹦鹉', icon: '🦜' },
        { name: '鸽子', icon: '🐕' }
      ];
      const target = birds[Math.floor(Math.random() * birds.length)];
      return { target, question: `点击小鸟`, options: birds };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'pet': {
    generateQuestion() {
      const pets = [
        { name: '小狗', icon: '🐕' },
        { name: '小猫', icon: '🐱' },
        { name: '小金鱼', icon: '🐠' }
      ];
      const target = pets[Math.floor(Math.random() * pets.length)];
      return { target, question: `点击宠物`, options: pets };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  },
  'wild-animal': {
    generateQuestion() {
      const animals = [
        { name: '老虎', icon: '🐯' },
        { name: '狮子', icon: '🦁' },
        { name: '熊猫', icon: '🐼' }
      ];
      const target = animals[Math.floor(Math.random() * animals.length)];
      return { target, question: `点击野生动物`, options: animals };
    },
    speakQuestion(q) { speak(q.question); },
    check(answer, q) { return answer.name === q.target.name; }
  }
};

window.GAMES = GAMES;
window.GameLogic = GameLogic;
window.speak = speak;
window.playCorrectSound = playCorrectSound;
window.playWrongSound = playWrongSound;