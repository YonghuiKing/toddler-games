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
  }
};

window.GAMES = GAMES;
window.GameLogic = GameLogic;
window.speak = speak;
window.playCorrectSound = playCorrectSound;
window.playWrongSound = playWrongSound;