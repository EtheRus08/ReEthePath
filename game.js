'use strict';

const VERSION = 'v19.2';

// ============================================================
//  Re:EthePath —— 以太之路 (v3.0 主菜单 · 图鉴祈愿 · 100卡)
//  澪奈坠入平行宇宙之间的虚无, 连穿六界各五层, 突破元宇宙
// ============================================================

// ================= 世界观碎片 =================
const LORE = [
  '「这个世界没有天空。澪奈抬头时，只看到无数破碎的自己。」',
  '「第1437号宇宙已静默。请勿回头。」——某块漂浮的石碑',
  '「有人说，虚无的尽头有一扇门。门的另一边，是她再也回不去的日常。」',
  '「残响是死去宇宙的回声。它们攻击你，或许只是因为太寂寞了。」',
  '「澪奈数过虚无里的门。大多数，只是画在墙上的。」',
  '「某个平行世界里，战斗要跟着节拍进行。澪奈庆幸这里不是。」',
  '「以太是虚无中唯一流通的东西。是货币，是武器，也是记忆的价格。」',
  '「她数过自己的影子。大多数时候是一个。有时候，是两个。」',
  '「『澪奈』这个名字，是她为数不多还确定属于自己的东西。」',
  '「突破元宇宙的方法只有一个：向上。不停地、不停地向上。」',
  '「有时残响会用她熟悉的声音说话。澪奈学会了不去回应。」',
  '「石碑的背面还有一行小字：如果你读到这个，说明你也掉了下来。祝好。」',
  '「虚空不杀任何人。」第三百一十一号石碑这样写着，「它只是不再阻止你忘记。」',
  '「以太结晶在夜里会唱歌。跑调的那种。」——商队行规第七条',
  '「她给每个残响起了名字。后来发现，它们其实是同一个名字。」',
  '「第2号宇宙下雨，第7号宇宙下雨，第999号宇宙还是下雨。她开始讨厌雨。」',
  '「守望者不是守卫。守望者是最后一任住客。」',
  '「有人用三年把卡组精简到12张。他成了传说，然后成了残响。」',
  '「虚无里没有风。所以她头发动的时候，她知道有什么东西在靠近。」',
  '「有人问她虚无里最怕什么。她想了想：怕到家那天，想不起家门朝哪边开。」',
  '「『向上』不是方向，是这里的唯一规则。违反的人，都变成了地砖。」',
  '「商队没有面孔，但她总觉得它在笑。后来她不觉得了。」',
  '「第一千四百三十七。她数着石碑，像数着别人的一生。」',
  '「门后面不一定有家。但她已经没有别的地方可去了。」',
];

// ================= 世界 =================
const WORLDS = [
  {
    key: 'void', name: '虚无之间', sub: '标准规则', desc: '漂浮的宇宙坟场，一切的起点',
    grad: ['#e3ebf9', '#cfdcf2', '#b4c8ec'], star: '#7c98d8', shard: ['#6aa8ff', '#b490f0'], beam: '170,200,255',
    enemies: {
      normal: ['残响 · 虚空造物', '残响 · 游丝', '残响 · 碎念'],
      elite: '凶残响 · 虚空掠夺者', eliteGlyph: '凶残响', boss: '界膜守望者', bossGlyph: '守望者',
    },
    mod: {},
  },
  {
    key: 'cyber', name: '数据残响', sub: '敌血-15% · 敌攻+1', desc: '崩坏的赛博维度，快节奏互秒',
    grad: ['#e0f2f4', '#c8e6ea', '#a4d2dc'], star: '#5aa8b8', shard: ['#4dd0c8', '#7aa8ff'], beam: '120,220,220',
    enemies: {
      normal: ['残响 · 数据幽灵', '残响 · 冗余进程', '残响 · 断线者'],
      elite: '凶残响 · 病毒体', eliteGlyph: '病毒体', boss: '根目录守望者', bossGlyph: '根目录',
    },
    mod: { enemyHp: 0.85, enemyDmg: 1 },
  },
  {
    key: 'ember', name: '熔核深渊', sub: '敌血+15% · 休整+4', desc: '燃烧殆尽的世界核，消耗战的天堂',
    grad: ['#f7e8e0', '#f0d8cc', '#e8c0b0'], star: '#d89070', shard: ['#f0a060', '#e07070'], beam: '255,190,150',
    enemies: {
      normal: ['残响 · 灰烬行者', '残响 · 燃尽者', '残响 · 熔渣'],
      elite: '凶残响 · 熔核兽', eliteGlyph: '熔核兽', boss: '深渊守望者', bossGlyph: '熔核',
    },
    mod: { enemyHp: 1.15, battleHeal: 4 },
  },
  {
    key: 'frost', name: '星霜回廊', sub: '敌常凝壳 · 碎片+1', desc: '时间冻结的长廊，奖励也最丰厚',
    grad: ['#e8eef8', '#d4e0f4', '#b8ccee'], star: '#98b8e8', shard: ['#a8c8f8', '#d0e0ff'], beam: '180,210,255',
    enemies: {
      normal: ['残响 · 冰晶', '残响 · 霜语', '残响 · 冻星'],
      elite: '凶残响 · 冰冕', eliteGlyph: '冰冕', boss: '回廊守望者', bossGlyph: '冰冕',
    },
    mod: { defendBonus: true, fragBonus: 1 },
  },
  {
    key: 'dream', name: '幽梦庭园', sub: '敌常诅咒 · 商店-20%', desc: '潜意识堆积成的花园，真假难辨',
    grad: ['#f2e8f6', '#e6d4f0', '#d5bce8'], star: '#b088d0', shard: ['#c080e8', '#e0a8f0'], beam: '220,170,255',
    enemies: {
      normal: ['残响 · 梦貘', '残响 · 呓语', '残响 · 魇影'],
      elite: '凶残响 · 织梦者', eliteGlyph: '织梦者', boss: '庭园守望者', bossGlyph: '魇主',
    },
    mod: { cycleDream: true, shopDiscount: 0.8 },
  },
  {
    key: 'storm', name: '雷鸣废土', sub: '昼夜2回响 · 敌血+10%', desc: '永不停歇的雷暴之地，节奏至上',
    grad: ['#f4f0dc', '#ece4c4', '#dcd0a4'], star: '#c0a860', shard: ['#f0d040', '#c0a0e0'], beam: '255,230,140',
    enemies: {
      normal: ['残响 · 雷灵', '残响 · 废土客', '残响 · 电极'],
      elite: '凶残响 · 雷兽', eliteGlyph: '雷兽', boss: '废土守望者', bossGlyph: '雷皇',
    },
    mod: { dnFast: true, enemyHp: 1.1 },
  },
];
const FROST_CYCLE = ['attack', 'defend', 'attack', 'charge', 'curse'];
const DREAM_CYCLE = ['attack', 'curse', 'attack', 'charge', 'defend'];
let BGPAL = WORLDS[0];
function curWorld() {
  const key = run.worldOrder ? run.worldOrder[run.worldIdx] : run.world;
  return WORLDS.find(w => w.key === key) || WORLDS[0];
}

// ================= 教学提示 =================
function firstTime(key) {
  META.seen = META.seen || {};
  if (META.seen[key]) return false;
  META.seen[key] = true;
  saveMeta();
  return true;
}
function showTip(title, text, then) {   // v19.1: 沉浸式提示页(与结算/商店同套 dm-fx 语言), 旧白面板已废
  window._afterTip = then;
  const dkN = hexA => {
    const n = parseInt(hexA.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.22 | 0) + ',' + ((n >> 8 & 255) * 0.22 | 0) + ',' + ((n & 255) * 0.22 | 0) + ')';
  };
  let motes = '';
  for (let i = 0; i < 8; i++)
    motes += '<i style="left:' + (4 + Math.random() * 92).toFixed(1) + '%;bottom:-2%;' +
      'animation-duration:' + (9 + Math.random() * 9).toFixed(1) + 's;animation-delay:' + (Math.random() * 8).toFixed(1) + 's"></i>';
  const old = qs('.tip-fx');
  if (old && old.remove) old.remove();
  const fx = document.createElement('div');
  fx.className = 'dm-fx tip-fx';
  fx.innerHTML =
    '<div class="dm-veil" style="background:linear-gradient(168deg,' + dkN(BGPAL.grad[0]) + ' 0%,' + dkN(BGPAL.grad[1]) + ' 52%,' + dkN(BGPAL.grad[2]) + ' 100%)"></div>' +
    '<div class="dm-glow" style="background:radial-gradient(circle at 50% 42%, rgba(' + BGPAL.beam + ',0.16), transparent 62%)"></div>' +
    '<div class="dm-motes">' + motes + '</div>' +
    '<div class="dm-core">' +
      '<h2 class="dm-title">' + title.split('').map((ch, i) =>
        '<span style="--di:' + i + '">' + ch + '</span>').join('') + '</h2>' +
      '<p class="dm-lore tip-lore">' + text + '</p>' +
      '<div class="dm-btns"><button class="dm-btn" onclick="tipContinue()">继续</button></div>' +
    '</div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
}
function tipContinue() {
  const fx = qs('.tip-fx');
  if (fx && fx.classList) {
    fx.classList.add('out');
    setTimeout(() => { const f2 = qs('.tip-fx'); if (f2 && f2.remove) f2.remove(); }, 480);
  }
  const f = window._afterTip;
  window._afterTip = null;
  if (f) setTimeout(f, 360);   // 等纱幕淡出再进战斗, 不叠影
}
const TIP_BATTLE = '上方是敌人的<b>当前意图</b>，图标下的小字是<b>下回合动作</b>。<br>点击敌人或按 Tab 切换目标；空格打出选中牌，数字键直出，回车结束回响。<br>屏障只在本回响有效——别囤。';
const TIP_ELITE = '前方是<b>凶残响</b>：更硬、更痛、成长更快。<br>奖励也更丰厚（稀有度加成）。评估一下血量和卡组，再决定要不要绕开。';
const TIP_SHOP = '以太结晶在这里是硬通货：买卡牌、治疗，<br>也可以<b>销毁一张多余的记忆</b>——精简的卡组才是强的卡组。';
function randomLore() { return LORE[(Math.random() * LORE.length) | 0]; }

// ================= 稀有度与类型 =================
const RARITY = {
  C: { name: '凡忆', color: '#9a9ab0' },
  R: { name: '烁忆', color: '#4dc9ff' },
  E: { name: '幻忆', color: '#b44dff' },
  L: { name: '源忆', color: '#ffd24d' },
};
const TYPE_NAME = { attack: '攻击', skill: '技能', power: '权能' };
const W_NORMAL = { C: 40, R: 34, E: 19, L: 7 };
const W_BOOST  = { C: 25, R: 40, E: 25, L: 10 };
const W_GACHA  = { C: 38, R: 35, E: 19, L: 8 };
const PRICE = { C: 25, R: 50, E: 85, L: 130 };
const HAND_MAX = 8;

// ================= 卡牌池(100种) =================
// 对敌 = 攻击/上debuff; 对己 = buff/防御/净化
const CARD_POOL = [
  // ============ 基础34张(默认解锁) ============
  { name: '碎光刺',   cost: 1, type: 'attack', rarity: 'C', dmg: 6,  desc: '造成6点伤害' },
  { name: '坠星重击', cost: 2, type: 'attack', rarity: 'C', dmg: 10, desc: '造成10点伤害' },
  { name: '微光刃',   cost: 0, type: 'attack', rarity: 'C', tag: 'flurry', dmg: 3,  desc: '造成3点伤害' },
  { name: '虚空盾击', cost: 1, type: 'attack', rarity: 'C', dmg: 4, weak: 1, desc: '4伤害，附加1层衰微' },
  { name: '噬光',     cost: 1, type: 'attack', rarity: 'C', tag: 'void', dmg: 5, poison: 1, desc: '5伤害，附加1层侵蚀' },
  { name: '裂地波',   cost: 1, type: 'attack', rarity: 'C', dmg: 4, aoe: true, desc: '对所有敌人造成4点伤害' },
  { name: '连珠溅射', cost: 1, type: 'attack', rarity: 'C', tag: 'flurry', dmg: 2, hits: 2, aoe: true, desc: '对所有敌人造成2点伤害×2次' },
  { name: '双界连斩', cost: 1, type: 'attack', rarity: 'R', tag: 'flurry', dmg: 3, hits: 2, desc: '造成3点伤害×2次' },
  { name: '虚无蚀刃', cost: 1, type: 'attack', rarity: 'R', tag: 'void', dmg: 3, poison: 3, desc: '3伤害，附加3层侵蚀' },
  { name: '破界一击', cost: 1, type: 'attack', rarity: 'R', dmg: 5, vuln: 2, desc: '5伤害，附加2层裂解(受伤+25%/层)' },
  { name: '虹吸之剑', cost: 2, type: 'attack', rarity: 'R', dmg: 8, poison: 2, desc: '8伤害，附加2层侵蚀' },
  { name: '断界重劈', cost: 2, type: 'attack', rarity: 'R', dmg: 14, vulnBonus: 6, desc: '14伤害；若敌人裂解再+6' },
  { name: '星尘旋斩', cost: 2, type: 'attack', rarity: 'E', tag: 'flurry', dmg: 5, hits: 3, aoe: true, desc: '对所有敌人造成5点伤害×3次' },
  { name: '终焉处决', cost: 2, type: 'attack', rarity: 'E', dmg: 8, exec: true, desc: '8伤害；敌人生命≤35%时改为24' },
  { name: '虚无爆裂', cost: 2, type: 'attack', rarity: 'E', tag: 'void', poisonBurst: true, desc: '造成目标侵蚀层数×3伤害，然后清除' },
  { name: '界核重击', cost: 3, type: 'attack', rarity: 'E', dmg: 22, desc: '造成22点伤害' },
  { name: '万象终焉', cost: 2, type: 'attack', rarity: 'L', finisher: true, desc: '造成 6×(本回响已出牌数+1) 伤害' },
  { name: '燃命之怒', cost: 1, type: 'attack', rarity: 'L', dmg: 16, selfDmg: 4, desc: '失去4生命，造成16点伤害' },
  { name: '微光屏障', cost: 1, type: 'skill', rarity: 'C', block: 7, desc: '获得6屏障' },
  { name: '静观',     cost: 0, type: 'skill', rarity: 'C', draw: 2, cleanse: true, desc: '抽2段记忆，净化自身减益' },
  { name: '相位闪避', cost: 1, type: 'skill', rarity: 'C', block: 5, draw: 1, desc: '5屏障，抽1张牌' },
  { name: '不屈呐喊', cost: 1, type: 'skill', rarity: 'R', strength: 2, desc: '+2意志(攻击牌伤害+2)' },
  { name: '虚无迷雾', cost: 1, type: 'attack', rarity: 'R', dmg: 3, weak: 2, aoe: true, desc: '对所有敌人造成3点伤害，附加2层衰微' },
  { name: '心灵脉冲', cost: 0, type: 'skill', rarity: 'R', tag: 'flurry', energy: 1, draw: 1, desc: '+1以太，抽1张牌' },
  { name: '绝对壁垒', cost: 2, type: 'skill', rarity: 'R', block: 12, desc: '获得12屏障' },
  { name: '侵蚀之雾', cost: 2, type: 'skill', rarity: 'E', tag: 'void', poison: 5, aoe: true, desc: '对所有敌人附加5层侵蚀' },
  { name: '镜面反姿', cost: 1, type: 'skill', rarity: 'E', block: 6, thorns: 3, desc: '6屏障，+3星棘(反弹攻击)' },
  { name: '以太涌流', cost: 0, type: 'skill', rarity: 'E', energy: 2, exhaust: true, desc: '+2以太。消散' },
  { name: '澪奈的执念', cost: 2, type: 'skill', rarity: 'L', block: 10, keepBlock: true, desc: '10屏障；下一回响屏障不清零' },
  { name: '命运重构',   cost: 1, type: 'skill', rarity: 'L', reshuffle: true, exhaust: true, desc: '残片洗回记忆，抽2张。消散' },
  { name: '虚无淬刃', cost: 1, type: 'power', rarity: 'R', tag: 'void', powerKey: 'venom',  desc: '权能：攻击牌附加1层侵蚀' },
  { name: '宇宙律动', cost: 1, type: 'power', rarity: 'R', powerKey: 'draw',   desc: '权能：每回响多抽1张牌' },
  { name: '以太暴走', cost: 2, type: 'power', rarity: 'E', powerKey: 'energy', desc: '权能：每回响+1以太' },
  { name: '星棘护甲', cost: 2, type: 'power', rarity: 'E', powerKey: 'thorns', desc: '权能：获得4星棘' },
  { name: '弑神者',   cost: 2, type: 'power', rarity: 'L', powerKey: 'giant',  desc: '权能：对生命>50%的敌人伤害+50%' },
  { name: '生命契约', cost: 1, type: 'power', rarity: 'L', powerKey: 'leech',  desc: '权能：攻击伤害的25%转化为治疗' },
  // ============ 扩展66张(祈愿解锁) ============
  // ---- 攻击 · 凡忆 ----
  { name: '连突刺',   cost: 1, type: 'attack', rarity: 'C', tag: 'flurry', dmg: 2, hits: 3, desc: '造成2点伤害×3次' },
  { name: '回光斩',   cost: 1, type: 'attack', rarity: 'C', dmg: 7,  desc: '造成7点伤害' },
  { name: '裂空刺',   cost: 1, type: 'attack', rarity: 'C', dmg: 5, vuln: 1, desc: '5伤害，附加1层裂解' },
  { name: '蚀骨钉',   cost: 1, type: 'attack', rarity: 'C', tag: 'void', dmg: 3, poison: 2, desc: '3伤害，附加2层侵蚀' },
  { name: '闪光连打', cost: 1, type: 'attack', rarity: 'C', tag: 'flurry', dmg: 2, hits: 2, desc: '造成2点伤害×2次' },
  { name: '破盾击',   cost: 1, type: 'attack', rarity: 'C', dmg: 4, blockBonus: 8, desc: '4伤害；敌人有虚壳再+8' },
  { name: '轻羽斩',   cost: 1, type: 'attack', rarity: 'C', tag: 'flurry', dmg: 4, desc: '造成4点伤害' },
  { name: '残月击',   cost: 2, type: 'attack', rarity: 'C', dmg: 12, desc: '造成12点伤害' },
  { name: '穿界刺',   cost: 2, type: 'attack', rarity: 'C', dmg: 8, vuln: 1, desc: '8伤害，附加1层裂解' },
  { name: '毒牙突袭', cost: 1, type: 'attack', rarity: 'C', tag: 'void', dmg: 4, poison: 1, desc: '4伤害，附加1层侵蚀' },
  // ---- 攻击 · 烁忆 ----
  { name: '三连星',   cost: 1, type: 'attack', rarity: 'R', tag: 'flurry', dmg: 3, hits: 3, desc: '造成3点伤害×3次' },
  { name: '湮灭之触', cost: 2, type: 'attack', rarity: 'R', tag: 'void', dmg: 6, poison: 3, desc: '6伤害，附加3层侵蚀' },
  { name: '破魔斩',   cost: 2, type: 'attack', rarity: 'R', dmg: 8, dmgDown: 2, desc: '8伤害；敌人攻击力-2' },
  { name: '镜花水月', cost: 2, type: 'attack', rarity: 'R', tag: 'flurry', dmg: 5, hits: 2, desc: '造成5点伤害×2次' },
  { name: '陨铁拳',   cost: 2, type: 'attack', rarity: 'R', dmg: 9,  desc: '造成9点伤害' },
  { name: '毒液喷洒', cost: 2, type: 'attack', rarity: 'R', tag: 'void', dmg: 2, poison: 4, aoe: true, desc: '对所有敌人造成2点伤害，附加4层侵蚀' },
  { name: '虚空震荡', cost: 2, type: 'attack', rarity: 'R', dmg: 6, aoe: true, desc: '对所有敌人造成6点伤害' },
  { name: '蓄雷一击', cost: 2, type: 'attack', rarity: 'R', dmg: 6, dmgEnergy: 2, desc: '6伤害+当前以太×2' },
  { name: '记忆投刃', cost: 2, type: 'attack', rarity: 'R', dmg: 4, dmgHand: 2, desc: '4伤害+手牌数×2' },
  { name: '裂解重锤', cost: 2, type: 'attack', rarity: 'R', dmg: 10, vulnBonus: 8, desc: '10伤害；若敌人裂解再+8' },
  { name: '星屑散射', cost: 2, type: 'attack', rarity: 'R', tag: 'flurry', dmg: 3, hits: 3, aoe: true, desc: '对所有敌人造成3点伤害×3次' },
  { name: '破阵横扫', cost: 2, type: 'attack', rarity: 'R', dmg: 7, vuln: 1, aoe: true, desc: '对所有敌人造成7点伤害，附加1层裂解' },
  { name: '蚀雨',     cost: 2, type: 'attack', rarity: 'R', tag: 'void', dmg: 3, poison: 2, aoe: true, desc: '对所有敌人造成3点伤害，附加2层侵蚀' },
  // ---- 攻击 · 幻忆 ----
  { name: '星雨坠落', cost: 2, type: 'attack', rarity: 'E', tag: 'flurry', dmg: 4, hits: 4, desc: '造成4点伤害×4次' },
  { name: '虚无洪流', cost: 3, type: 'attack', rarity: 'E', tag: 'void', dmg: 7, aoe: true, poison: 2, desc: '对所有敌人造成7点伤害+2层侵蚀' },
  { name: '灭界一击', cost: 3, type: 'attack', rarity: 'E', dmg: 16, desc: '造成16点伤害' },
  { name: '处刑宣告', cost: 2, type: 'attack', rarity: 'E', dmg: 10, exec: 30, desc: '10伤害；敌人生命≤35%时改为30' },
  { name: '蚀心咒',   cost: 2, type: 'attack', rarity: 'E', tag: 'void', poison: 6, desc: '附加6层侵蚀' },
  { name: '弃牌风暴', cost: 2, type: 'attack', rarity: 'E', dmgDiscard: 1, desc: '造成等同于残片数量的伤害' },
  { name: '屏障冲击', cost: 1, type: 'attack', rarity: 'E', dmgBlock: 1, desc: '造成等同于你屏障值的伤害' },
  { name: '万剑归潮', cost: 3, type: 'attack', rarity: 'E', dmg: 11, aoe: true, desc: '对所有敌人造成11点伤害' },
  // ---- 攻击 · 源忆 ----
  { name: '终焉回响', cost: 2, type: 'attack', rarity: 'L', finisher: 8, desc: '造成 8×(本回响已出牌数+1) 伤害' },
  { name: '以太湮灭', cost: 2, type: 'attack', rarity: 'L', dmg: 10, dmgEnergy: 3, desc: '10伤害+当前以太×3' },
  { name: '神罚',     cost: 3, type: 'attack', rarity: 'L', dmg: 26, desc: '造成26点伤害' },
  { name: '万界裂解', cost: 2, type: 'attack', rarity: 'L', dmg: 9, vuln: 3, desc: '9伤害，附加3层裂解' },
  // ---- 技能 · 凡忆 ----
  { name: '微光疗愈', cost: 1, type: 'skill', rarity: 'C', heal: 5, desc: '回复5生命' },
  { name: '蓄能',     cost: 0, type: 'skill', rarity: 'C', energy: 1, desc: '+1以太' },
  { name: '硬化',     cost: 1, type: 'skill', rarity: 'C', block: 9, desc: '获得8屏障' },
  { name: '专注',     cost: 0, type: 'skill', rarity: 'C', draw: 1, strength: 1, desc: '抽1张牌，+1意志' },
  { name: '净化仪式', cost: 1, type: 'skill', rarity: 'C', block: 3, cleanse: true, desc: '3屏障，净化自身减益' },
  { name: '迅捷步伐', cost: 0, type: 'skill', rarity: 'C', draw: 1, energyNext: 1, desc: '抽1张牌；下回响+1以太' },
  // ---- 技能 · 烁忆 ----
  { name: '以太储能', cost: 1, type: 'skill', rarity: 'R', energyNext: 2, desc: '下回响+2以太' },
  { name: '双倍刻印', cost: 1, type: 'skill', rarity: 'R', double: true, desc: '下一张攻击牌打出2次' },
  { name: '战地治疗', cost: 2, type: 'skill', rarity: 'R', heal: 9, desc: '回复9生命' },
  { name: '铜墙铁壁', cost: 2, type: 'skill', rarity: 'R', block: 14, desc: '获得14屏障' },
  { name: '记忆汲取', cost: 1, type: 'skill', rarity: 'R', draw: 3, desc: '抽3张牌' },
  { name: '精灵祝福', cost: 1, type: 'skill', rarity: 'R', strength: 1, keepBlock: true, desc: '+1意志；屏障保留' },
  { name: '余震护盾', cost: 1, type: 'skill', rarity: 'R', block: 6, thorns: 2, desc: '6屏障，+2星棘' },
  { name: '过载充能', cost: 0, type: 'skill', rarity: 'R', energy: 3, exhaust: true, desc: '+3以太。消散' },
  // ---- 技能 · 幻忆 ----
  { name: '不死鸟',   cost: 2, type: 'skill', rarity: 'E', heal: 14, desc: '回复14生命' },
  { name: '绝对防御', cost: 2, type: 'skill', rarity: 'E', block: 18, keepBlock: true, desc: '18屏障；屏障保留' },
  { name: '未来视',   cost: 2, type: 'skill', rarity: 'E', draw: 4, desc: '抽4张牌' },
  { name: '战斗记忆', cost: 1, type: 'skill', rarity: 'E', strength: 3, desc: '+3意志' },
  { name: '时空裂隙', cost: 1, type: 'skill', rarity: 'E', reshuffle: true, draw: 3, exhaust: true, desc: '残片洗回记忆，抽3张。消散' },
  // ---- 技能 · 源忆 ----
  { name: '澪奈的决意', cost: 2, type: 'skill', rarity: 'L', block: 8, strength: 2, keepBlock: true, desc: '8屏障，+2意志，屏障保留' },
  { name: '命运丝线',   cost: 1, type: 'skill', rarity: 'L', draw: 2, double: true, desc: '抽2张牌；下一张攻击牌打出2次' },
  // ---- 权能 · 扩展 ----
  { name: '再生因子', cost: 2, type: 'power', rarity: 'R', powerKey: 'regen', desc: '权能：每回响回复2生命' },
  { name: '星尘屏障', cost: 1, type: 'power', rarity: 'R', powerKey: 'thorns', desc: '权能：获得4星棘' },
  { name: '小型暴走', cost: 2, type: 'power', rarity: 'R', powerKey: 'energy', desc: '权能：每回响+1以太' },
  { name: '痛苦回响', cost: 1, type: 'power', rarity: 'R', tag: 'void', powerKey: 'poisonHeal', desc: '权能：施加侵蚀时回复1生命' },
  { name: '循环记忆', cost: 2, type: 'power', rarity: 'E', powerKey: 'draw', desc: '权能：每回响多抽1张牌' },
  { name: '吸血獠牙', cost: 2, type: 'power', rarity: 'E', powerKey: 'leech', desc: '权能：攻击伤害的25%转化为治疗' },
  { name: '巨人猎手', cost: 2, type: 'power', rarity: 'E', powerKey: 'giant', desc: '权能：对生命>50%的敌人伤害+50%' },
  { name: '双重奏',   cost: 2, type: 'power', rarity: 'E', powerKey: 'doubleFirst', desc: '权能：每回响首张攻击牌×2' },
  { name: '毒经',     cost: 2, type: 'power', rarity: 'E', tag: 'void', powerKey: 'venomAura', desc: '权能：每回响所有敌人+1层侵蚀' },
  { name: '界域行者', cost: 2, type: 'power', rarity: 'E', powerKey: 'foresight', desc: '权能：每回响40%概率+1以太' },
  { name: '以太炉心', cost: 3, type: 'power', rarity: 'L', powerKey: 'mastery', desc: '权能：每回响+1以太且多抽1张' },
  { name: '万毒之源', cost: 3, type: 'power', rarity: 'L', tag: 'void', powerKey: 'venomAura2', desc: '权能：每回响所有敌人+2层侵蚀' },
  { name: '不灭',     cost: 3, type: 'power', rarity: 'L', powerKey: 'regen2', desc: '权能：每回响回复4生命' },
  { name: '奇点',     cost: 1, type: 'power', rarity: 'L', powerKey: 'sharp', desc: '权能：每回响+1意志' },
  // ---- 昼夜词缀卡 ----
  { name: '晨曦刃',   cost: 1, type: 'attack', rarity: 'C', dmg: 5, day: { dmg: 4 }, desc: '5伤害；白昼时再+4' },
  { name: '夜蚀刃',   cost: 1, type: 'attack', rarity: 'C', tag: 'void', dmg: 4, night: { poison: 2 }, desc: '4伤害；黑夜时附加2层侵蚀' },
  { name: '日晷',     cost: 1, type: 'skill', rarity: 'R', daySwitch: true, draw: 1, desc: '切换为白昼，抽1张牌' },
  { name: '月蚀',     cost: 1, type: 'skill', rarity: 'R', nightSwitch: true, energy: 1, desc: '切换为黑夜，+1以太' },
  { name: '辉昼盾',   cost: 1, type: 'skill', rarity: 'E', block: 8, day: { block: 6 }, desc: '8屏障；白昼时再+6' },
  { name: '暗潮',     cost: 2, type: 'attack', rarity: 'E', tag: 'void', dmg: 7, night: { aoe: true }, desc: '7伤害；黑夜时对全部敌人生效' },
  { name: '永夜君主', cost: 2, type: 'power', rarity: 'L', powerKey: 'eternalNight', desc: '权能：永夜降临；你在黑夜攻击+3' },
  // ---- 扩充23张 ----
  { name: '旋光刃',   cost: 1, type: 'attack', rarity: 'C', tag: 'flurry', dmg: 3, hits: 2, desc: '造成3点伤害×2次' },
  { name: '碎梦击',   cost: 1, type: 'attack', rarity: 'C', dmg: 6, desc: '造成6点伤害' },
  { name: '雷牙',     cost: 1, type: 'attack', rarity: 'C', dmg: 5, vuln: 1, desc: '5伤害，附加1层裂解' },
  { name: '夺魄',     cost: 1, type: 'attack', rarity: 'R', dmg: 5, dmgDown: 1, desc: '5伤害；敌人攻击力-1' },
  { name: '双日连射', cost: 2, type: 'attack', rarity: 'R', tag: 'flurry', dmg: 4, hits: 2, day: { dmg: 2 }, desc: '4伤害×2次；白昼时每段再+2' },
  { name: '夜枭',     cost: 1, type: 'attack', rarity: 'R', dmg: 5, night: { hits: 1 }, desc: '5伤害；黑夜时多打1次' },
  { name: '蚀骨潮',   cost: 2, type: 'attack', rarity: 'E', tag: 'void', dmg: 4, poison: 3, aoe: true, desc: '对所有敌人造成4点伤害，附加3层侵蚀' },
  { name: '雷界崩落', cost: 2, type: 'attack', rarity: 'E', dmg: 13, day: { aoe: true }, desc: '13伤害；白昼时对全部敌人生效' },
  { name: '献祭',     cost: 1, type: 'attack', rarity: 'E', sacrifice: 9, desc: '消耗随机1张手牌，造成其费用×9伤害' },
  { name: '棘牙',     cost: 1, type: 'attack', rarity: 'E', thornsDmg: 3, desc: '造成星棘数×3的伤害' },
  { name: '永昼斩',   cost: 2, type: 'attack', rarity: 'L', dmg: 12, day: { dmg: 8 }, desc: '12伤害；白昼时再+8' },
  { name: '噬月',     cost: 2, type: 'attack', rarity: 'L', tag: 'void', dmg: 10, night: { poison: 4, aoe: true }, desc: '10伤害；黑夜时对全部敌人附加4层侵蚀' },
  { name: '晨露',     cost: 1, type: 'skill', rarity: 'C', heal: 4, draw: 1, desc: '回复4生命，抽1张牌' },
  { name: '夜行者',   cost: 1, type: 'skill', rarity: 'C', block: 4, draw: 1, desc: '4屏障，抽1张牌' },
  { name: '白昼祷言', cost: 1, type: 'skill', rarity: 'R', daySwitch: true, block: 5, desc: '切换为白昼，获得5屏障' },
  { name: '入夜仪式', cost: 1, type: 'skill', rarity: 'R', nightSwitch: true, draw: 2, desc: '切换为黑夜，抽2张牌' },
  { name: '雷鸣蓄能', cost: 1, type: 'skill', rarity: 'R', energyNext: 3, desc: '下回响+3以太' },
  { name: '梦甲',     cost: 1, type: 'skill', rarity: 'E', block: 10, night: { block: 6 }, desc: '10屏障；黑夜时再+6' },
  { name: '黎明觉醒', cost: 2, type: 'skill', rarity: 'L', heal: 10, draw: 2, desc: '回复10生命，抽2张牌' },
  { name: '荆棘王座', cost: 3, type: 'power', rarity: 'L', powerKey: 'thorns', desc: '权能：获得4星棘' },
  { name: '梦貘',     cost: 2, type: 'power', rarity: 'E', powerKey: 'regen', desc: '权能：每回响回复2生命' },
  { name: '双子星',   cost: 3, type: 'power', rarity: 'L', powerKey: 'doubleFirst', desc: '权能：每回响首张攻击牌×2' },
  { name: '雷鸣神核', cost: 3, type: 'power', rarity: 'L', powerKey: 'mastery', desc: '权能：每回响+1以太且多抽1张' },
];
const BASE_COUNT = 36;

// ================= 剧情(书页式叙事) =================
const STORY_PROLOGUE = { title: '序章 · 雨夜', text: `那天的雨，下得像是整个城市都在漏水。澪奈抱着书包跑过路口，信号灯在雨幕里一闪一闪。
然后是光。白得没有边缘的光。
光熄灭之后，没有疼痛，也没有雨。她悬在一片没有天没有地的地方，远处漂着碎掉的星球、倒过来的城市、凝在半空的浪。
她不知道自己已经死了。她只知道一件事：这里不是她的世界。
碎片的缝隙里，有一条向上的路——一串浮着的光斑，通向更高处的黑暗。
「回去。」她对自己说，「总要回去的。」` };

const WORLD_STORIES = {
  void: {
    intro: { title: '虚无之间 · 序', text: `下落停止了。澪奈睁开眼，脚下是一层磨砂玻璃似的天。
碎掉的星球在远处缓缓地转，谁也不碰谁。这里的一切，都不是她的世界。
掌心亮起一小片光——她不知道，那是她正在花掉的记忆。
「往上走。」她对自己说，「路的尽头，应该有回去的门。」` },
    boss: { title: '虚无之间 · 守望者', text: `路的尽头，天幕低垂，像一面望不到边的磨砂玻璃。
守望者坐在膜下，一粒一粒地数着光的棋子。
「第一千四百三十九个。」它没有抬头，「到你为止，没有一个回去。」
「他们去了哪里？」「放弃了。化成光，留在我身后的膜上。」
澪奈望向那扇隐约的门：「那我替他们，把这条路走完。」` },
    clear: { title: '虚无之间 · 之后', text: `守望者的棋子落回棋盘，发出很轻的一声。
「这一界的门让给你。」它说，「但回去的路，不止这一层天。」
澪奈回头望了一眼来路——残响们在远处明明灭灭，像替她照着路。
她又忘记了一些事。比如小学教室的座位，比如某年夏天的蝉鸣。
但「想回去」三个字还在。她朝着更高的黑暗，继续往上走。` },
  },
  cyber: {
    intro: { title: '数据残响 · 序', text: `青蓝色的流域里，残响们行走时身上淌着乱码。
这里死于一次永远正确的迭代——正确到再也没有人需要醒来。
废墟深处，澪奈捡到一部旧手机。屏幕碎了，草稿箱还亮着。
里面躺着一条没发出去的消息：「如果迷路了，就往有光的地方走。」
她把手机贴身收好。某个世界的某个人，也曾这样惦记着回家。` },
    boss: { title: '数据残响 · 守望者', text: `根目录的最深处，所有乱码归于寂静。
守望者端坐在一片空白里，像一行等待执行的指令。
「检索：第一千四百三十九个来访者。」它说，「结论：没有归还的记录。」
「你们的系统漏了一项。」澪奈说。
「哦？」「总有人，不肯注销。」` },
    clear: { title: '数据残响 · 之后', text: `守望者散成漫天碎光，像一场安静下完的电子雪。
碎光落地之前，都闪出同一行小字：「再见，使用者。」
澪奈把那部旧手机留在最高的废墟上，屏幕朝着天，草稿箱开着。
她花掉了一段记忆当作路费——是回家那条路上，第三盏路灯的颜色。
下一层天在头顶发烫。她最后看了一眼那行字，转身走了。` },
  },
  ember: {
    intro: { title: '熔核深渊 · 序', text: `热浪贴着脸滚过来，像贴着一颗将熄的心脏。
这里的宇宙把星球烧成了灰，又试图烧掉灰烬取暖。
记忆在这里是柴火。每打出一张牌，就有什么东西在她脑海里蜷起来，烧成一小撮温热的灰。
她捧起一撮灰，里面有一粒没烧完的种子。
她把它埋进天幕的裂缝里：「你替我在这儿活着，我还要赶路。」` },
    boss: { title: '熔核深渊 · 守望者', text: `熔核的心跳越来越慢，慢得像在等她。
守望者立在岩浆中央，火光也烧不穿它身上的静。
「第一千四百三十九个。」它拨着棋子，「灰烬里最暖和，所以没有人肯离开。」
澪奈的掌心全是汗。她想起的最后一个画面，是自家窗台上的晨光。
「暖和的地方留不住我。」她说，「我只是来借个火，照照前面的路。」` },
    clear: { title: '熔核深渊 · 之后', text: `深渊的火矮了下去，只剩一层均匀的、暗红的呼吸。
澪奈路过那条裂缝，种子还没有发芽。她还是停下来看了一眼。
「不急。」她对裂缝说，「等我到家了，你再开也行。」
烧掉的记忆回不来了。她开始忘记一些街道的名字。
风从更高的地方吹下来，带着霜的味道。她裹紧衣服，向上走去。` },
  },
  frost: {
    intro: { title: '星霜回廊 · 序', text: `时间在这里冻住了。举杯的、拥抱的、回头张望的，都停在最后一秒。
澪奈踮着脚从他们中间穿过去，不敢碰任何人。
一个小女孩的残响举着纸风车，风车的蓝，停得刚刚好。
澪奈试着在霜上写下自己的名字——笔迹，已经开始陌生了。
「还没忘干净。」她呵了口气，把字迹抹掉，「趁还记得，快走。」` },
    boss: { title: '星霜回廊 · 守望者', text: `回廊的尽头，霜结成了王座的形状。
守望者坐在冻结的时间里，声音落得很慢，像雪。
「第一千四百三十九个。」它说，「冷到极处是暖的，所以没有人舍得走。」
澪奈呵出一口白气，看着它散开。
「那是因为他们没试过，」她说，「在最冷的地方，睁着眼睛赶路。」` },
    clear: { title: '星霜回廊 · 之后', text: `霜裂开细纹，冻结的拥抱轻轻松了一寸，又停住。
澪奈对着举风车的小女孩鞠了一躬：「对不起啊，我不能替你转它。」
她又花掉了一段记忆。这次是什么，她自己也说不上来了。
「说不上来也好。」她笑了，「只要还记得方向就行。」
回廊之上飘来花香。她循着那点甜，走进了下一片天。` },
  },
  dream: {
    intro: { title: '幽梦庭园 · 序', text: `庭园里开满谎言的花，摘一朵闻闻，就能梦见最想要的时刻。
花丛深处，走出一个和澪奈一模一样的身影——只是更透明，眼睛里没有光。
「我是你接受死亡的那部分。」另一个澪奈说，「你走你的，我收着你花掉的记忆。」
「那……我的家呢？」澪奈问，「它的样子，我快拼不完整了。」
「在我这里。」回声指了指自己的胸口，「等你走不动了，就来把它领回去。」` },
    boss: { title: '幽梦庭园 · 守望者', text: `庭园的最深处，花落得无声无息。
守望者站在两个澪奈之间，看看这个，又看看那个。
「第一千四百三十九个。」它说，「梦里什么都有，所以没有人愿意醒着走。」
回声轻声说：「走吧。过了这一战，门就不远了。」
澪奈点点头，和她并肩站定：「说好了——谁也不许先消失。」` },
    clear: { title: '幽梦庭园 · 之后', text: `花落尽了，庭园露出它本来的样子：安静的、空空的一大片。
回声把一小段记忆还给澪奈——家门口那条街，傍晚的橙色。她忽然想起来了。
「剩下的呢？」「剩下的，等你站在门前，再一起还你。」
两个澪奈背靠着背坐了一会儿。雷声从很远的地方滚过来。
「最后一界了。」回声说。澪奈站起来：「走吧，去听雷。」` },
  },
  storm: {
    intro: { title: '雷鸣废土 · 序', text: `雷声一万遍地响，还没有吵完。
这里的宇宙死于一场不肯停的争吵，天被震碎成永远循环的电光。
守望者的低语夹在雷声的缝隙里：「一千四百三十……三十七……三十八……」
数字越来越近，像在替她数着剩下的路。
澪奈迎着电光抬起头：「别数了。下一个数，会不一样。」` },
    boss: { title: '雷鸣废土 · 守望者', text: `雷在头顶熄了一瞬。整个废土安静下来，安静得能听见棋子的声音。
守望者抬起头，身后就是那面磨砂的天——膜上亿万光点，缓缓流动。
「第一千四百三十九个。」它说，「一千四百三十八个人在这里停了下来。没有一个回去。」
门后传来她世界的声音：雨、电车、远处隐约的市井人声。
澪奈的眼眶热了一下，可她站得很直：「听见了。正因为听见了，才轮到我赢你。」` },
    clear: { title: '雷鸣废土 · 之后', text: `雷声低下去，变成很远很远的、缓慢的鼓点。
守望者把棋子拢进掌心：「雷停的时候，连它也会想安静一会儿。」
澪奈抬头，磨砂的天幕上映着亿万粒光，像一场不会落地的星。
她又花掉了一段记忆。这次她没有回头清点——回声在她身后，替她收着呢。
微光从更高的地方漏下来。她迎着那点光，继续往上。` },
  },
};

const WORLD_LAYER_LORE = {
  void: [
    '磨砂的天幕下，澪奈数了数自己的影子——还是两个。',
    '残响们远远地看着她，像看着一件丢失很久的东西。',
    '虚空不杀人。它只是不再阻止你忘记。',
    '界膜的轮廓隐约可见，像一面望不到边的磨砂的天。',
    '守望者在门后等她。她把卡组理了一遍，像整理仅剩的全部。',
  ],
  cyber: [
    '乱码顺着残响的手臂淌下来，落进虚无，无声无息。',
    '一行代码反复刷新着：「再见，使用者。」',
    '旧手机的草稿箱还亮着，像这个宇宙不肯合上的眼睛。',
    '数据流深处，有什么东西在轻轻哼一首跑调的歌。',
    '根目录就在眼前。所有的路，都指向同一个出口。',
  ],
  ember: [
    '灰烬落在肩上，还是温的。',
    '熔核的心跳隔着地壳传上来，咚，咚，越来越慢。',
    '记忆在这里烧得特别快。她学会了省着用。',
    '裂缝深处，那粒种子安静地躺着，像一句没说完的话。',
    '火光最盛处，守望者等着她——也等着自己的熄灭。',
  ],
  frost: [
    '霜花在玻璃似的地面上开得很慢，慢过一个世纪。',
    '冻住的拥抱还没有松开。她放轻了脚步。',
    '霜上写下的名字，笔迹越来越陌生。',
    '举风车的小女孩保持着那个姿势，蓝得刚刚好。',
    '回廊尽头结着霜的王座。时间在那里，等着被解冻。',
  ],
  dream: [
    '花香是甜的，甜得像一句谎言。',
    '回声走在她身边，谁也没有说话。',
    '摘一朵花就能做梦。她把花别在耳边，忍住了没闻。',
    '「你忘记的那些，我都替你收着。」回声说。',
    '庭园深处花落无声。两个澪奈，走向同一扇门。',
  ],
  storm: [
    '电光落进积水的洼地，溅起一朵一朵亮的。',
    '雷声的缝隙里，计数声越来越近。',
    '废土上的风都是烫的，带着电离的味道。',
    '「一千四百三十八。」低语说，「没有一个回去。」',
    '磨砂的天就在眼前。亿万光点，静静流淌。',
  ],
};

const STORY_ENDING = { title: '终章 · 门后', text: `战斗结束的时候，守望者没有倒下。
它只是把手里最后那粒光的棋子，轻轻放回了棋盘上。
「第一千四百三十九个。」它说，「按规矩，门是你的了。」
门开了。里面没有幻象，也没有回声——只有一条很普通的、雨刚停的街道，清晨的光落在湿漉漉的路面上。
澪奈站在门口，没有立刻走进去。她先回了头。
六界在她脚下安静地铺开：数据的雪、熔核的灰、冻住的拥抱、落尽的花、远去的雷。残响们明明灭灭，像一路送她的灯。
回声站在那片光里，朝她挥手。
「你花掉的记忆，我都替你收着。」回声说，「你带走的那部分，替我好好活着。」
「我会的。」澪奈说，「讲到一半的故事，总得有人把它讲完。」
她转过身，走进了门里。
路口。信号灯变绿。她跑过斑马线——这一次，没有光，没有坠落。
那天晚上，她做了一个梦：磨砂的天幕下，守望者拨着棋子，轻声地数——
「第一千四百三十九个。她回去了。」
—— Re:EthePath · 终 ——` };

const STORY_DEATH = { title: '终章 · 消散', text: `澪奈倒下的时候，没有疼。
她只是忽然觉得很轻，像一片往深水里落的叶子。记忆从身体里一片一片地剥离出去：熔核的灰、冻住的拥抱、门后那条雨停的街道……它们散在她周围，像一场逆着下的雪。
「就到这里了吗。」她想，「明明已经能看见门了。」
黑暗合拢过来。在完全黑掉之前，她听见了很多声音。
举纸风车的小女孩说：「姐姐，别怕黑呀。」
数据的残响说：「再见，使用者——明天见，使用者。」
守望者说：「你的数，我给你留着。」
最后，是另一个她自己，穿过所有的黑暗走过来，蹲下身，把她散掉的记忆一片一片拢回她的胸口，像给睡着的人掖被角。
「路还认得，别想丢下我。」那个声音说，「起来。再来一次。」
澪奈猛地睁开眼。
磨砂的天幕，永恒的微光，两个影子。一切都还在，一切又都从头开始。她不记得自己死过多少次了，只有一些模糊的温度留在掌心——像记得，又像不记得。
她按了按胸口。想回去的念头，还在。
「好。」她对着空无一人的虚无之间说，像对着一万个等着她的宇宙说，
「再来一次。」` };

// 全屏沉浸剧情层: 标题定格 → 逐句逐字推进, 点击补全/下一句, 可跳过
// 支持合篇: showStory([st1, st2], then) —— 同一覆盖层内播完前篇, 经节转场(白闪一拍+题字换节+「✦」插页)接后篇, 只出一次「继续」
// st 可带 onEnter: 该节成为当前节时触发(跳过/快进到结尾也会兜底触发, 用于世界切换等状态钩子)
function showStory(st, then) {
  window._afterStory = then;
  BGM.playTrack('battle');   // 剧情期间保持游戏内 BGM(同轨调用为空转, 不会反复横跳)
  const parts = Array.isArray(st) ? st : [st];
  const dk = hexA => {   // 世界色转暗(各通道×0.22)
    const n = parseInt(hexA.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.22 | 0) + ',' + ((n >> 8 & 255) * 0.22 | 0) + ',' + ((n & 255) * 0.22 | 0) + ')';
  };
  const fx = document.createElement('div');
  fx.className = 'story-fx';
  let dust = '';
  for (let i = 0; i < 8; i++)
    dust += '<i style="left:' + (4 + Math.random() * 92).toFixed(1) + '%;bottom:-2%;' +
      'animation-duration:' + (7 + Math.random() * 8).toFixed(1) + 's;animation-delay:' + (Math.random() * 7).toFixed(1) + 's"></i>';
  fx.innerHTML =
    '<div class="st-veil"></div>' +
    '<div class="st-glow g1"></div>' +
    '<div class="st-glow g2"></div>' +
    '<div class="st-dust">' + dust + '</div>' +
    '<div class="st-flash"></div>' +
    '<div class="st-bar top"></div><div class="st-bar bot"></div>' +
    '<div class="st-title"></div>' +
    '<div class="st-stage"></div>' +
    '<button class="st-skip">跳过 ▸▸</button>' +
    '<button class="st-go">继续</button>';
  document.body.appendChild(fx);

  const veil = fx.querySelector('.st-veil');
  const glow1 = fx.querySelector('.st-glow.g1'), glow2 = fx.querySelector('.st-glow.g2');
  const titleEl = fx.querySelector('.st-title');
  const stage = fx.querySelector('.st-stage');
  const skipBtn = fx.querySelector('.st-skip');
  const goBtn = fx.querySelector('.st-go');
  function paintTheme() {   // 节切换时可随新世界换纱幕配色
    if (!veil || !veil.style) return;
    veil.style.background = 'linear-gradient(168deg,' + dk(BGPAL.grad[0]) + ' 0%,' + dk(BGPAL.grad[1]) + ' 52%,' + dk(BGPAL.grad[2]) + ' 100%)';
    glow1.style.background = 'radial-gradient(circle,rgba(' + BGPAL.beam + ',0.16),transparent 62%)';
    glow2.style.background = 'radial-gradient(circle,rgba(' + BGPAL.beam + ',0.12),transparent 60%)';
  }
  paintTheme();
  titleEl.textContent = parts[0].title;

  let part = 0, idx = -1, curLine = null, lineDone = false, inSect = false, finished = false;   // lineDone 初始 false: 标题动画/首行挂载前点击不抢跑(踩过: 标题未定格就跳出正文)
  let paras = parts[0].text.split('\n').filter(p => p.trim());
  function enterPart(p) {   // 节钩子(幂等)
    if (parts[p] && parts[p].onEnter) { const f = parts[p].onEnter; parts[p].onEnter = null; f(); }
  }
  enterPart(0);

  function showLine(i) {
    idx = i;
    if (curLine) { curLine.classList.add('bye'); const old = curLine; setTimeout(() => old.remove(), 320); }
    const line = document.createElement('div');
    line.className = 'st-line';
    line.innerHTML = paras[i].split('').map((ch, ci) =>
      '<span style="--ci:' + ci + '">' + (ch === ' ' ? '&nbsp;' : ch) + '</span>').join('');
    stage.appendChild(line);
    curLine = line;
    lineDone = false;
    requestAnimationFrame(() => requestAnimationFrame(() => line.classList.add('go')));
    setTimeout(() => {
      lineDone = true;
      if (curLine === line) line.classList.add('done');   // 放完标记: 尾光轻亮, 提示可点下一句
      if (part === parts.length - 1 && idx === paras.length - 1 && !finished) goBtn.classList.add('show');
    }, Math.min(paras[i].length * 60, 1500) + 420);
  }
  function sectionBreak() {   // 节转场: 白闪一拍 + 题字换节 + 「✦」插页
    part++;
    inSect = true;
    fx.classList.add('sect');
    setTimeout(() => fx.classList.remove('sect'), 520);
    if (curLine) { curLine.classList.add('bye'); const old = curLine; setTimeout(() => old.remove(), 320); }
    curLine = null;
    titleEl.classList.add('swap');
    setTimeout(() => { titleEl.textContent = parts[part].title; titleEl.classList.remove('swap'); }, 300);
    enterPart(part);   // 状态钩子先于纱幕换色
    paintTheme();
    paras = parts[part].text.split('\n').filter(p => p.trim());
    idx = -1;
    const sect = document.createElement('div');
    sect.className = 'st-line st-sect go';
    sect.textContent = '✦';
    stage.appendChild(sect);
    curLine = sect;
    lineDone = false;   // v17.0: 插页同样不可抢点, 停留片刻自动进下文
    setTimeout(() => { if (inSect && !finished) { inSect = false; lineDone = true; sSelect(); showLine(0); } }, 1200);
  }
  function advance() {
    if (finished) return;
    // v17.0: 逐字动画必须放完——放完前点击不推进不补全, 仅极轻微的"未放完"下沉提示
    if (inSect || !lineDone) {
      if (curLine && curLine.classList) {
        curLine.classList.remove('wait');
        void curLine.offsetWidth;
        curLine.classList.add('wait');
      }
      return;
    }
    if (idx < paras.length - 1) { sSelect(); showLine(idx + 1); }
    else if (part < parts.length - 1) { sSelect(); sectionBreak(); }
  }
  function finish() {
    if (finished) return;
    finished = true;
    for (let p = part; p < parts.length; p++) enterPart(p);   // 跳过也要把后续节的 onEnter 跑掉(状态钩子)
    fx.classList.add('out');
    setTimeout(() => {   // v18.0: 等纱幕淡出彻底结束再回调, 下一层文字演出不叠影(0.5s veil 过渡 + 余量)
      fx.remove();
      window._storyFinish = null;
      const f = window._afterStory;
      window._afterStory = null;
      if (f) f();
    }, 660);
  }
  fx.addEventListener('click', advance);
  skipBtn.addEventListener('click', e => { e.stopPropagation(); sClick(); finish(); });
  goBtn.addEventListener('click', e => { e.stopPropagation(); sClick(); finish(); });
  window._storyFinish = finish;

  requestAnimationFrame(() => fx.classList.add('go'));
  setTimeout(() => { titleEl.classList.add('set'); }, 1500);   // 标题定格上移
  setTimeout(() => showLine(0), 1900);
}
function storyContinue() {   // 兼容: 直接跳过当前剧情层
  if (window._storyFinish) { const f = window._storyFinish; window._storyFinish = null; f(); return; }
  const f = window._afterStory;
  window._afterStory = null;
  if (f) f();
}

// 抵达 Boss 节点时先读本章(每世界一次)
function layerStory(key, then) {   // key: 世界 key
  if (run._storyShown === key) { then(); return; }
  run._storyShown = key;
  showStory(WORLD_STORIES[key].boss, then);
}

// ================= 卡牌分组(普通组/技能组/大招组) =================
// 大招组: 打出后本场战斗消散(每场限一次的爆发)
const ULT_CARDS = ['界核重击', '灭界一击', '处刑宣告', '雷界崩落', '献祭',
  '万象终焉', '终焉回响', '以太湮灭', '神罚', '万界裂解', '燃命之怒', '永昼斩', '噬月'];
const GRP_NAME = { n: '普通组', s: '技能组', u: '大招组' };
function cardGrp(c) {
  if (ULT_CARDS.includes(c.name)) return 'u';
  return c.type === 'attack' ? 'n' : 's';
}

// ================= 忆词(咏唱文案, 一两字诗意短词) =================
const CHANTS = {
  // ---- 大招组(full 全屏咏唱) ----
  '界核重击': ['碎界'],
  '灭界一击': ['寂灭'],
  '处刑宣告': ['终判'],
  '雷界崩落': ['雷葬'],
  '献祭':    ['奉还'],
  '万象终焉': ['熄', '万籁', '诸界同寂', '终焉'],
  '终焉回响': ['寂', '余音', '万物绝响', '绝响'],
  '以太湮灭': ['蚀', '光尽', '万物归虚', '湮灭'],
  '神罚':    ['诫', '天倾', '神怒临渊', '天罚'],
  '万界裂解': ['裂', '界崩', '万界倾解', '裂世'],
  '燃命之怒': ['灼', '焚心', '以命为薪', '燃命'],
  '永昼斩':  ['曜', '炽白', '白昼无尽', '永昼'],
  '噬月':    ['蚀', '吞月', '月陨星沉', '噬月'],
  // ---- 技能组(short 短咏唱) ----
  '不死鸟':   ['更生'],
  '绝对防御': ['铁壁'],
  '未来视':   ['预见'],
  '战斗记忆': ['铭刻'],
  '澪奈的决意': ['立', '不坠', '向光而行', '决意'],
  '澪奈的执念': ['念', '不忘', '穿越虚无', '执念'],
  '命运重构': ['断', '抽丝', '命轨重织', '重构'],
  '命运丝线': ['牵', '引线', '万缕归一', '牵丝'],
  '黎明觉醒': ['晓', '破夜', '晨光初醒', '黎明'],
  '以太涌流': ['涌流'],
  '过载充能': ['过载'],
  '时空裂隙': ['裂隙'],
  '以太炉心': ['燃', '聚焰', '心如烘炉', '炉心'],
  '万毒之源': ['蚀', '蚀骨', '万毒归源', '毒源'],
  '不灭':     ['立', '不折', '此身不灭', '不灭'],
  '弑神者':   ['刃', '弑光', '神座崩落', '弑神'],
  '生命契约': ['契', '以血', '魂命相抵', '血契'],
  '永夜君主': ['暮', '坠星', '长夜加冕', '永夜'],
  '荆棘王座': ['棘', '加冕', '荆棘为座', '王座'],
  '双子星':   ['双', '共生', '双星同耀', '双子'],
  '雷鸣神核': ['霆', '惊雷', '万雷归核', '雷鸣'],
  '奇点':     ['聚', '临界', '万象归一', '奇点'],
  '精灵祝福': ['祝福'],
  '侵蚀之雾': ['蚀雾'],
  '镜面反姿': ['镜返'],
  // ---- 幻忆补全 ----
  '星尘旋斩': ['星尘'],
  '终焉处决': ['处决'],
  '虚无爆裂': ['爆裂'],
  '虚无洪流': ['洪流'],
  '蚀心咒':   ['蚀心'],
  '弃牌风暴': ['风暴'],
  '屏障冲击': ['冲障'],
  '蚀骨潮':   ['蚀骨'],
  '棘牙':     ['棘牙'],
  '万剑归潮': ['归潮'],
  '辉昼盾':   ['辉昼'],
  '梦甲':     ['梦甲'],
  '以太暴走': ['暴走'],
  '星棘护甲': ['星棘'],
  '循环记忆': ['循环'],
  '吸血獠牙': ['獠牙'],
  '巨人猎手': ['猎巨'],
  '双重奏':   ['双奏'],
  '毒经':     ['毒经'],
  '界域行者': ['行者'],
  '梦貘':     ['梦貘'],
  // ---- 普通组重击(micro 一词一闪) ----
  '坠星重击': ['坠星'],
  '残月击':   ['残月'],
  '断界重劈': ['断界'],
  '陨铁拳':   ['陨铁'],
  '裂解重锤': ['裂解'],
  '星雨坠落': ['星雨'],
};
const CHANT_GENERIC_S = ['忆起'];
function chantLevel(card) {
  const g = cardGrp(card);
  if (g === 'u') return 'full';          // 大招: 全屏咏唱
  if (CHANTS[card.name]) return 'full';  // 有专属忆词的卡: 同为全屏(节奏稍紧凑)
  return null;                           // 其余不特写
}
function chantLines(card) {
  if (CHANTS[card.name]) return CHANTS[card.name];
  return CHANT_GENERIC_S;
}

const STARTER = ['碎光刺', '碎光刺', '坠星重击', '微光屏障', '微光屏障', '微光刃'];
const RANDOM_PICKS = 5;

// ================= 节点 =================
const NODE_NAME = { battle: '残响', elite: '凶残响', shop: '以太商队', event: '虚空异象', rest: '回响锚点', boss: '界膜守望者' };
const NODE_ICON = { battle: '⚔', elite: '☠', shop: '◈', event: '？', rest: '✦', boss: '♦' };
const INTENT_CYCLE = ['attack', 'charge', 'attack', 'curse', 'defend'];
const BOSS_CYCLE   = ['attack', 'charge', 'curse', 'defend', 'attack'];

// ================= 敌人种类(15 种行为模板) =================
// tag=名字后缀; hpM=血量倍率; dmgA=攻击增减; 其余为行为特效
const ENEMY_SPECIES = [
  { tag: '常', hpM: 1.0,  dmgA: 0 },                                                            // 标准残响
  { tag: '壳', hpM: 1.3,  dmgA: -1, startBlock: 8 },                                            // 壳卫: 开场凝壳
  { tag: '迅', hpM: 0.7,  dmgA: 1, cycle: ['attack', 'attack', 'defend', 'attack', 'curse'] },  // 迅影: 快而脆
  { tag: '蚀', hpM: 0.9,  dmgA: -1, onHitDot: 1, cycle: ['attack', 'curse', 'attack', 'attack', 'defend'] },   // 蚀虫: 命中附加蚀毒直伤
  { tag: '裂', hpM: 1.0,  dmgA: 0, onHitVuln: 1 },                                              // 裂喙: 命中上裂解
  { tag: '衰', hpM: 0.95, dmgA: -1, onHitWeak: 1 },                                             // 衰灵: 命中上衰微
  { tag: '狂', hpM: 0.85, dmgA: 0, growth: 3 },                                                 // 狂核: 成长×3
  { tag: '愈', hpM: 1.0,  dmgA: -2, healTurn: 4 },                                              // 聚灵: 每回响治疗友军
  { tag: '刃', hpM: 0.6,  dmgA: 2, growth: 2, cycle: ['attack', 'attack', 'charge', 'attack', 'defend'] },     // 影刃: 玻璃大炮
  { tag: '雷', hpM: 1.0,  dmgA: 1, cycle: ['charge', 'attack', 'charge', 'attack', 'attack'] }, // 雷灵: 蓄力连爆
  { tag: '镜', hpM: 1.1,  dmgA: -1, thorns: 1 },                                                // 镜灵: 受击反弹
  { tag: '汲', hpM: 0.9,  dmgA: 0, drain: 1 },                                                  // 吞光: 命中汲取以太
  { tag: '殉', hpM: 0.8,  dmgA: 0, deathDmg: 6 },                                               // 殉爆: 死亡自爆
  { tag: '钟', hpM: 1.6,  dmgA: 2, growth: 0, cycle: ['defend', 'charge', 'attack', 'defend', 'curse'] },      // 沉钟: 巨血慢拳
  { tag: '织', hpM: 0.95, dmgA: 0, onHitVuln: 1, onHitWeak: 1, cycle: ['curse', 'attack', 'curse', 'attack', 'defend'] },   // 织咒: 双减益
];

// ================= 存档 =================
function loadJSON(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
function saveJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

const SETTINGS = Object.assign({ sfx: true, shake: true, fx: true, dn: true, chant: true, bgm: true, cursor: true }, loadJSON('re_settings_v3', {}));   // v19.0: 音效默认开(v3 强制重置, 新玩家直接有声)
function saveSettings() { saveJSON('re_settings_v3', SETTINGS); }

let META = loadJSON('re_meta', null) || { frags: 0, unlocked: [] };
META.unlocked = Array.from(new Set([...CARD_POOL.slice(0, BASE_COUNT).map(c => c.name), ...(META.unlocked || [])]));
META.worlds = META.worlds || ['void'];   // 世界解锁链(固定 WORLDS 序): 击败第 i 界守望者解锁第 i+1 界
if (!META.worlds.includes('void')) META.worlds.unshift('void');
function isWorldUnlocked(key) { return META.worlds.includes(key); }
function saveMeta() { saveJSON('re_meta', META); }
function isUnlocked(name) { return META.unlocked.includes(name); }

// ================= 全局状态 =================
const run = {
  world: 'void', worldOrder: null, worldIdx: 0, depthScale: 1,
  hp: 50, maxHp: 50, crystals: 40,
  deck: [], map: null, pos: { l: -1, i: 0 }, _nextPos: null,
  shopStock: null, shopKey: '', shopRemoveUsed: false, shopHealUsed: false,
  _rewardOpts: null, _event: null, _removeMode: false,
};

const state = {
  started: false, gameOver: false, busy: false, paused: false,
  nodeType: 'battle',
  turn: 1,
  hp: 50, maxHp: 50,
  block: 0, keepBlock: false,
  energy: 3, maxEnergy: 3, energyNext: 0,
  strength: 0, thorns: 0, leech: 0,
  pVuln: 0, pWeak: 0,
  powers: {}, resonance: [], flurryUsed: false, doubleNext: false, _dfUsed: false,
  playedThisTurn: 0, buff: 1,
  enemies: [], target: 0,
  dayNight: 'day', dnTimer: 3, _nightHappened: false,
  deck: [], hand: [], discard: [], exhaustPile: [],
  pulse: 0, shake: 0, playerFlash: 0,
  hitstop: 0, kickX: 0, kickY: 0, zoomK: 0,
  particles: [],
  focus: 0,
  _seenCards: new Set(), _dealSeq: 0,
};

const EK = { enemyHp: 'hp', enemyMaxHp: 'maxHp', enemyBlock: 'block', enemyDmg: 'dmg', ePoison: 'poison', eVuln: 'vuln', eWeak: 'weak' };
function curEnemy() {
  return state.enemies.find(e => e.alive && e.idx === state.target) || state.enemies.find(e => e.alive) || null;
}
for (const k in EK) {
  Object.defineProperty(state, k, {
    get() { const e = curEnemy(); return e ? e[EK[k]] : 0; },
    set(v) { const e = curEnemy(); if (e) e[EK[k]] = v; },
    configurable: true,
  });
}

// ================= 音频系统(v6 全重写) =================
const AU = {
  ctx: null, master: null, _nb: null,
  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.72;
    this.master.connect(this.ctx.destination);
    const wake = () => { if (this.ctx.state !== 'running') this.ctx.resume(); };
    ['pointerdown', 'keydown', 'touchstart'].forEach(e => document.addEventListener(e, wake, true));
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.ctx.state !== 'running') this.ctx.resume();
    });
  },
  ok() { return this.ctx && this.ctx.state === 'running' && SETTINGS.sfx; },
  t(delay) { return this.ctx.currentTime + 0.03 + (delay || 0) / 1000; },
  tone(type, f0, f1, dur, vol, delay) {
    if (!this.ok()) return;
    const t = this.t(delay);
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1) o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.master);
    o.start(t); o.stop(t + dur + 0.03);
  },
  noise(dur, vol, type, f0, f1, q, delay) {
    if (!this.ok()) return;
    const t = this.t(delay);
    if (!this._nb) {
      this._nb = this.ctx.createBuffer(1, this.ctx.sampleRate, this.ctx.sampleRate);
      const d = this._nb.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    const s = this.ctx.createBufferSource();
    s.buffer = this._nb; s.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = type || 'bandpass';
    f.frequency.setValueAtTime(f0, t);
    if (f1) f.frequency.exponentialRampToValueAtTime(Math.max(10, f1), t + dur);
    f.Q.value = q || 1;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.master);
    s.start(t); s.stop(t + dur + 0.03);
  },
};

// ================= 拟音配方(水晶系音色) =================
function sHover()  { AU.tone('sine', 1400, 1700, 0.035, 0.045); }
function sSelect() {
  AU.tone('sine', 1568, 1568, 0.04, 0.08);
  AU.tone('sine', 2093, 2093, 0.05, 0.055, 45);
}
function sClick() {
  AU.tone('sine', 660, 990, 0.055, 0.14);
  AU.tone('sine', 1320, 1320, 0.04, 0.05, 35);
}
function sCardPlay() {
  AU.noise(0.038, 0.5, 'bandpass', 2600, 1100, 1.3);
  AU.tone('sine', 340, 95, 0.075, 0.42);
}
function sSlash(p) {
  p = p || 1;
  AU.noise(0.09, 0.32, 'bandpass', 5200 * p, 1400 * p, 1.2);
  AU.tone('triangle', 2600 * p, 900 * p, 0.06, 0.1);
  sGlass(0.35);
}
function sHit() {
  AU.tone('sine', 140, 42, 0.18, 0.65);
  AU.noise(0.035, 0.3, 'bandpass', 2600, 1100, 1.1);
  sGlass(0.7);
}
function sExplode() {
  AU.tone('sine', 100, 30, 0.42, 0.6);
  AU.noise(0.35, 0.4, 'lowpass', 2400, 200, 0.8);
  AU.noise(0.06, 0.18, 'highpass', 5000, 6000, 1);
  sGlass(1.4, 25);
}
// ---- 咏唱演出音(长音效) ----
function sChantDrone(dur) {   // 低频氛围长鸣
  AU.tone('sine', 55, 46, dur, 0.2);
  AU.tone('sine', 110, 96, dur, 0.09);
  AU.tone('triangle', 165, 224, dur, 0.05, 150);
}

// ================= BGM(AudioBuffer 引擎, file:// 友好) =================
// base64 内嵌(bgm_data.js) → decodeAudioData → BufferSource → GainNode(交叉淡入淡出) → AnalyserNode → destination
// 不受媒体跨源限制, file:// 双击即玩也能拿到真实频谱; 无手势时静默等解锁(浏览器自动播放策略)
const BGM = {
  bufs: {}, loading: {}, nodes: {}, cur: null,
  VOL: 0.18, _fades: {},
  ensureCtx() { AU.init(); return AU.ctx; },
  decode(k) {   // base64 → AudioBuffer(挂起态 ctx 也能 decode)
    if (this.bufs[k]) return Promise.resolve(this.bufs[k]);
    if (this.loading[k]) return this.loading[k];
    if (typeof BGM_DATA === 'undefined' || !BGM_DATA[k]) return Promise.resolve(null);   // 无头/未内嵌
    if (typeof atob !== 'function') return Promise.resolve(null);
    const ctx = AU.ctx;
    if (!ctx || typeof ctx.decodeAudioData !== 'function') return Promise.resolve(null);   // 无头桩
    this.loading[k] = (async () => {
      const bin = atob(BGM_DATA[k]);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      const buf = await ctx.decodeAudioData(bytes.buffer.slice(0));
      this.bufs[k] = buf;
      return buf;
    })().catch(e => { console.warn('[BGM] 解码失败', k, e); return null; });
    return this.loading[k];
  },
  stopNode(k) {
    const nd = this.nodes[k];
    if (!nd) return;
    try { nd.src.stop(); } catch (e) {}
    try { nd.src.disconnect(); nd.gain.disconnect(); } catch (e) {}
    delete this.nodes[k];
  },
  startNode(k) {   // 从头起一条 source(AudioBuffer 不能续播, 换轨/恢复都从头)
    this.stopNode(k);
    const ctx = AU.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.bufs[k];
    src.loop = true;
    const g = ctx.createGain();
    g.gain.value = 0;
    src.connect(g);
    g.connect(VIZ.analyser || ctx.destination);   // 有 analyser 走分析链, 没有直出
    src.start(0, 0);
    this.nodes[k] = { src, gain: g };
    VIZ._zero = 0;   // v18.9: 新轨起播, 清零全零计数(自愈配合)
    g.gain.linearRampToValueAtTime(this.VOL, ctx.currentTime + 0.8);   // 淡入 800ms
  },
  fadeOut(k, ms) {
    const nd = this.nodes[k];
    if (!nd) return;
    const ctx = AU.ctx;
    nd.gain.gain.cancelScheduledValues(ctx.currentTime);
    nd.gain.gain.setValueAtTime(nd.gain.gain.value, ctx.currentTime);
    nd.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + ms / 1000);   // 淡出 550ms
    setTimeout(() => this.stopNode(k), ms + 60);
  },
  playTrack(k) {
    if (!SETTINGS.bgm) { this.cur = k; return; }   // 关 bgm 也记轨, 开时恢复
    if (!this.ensureCtx()) { this.cur = k; return; }   // 无手势: 静默等全局解锁
    if (this.cur === k && this.nodes[k]) return;   // 同轨在播: 纯空转, 进度不重置
    if (AU.ctx.state !== 'running') { try { AU.ctx.resume(); } catch (e) {} }
    this.cur = k;
    for (const key of Object.keys(this.nodes)) if (key !== k) this.fadeOut(key, 550);
    this.decode(k).then(buf => {
      if (!buf || this.cur !== k || !SETTINGS.bgm) return;
      if (this.nodes[k]) return;   // 解码期间同轨已起: 不重启
      this.startNode(k);   // 换轨/恢复: 新 source 从 0 开始
    });
  },
  play() { this.playTrack('menu'); },
  unpause() { if (this.cur) this.playTrack(this.cur); },   // AudioBuffer 不能续播, 从头
  stop() { for (const k of Object.keys(this.nodes)) this.fadeOut(k, 500); },
};
// ================= 音频可视化(真实频谱优先, 模拟兜底) =================
// 信号链: BufferSource → trackGain → AnalyserNode → ctx.destination; decodeAudioData 不受跨源限制, file:// 全真
const VIZ = {
  analyser: null, buf: null, smooth: [],
  fallback: false, _zero: 0, env: 0, peak: 0,
  tilt(i) {   // 频谱滚降补偿(两首 BGM 实测拟合): 压低频抬高频
    const c = 0.28 * Math.pow(1.03, i);
    return c < 0.25 ? 0.25 : c > 5 ? 5 : c;
  },
  ensureAnalyser() {   // 首次手势后建(挂在 AU.init 之后)
    if (this.analyser || !AU.ctx || typeof AU.ctx.createAnalyser !== 'function') return;
    try {
      const an = AU.ctx.createAnalyser();
      an.fftSize = 256;
      an.smoothingTimeConstant = 0.72;
      an.connect(AU.ctx.destination);
      this.analyser = an;
      this.buf = new Uint8Array(an.frequencyBinCount);
      for (const k in BGM.nodes) {   // v18.9: 已直出 destination 的旧轨改挂分析链(否则永远读零 → 误锁模拟)
        const nd = BGM.nodes[k];
        try { nd.gain.disconnect(); nd.gain.connect(an); } catch (e) {}
      }
      this.fallback = false; this._zero = 0;
      console.info('[VIZ] 真实频谱已接管');
    } catch (e) { console.warn('[VIZ] 接管失败, 律动走模拟', e); }
  },
  read(n) {
    if (this.analyser) {
      const nd = BGM.cur && BGM.nodes[BGM.cur];
      const playing = SETTINGS.bgm && nd && nd.gain.gain.value > 0.05;
      this.analyser.getByteFrequencyData(this.buf);
      let sum = 0;
      for (let i = 0; i < this.buf.length; i++) sum += this.buf[i];
      if (this.fallback && sum > 600) {   // v18.9: 自愈——换轨/重路由后数据回来了就解除锁死(此前一旦回退永不恢复)
        this.fallback = false; this._zero = 0;
        console.info('[VIZ] 频谱恢复, 回到真实律动');
      }
      if (sum === 0 && playing && !this.fallback) {   // 全零检测(解码中/异常), 回退模拟
        if (++this._zero > 90) {
          this.fallback = true;
          console.warn('[VIZ] 频谱持续全零, 回退模拟律动');
        }
      } else if (sum > 0) this._zero = 0;
      if (!this.fallback) {
        const out = new Array(n);
        const bins = this.buf.length;
        // 有效频段自动对齐(v16.2): 找有内容的最高 bin, 64 条铺满 1~peak
        // (战斗轨 3.2kHz 以上为空, 固定映射右半全死; peak 慢速平滑防抖动)
        let raw = 8;
        for (let b = 1; b < bins; b++) if (this.buf[b] > 3) raw = b;
        this.peak = this.peak ? this.peak + (raw - this.peak) * 0.03 : raw;
        const P = Math.max(8, Math.round(this.peak));
        for (let i = 0; i < n; i++) {
          const b0 = Math.min(1 + Math.floor(Math.pow(i / n, 1.45) * (P - 1)), P - 1);
          const b1 = Math.max(b0 + 1, Math.min(1 + Math.floor(Math.pow((i + 1) / n, 1.45) * (P - 1)), P));
          let s = 0;
          for (let b = b0; b <= b1; b++) s += this.buf[b];
          const v = Math.pow(s / (b1 - b0 + 1) / 255, 0.8) * 1.15 * VIZ.tilt(i);
          const pv = this.smooth[i] || 0;
          this.smooth[i] = Math.max(Math.min(1, v), pv * 0.82);   // 快攻慢衰
          out[i] = Math.max(0.05, this.smooth[i]);
        }
        return out;
      }
    }
    return vizData(n);
  },
};
function vizData(n) {   // 模拟律动兜底(常驻环境律动, 音乐起更嗨)
  const out = new Array(n).fill(0);
  const nd = BGM.cur && BGM.nodes[BGM.cur];
  const playing = SETTINGS.bgm && nd && nd.gain.gain.value > 0.02;
  const t = performance.now() / 1000;
  const tgt = playing ? 1.0 : 0.5;
  VIZ.env += (tgt - VIZ.env) * 0.04;
  const beat = playing ? 1 + 0.25 * Math.sin(t * 4.2) : 1;
  for (let i = 0; i < n; i++) {
    const base = 0.34 + 0.3 * Math.sin(t * 2.2 + i * 0.62) * Math.sin(t * 3.4 + i * 1.31) + 0.3 * Math.abs(Math.sin(t * 1.4 + i * 0.4));
    out[i] = Math.max(0.06, VIZ.env * base * beat);
  }
  return out;
}

function sChantBell(p) {      // 每句忆词的落音(钟)
  p = p || 1;
  AU.tone('sine', 622 * p, 618 * p, 1.1, 0.1);
  AU.tone('sine', 1244 * p, 1238 * p, 0.9, 0.07);
  AU.tone('sine', 1866 * p, 1860 * p, 0.7, 0.04);
}
function sChantStep(i) {      // 分段蓄势: 逐段上行的水晶音阶(五声, 正弦+三角, 低八度垫底)
  const scale = [0, 3, 5, 7, 10];
  const semis = scale[i % scale.length] + 12 * Math.floor(i / scale.length);
  const f = 392 * Math.pow(2, semis / 12);
  AU.tone('sine', f, f, 0.5, 0.1 + Math.min(i, 6) * 0.012);
  AU.tone('triangle', f * 2, f * 2, 0.38, 0.034);
  AU.tone('sine', f * 0.5, f * 0.5, 0.62, 0.05);
}
function sChantGather(i) {    // 段间蓄力: 极轻的上升收束音(粒子向心)
  const k = i || 0;
  AU.noise(0.5, 0.04, 'bandpass', 460 + k * 160, 1500 + k * 420, 2.4);
  AU.tone('sine', 220 + k * 60, 330 + k * 90, 0.42, 0.028);
}
function sChantRelease(lv) {  // 咏唱毕, 技能释放
  if (lv === 'full') {
    sExplode(); sGlass(1.6, 30);
    AU.tone('sine', 68, 28, 0.55, 0.5);
  } else if (lv === 'short') {
    sPower(); sGlass(0.9, 20);
  } else {
    sTick(1.8);
  }
}
function sSpawn(big) {        // 敌人显形: 凝聚上升 + 低鸣 + 碎晶
  AU.noise(0.5, 0.16, 'bandpass', 300, big ? 2400 : 1600, 1.2);
  AU.tone('sine', big ? 60 : 90, big ? 38 : 55, 0.6, 0.3);
  AU.tone('triangle', big ? 520 : 660, big ? 780 : 880, 0.4, 0.07, 120);
  sGlass(big ? 1.2 : 0.6, 150);
}
function sStamp() {           // 印章按下: 低频笃 + 纸面闷响 + 回弹轻响
  AU.tone('sine', 170, 52, 0.15, 0.5);
  AU.noise(0.07, 0.22, 'lowpass', 1300, 300, 1);
  AU.tone('sine', 1250, 880, 0.05, 0.06, 90);
}
function sThunder() {         // 落雷: 炸裂 + 滚雷 + 电弧
  AU.noise(0.3, 0.32, 'lowpass', 3000, 150, 0.8);
  AU.noise(0.08, 0.26, 'highpass', 2800, 4200, 1);
  AU.tone('sawtooth', 160, 40, 0.22, 0.18);
}

// 忆词落定后, 背景炸开的类型特效(每卡独立配色/变体)
// v16.0 加强: 通用氛围层(速度线/雨丝/星轨按类型) + 每种加料(前景/中景/背景层) + prism/storm/memory 新类型
function chantStrokeFx(root, opt) {
  const layer = root.querySelector('.ch-fx');
  if (!layer) return;
  const kind = opt.k, col = opt.c || '#ffffff', va = opt.v;
  const W = window.innerWidth, H = window.innerHeight;
  const inner = root.querySelector('.ch-inner');
  if (inner && inner.animate) inner.animate([
    { transform: 'translate(0,0)' }, { transform: 'translate(-7px,3px)' },
    { transform: 'translate(6px,-4px)' }, { transform: 'translate(-4px,2px)' }, { transform: 'translate(0,0)' },
  ], { duration: 340 });
  const mk = styles => {
    const d = document.createElement('div');
    d.style.position = 'absolute';
    Object.assign(d.style, styles);
    layer.appendChild(d);
    return d;
  };
  const mkParticle = (n, styles, frames, opt2) => {   // 批量微粒(数量受控)
    for (let k = 0; k < n; k++) {
      const d = mk(typeof styles === 'function' ? styles(k) : styles);
      d.animate(typeof frames === 'function' ? frames(k) : frames, opt2 && opt2(k) || {});
    }
  };
  // ---- 通用氛围层: 暗场压角 + 色温偏移 + 环境元素(类型别) ----
  const vign = mk({
    left: '0', top: '0', width: '100%', height: '100%',
    background: 'radial-gradient(ellipse at 50% 46%, transparent 42%, rgba(4, 6, 14, 0.62) 100%)',
    opacity: '0',
  });
  vign.animate([{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 1, offset: 0.7 }, { opacity: 0 }], { duration: 1100 });
  const tint = mk({
    left: '0', top: '0', width: '100%', height: '100%',
    background: 'radial-gradient(circle at 50% 50%, ' + hexA(col, 0.14) + ', transparent 68%)',
    mixBlendMode: 'screen',
    opacity: '0',
  });
  tint.animate([{ opacity: 0 }, { opacity: 1, offset: 0.35 }, { opacity: 0 }], { duration: 950 });
  // 环境元素(类型别氛围)
  if (kind === 'slash') {   // 速度线
    mkParticle(9, () => ({
      left: '0', top: (8 + Math.random() * 84) + '%', width: '100vw', height: '1.5px',
      background: 'linear-gradient(90deg, transparent, ' + hexA(col, 0.55) + ' 50%, transparent)',
      opacity: '0',
    }), k => [
      { transform: 'translateX(-100vw) scaleX(0.2)', opacity: 0 },
      { opacity: 0.8, offset: 0.3 },
      { transform: 'translateX(100vw) scaleX(1.1)', opacity: 0 },
    ], k => ({ duration: 420 + Math.random() * 300, delay: k * 55, easing: 'ease-in' }));
  } else if (kind === 'thunder' || kind === 'storm') {   // 雨丝
    mkParticle(14, () => ({
      left: (Math.random() * 100) + '%', top: '-4vh', width: '1.5px', height: '9vh',
      background: 'linear-gradient(transparent, ' + hexA(col, 0.5) + ')',
      opacity: '0',
    }), k => [
      { transform: 'translateY(0)', opacity: 0 },
      { opacity: 0.7, offset: 0.25 },
      { transform: 'translateY(112vh)', opacity: 0 },
    ], k => ({ duration: 480 + Math.random() * 260, delay: k * 42 }));
  } else if (kind === 'void' || kind === 'memory') {   // 星尘汇聚
    mkParticle(16, () => ({
      left: (10 + Math.random() * 80) + '%', top: (20 + Math.random() * 60) + '%',
      width: '4px', height: '4px', borderRadius: '50%',
      background: col, boxShadow: '0 0 8px ' + hexA(col, 0.9),
      opacity: '0',
    }), k => [
      { transform: 'translate(0,0) scale(0.6)', opacity: 0 },
      { opacity: 0.9, offset: 0.3 },
      { transform: 'translate(' + (50 - (10 + 0) * 1) * 0 + 'px,0) scale(0.2)', opacity: 0 },   // 收束
    ], k => ({ duration: 700 + Math.random() * 300, delay: k * 50 }));
  } else if (kind === 'shield') {   // 环波扩散
    mkParticle(3, k => ({
      left: '50%', top: '50%', width: '60vmin', height: '60vmin', margin: '-30vmin 0 0 -30vmin',
      borderRadius: '50%', border: '1.5px solid ' + hexA(col, 0.5),
      opacity: '0',
    }), k => [
      { transform: 'scale(0.3)', opacity: 0 },
      { opacity: 0.6, offset: 0.3 },
      { transform: 'scale(1.4)', opacity: 0 },
    ], k => ({ duration: 900, delay: k * 180 }));
  } else if (kind === 'holy') {   // 光尘上浮
    mkParticle(12, () => ({
      left: (8 + Math.random() * 84) + '%', top: '86%',
      width: '4px', height: '4px', borderRadius: '50%',
      background: '#fff8e8', boxShadow: '0 0 8px ' + hexA(col, 0.9),
      opacity: '0',
    }), k => [
      { transform: 'translateY(0)', opacity: 0 },
      { opacity: 0.9, offset: 0.3 },
      { transform: 'translateY(-' + (260 + Math.random() * 200) + 'px)', opacity: 0 },
    ], k => ({ duration: 900 + Math.random() * 400, delay: k * 55 }));
  } else if (kind === 'rune' || kind === 'prism') {   // 星轨弧
    mkParticle(6, k => ({
      left: '50%', top: '50%', width: (30 + k * 9) + 'vmin', height: (30 + k * 9) + 'vmin',
      margin: (-(15 + k * 4.5)) + 'vmin 0 0 ' + (-(15 + k * 4.5)) + 'vmin',
      borderRadius: '50%',
      border: '1px dashed ' + hexA(col, 0.4),
      opacity: '0',
    }), k => [
      { transform: 'rotate(' + (k * 40) + 'deg) scale(0.7)', opacity: 0 },
      { opacity: 0.6, offset: 0.35 },
      { transform: 'rotate(' + (k * 40 + 120) + 'deg) scale(1.1)', opacity: 0 },
    ], k => ({ duration: 1000, delay: k * 90 }));
  }
  if (kind === 'slash') {   // 刀光: 五种方向/十字, 专属配色 + 前景残影
    sSlash(1.35); sGlass(0.9, 60);
    const DIRS = {
      d1: { fx: -0.7, fy: 0.32, r: -24 },
      d2: { fx: 0.7, fy: 0.32, r: 24 },
      h:  { fx: -0.85, fy: 0, r: 0 },
      v:  { fx: 0, fy: -0.85, r: 90 },
    };
    (va === 'x' ? ['d1', 'd2'] : [va || 'd1']).forEach((dir, k) => {
      const d = DIRS[dir];
      const b = mk({
        left: '50%', top: '50%', width: '160vmax', height: '7px',
        marginLeft: '-80vmax', marginTop: '-3px',
        background: 'linear-gradient(90deg, transparent, ' + hexA(col, 0.85) + ' 30%, #ffffff 50%, ' + hexA(col, 0.85) + ' 70%, transparent)',
        boxShadow: '0 0 30px ' + hexA(col, 0.9),
        opacity: '0',
      });
      b.animate([
        { transform: 'translate(' + d.fx * W + 'px,' + d.fy * H + 'px) rotate(' + d.r + 'deg) scaleX(0.15)', opacity: 0 },
        { transform: 'translate(0px,0px) rotate(' + d.r + 'deg) scaleX(1)', opacity: 1, offset: 0.32 },
        { transform: 'translate(' + -d.fx * W + 'px,' + -d.fy * H + 'px) rotate(' + d.r + 'deg) scaleX(1.05)', opacity: 0 },
      ], { duration: 540, delay: k * 90, easing: 'cubic-bezier(0.3, 0.6, 0.3, 1)' });
      // 前景残影(慢半拍的虚光)
      const ghost = mk({
        left: '50%', top: '50%', width: '160vmax', height: '16px',
        marginLeft: '-80vmax', marginTop: '-8px',
        background: 'linear-gradient(90deg, transparent, ' + hexA(col, 0.3) + ' 50%, transparent)',
        filter: 'blur(6px)',
        opacity: '0',
      });
      ghost.animate([
        { transform: 'translate(' + d.fx * W + 'px,' + d.fy * H + 'px) rotate(' + d.r + 'deg)', opacity: 0 },
        { transform: 'translate(0px,0px) rotate(' + d.r + 'deg)', opacity: 0.75, offset: 0.4 },
        { transform: 'translate(' + -d.fx * W * 0.6 + 'px,' + -d.fy * H * 0.6 + 'px) rotate(' + d.r + 'deg)', opacity: 0 },
      ], { duration: 780, delay: 90 + k * 90 });
    });
    // 中景碎屑
    mkParticle(10, () => ({
      left: '50%', top: '50%', width: '5px', height: '5px',
      background: '#ffffff', boxShadow: '0 0 8px ' + hexA(col, 0.9),
      clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
      opacity: '0',
    }), k => {
      const a = Math.random() * Math.PI * 2, dist = 90 + Math.random() * 220;
      return [
        { transform: 'translate(0,0) rotate(0deg)', opacity: 0 },
        { opacity: 1, offset: 0.25 },
        { transform: 'translate(' + Math.cos(a) * dist + 'px,' + Math.sin(a) * dist + 'px) rotate(' + (Math.random() * 720 - 360) + 'deg)', opacity: 0 },
      ];
    }, k => ({ duration: 620 + Math.random() * 300, delay: 60 + k * 40 }));
  } else if (kind === 'thunder') {   // 落雷: 数量/配色 + 连锁电弧
    sThunder(); setTimeout(sThunder, 140);
    const nBolt = va || 3;
    for (let k = 0; k < nBolt; k++) {
      const x = 22 + Math.random() * 56;
      const bolt = mk({
        left: x + '%', top: '-6vh', width: '46px', height: '78vh',
        marginLeft: '-23px',
        background: 'linear-gradient(rgba(255,255,255,0), #ffffff 18%, ' + hexA(col, 0.95) + ' 55%, rgba(255,255,255,0))',
        clipPath: 'polygon(42% 0, 68% 0, 52% 34%, 74% 34%, 36% 100%, 46% 52%, 26% 52%)',
        filter: 'drop-shadow(0 0 18px ' + hexA(col, 0.95) + ')',
        opacity: '0',
      });
      bolt.animate([
        { opacity: 0 }, { opacity: 1, offset: 0.08 }, { opacity: 0.15, offset: 0.2 },
        { opacity: 1, offset: 0.32 }, { opacity: 0, offset: 0.62 }, { opacity: 0, offset: 1 },
      ], { duration: 480, delay: k * 130 });
      // 连锁电弧(雷间细闪)
      if (k < nBolt - 1) {
        const arc = mk({
          left: (x - 4) + '%', top: '30%', width: '14vw', height: '2px',
          background: 'linear-gradient(90deg, transparent, #ffffff 50%, transparent)',
          boxShadow: '0 0 14px ' + hexA(col, 0.9),
          opacity: '0',
        });
        arc.animate([{ opacity: 0 }, { opacity: 0.9, offset: 0.2 }, { opacity: 0 }], { duration: 260, delay: k * 130 + 200 });
      }
    }
  } else if (kind === 'void') {   // 瘴气: 专属配色 + 中心汇聚
    sPoison(); AU.tone('sine', 90, 50, 0.5, 0.22);
    for (let k = 0; k < 6; k++) {
      const sz = 120 + Math.random() * 220;
      const blob = mk({
        left: (8 + Math.random() * 84) + '%', top: '62%',
        width: sz + 'px', height: sz + 'px', marginLeft: -sz / 2 + 'px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, ' + hexA(col, 0.5) + ', ' + hexA(col, 0.18) + ' 55%, transparent 72%)',
        opacity: '0',
      });
      blob.animate([
        { transform: 'translateY(40px) scale(0.6)', opacity: 0 },
        { transform: 'translateY(-' + (60 + Math.random() * 120) + 'px) scale(1.05)', opacity: 0.95, offset: 0.45 },
        { transform: 'translateY(-' + (200 + Math.random() * 160) + 'px) scale(1.2)', opacity: 0 },
      ], { duration: 900 + Math.random() * 400, delay: k * 70, easing: 'ease-out' });
    }
    // 中心汇聚核(瘴气被吸进忆词)
    const core = mk({
      left: '50%', top: '50%', width: '18vmin', height: '18vmin', margin: '-9vmin 0 0 -9vmin',
      borderRadius: '50%',
      background: 'radial-gradient(circle, ' + hexA(col, 0.75) + ', transparent 68%)',
      opacity: '0',
    });
    core.animate([
      { transform: 'scale(2.4)', opacity: 0 },
      { opacity: 0.9, offset: 0.4 },
      { transform: 'scale(0.3)', opacity: 0 },
    ], { duration: 800, easing: 'cubic-bezier(0.3, 0.6, 0.3, 1)' });
  } else if (kind === 'shield') {   // 壁垒: 六边/圆环/八边 + 双层脉冲
    sShield();
    const shape = va === 'ring' ? 'circle' : va === 'oct' ? 'polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)' : 'polygon(50% 0, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)';
    const hex = mk({
      left: '50%', top: '50%', width: '46vmin', height: '46vmin',
      margin: '-23vmin 0 0 -23vmin',
      border: '3px solid ' + hexA(col, 0.95),
      clipPath: shape === 'circle' ? 'none' : shape,
      borderRadius: shape === 'circle' ? '50%' : '0',
      boxShadow: '0 0 34px ' + hexA(col, 0.55) + ', inset 0 0 30px ' + hexA(col, 0.3),
      opacity: '0',
    });
    hex.animate([
      { transform: 'scale(0.25) rotate(-14deg)', opacity: 0 },
      { transform: 'scale(1) rotate(0deg)', opacity: 1, offset: 0.4 },
      { transform: 'scale(1.5) rotate(6deg)', opacity: 0 },
    ], { duration: 680, easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)' });
    // 内层脉冲环
    const inner2 = mk({
      left: '50%', top: '50%', width: '30vmin', height: '30vmin', margin: '-15vmin 0 0 -15vmin',
      borderRadius: '50%', border: '2px solid ' + hexA(col, 0.6),
      opacity: '0',
    });
    inner2.animate([
      { transform: 'scale(0.5)', opacity: 0 },
      { opacity: 0.8, offset: 0.35 },
      { transform: 'scale(1.2)', opacity: 0 },
    ], { duration: 620, delay: 200 });
  } else if (kind === 'holy') {   // 圣光: 光尘/光柱 + 星芒雨, 专属配色
    sPower(); AU.tone('sine', 1568, 1568, 0.5, 0.06, 80);
    const veil = mk({
      left: '50%', top: '50%', width: '90vmin', height: '90vmin', margin: '-45vmin',
      borderRadius: '50%',
      background: 'radial-gradient(circle, ' + hexA(col, 0.28) + ', transparent 62%)',
      opacity: '0',
    });
    veil.animate([{ opacity: 0, transform: 'scale(0.7)' }, { opacity: 1, transform: 'scale(1)', offset: 0.4 }, { opacity: 0, transform: 'scale(1.15)' }], { duration: 900 });
    if (va === 'pillar') {   // 通天光柱
      const p = mk({
        left: '50%', top: '0', width: '12vmin', height: '100vh', marginLeft: '-6vmin',
        background: 'linear-gradient(90deg, transparent, ' + hexA(col, 0.75) + ' 50%, transparent)',
        opacity: '0',
      });
      p.animate([
        { transform: 'scaleY(0.1)', opacity: 0, transformOrigin: 'bottom' },
        { transform: 'scaleY(1)', opacity: 1, offset: 0.4, transformOrigin: 'bottom' },
        { transform: 'scaleY(1.05)', opacity: 0, transformOrigin: 'bottom' },
      ], { duration: 780, easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)' });
    }
    for (let k = 0; k < 12; k++) {
      const m = mk({
        left: (10 + Math.random() * 80) + '%', top: '78%',
        width: '5px', height: '5px', borderRadius: '50%',
        background: col, boxShadow: '0 0 10px ' + hexA(col, 0.95),
        opacity: '0',
      });
      m.animate([
        { transform: 'translateY(0)', opacity: 0 },
        { transform: 'translateY(-' + (120 + Math.random() * 140) + 'px)', opacity: 1, offset: 0.35 },
        { transform: 'translateY(-' + (300 + Math.random() * 180) + 'px)', opacity: 0 },
      ], { duration: 800 + Math.random() * 420, delay: k * 60 });
    }
    // 星芒雨(四角星闪)
    mkParticle(8, () => ({
      left: (8 + Math.random() * 84) + '%', top: (12 + Math.random() * 60) + '%',
      width: '12px', height: '12px',
      background: 'radial-gradient(circle, #ffffff, transparent 70%)',
      clipPath: 'polygon(50% 0, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0 50%, 38% 38%)',
      opacity: '0',
    }), k => [
      { transform: 'scale(0.3) rotate(0deg)', opacity: 0 },
      { opacity: 1, offset: 0.3 },
      { transform: 'scale(1.1) rotate(90deg)', opacity: 0 },
    ], k => ({ duration: 700, delay: k * 80 }));
  } else if (kind === 'prism') {   // 棱镜: 折射光带 + 彩虹碎片
    sChantBell(1.1); AU.tone('sine', 2093, 2093, 0.4, 0.06, 60);
    const PRISM = ['#ff8a8a', '#ffd88a', '#a8f0c8', '#8cd2ff', '#c9a8ff'];
    for (let k = 0; k < 5; k++) {   // 五折射光带
      const band = mk({
        left: '50%', top: '50%', width: '150vmax', height: '4px',
        marginLeft: '-75vmax', marginTop: '-2px',
        background: 'linear-gradient(90deg, transparent, ' + hexA(PRISM[k], 0.75) + ' 50%, transparent)',
        filter: 'blur(1px)',
        opacity: '0',
      });
      const ang = -30 + k * 15;
      band.animate([
        { transform: 'rotate(' + ang + 'deg) scaleX(0.1)', opacity: 0 },
        { transform: 'rotate(' + ang + 'deg) scaleX(1)', opacity: 1, offset: 0.4 },
        { transform: 'rotate(' + (ang + 8) + 'deg) scaleX(1.1)', opacity: 0 },
      ], { duration: 640, delay: k * 70, easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)' });
    }
    mkParticle(14, () => ({   // 彩虹碎片
      left: '50%', top: '50%', width: '7px', height: '7px',
      background: PRISM[(Math.random() * 5) | 0],
      clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
      opacity: '0',
    }), k => {
      const a = Math.random() * Math.PI * 2, dist = 120 + Math.random() * 260;
      return [
        { transform: 'translate(0,0) rotate(0deg) scale(0.5)', opacity: 0 },
        { opacity: 1, offset: 0.3 },
        { transform: 'translate(' + Math.cos(a) * dist + 'px,' + Math.sin(a) * dist + 'px) rotate(' + (Math.random() * 720 - 360) + 'deg) scale(1.1)', opacity: 0 },
      ];
    }, k => ({ duration: 800 + Math.random() * 300, delay: k * 45 }));
  } else if (kind === 'storm') {   // 风暴: 旋转气旋 + 闪电链
    sThunder(); setTimeout(sThunder, 120); setTimeout(sThunder, 260);
    for (let k = 0; k < 3; k++) {   // 三层气旋
      const cyc = mk({
        left: '50%', top: '50%', width: (26 + k * 14) + 'vmin', height: (26 + k * 14) + 'vmin',
        margin: (-(13 + k * 7)) + 'vmin 0 0 ' + (-(13 + k * 7)) + 'vmin',
        borderRadius: '50%',
        border: '2px solid ' + hexA(col, 0.55 - k * 0.12),
        borderTopColor: 'transparent', borderBottomColor: 'transparent',
        opacity: '0',
      });
      cyc.animate([
        { transform: 'rotate(0deg) scale(0.6)', opacity: 0 },
        { opacity: 0.85, offset: 0.3 },
        { transform: 'rotate(' + (k % 2 ? -420 : 420) + 'deg) scale(1.2)', opacity: 0 },
      ], { duration: 820, delay: k * 90 });
    }
    for (let k = 0; k < 4; k++) {   // 闪电链
      const x = 18 + Math.random() * 64;
      const bolt = mk({
        left: x + '%', top: '-4vh', width: '34px', height: '70vh',
        marginLeft: '-17px',
        background: 'linear-gradient(rgba(255,255,255,0), #ffffff 22%, ' + hexA(col, 0.9) + ' 60%, rgba(255,255,255,0))',
        clipPath: 'polygon(42% 0, 68% 0, 52% 34%, 74% 34%, 36% 100%, 46% 52%, 26% 52%)',
        filter: 'drop-shadow(0 0 16px ' + hexA(col, 0.95) + ')',
        opacity: '0',
      });
      bolt.animate([
        { opacity: 0 }, { opacity: 1, offset: 0.1 }, { opacity: 0.2, offset: 0.22 },
        { opacity: 1, offset: 0.34 }, { opacity: 0, offset: 0.6 },
      ], { duration: 420, delay: k * 110 });
    }
  } else if (kind === 'memory') {   // 忆潮: 上浮记忆碎片 + 光点汇聚
    sChantBell(0.9); AU.noise(0.5, 0.1, 'bandpass', 600, 2800, 1.6);
    mkParticle(16, () => ({   // 上浮碎片
      left: (8 + Math.random() * 84) + '%', top: '82%',
      width: '9px', height: '12px',
      background: 'linear-gradient(160deg, rgba(255,255,255,0.85), ' + hexA(col, 0.6) + ')',
      clipPath: 'polygon(20% 0, 100% 12%, 82% 100%, 0 82%)',
      opacity: '0',
    }), k => [
      { transform: 'translateY(0) rotate(0deg)', opacity: 0 },
      { opacity: 0.9, offset: 0.3 },
      { transform: 'translateY(-' + (320 + Math.random() * 220) + 'px) rotate(' + (Math.random() * 180 - 90) + 'deg)', opacity: 0 },
    ], k => ({ duration: 1100 + Math.random() * 400, delay: k * 55 }));
    // 光点汇聚到忆词中心
    mkParticle(10, k => {
      const a = (k / 10) * Math.PI * 2;
      return {
        left: '50%', top: '50%', width: '5px', height: '5px', borderRadius: '50%',
        background: '#ffffff', boxShadow: '0 0 10px ' + hexA(col, 0.95),
        opacity: '0',
        transform: 'translate(' + Math.cos(a) * 220 + 'px,' + Math.sin(a) * 220 + 'px)',
      };
    }, k => [
      { transform: 'translate(' + Math.cos((k / 10) * Math.PI * 2) * 220 + 'px,' + Math.sin((k / 10) * Math.PI * 2) * 220 + 'px)', opacity: 0 },
      { opacity: 1, offset: 0.3 },
      { transform: 'translate(0px,0px)', opacity: 0 },
    ], k => ({ duration: 780, delay: k * 45, easing: 'cubic-bezier(0.3, 0.6, 0.3, 1)' }));
  } else {   // rune: 法阵: 扩张/内爆 + 符文点
    sChantBell(0.8); AU.noise(0.4, 0.08, 'bandpass', 900, 2400, 2);
    const implode = va === 'implode';
    for (let k = 0; k < 2; k++) {
      const ring = mk({
        left: '50%', top: '50%',
        width: (k ? 30 : 52) + 'vmin', height: (k ? 30 : 52) + 'vmin',
        margin: (k ? '-15vmin' : '-26vmin') + ' 0 0 ' + (k ? '-15vmin' : '-26vmin'),
        borderRadius: '50%',
        border: (k ? '2px solid' : '3px dashed') + ' ' + hexA(col, k ? 0.7 : 0.9),
        boxShadow: '0 0 26px ' + hexA(col, 0.4),
        opacity: '0',
      });
      ring.animate(implode ? [
        { transform: 'scale(1.6) rotate(60deg)', opacity: 0 },
        { transform: 'scale(0.8) rotate(0deg)', opacity: 1, offset: 0.5 },
        { transform: 'scale(0.25) rotate(-30deg)', opacity: 0 },
      ] : [
        { transform: 'scale(0.3) rotate(' + (k ? 90 : -90) + 'deg)', opacity: 0 },
        { transform: 'scale(1) rotate(0deg)', opacity: 1, offset: 0.45 },
        { transform: 'scale(1.25) rotate(' + (k ? -40 : 40) + 'deg)', opacity: 0 },
      ], { duration: 800, delay: k * 110, easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)' });
    }
    // 符文点(六方位亮灭)
    mkParticle(6, k => {
      const a = (k / 6) * Math.PI * 2;
      return {
        left: 'calc(50% + ' + Math.cos(a) * 24 + 'vmin)', top: 'calc(50% + ' + Math.sin(a) * 24 + 'vmin)',
        width: '6px', height: '6px', borderRadius: '50%',
        background: col, boxShadow: '0 0 12px ' + hexA(col, 0.95),
        opacity: '0',
      };
    }, k => [
      { transform: 'scale(0.4)', opacity: 0 },
      { opacity: 1, offset: 0.35 },
      { transform: 'scale(1.1)', opacity: 0 },
    ], k => ({ duration: 700, delay: k * 80 }));
  }
}

// ================= 源忆终段特效(v17.1): 23 张 L 卡各一款, 基元组合拼装 =================
// 基元: burst 爆发 / ring 环波 / beam 刀光 / bolt 落雷 / swirl 螺旋 / rise 上浮 / shard 碎片 / pillar 光柱 / core 核 / curtain 幕帘 / meteor 彗星
function chantFinaleFx(root, card) {
  const layer = root.querySelector('.ch-fx');
  if (!layer) return;
  const W = window.innerWidth, H = window.innerHeight;
  const col = (CHANT_FX[card.name] || {}).c || '#ffffff';
  const inner = root.querySelector('.ch-inner');
  if (inner && inner.animate) inner.animate([   // 忆词层震感
    { transform: 'translate(0,0)' }, { transform: 'translate(-9px,4px)' },
    { transform: 'translate(7px,-5px)' }, { transform: 'translate(-5px,3px)' }, { transform: 'translate(0,0)' },
  ], { duration: 400 });
  const mk = styles => {
    const d = document.createElement('div');
    d.style.position = 'absolute';
    d.style.pointerEvents = 'none';
    Object.assign(d.style, styles);
    layer.appendChild(d);
    return d;
  };
  const P = (n, styles, frames, opt2) => {   // 批量微粒
    for (let k = 0; k < n; k++) {
      const d = mk(typeof styles === 'function' ? styles(k) : styles);
      d.animate(typeof frames === 'function' ? frames(k) : frames, opt2 && opt2(k) || {});
    }
  };
  const dot = (x, y, sz, c2, glow) => ({
    left: x, top: y, width: sz + 'px', height: sz + 'px', borderRadius: '50%',
    background: c2, boxShadow: '0 0 ' + (glow || 9) + 'px ' + c2, opacity: '0',
  });
  const burst = (n, c2, o) => {   // 中心爆发
    o = o || {};
    P(n, () => dot('50%', o.top || '50%', (o.sz || 3) + Math.random() * (o.szV || 4), Math.random() < (o.wht || 0.3) ? '#ffffff' : c2, 10),
      () => {
        const a = Math.random() * Math.PI * 2, d = (o.d0 || 90) + Math.random() * (o.d1 || 240);
        return [
          { transform: 'translate(0,0) scale(0.5)', opacity: 0 },
          { opacity: 1, offset: o.peak || 0.22 },
          { transform: 'translate(' + Math.cos(a) * d + 'px,' + Math.sin(a) * d * (o.flat || 1) + 'px) scale(' + (o.s1 || 1) + ')', opacity: 0 },
        ];
      }, k => ({ duration: (o.du || 700) + Math.random() * (o.duV || 300), delay: (o.dl || 0) + k * (o.stag || 0), easing: o.ez || 'cubic-bezier(0.2, 0.7, 0.3, 1)' }));
  };
  const ring = (n, c2, o) => {   // 同心环波
    o = o || {};
    for (let k = 0; k < n; k++) {
      const sz = (o.sz || 46) + k * (o.step || 10);
      const r = mk({
        left: '50%', top: o.top || '50%', width: sz + 'vmin', height: sz + 'vmin',
        margin: (-sz / 2) + 'vmin 0 0 ' + (-sz / 2) + 'vmin',
        borderRadius: '50%',
        border: (o.w || 2) + 'px ' + (o.dash ? 'dashed' : 'solid') + ' ' + hexA(c2, o.a || 0.65),
        boxShadow: '0 0 ' + (o.glow || 18) + 'px ' + hexA(c2, 0.4),
        opacity: '0',
      });
      r.animate([
        { transform: 'scale(' + (o.from || 0.25) + ') rotate(' + (o.rot || 0) + 'deg)', opacity: 0 },
        { opacity: o.pa || 0.85, offset: o.pk || 0.32 },
        { transform: 'scale(' + (o.to || 1.5) + ') rotate(' + (o.rot2 || 0) + 'deg)', opacity: 0 },
      ], { duration: o.du || 750, delay: (o.dl || 0) + k * (o.stag || 110), easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)' });
    }
  };
  const beam = (ang, c2, o) => {   // 刀光/光带(角度制, 带拖尾残影)
    o = o || {};
    const d = o.dir || 1, h = o.h || 6;
    const b = mk({
      left: '50%', top: '50%', width: '160vmax', height: h + 'px',
      marginLeft: '-80vmax', marginTop: (-h / 2) + 'px',
      background: 'linear-gradient(90deg, transparent, ' + hexA(c2, 0.85) + ' 30%, #ffffff 50%, ' + hexA(c2, 0.85) + ' 70%, transparent)',
      boxShadow: '0 0 ' + (o.glow || 28) + 'px ' + hexA(c2, 0.9),
      opacity: '0',
    });
    b.animate([
      { transform: 'translate(' + (-d * W * 0.7) + 'px,0) rotate(' + ang + 'deg) scaleX(0.15)', opacity: 0 },
      { transform: 'translate(0px,0px) rotate(' + ang + 'deg) scaleX(1)', opacity: 1, offset: 0.32 },
      { transform: 'translate(' + (d * W * 0.7) + 'px,0) rotate(' + ang + 'deg) scaleX(1.05)', opacity: 0 },
    ], { duration: o.du || 520, delay: o.dl || 0, easing: 'cubic-bezier(0.3, 0.6, 0.3, 1)' });
    const gh = mk({
      left: '50%', top: '50%', width: '160vmax', height: h * 2.4 + 'px',
      marginLeft: '-80vmax', marginTop: (-h * 1.2) + 'px',
      background: 'linear-gradient(90deg, transparent, ' + hexA(c2, 0.3) + ' 50%, transparent)',
      filter: 'blur(6px)', opacity: '0',
    });
    gh.animate([
      { transform: 'translate(' + (-d * W * 0.7) + 'px,0) rotate(' + ang + 'deg)', opacity: 0 },
      { transform: 'translate(0px,0px) rotate(' + ang + 'deg)', opacity: 0.7, offset: 0.4 },
      { transform: 'translate(' + (d * W * 0.42) + 'px,0) rotate(' + ang + 'deg)', opacity: 0 },
    ], { duration: (o.du || 520) + 240, delay: (o.dl || 0) + 90 });
  };
  const bolt = (x, c2, o) => {   // 落雷(指定横位)
    o = o || {};
    const w = o.w || 46;
    const b = mk({
      left: x + '%', top: '-6vh', width: w + 'px', height: (o.h || 78) + 'vh',
      marginLeft: (-w / 2) + 'px',
      background: 'linear-gradient(rgba(255,255,255,0), #ffffff 18%, ' + hexA(c2, 0.95) + ' 55%, rgba(255,255,255,0))',
      clipPath: 'polygon(42% 0, 68% 0, 52% 34%, 74% 34%, 36% 100%, 46% 52%, 26% 52%)',
      filter: 'drop-shadow(0 0 18px ' + hexA(c2, 0.95) + ')',
      opacity: '0',
    });
    b.animate([
      { opacity: 0 }, { opacity: 1, offset: 0.08 }, { opacity: 0.15, offset: 0.2 },
      { opacity: 1, offset: 0.32 }, { opacity: 0, offset: 0.62 }, { opacity: 0, offset: 1 },
    ], { duration: o.du || 480, delay: o.dl || 0 });
  };
  const swirl = (n, c2, o) => {   // 螺旋(o.in=向心汇聚)
    o = o || {};
    P(n, () => dot('50%', '50%', (o.sz || 4), Math.random() < 0.3 ? '#ffffff' : c2, 10), k => {
      const a = (k / n) * Math.PI * 2 + Math.random() * 0.5;
      const r0 = (o.r0 || 260) + Math.random() * (o.rV || 80);
      const r1 = o.in ? 12 : r0 * (o.out || 1.5);
      const sw = (o.spin || 240) * (o.ccw ? -1 : 1);
      const x0 = Math.cos(a) * r0, y0 = Math.sin(a) * r0 * (o.flat || 0.8);
      const x1 = Math.cos(a + sw * Math.PI / 180) * r1, y1 = Math.sin(a + sw * Math.PI / 180) * r1 * (o.flat || 0.8);
      return [
        { transform: 'translate(' + x0.toFixed(0) + 'px,' + y0.toFixed(0) + 'px) scale(0.6)', opacity: 0 },
        { opacity: 0.95, offset: 0.3 },
        { transform: 'translate(' + x1.toFixed(0) + 'px,' + y1.toFixed(0) + 'px) scale(' + (o.in ? 0.2 : 1.1) + ')', opacity: 0 },
      ];
    }, k => ({ duration: (o.du || 800) + Math.random() * 260, delay: (o.dl || 0) + k * (o.stag || 36), easing: 'cubic-bezier(0.3, 0.6, 0.3, 1)' }));
  };
  const rise = (n, c2, o) => {   // 上浮光尘/火星
    o = o || {};
    P(n, () => dot((6 + Math.random() * 88) + '%', (o.top || 82) + '%', (o.sz || 4) + Math.random() * 3, Math.random() < 0.25 ? '#ffffff' : c2, 9),
      () => [
        { transform: 'translateY(0) rotate(0deg)', opacity: 0 },
        { opacity: 0.9, offset: 0.3 },
        { transform: 'translate(' + (Math.random() * 60 - 30) + 'px,-' + ((o.h0 || 220) + Math.random() * (o.hV || 200)).toFixed(0) + 'px) rotate(' + (Math.random() * 160 - 80).toFixed(0) + 'deg)', opacity: 0 },
      ], k => ({ duration: (o.du || 950) + Math.random() * 380, delay: (o.dl || 0) + k * (o.stag || 48) }));
  };
  const shard = (n, cols, o) => {   // 多色晶体碎片
    o = o || {};
    P(n, () => ({
      left: '50%', top: '50%', width: ((o.sz || 6) + Math.random() * 5).toFixed(0) + 'px', height: ((o.sz || 6) + Math.random() * 5).toFixed(0) + 'px',
      background: cols[(Math.random() * cols.length) | 0],
      clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
      boxShadow: '0 0 8px ' + cols[0], opacity: '0',
    }), () => {
      const a = Math.random() * Math.PI * 2, d = (o.d0 || 110) + Math.random() * (o.d1 || 240);
      return [
        { transform: 'translate(0,0) rotate(0deg) scale(0.5)', opacity: 0 },
        { opacity: 1, offset: 0.25 },
        { transform: 'translate(' + Math.cos(a) * d + 'px,' + Math.sin(a) * d + 'px) rotate(' + (Math.random() * 720 - 360).toFixed(0) + 'deg) scale(1.1)', opacity: 0 },
      ];
    }, k => ({ duration: (o.du || 750) + Math.random() * 300, delay: (o.dl || 0) + k * (o.stag || 36) }));
  };
  const pillar = (c2, o) => {   // 光柱
    o = o || {};
    const w = o.w || 12;
    const p = mk({
      left: (o.x || 50) + '%', top: '0', width: w + 'vmin', height: '100vh',
      marginLeft: (-w / 2) + 'vmin',
      background: 'linear-gradient(90deg, transparent, ' + hexA(c2, o.a || 0.7) + ' 50%, transparent)',
      opacity: '0', transformOrigin: o.fromTop ? 'top' : 'bottom',
    });
    p.animate([
      { transform: 'scaleY(0.08)', opacity: 0 },
      { transform: 'scaleY(1)', opacity: 1, offset: 0.4 },
      { transform: 'scaleY(1.05)', opacity: 0 },
    ], { duration: o.du || 780, delay: o.dl || 0, easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)' });
  };
  const core = (c2, o) => {   // 中心核(dark=暗核亮边的日食/黑洞)
    o = o || {};
    const sz = o.sz || 18;
    const c = mk({
      left: '50%', top: o.top || '50%', width: sz + 'vmin', height: sz + 'vmin',
      margin: (-sz / 2) + 'vmin 0 0 ' + (-sz / 2) + 'vmin',
      borderRadius: '50%',
      background: o.dark
        ? 'radial-gradient(circle, rgba(2,3,10,0.95) 40%, ' + hexA(c2, 0.85) + ' 62%, transparent 72%)'
        : 'radial-gradient(circle, #ffffff 0%, ' + hexA(c2, 0.85) + ' 45%, transparent 70%)',
      opacity: '0',
    });
    c.animate([
      { transform: 'scale(' + (o.from || 0.3) + ')', opacity: 0 },
      { opacity: o.pa || 0.95, offset: 0.4 },
      { transform: 'scale(' + (o.to || 1.3) + ')', opacity: 0 },
    ], { duration: o.du || 900, delay: o.dl || 0, easing: 'cubic-bezier(0.3, 0.6, 0.3, 1)' });
  };
  const curtain = (c2, o) => {   // 顶/底氛围幕帘
    o = o || {};
    const d = mk({
      left: '0', width: '100%', height: (o.h || 26) + 'vh',
      top: o.bottom ? '' : '0', bottom: o.bottom ? '0' : '',
      background: 'linear-gradient(' + (o.bottom ? '0deg' : '180deg') + ', ' + hexA(c2, o.a || 0.5) + ', transparent)',
      opacity: '0',
    });
    d.animate([{ opacity: 0 }, { opacity: 1, offset: 0.4 }, { opacity: 0 }], { duration: o.du || 1000, delay: o.dl || 0 });
  };
  const meteor = (x0, y0, x1, y1, c2, o) => {   // 彗星拖尾
    o = o || {};
    const m = mk({
      left: '0', top: '0', width: (o.len || 180) + 'px', height: (o.h || 5) + 'px',
      background: 'linear-gradient(90deg, transparent, ' + hexA(c2, 0.9) + ' 60%, #ffffff)',
      borderRadius: '99px',
      boxShadow: '0 0 16px ' + hexA(c2, 0.9),
      transformOrigin: '100% 50%', opacity: '0',
    });
    const ang = Math.atan2(y1 - y0, x1 - x0) * 180 / Math.PI;
    m.animate([
      { transform: 'translate(' + x0 + 'px,' + y0 + 'px) rotate(' + ang.toFixed(1) + 'deg) scaleX(0.2)', opacity: 0 },
      { opacity: 1, offset: 0.18 },
      { transform: 'translate(' + x1 + 'px,' + y1 + 'px) rotate(' + ang.toFixed(1) + 'deg) scaleX(1)', opacity: 0 },
    ], { duration: o.du || 620, delay: o.dl || 0, easing: 'cubic-bezier(0.4, 0.2, 0.3, 1)' });
  };
  // 通用氛围: 暗角压场 + 卡色温层
  const vign = mk({ left: '0', top: '0', width: '100%', height: '100%', background: 'radial-gradient(ellipse at 50% 46%, transparent 40%, rgba(4, 6, 14, 0.66) 100%)', opacity: '0' });
  vign.animate([{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 1, offset: 0.7 }, { opacity: 0 }], { duration: 1300 });
  const tint = mk({ left: '0', top: '0', width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 50%, ' + hexA(col, 0.16) + ', transparent 66%)', mixBlendMode: 'screen', opacity: '0' });
  tint.animate([{ opacity: 0 }, { opacity: 1, offset: 0.35 }, { opacity: 0 }], { duration: 1100 });
  const q = { mk, P, dot, burst, ring, beam, bolt, swirl, rise, shard, pillar, core, curtain, meteor, col, W, H, hexA };
  (CHANT_FINALE[card.name] || CHANT_FINALE._def)(q);
}
const CHANT_FINALE = {
  _def(q) { q.burst(46, q.col, { d1: 260 }); q.ring(3, q.col, {}); },
  '万象终焉'(q) {   // 万象收束为奇点 → 白金湮灭闪
    q.swirl(44, '#e8e4ff', { in: true, r0: 300, spin: 300, du: 620 });
    q.core('#ffffff', { from: 2.6, to: 0.15, du: 600, dl: 460 });
    q.ring(3, '#e8e4ff', { dl: 540, to: 2.2 });
    q.shard(28, ['#ffffff', '#e8e4ff', '#ffe9a8'], { dl: 540, d1: 320 });
    sExplode(); sGlass(1.8, 460);
  },
  '燃命之怒'(q) {   // 三连斜斩 + 底焰浪 + 火星逆升
    q.beam(-26, '#ff8a5c', { dl: 0 }); q.beam(-8, '#ffb84d', { dl: 110, dir: -1 }); q.beam(-44, '#ff6b4a', { dl: 220 });
    q.curtain('#ff5a3a', { bottom: true, a: 0.55, h: 30 });
    q.rise(26, '#ffab5e', { top: 88, h0: 280, hV: 220, stag: 40 });
    q.burst(18, '#ffd88a', { d1: 200, dl: 180 });
    sSlash(1.4); setTimeout(() => sSlash(1.2), 120); setTimeout(() => sSlash(1.5), 240);
  },
  '澪奈的执念'(q) {   // 双线记忆螺旋(顺逆交缠)
    q.swirl(22, '#a87ae0', { r0: 240, spin: 320, du: 900 });
    q.swirl(22, '#e8f0ff', { r0: 240, spin: 320, ccw: true, du: 900, dl: 120 });
    q.ring(2, '#c9a8ff', { to: 1.3, stag: 260, dash: true });
    sChantBell(1.3); AU.tone('sine', 523, 784, 0.8, 0.07);
  },
  '命运重构'(q) {   // 棱镜碎裂 → 金尘回聚重构
    q.shard(30, ['#ff8a8a', '#ffd88a', '#a8f0c8', '#8cd2ff', '#c9a8ff'], { d1: 300 });
    q.swirl(26, '#ffd24d', { in: true, r0: 280, spin: 260, du: 700, dl: 480 });
    q.ring(2, '#ffd24d', { dash: true, dl: 520, to: 1.1, from: 1.5 });
    sChantBell(0.9); setTimeout(() => sChantBell(1.4), 480);
  },
  '弑神者'(q) {   // 血红十字巨斩 + 赤雨
    q.beam(0, '#e05555', { h: 10, glow: 40 }); q.beam(90, '#ff8a8a', { h: 8, dl: 120, glow: 34 });
    q.beam(-45, '#a03040', { h: 4, dl: 260, dir: -1 });
    q.curtain('#a02030', { a: 0.5 });
    q.burst(24, '#ff6b6b', { d1: 300, dl: 140, wht: 0.15 });
    sSlash(1.6); sGlass(1.1, 90);
  },
  '生命契约'(q) {   // 花瓣两圈绽放 + 粉尘上浮
    q.burst(26, '#f0a0b8', { flat: 1.35, d0: 120, d1: 160, sz: 6, szV: 5, du: 900, s1: 0.6, wht: 0.1 });
    q.burst(18, '#ffd0dc', { flat: 1.35, d0: 60, d1: 120, sz: 4, dl: 200, du: 900, wht: 0.4 });
    q.rise(16, '#ffc0d0', { h0: 200, hV: 160, dl: 260 });
    q.ring(1, '#f0a0b8', { to: 1.7 });
    sBuff(); AU.tone('sine', 659, 880, 0.7, 0.07);
  },
  '终焉回响'(q) {   // 五重回声环波递出
    q.ring(5, '#8f9ff0', { stag: 130, to: 2.3, a: 0.6, du: 900, sz: 30, step: 14 });
    q.burst(14, '#c0ccff', { d1: 180, dl: 300 });
    q.core('#8f9ff0', { sz: 12, to: 0.9, pa: 0.6 });
    sChantBell(0.7); setTimeout(() => sChantBell(0.9), 260); setTimeout(() => sChantBell(1.1), 520);
  },
  '以太湮灭'(q) {   // 青金黑洞: 万物吸入暗核
    q.core('#4dc9ff', { dark: true, sz: 22, from: 0.4, to: 1.5, du: 1000 });
    q.swirl(38, '#4dc9ff', { in: true, r0: 320, spin: 340, du: 700 });
    q.curtain('#1a4a66', { bottom: true, a: 0.5, h: 30 });
    sPoison(); AU.tone('sine', 70, 38, 0.8, 0.24);
  },
  '神罚'(q) {   // 五雷自中向两翼序落 + 天光柱
    [50, 36, 64, 26, 74].forEach((x, k) => q.bolt(x, '#fff4d0', { dl: k * 110, w: 52 }));
    q.pillar('#ffe9a8', { w: 14, dl: 200 });
    q.shard(18, ['#ffffff', '#ffe9a8'], { dl: 300, d1: 260 });
    sThunder(); setTimeout(sThunder, 150); setTimeout(sThunder, 320);
  },
  '万界裂解'(q) {   // 屏裂放射 + 紫晶迸溅
    for (let k = 0; k < 6; k++) q.beam(k * 30, '#b44dff', { h: 2.5, du: 400, dl: k * 50, glow: 16 });
    q.shard(30, ['#b44dff', '#d8a8ff', '#ffffff'], { d1: 300, dl: 180 });
    q.ring(2, '#b44dff', { dash: true, to: 1.6 });
    sSlash(1.3); sGlass(1.5, 60);
  },
  '澪奈的决意'(q) {   // 单束蓝光冲顶 + 星点上旋
    q.pillar('#6a9ee8', { w: 8, a: 0.85 });
    q.rise(24, '#a8c8ff', { h0: 320, hV: 200, stag: 34, du: 800 });
    q.ring(2, '#8ab8ff', { to: 1.15, sz: 34, stag: 200 });
    sPower(); AU.tone('triangle', 1046, 1568, 0.6, 0.05, 60);
  },
  '命运丝线'(q) {   // 四线交汇聚拢成结
    q.meteor(q.W * 0.08, q.H * 0.3, q.W * 0.5, q.H * 0.5, '#f0a0c0', { dl: 0 });
    q.meteor(q.W * 0.92, q.H * 0.3, q.W * 0.5, q.H * 0.5, '#ffc0d8', { dl: 90 });
    q.meteor(q.W * 0.08, q.H * 0.72, q.W * 0.5, q.H * 0.5, '#e08ab0', { dl: 180 });
    q.meteor(q.W * 0.92, q.H * 0.72, q.W * 0.5, q.H * 0.5, '#f0a0c0', { dl: 270 });
    q.core('#ffd0e0', { sz: 10, dl: 500, to: 1.8 });
    q.ring(2, '#f0a0c0', { dl: 500, to: 1.4 });
    sChantBell(1.2); AU.tone('sine', 784, 1046, 0.7, 0.06, 200);
  },
  '以太炉心'(q) {   // 熔核呼吸 + 法阵双环 + 火星螺旋
    q.core('#ffab5e', { sz: 16, from: 0.7, to: 1.45, du: 1000, pa: 1 });
    q.ring(2, '#ffcf8a', { dash: true, from: 0.5, to: 1.25, stag: 240, du: 900 });
    q.swirl(20, '#ff9d5c', { r0: 150, spin: 300, out: 2.1, du: 950, flat: 1 });
    sPower(); AU.tone('sine', 220, 330, 0.8, 0.08);
  },
  '万毒之源'(q) {   // 毒瘴翻涌 + 萤绿滴落
    q.burst(10, '#7bd44d', { sz: 16, szV: 22, d0: 60, d1: 170, du: 1150, duV: 300, peak: 0.4, wht: 0, flat: 0.7 });
    q.curtain('#3a6620', { bottom: true, a: 0.55, h: 32 });
    q.rise(18, '#a8e86a', { h0: 160, hV: 140, du: 1200, stag: 60 });
    q.ring(1, '#7bd44d', { to: 1.8, a: 0.4 });
    sPoison(); AU.noise(0.7, 0.1, 'lowpass', 800, 300, 1);
  },
  '不灭'(q) {   // 三层青金巨盾立起
    q.ring(3, '#8ae0b0', { from: 0.3, to: 1.1, pa: 1, pk: 0.45, stag: 170, du: 900, w: 3, a: 0.9, sz: 40, step: 12 });
    q.swirl(18, '#b0f0d0', { r0: 200, spin: 180, out: 1.3, du: 1000 });
    q.rise(12, '#d0ffe8', { h0: 180, hV: 140 });
    sShield(); AU.tone('sine', 392, 523, 0.9, 0.09);
  },
  '奇点'(q) {   // 引力坍缩: 全场向心 + 白洞闪
    q.swirl(48, '#ffffff', { in: true, r0: 340, spin: 400, du: 520, stag: 18 });
    q.core('#ffffff', { sz: 14, from: 0.2, to: 2.6, du: 620, dl: 420 });
    q.ring(2, '#e8f0ff', { from: 1.6, to: 0.3, du: 620, dl: 380 });
    sExplode(); AU.tone('sine', 1200, 2400, 0.5, 0.05, 380);
  },
  '永夜君主'(q) {   // 日食暗冕 + 夜幕垂落 + 星点熄灭
    q.core('#5a4ae0', { dark: true, sz: 24, from: 0.5, to: 1.2, du: 1100, pa: 1 });
    q.curtain('#0c0820', { a: 0.7, h: 34, du: 1200 });
    q.swirl(24, '#7a6ae8', { r0: 280, spin: 200, ccw: true, du: 1100 });
    q.burst(12, '#b0a8ff', { d0: 200, d1: 160, du: 500, peak: 0.15 });   // 亮后即灭
    AU.tone('sine', 55, 40, 1.1, 0.2); AU.noise(0.9, 0.07, 'lowpass', 500, 160, 1);
  },
  '永昼斩'(q) {   // 极亮水平斩 + 暖白昼光浸屏
    q.beam(0, '#ffe9a8', { h: 11, glow: 44, du: 560 });
    q.beam(-12, '#fff6dc', { h: 4, dl: 130, dir: -1 });
    q.curtain('#ffedb8', { bottom: true, a: 0.6, h: 40, du: 900 });
    q.shard(22, ['#ffffff', '#ffe9a8', '#ffd88a'], { dl: 120, d1: 280 });
    sSlash(1.5); sChantBell(1.6); setTimeout(() => sChantBell(2), 200);
  },
  '噬月'(q) {   // 银月高悬 + 紫影蚕食环绕
    q.core('#c8cce8', { sz: 15, top: '36%', from: 0.4, to: 1, du: 900, pa: 0.9 });
    q.core('#2a1a4a', { sz: 14, top: '36%', from: 0.1, to: 0.95, du: 950, dl: 260, pa: 0.95 });
    q.swirl(22, '#7a5ae0', { r0: 190, spin: 300, ccw: true, du: 950, dl: 200 });
    q.curtain('#1a1030', { a: 0.5 });
    AU.tone('sine', 196, 130, 1.0, 0.12); sChantBell(0.6);
  },
  '黎明觉醒'(q) {   // 地平线光带升起 + 金橙放射
    q.pillar('#ffd88a', { w: 46, a: 0.4, du: 950 });
    q.curtain('#ffcf8a', { bottom: true, a: 0.65, h: 36, du: 1100 });
    q.rise(28, '#ffe9b8', { top: 80, h0: 260, hV: 220, stag: 36 });
    q.ring(2, '#ffd88a', { top: '62%', to: 1.8 });
    sWin(); AU.tone('sine', 523, 1046, 0.9, 0.07, 100);
  },
  '荆棘王座'(q) {   // 荆棘藤刺破土丛生
    q.P(12, k => ({
      left: (12 + k * 6.8) + '%', top: '96%', width: '4px', height: (60 + Math.random() * 70).toFixed(0) + 'px',
      background: 'linear-gradient(180deg, #d0ffc8, #5a9e50)',
      clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
      boxShadow: '0 0 10px rgba(123, 212, 138, 0.7)', opacity: '0',
      transform: 'rotate(' + (-24 + Math.random() * 48).toFixed(0) + 'deg)',
    }), k => [
      { transform: 'translateY(0) rotate(' + (-24 + k * 4) + 'deg) scaleY(0.1)', opacity: 0 },
      { opacity: 1, offset: 0.3 },
      { transform: 'translateY(-' + (140 + Math.random() * 160).toFixed(0) + 'px) rotate(' + (-24 + k * 4) + 'deg) scaleY(1)', opacity: 0.9 },
      { transform: 'translateY(-' + (220 + Math.random() * 120).toFixed(0) + 'px) rotate(' + (-24 + k * 4) + 'deg)', opacity: 0 },
    ], k => ({ duration: 700 + Math.random() * 300, delay: k * 55, easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)' }));
    q.burst(16, '#7bd48a', { d1: 220, dl: 300 });
    sGrowl(); AU.noise(0.5, 0.09, 'bandpass', 300, 1200, 1.4);
  },
  '双子星'(q) {   // 双星交缠对撞 → 交汇爆闪
    q.meteor(q.W * 0.1, q.H * 0.2, q.W * 0.5, q.H * 0.5, '#ffe08a', { len: 220 });
    q.meteor(q.W * 0.9, q.H * 0.2, q.W * 0.5, q.H * 0.5, '#b0c8ff', { len: 220, dl: 60 });
    q.core('#ffffff', { sz: 12, dl: 480, from: 0.2, to: 2 });
    q.burst(26, '#ffe9a8', { dl: 480, d1: 280 });
    q.ring(2, '#ffe08a', { dl: 520, to: 1.6 });
    sChantBell(1.2); setTimeout(() => sChantBell(1.8), 460); sExplode();
  },
  '雷鸣神核'(q) {   // 雷核成型 + 六方电弧 + 环状冲击
    q.core('#b49ff0', { sz: 13, pa: 1, du: 800 });
    [18, 32, 44, 56, 68, 82].forEach((x, k) => q.bolt(x, '#c9b0ff', { dl: k * 70, w: 34, h: 66, du: 400 }));
    q.ring(3, '#b49ff0', { from: 0.4, to: 2, stag: 100, du: 700 });
    q.burst(20, '#d8c8ff', { dl: 200, d1: 240 });
    sThunder(); setTimeout(sThunder, 110); setTimeout(sThunder, 240);
  },
};

// 分段咏唱蓄势段: 微粒向忆词中心汇聚(招式名段前的蓄力感)
function chantGatherFx(root, col) {
  const layer = root.querySelector('.ch-fx');
  if (!layer) return;
  const W = window.innerWidth, H = window.innerHeight;
  for (let k = 0; k < 10; k++) {
    const a = Math.random() * Math.PI * 2;
    const d = document.createElement('div');
    d.style.cssText = 'position:absolute;left:50%;top:50%;width:4px;height:4px;border-radius:50%;' +
      'background:' + col + ';box-shadow:0 0 8px ' + col + ';opacity:0;pointer-events:none;';
    layer.appendChild(d);
    const dist = 140 + Math.random() * 200;
    d.animate([
      { transform: 'translate(' + Math.cos(a) * dist + 'px,' + Math.sin(a) * dist * 0.6 + 'px) scale(1)', opacity: 0 },
      { opacity: 0.85, offset: 0.3 },
      { transform: 'translate(0px,0px) scale(0.3)', opacity: 0 },
    ], { duration: 520 + Math.random() * 200, delay: k * 40, easing: 'cubic-bezier(0.3, 0.6, 0.3, 1)' });
  }
}

// ================= 咏唱背景特效(每卡独立: 类型 + 配色 + 变体) =================
// k: slash/thunder/void/shield/holy/rune; c: 主色; v: 变体
const CHANT_FX = {
  // ---- 大招组 ----
  '界核重击': { k: 'slash', c: '#ffc86e', v: 'h' },
  '灭界一击': { k: 'slash', c: '#8fb8ff', v: 'x' },
  '处刑宣告': { k: 'slash', c: '#ff6b6b', v: 'v' },
  '雷界崩落': { k: 'storm', c: '#ffe08a', v: 3 },
  '献祭':    { k: 'memory', c: '#ff9d5c' },
  '万象终焉': { k: 'slash', c: '#e8e4ff', v: 'x' },
  '终焉回响': { k: 'memory', c: '#8f9ff0', v: 'expand' },
  '以太湮灭': { k: 'void', c: '#4dc9ff' },
  '神罚':    { k: 'thunder', c: '#fff4d0', v: 3 },
  '万界裂解': { k: 'slash', c: '#b44dff', v: 'x' },
  '燃命之怒': { k: 'slash', c: '#ff8a5c', v: 'd1' },
  '永昼斩':  { k: 'slash', c: '#ffe9a8', v: 'h' },
  '噬月':    { k: 'void', c: '#7a5ae0' },
  // ---- 技能/权能 ----
  '不死鸟':   { k: 'holy', c: '#ffb84d', v: 'pillar' },
  '绝对防御': { k: 'shield', c: '#8cd2ff', v: 'hex' },
  '未来视':   { k: 'prism', c: '#6ee0f0', v: 'expand' },
  '战斗记忆': { k: 'memory', c: '#ff9d8a', v: 'motes' },
  '澪奈的决意': { k: 'memory', c: '#6a9ee8', v: 'ring' },
  '澪奈的执念': { k: 'memory', c: '#a87ae0', v: 'ring' },
  '命运重构': { k: 'prism', c: '#ffd24d', v: 'implode' },
  '命运丝线': { k: 'prism', c: '#f0a0c0', v: 'expand' },
  '黎明觉醒': { k: 'memory', c: '#ffd88a', v: 'pillar' },
  '以太涌流': { k: 'holy', c: '#4dc9ff', v: 'motes' },
  '过载充能': { k: 'storm', c: '#6ee0f0', v: 2 },
  '时空裂隙': { k: 'prism', c: '#5ad0c0', v: 'implode' },
  '以太炉心': { k: 'rune', c: '#ffab5e', v: 'expand' },
  '万毒之源': { k: 'void', c: '#7bd44d' },
  '不灭':     { k: 'holy', c: '#8ae0b0', v: 'motes' },
  '弑神者':   { k: 'slash', c: '#e05555', v: 'd2' },
  '生命契约': { k: 'holy', c: '#f0a0b8', v: 'motes' },
  '永夜君主': { k: 'void', c: '#5a4ae0' },
  '荆棘王座': { k: 'shield', c: '#7bd48a', v: 'hex' },
  '双子星':   { k: 'storm', c: '#ffe08a', v: 2 },
  '雷鸣神核': { k: 'storm', c: '#b49ff0', v: 3 },
  '奇点':     { k: 'prism', c: '#ffffff', v: 'implode' },
  '精灵祝福': { k: 'holy', c: '#a8f0c8', v: 'motes' },
  '侵蚀之雾': { k: 'void', c: '#8ad44d' },
  '镜面反姿': { k: 'prism', c: '#e8f0ff', v: 'ring' },
  // ---- 重击普攻 ----
  '坠星重击': { k: 'slash', c: '#ffc86e', v: 'd1' },
  '残月击':   { k: 'slash', c: '#a8c8f8', v: 'h' },
  '断界重劈': { k: 'slash', c: '#8fb8ff', v: 'v' },
  '陨铁拳':   { k: 'slash', c: '#d8a878', v: 'h' },
  '裂解重锤': { k: 'slash', c: '#b44dff', v: 'x' },
  '星雨坠落': { k: 'holy', c: '#cfe0ff', v: 'motes' },
  // ---- 幻忆补全 ----
  '星尘旋斩': { k: 'slash', c: '#cfe0ff', v: 'x' },
  '终焉处决': { k: 'slash', c: '#e05555', v: 'v' },
  '虚无爆裂': { k: 'void', c: '#a86ee0' },
  '虚无洪流': { k: 'void', c: '#5a6ee0' },
  '蚀心咒':   { k: 'void', c: '#6ec84d' },
  '弃牌风暴': { k: 'rune', c: '#b49ff0', v: 'expand' },
  '屏障冲击': { k: 'shield', c: '#6a9ee8', v: 'ring' },
  '蚀骨潮':   { k: 'void', c: '#4dc9a8' },
  '棘牙':     { k: 'shield', c: '#9be8ff', v: 'hex' },
  '万剑归潮': { k: 'slash', c: '#4dc9ff', v: 'x' },
  '辉昼盾':   { k: 'shield', c: '#ffd88a', v: 'hex' },
  '梦甲':     { k: 'shield', c: '#b49ff0', v: 'ring' },
  '以太暴走': { k: 'storm', c: '#6ee0f0', v: 2 },
  '星棘护甲': { k: 'shield', c: '#a8e8ff', v: 'hex' },
  '循环记忆': { k: 'memory', c: '#5ad0c0', v: 'expand' },
  '吸血獠牙': { k: 'holy', c: '#ff8a9a', v: 'motes' },
  '巨人猎手': { k: 'slash', c: '#ffc86e', v: 'd2' },
  '双重奏':   { k: 'thunder', c: '#ffe08a', v: 2 },
  '毒经':     { k: 'void', c: '#7bd44d' },
  '界域行者': { k: 'rune', c: '#8f9ff0', v: 'expand' },
  '梦貘':     { k: 'holy', c: '#c9a8ff', v: 'motes' },
};
function chantFxOpt(card) {
  if (CHANT_FX[card.name]) return CHANT_FX[card.name];
  if (card.poison || card.poisonBurst) return { k: 'void', c: '#a86ee0' };
  if (card.type === 'power') return { k: 'rune', c: '#b49ff0', v: 'expand' };
  if (card.heal) return { k: 'holy', c: '#ffe9b8', v: 'motes' };
  if (card.block && !card.dmg) return { k: 'shield', c: '#8cd2ff', v: 'hex' };
  return { k: 'slash', c: '#cfe0ff', v: 'd1' };
}
// 玻璃碎裂: 中频裂纹 + 厚实的玻璃体"铛"声 + 少量中高频碎片(不再刺耳)
function sGlass(p, delay) {
  p = p || 1;
  const d0 = delay || 0;
  AU.noise(0.05, 0.16 * Math.min(1, p), 'bandpass', 2400, 1400, 1.1, d0);
  [520, 730, 990].forEach((f, i) =>
    AU.tone('triangle', f * (0.92 + Math.random() * 0.16), f * 0.5,
      0.1 + Math.random() * 0.06, 0.13 * Math.min(1, p), d0 + i * 16 + Math.random() * 8));
  const n = Math.round(6 * p);
  for (let i = 0; i < n; i++) {
    const f = 1100 + Math.random() * 2600;
    AU.tone('sine', f, f * (0.5 + Math.random() * 0.5),
      0.04 + Math.random() * 0.09, (0.035 + Math.random() * 0.04) * Math.min(1.2, p), d0 + 20 + Math.random() * 130);
  }
}
function sShield() {
  [523, 659, 784].forEach((f, i) => AU.tone('sine', f, f * 1.01, 0.26, 0.1, i * 60));
  AU.tone('sine', 1568, 1568, 0.2, 0.045, 170);
}
function sBuff() {
  AU.tone('sine', 660, 660, 0.16, 0.09);
  AU.tone('sine', 880, 880, 0.2, 0.075, 90);
}
function sPoison() {
  AU.tone('sine', 520, 240, 0.14, 0.14);
  AU.tone('sine', 390, 200, 0.16, 0.11, 70);
  AU.noise(0.18, 0.1, 'lowpass', 900, 400, 1);
}
function sGrowl() {
  AU.tone('sawtooth', 82, 44, 0.28, 0.2);
  AU.noise(0.22, 0.12, 'lowpass', 240, 100, 1);
}
function sHurt() { sGrowl(); sHit(); }
function sCoin() {
  AU.tone('triangle', 1319, 1310, 0.09, 0.13);
  AU.tone('triangle', 1976, 1968, 0.12, 0.1, 65);
}
function sPower() {
  [523, 659, 784, 1047].forEach((f, i) => AU.tone('sine', f, f * 1.25, 0.22, 0.11, i * 65));
  AU.noise(0.28, 0.05, 'highpass', 6200, 7500, 1, 40);
}
function sWin()  { [523, 659, 784, 1047].forEach((f, i) => AU.tone('sine', f, f, 0.32, 0.16, i * 95)); }
function sLose() { [330, 262, 196].forEach((f, i) => AU.tone('sine', f, f * 0.92, 0.42, 0.16, i * 160)); }
function sTick(p) { AU.tone('square', 900 * (p || 1), 750 * (p || 1), 0.025, 0.05); }
function sSwish(d) { AU.noise(d || 0.14, 0.16, 'bandpass', 700, 3200, 0.9); }
function sDraw() { sSwish(0.07); }
function sFan()  { sSwish(0.16); }

// ================= 语义绑定(兼容旧接口) =================
function initAudio() { AU.init(); VIZ.ensureAnalyser(); }
const sfxWhoosh = () => sSwish(0.12);
const sfxHit    = sHit;
const sfxTick   = sTick;
const sfxBlock  = sShield;
const sfxDraw   = sDraw;
const sfxPoison = sPoison;
const sfxPower  = sPower;
const sfxGrowl  = sGrowl;
const sfxHurt   = sHurt;
const sfxWin    = sWin;
const sfxLose   = sLose;
const sfxCoin   = sCoin;
const sfxEndTurn = sClick;
const sfxFan    = sFan;
const sfxShuffle = () => sSwish(0.3);
const sfxClick  = sClick;
let _selT = 0;
const sfxSelect = () => {
  const n = performance.now();
  if (n - _selT < 70) return;
  _selT = n; sSelect();
};
let _hovT = 0;
const sfxHover  = () => {
  const n = performance.now();
  if (n - _hovT < 110) return;
  _hovT = n; sSelect();   // 悬停: 沿用选牌细脆音
};
// 兼容: 面板开合音
const _sfxPanel = sClick;

// ---------- 卡牌音效 ----------
function sfxForCard(card) {
  if (card.type === 'attack') {
    const times = card.hits || 1;
    for (let h = 0; h < times; h++)
      setTimeout(() => { sSlash(1 + h * 0.12); sHit(); }, h * 130);
    if (card.poisonBurst) setTimeout(sExplode, 60);
    if (card.name === '界核重击' || card.name === '万象终焉' || card.name === '神罚') setTimeout(sExplode, 40);
  } else if (card.type === 'power') sPower();
  else if (card.block) sShield();
  else sBuff();
}

// ================= 牌组与抽取 =================
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function findCard(name) { return CARD_POOL.find(c => c.name === name); }

function rollCard(weights) {
  let total = 0;
  for (const k in weights) total += weights[k];
  let r = Math.random() * total, rarity = 'C';
  for (const k in weights) { r -= weights[k]; if (r <= 0) { rarity = k; break; } }
  let pool = CARD_POOL.filter(c => c.rarity === rarity && isUnlocked(c.name));
  if (!pool.length) pool = CARD_POOL.filter(c => c.rarity === rarity);
  return pool[(Math.random() * pool.length) | 0];
}

function rollCardOf(rarity, unlockedOnly) {
  let pool = CARD_POOL.filter(c => c.rarity === rarity && (!unlockedOnly || isUnlocked(c.name)));
  if (!pool.length) return null;
  return pool[(Math.random() * pool.length) | 0];
}

function handCap() {
  return Math.min(HAND_MAX, 5 + (state.powers.draw ? 1 : 0) + (state.powers.mastery ? 1 : 0));
}

function drawCard() {
  if (state.hand.length >= handCap()) return;
  if (state.deck.length === 0) {
    state.deck = _tut ? state.discard.slice().reverse() : shuffle(state.discard);   // 教学: 重洗也固定序(按打出顺序回放)
    state.discard = [];
    logMsg('记忆在指尖重新聚拢……', 'lb');
  }
  if (state.deck.length > 0) state.hand.push(state.deck.pop());
}

// ================= 共鸣(组合)系统 =================
function calcResonance(deck) {
  const res = [];
  if (deck.filter(c => c.tag === 'void').length >= 3)
    res.push({ key: 'voidRes', name: '虚无共鸣', desc: '施加的侵蚀层数+1' });
  if (deck.filter(c => c.tag === 'flurry').length >= 3)
    res.push({ key: 'flurryRes', name: '星雨共鸣', desc: '每回响第一张攻击牌伤害+3' });
  if (deck.filter(c => c.type === 'power').length >= 2)
    res.push({ key: 'powerRes', name: '权能共鸣', desc: '本场战斗以太上限+1' });
  return res;
}
function hasRes(k) { return state.resonance.some(r => r.key === k); }
function poisonGain(n) { return n + (hasRes('voidRes') ? 1 : 0); }

// ================= 小细节: 澪奈台词 / 纸飞机 / 彩蛋 =================
const QUIPS = {
  start: ['这次一定要回去。', '又能听见自己的心跳了……走吧。', '路还记得，别想丢下我。', '深呼吸。一层一层来。'],
  lowhp: ['还不能倒下……', '疼……但还站着。', '哭着也要往前走——忘了是谁说的了。'],
  kill: ['再见，残响。', '晚安。', '下一个。'],
  night: ['好冷……', '影子，又多了吗。'],
  dawn: ['光。', '天亮了，继续。'],
};
function quip(kind, chance) {
  if (chance && Math.random() > chance) return;
  const pool = QUIPS[kind];
  if (!pool) return;
  state.quip = { text: pool[(Math.random() * pool.length) | 0], born: performance.now() };
}
let paperPlane = null;
let _titleTaps = 0;
function titleTap() {
  _titleTaps++;
  if (_titleTaps >= 5) {
    _titleTaps = 0;
    sPower();
    showTip('· 彩蛋 ·', '澪奈数过了，你点了五次。<br>她有点感动，又有点担心。', null);
  }
}
const $ = id => document.getElementById(id);
const qs = sel => typeof document.querySelector === 'function' ? document.querySelector(sel) : null;   // 无头桩防御

// ================= 管理员模式(版本号连点 5 次, 密码 114514) =================
let _verTaps = 0, _verT0 = 0;
function verTap() {   // 主菜单底部版本号: 隐蔽入口, 无提示文字
  const now = performance.now();
  if (now - _verT0 > 1200) _verTaps = 0;
  _verT0 = now;
  if (++_verTaps >= 5) {
    _verTaps = 0;
    adminGate();
  }
}
function adminGate() {
  sClick();
  const fx = document.createElement('div');
  fx.className = 'adm-fx';
  fx.innerHTML =
    '<div class="adm-veil"></div>' +
    '<div class="adm-core">' +
      '<input class="adm-pin" id="admPin" type="password" inputmode="numeric" maxlength="8" autocomplete="off" placeholder="····">' +
      '<div class="adm-hint">输错会晃一下。没有提示。</div>' +
    '</div>';
  document.body.appendChild(fx);
  const pin = fx.querySelector('#admPin');
  requestAnimationFrame(() => { fx.classList.add('go'); if (pin && pin.focus) pin.focus(); });
  const close = () => { fx.classList.add('out'); setTimeout(() => fx.remove(), 300); };
  fx.addEventListener('click', e => { if (e.target === fx || e.target.classList.contains('adm-veil')) close(); });
  const tryPin = () => {
    if (pin.value === '114514') {
      close();
      setTimeout(adminPanel, 320);
    } else {
      pin.value = '';
      fx.classList.remove('shake');
      void fx.offsetWidth;
      fx.classList.add('shake');
    }
  };
  pin.addEventListener('keydown', e => { if (e.key === 'Enter') tryPin(); e.stopPropagation(); });
  pin.addEventListener('click', e => e.stopPropagation());
}
function adminPanel() {
  initAudio();
  const SFX = [
    ['sSelect', '选牌（细脆）'], ['sClick', '点击确认（圆润）'], ['sCardPlay', '打牌（啪）'], ['sSwish', '扫风'],
    ['sSlash', '挥砍'], ['sHit', '命中'], ['sExplode', '爆炸'], ['sGlass', '碎裂（玻璃）'], ['sShield', '护罩'],
    ['sBuff', '增益'], ['sPoison', '侵蚀'], ['sGrowl', '嘶吼'], ['sHurt', '受击'], ['sCoin', '结晶'],
    ['sPower', '权能'], ['sWin', '胜利'], ['sLose', '失败'], ['sTick', '滴答'], ['sDraw', '抽牌'], ['sFan', '发牌'],
    ['sChantDrone', '咏唱氛围（长鸣）'], ['sChantBell', '忆词落音（钟）'], ['sChantRelease', '咏唱释放'],
    ['sSpawn', '敌人登场'], ['sStamp', '印章'], ['sThunder', '落雷'],
  ];
  const chantCards = CARD_POOL.filter(c => CHANTS[c.name]);
  const RN = { C: '凡忆', R: '烁忆', E: '幻忆', L: '源忆' };
  const fx = document.createElement('div');
  fx.className = 'adm-fx adm-panel';
  fx.innerHTML =
    '<div class="adm-veil"></div>' +
    '<div class="adm-core">' +
      '<h2 class="adm-title">管理员</h2>' +
      '<div class="adm-tabs">' +
        '<button class="adm-tab on" data-t="sfx">音效台</button>' +
        '<button class="adm-tab" data-t="chant">忆词演出</button>' +
      '</div>' +
      '<div class="adm-body" id="admBody"></div>' +
      '<div class="adm-foot"><button class="adm-close">关闭</button></div>' +
    '</div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
  const body = fx.querySelector('#admBody');
  const renderSfx = () => {
    body.innerHTML = SFX.map(s =>
      '<div class="adm-row"><button class="adm-play" data-fn="' + s[0] + '">▶</button>' +
      '<span class="adm-name">' + s[0] + '</span><span class="adm-desc">' + s[1] + '</span></div>').join('');
    body.querySelectorAll('.adm-play').forEach(b => {
      b.onclick = () => {
        initAudio();
        const keepSfx = SETTINGS.sfx;
        SETTINGS.sfx = true;   // 管理员台就是要听, 临时旁路静音
        const fn = window[b.dataset.fn];
        if (fn) { try { fn(); } catch (e) { console.warn(b.dataset.fn, e); } }
        setTimeout(() => { SETTINGS.sfx = keepSfx; }, 120);
      };
    });
  };
  const renderChant = () => {
    body.innerHTML = ['L', 'E', 'R', 'C'].map(rar => {
      const grp = chantCards.filter(c => c.rarity === rar);
      if (!grp.length) return '';
      return '<div class="adm-sec">' + RN[rar] + ' · ' + grp.length + '</div><div class="adm-grid">' +
        grp.map(c => '<button class="adm-chip" data-n="' + c.name + '" style="--brc:' + (CHANT_BRC[c.rarity] || '#cfe0ff') + '">' +
          c.name + '<span class="adm-chipwd">' + chantLines(c).join('→') + '</span></button>').join('') + '</div>';
    }).join('');
    body.querySelectorAll('.adm-chip').forEach(b => {
      b.onclick = () => {
        initAudio();
        const c = CARD_POOL.find(x => x.name === b.dataset.n);
        if (!c) return;
        fx.classList.add('peek');   // 演出期间面板隐去(chant-fx z60 在面板 z80 之下), 播完恢复
        runChant(c, chantLevel(c) || 'full', () => {
          setTimeout(() => fx.classList.remove('peek'), 350);   // 等遮罩揭开再浮回
        });
      };
    });
  };
  renderSfx();
  fx.querySelectorAll('.adm-tab').forEach(t => {
    t.onclick = () => {
      fx.querySelectorAll('.adm-tab').forEach(x => x.classList.remove('on'));
      t.classList.add('on');
      if (t.dataset.t === 'sfx') renderSfx(); else renderChant();
    };
  });
  fx.querySelector('.adm-close').onclick = () => { sClick(); fx.classList.add('out'); setTimeout(() => fx.remove(), 300); };
}

const THEME = {
  '#ffd24d': '#e0a030', '#ff5555': '#d84a4a', '#7fd4ff': '#3d9bd8',
  '#7bd44d': '#5da545', '#ff6b6b': '#e05555', '#b8b8d0': '#8a8aa8',
  '#9be8ff': '#4aa8dd', '#b44dff': '#9a55e0', '#ff9d5c': '#e08030',
  '#4dc9ff': '#3d9bd8', '#888888': '#999999',
};
function theme(c) { return THEME[c] || c; }

function addFeedback(text, color, xFrac) {
  const fx = $('fx');
  if (fx.children.length > 12) fx.removeChild(fx.firstChild);
  const d = document.createElement('div');
  d.className = 'dmg-float';
  d.textContent = text;
  d.style.color = theme(color);
  d.style.left = 'calc(' + ((xFrac || 0.5) * 100 + (Math.random() * 6 - 3)) + '% - 60px)';
  d.style.top = (36 + Math.random() * 8) + '%';
  fx.appendChild(d);
  setTimeout(() => d.remove(), 950);
}

function logMsg(text, cls) {
  const l = $('log');
  const d = document.createElement('div');
  if (cls) d.className = cls;
  d.textContent = text;
  l.appendChild(d);
  while (l.children.length > 40) l.removeChild(l.firstChild);
  l.scrollTop = l.scrollHeight;
}

function showBanner(text) {
  const b = $('banner');
  b.textContent = text;
  b.classList.remove('show');
  void b.offsetWidth;
  b.classList.add('show');
}

function flashVignette() {
  const v = $('vignette');
  v.classList.add('hit');
  setTimeout(() => v.classList.remove('hit'), 90);
}

function hitstop(ms) { state.hitstop = Math.max(state.hitstop, performance.now() + ms); }

function spawnParticles(xFrac, color, n, spread) {
  if (!SETTINGS.fx) return;
  const W = canvas.width, H = canvas.height;
  const dp = devicePixelRatio;
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const sp = (2 + Math.random() * (spread || 6)) * dp;
    state.particles.push({
      x: xFrac * W, y: (H - 210 * dp) * 0.46,
      vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 2 * dp,
      r: (2 + Math.random() * 3) * dp,
      color: theme(color), born: performance.now(), life: 500 + Math.random() * 300,
    });
  }
}

function flyCard(handIndex, card) {
  const el = document.querySelectorAll('#hand .card')[handIndex];
  if (!el) return;
  const r = el.getBoundingClientRect();
  const c = el.cloneNode(true);
  c.className = el.className.replace(' deal', '') + ' fly-card';
  c.style.left = r.left + 'px';
  c.style.top = r.top + 'px';
  document.body.appendChild(c);
  const tgt = card.type === 'attack' ? (curEnemy() ? curEnemy().x : 0.8) : 0.16;
  const toX = tgt * window.innerWidth - r.left - r.width / 2;
  const toY = 0.38 * window.innerHeight - r.top - r.height / 2;
  const midX = toX * 0.5;
  const midY = toY * 0.5 - 110;
  c.animate([
    { transform: 'translate(0px, 0px) rotateY(0deg) scale(1)', opacity: 1 },
    { transform: 'translate(' + midX + 'px,' + midY + 'px) rotateY(540deg) scale(1.3)', opacity: 1, offset: 0.55 },
    { transform: 'translate(' + toX + 'px,' + toY + 'px) rotateY(720deg) scale(1.1)', opacity: 0.85 },
  ], { duration: 300, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'forwards' });
  setTimeout(() => c.remove(), 315);
}

// ================= 出牌 =================
function playCard(i) {
  if (!state.started || state.gameOver || state.busy) return;
  const card = state.hand[i];
  if (!card) return;
  if (_tut) {   // 引导锁定: 仅放行当前步骤指定的卡
    const a = tutAllow();
    if (!a || !a.play || (a.play !== 'any' && card.name !== a.play)) { tutDeny(); return; }
  }
  if (state.energy < card.cost) { addFeedback('以太不足', '#888', 0.5); return; }
  if (card.type === 'attack' && !curEnemy()) return;
  state.energy -= card.cost;

  if (AU.ctx && AU.ctx.state !== 'running') AU.ctx.resume();
  state.busy = true;
  const lv = SETTINGS.chant ? chantLevel(card) : null;
  if (!lv) { flyCard(i, card); sfxWhoosh(); }
  const el = handEls.get(card.uid);
  if (el) {
    el._leaving = true;
    el.style.opacity = '0';
    el.style.transform += ' scale(1.12)';
    setTimeout(() => { el.remove(); handEls.delete(card.uid); }, 200);
  }
  state.hand.splice(i, 1);
  if (_tut) { _tut.lastPlayed = card.name; }   // 引导步骤验证用
  updateHud();
  logMsg('澪奈 打出「' + card.name + '」');

  if (lv) runChant(card, lv, () => settleCard(card));
  else setTimeout(() => settleCard(card), 290);
}

function settleCard(card) {
  applyCard(card);
  if (card.exhaust || card.type === 'power' || cardGrp(card) === 'u') state.exhaustPile.push(card);
  else state.discard.push(card);
  state.busy = false;
  updateHud();
}

// ================= 咏唱演出(静止系全屏忆词) =================
// full=大招: 黑边+暗场+逐句忆词+长音; short=强技能: 单句短咏; micro=重击一词一闪
const CHANT_BRC = { C: '#c9c9de', R: '#4dc9ff', E: '#c07aff', L: '#ffd24d' };   // 括号按稀有度分色(凡银白/烁湛蓝/幻幽紫/源鎏金)
function runChant(card, lv, done) {
  const lines = chantLines(card);
  const fxo = chantFxOpt(card);
  const root = document.createElement('div');
  root.className = 'chant-fx lv-' + lv;
  root.innerHTML =
    '<div class="ch-bar top"></div><div class="ch-bar bot"></div>' +
    '<div class="ch-veil"></div>' +
    '<div class="ch-fx"></div>' +
    '<div class="ch-inner">' +
      (lines.length > 1 ? '' :   // 分段递进: 段元素由 JS 逐段挂载
      '<div class="ch-line" style="--i:0">' +
        '<span class="ch-br L">「</span><span class="ch-word">' +
        Array.from(lines[0]).map((ch, ci) => '<span style="--ci:' + ci + '">' + ch + '</span>').join('') +
        '</span><span class="ch-br R">」</span></div>') +
    '</div>' +
    '<div class="ch-flash"></div>';
  root.style.setProperty('--brc', CHANT_BRC[card.rarity] || fxo.c);   // 括号按稀有度分色
  document.body.appendChild(root);
  root.querySelectorAll('.ch-line').forEach(line => {   // 量词宽, 括号闭合位移=词半宽+间距
    const w = line.querySelector('.ch-word');
    if (!w || !w.offsetWidth) return;
    line.style.setProperty('--closed', Math.round(w.offsetWidth / 2 + 34) + 'px');
  });
  void root.offsetWidth;
  root.classList.add('go');
  if (lines.length > 1) { runChantStaged(root, lines, card, fxo, done); return; }   // 分段递进咏唱

  const D = cardGrp(card) === 'u' ? { resolve: 1950 } : { resolve: 1500 };   // 大招完整节奏, 其余稍紧凑
  sChantDrone(D.resolve / 1000 + 0.2);
  setTimeout(() => sChantBell(1), 480);
  setTimeout(() => AU.noise(0.55, 0.16, 'bandpass', 480, 4200, 1.5), D.resolve - 560);   // 释放前上升音
  setTimeout(() => chantStrokeFx(root, chantFxOpt(card)), D.resolve - 430);             // 忆词毕, 背景特效
  setTimeout(() => {
    root.classList.add('flash');
    sChantRelease(lv);
    if (lv === 'full') {   // 释放震屏 + 推近
      state.shake = Math.max(state.shake || 0, 0.7);
      state.zoomK = Math.max(state.zoomK || 0, 0.12);
    }
    setTimeout(() => root.classList.add('out'), 80);   // 白闪一散就揭开遮罩
    setTimeout(done, 220);                             // 结算时战场已可见, 攻击动画完整呈现
    setTimeout(() => root.remove(), 720);
  }, D.resolve);
}

// 分段递进咏唱(源忆专属): 蓄势短词逐段登场 → 招式名收束, 一段一幕互不堆叠
function runChantStaged(root, lines, card, fxo, done) {
  const inner = root.querySelector('.ch-inner');
  const n = lines.length;
  const step = n > 3 ? 0.66 : 0.78;                    // 段间节奏(蓄势段)
  const resolve = (step * (n - 1) + 1.05) * 1000;      // 招式名段停留稍长再接释放
  sChantDrone(resolve / 1000 + 0.2);
  let cur = null;
  function showStage(i) {
    const last = i === n - 1;
    const line = document.createElement('div');
    line.className = 'ch-line staged' + (last ? ' finale' : '');
    line.innerHTML =
      '<span class="ch-br L">「</span><span class="ch-word">' +
      Array.from(lines[i]).map((ch, ci) => '<span style="--ci:' + ci + '">' + ch + '</span>').join('') +
      '</span><span class="ch-br R">」</span>';
    inner.appendChild(line);
    const w = line.querySelector('.ch-word');
    if (w && w.offsetWidth) line.style.setProperty('--closed', Math.round(w.offsetWidth / 2 + 34) + 'px');
    requestAnimationFrame(() => requestAnimationFrame(() => line.classList.add('go')));
    if (cur) { cur.classList.add('bye'); const old = cur; setTimeout(() => old.remove(), 300); }   // 前段整段消散
    cur = line;
    sChantStep(i);   // 蓄势: 五声水晶音阶逐段上行(音量随段微增)
    if (!last) { chantGatherFx(root, fxo.c); sChantGather(i); }   // 蓄势段: 微粒向中心汇聚 + 收束音
    if (last) {
      sChantBell(1);
      setTimeout(() => sChantBell(1.5), 130);                     // 招式名段: 钟声叠五度泛音
      AU.tone('sine', 98, 142, 0.9, 0.09);                        // 低衬上行, 托住招式名
      setTimeout(() => chantFinaleFx(root, card), 520);           // v17.1: 终段特效(按挂载点相对计时; 旧写法 resolve-430 是相对咏唱起点, 从段挂载点排程会晚到 root 移除之后, 特效从未触发)
    } else {
      setTimeout(() => showStage(i + 1), step * 1000);
    }
  }
  setTimeout(() => showStage(0), 60);
  setTimeout(() => AU.noise(0.55, 0.16, 'bandpass', 480, 4200, 1.5), resolve - 560);   // 释放前上升音
  setTimeout(() => {
    root.classList.add('flash');
    sChantRelease('full');
    sChantBell(2);                                     // 释放瞬间: 高八度水晶泛音收尾
    AU.tone('triangle', 1568, 1568, 0.8, 0.05, 60);    // 三角泛音微延迟, 增加释放光泽
    state.shake = Math.max(state.shake || 0, 0.7);
    state.zoomK = Math.max(state.zoomK || 0, 0.12);
    setTimeout(() => root.classList.add('out'), 80);
    setTimeout(done, 220);                             // done 结算时机与单段一致
    setTimeout(() => root.remove(), 720);
  }, resolve);
}

function quickPlay(i) {
  if (!state.started || state.gameOver || state.busy) return;
  if (i < 0 || i >= state.hand.length) return;
  if (state.focus !== i) {
    setFocus(i);
    setTimeout(() => playCard(i), 150);
  } else {
    playCard(i);
  }
}

function applyCard(card) {
  sfxForCard(card);
  if (card.rarity === 'L') {   // 源忆解放
    spawnParticles(0.5, '#ffd24d', 22, 9);
    addFeedback('源忆解放!', '#ffd24d', 0.5);
  }
  if (card.selfDmg) {
    state.hp -= card.selfDmg;
    addFeedback('燃烧 ' + card.selfDmg + ' 生命', '#ff9d5c', 0.16);
    spawnParticles(0.16, '#ff9d5c', 8, 4);
    if (state.hp <= 0) { state.hp = 0; lose(); return; }
  }

  // 献祭: 消耗随机手牌换伤害(先于攻击结算)
  if (card.sacrifice && state.hand.length > 0) {
    const idx = (Math.random() * state.hand.length) | 0;
    const sac = state.hand.splice(idx, 1)[0];
    state.exhaustPile.push(sac);
    state._sacDmg = sac.cost * card.sacrifice;
    addFeedback('献祭「' + sac.name + '」', '#ff9d5c', 0.5);
    logMsg('献祭了「' + sac.name + '」，换取 ' + state._sacDmg + ' 点力量', 'lh');
  }
  if (card.type === 'attack') resolveAttack(card);
  state._sacDmg = 0;

  if (card.block)     { state.block += card.block; addFeedback('+' + card.block + ' 屏障', '#7fd4ff', 0.16); spawnParticles(0.16, '#7fd4ff', 8, 3); }
  if (card.poison && card.type !== 'attack') {
    const targets = card.aoe ? state.enemies.filter(e => e.alive) : [curEnemy()].filter(Boolean);
    targets.forEach(e => {
      e.poison += poisonGain(card.poison);
      addFeedback('侵蚀 +' + poisonGain(card.poison), '#7bd44d', e.x);
      spawnParticles(e.x, '#7bd44d', 8, 3);
      if (state.powers.poisonHeal) heal(1);
    });
    sfxPoison();
  }
  if (card.vuln)      {
    const targets = card.aoe ? state.enemies.filter(x => x.alive) : [curEnemy()].filter(Boolean);
    targets.forEach(e => { e.vuln += card.vuln; addFeedback('裂解 +' + card.vuln + '层', '#ff6b6b', e.x); });
  }
  if (card.weak)      {
    const targets = card.aoe ? state.enemies.filter(x => x.alive) : [curEnemy()].filter(Boolean);
    targets.forEach(e => { e.weak += card.weak; addFeedback('衰微 +' + card.weak + '层', '#b8b8d0', e.x); });
  }
  if (card.dmgDown)   {
    const targets = card.aoe ? state.enemies.filter(x => x.alive) : [curEnemy()].filter(Boolean);
    targets.forEach(e => { e.dmg = Math.max(1, e.dmg - card.dmgDown); addFeedback('攻击力 -' + card.dmgDown, '#8fb8e8', e.x); });
  }
  if (card.strength)  { state.strength += card.strength; addFeedback('意志 +' + card.strength, '#ffd24d', 0.16); }
  if (card.thorns)    { state.thorns += card.thorns; addFeedback('星棘 +' + card.thorns, '#9be8ff', 0.16); }
  if (card.energy)    { state.energy = Math.min(10, state.energy + card.energy); addFeedback('+' + card.energy + ' 以太', '#4dc9ff', 0.16); }
  if (card.energyNext) { state.energyNext += card.energyNext; addFeedback('下回响 +' + card.energyNext + ' 以太', '#4dc9ff', 0.16); }
  if (card.double)    { state.doubleNext = true; addFeedback('下一张攻击牌 ×2!', '#ff9d5c', 0.16); }
  if (card.heal)      { heal(card.heal); }
  // 昼夜词缀增益
  const pb = card[state.dayNight];
  if (pb) {
    addFeedback(pb === card.day ? '白昼共鸣!' : '黑夜共鸣!', '#ff9d5c', 0.5);
    if (pb.block)    { state.block += pb.block; addFeedback('+' + pb.block + ' 屏障', '#7fd4ff', 0.16); }
    if (pb.energy)   { state.energy = Math.min(10, state.energy + pb.energy); addFeedback('+' + pb.energy + ' 以太', '#4dc9ff', 0.16); }
    if (pb.draw)     { for (let k = 0; k < pb.draw; k++) drawCard(); sfxDraw(); }
    if (pb.heal)     { heal(pb.heal); }
    if (pb.strength) { state.strength += pb.strength; addFeedback('意志 +' + pb.strength, '#ffd24d', 0.16); }
    if (pb.poison)   {
      const targets = card.aoe || pb.aoe ? state.enemies.filter(e => e.alive) : [curEnemy()].filter(Boolean);
      targets.forEach(e => { e.poison += poisonGain(pb.poison); addFeedback('侵蚀 +' + poisonGain(pb.poison), '#7bd44d', e.x); });
    }
    if (pb.vuln)     { const e = curEnemy(); if (e) e.vuln += pb.vuln; }
    if (pb.weak)     { const e = curEnemy(); if (e) e.weak += pb.weak; }
  }
  if (card.daySwitch)   setPhase('day');
  if (card.nightSwitch) setPhase('night');
  if (card.cleanse)   { state.pVuln = 0; state.pWeak = 0; addFeedback('减益净化!', '#4aa8dd', 0.16); spawnParticles(0.16, '#4aa8dd', 10, 4); logMsg('澪奈 净化了自身减益', 'lb'); }
  if (card.keepBlock) { state.keepBlock = true; addFeedback('屏障将保留', '#7fd4ff', 0.16); }
  if (card.draw)      { for (let k = 0; k < card.draw; k++) drawCard(); sfxDraw(); }
  if (card.reshuffle) {
    state.deck = _tut ? state.deck.concat(state.discard.slice().reverse()) : shuffle(state.deck.concat(state.discard));   // 教学: 保持固定序
    state.discard = [];
    for (let k = 0; k < (card.draw || 2); k++) drawCard();
    addFeedback('命运重构!', '#ffd24d', 0.5);
    sfxDraw();
  }
  if (card.powerKey) {
    state.powers[card.powerKey] = true;
    if (card.powerKey === 'energy' || card.powerKey === 'mastery') state.maxEnergy += 1;
    if (card.powerKey === 'thorns') state.thorns += 4;
    if (card.powerKey === 'leech')  state.leech = 0.25;
    addFeedback('权能觉醒: ' + card.name, '#b44dff', 0.5);
    spawnParticles(0.5, '#b44dff', 16, 8);
    logMsg('权能觉醒「' + card.name + '」，永续生效', 'lb');
    sfxPower();
  }

  state.playedThisTurn++;
}

function resolveAttack(card) {
  const pb = card[state.dayNight];
  const targets = (card.aoe || (pb && pb.aoe)) ? state.enemies.filter(e => e.alive) : [curEnemy()].filter(Boolean);
  if (!targets.length) return;
  let grandTotal = 0;

  let hitsBase = card.hits || 1;
  if (pb && pb.hits) hitsBase += pb.hits;   // 词缀连击
  if (state.doubleNext) { hitsBase *= 2; state.doubleNext = false; }
  if (state.powers.doubleFirst && !state._dfUsed) { hitsBase *= 2; state._dfUsed = true; }

  targets.forEach(e => {
    const hits = hitsBase;
    let base = card.dmg || 0;
    if (card.finisher) base = (card.finisher === true ? 6 : card.finisher) * (state.playedThisTurn + 1);
    if (card.poisonBurst) { base = e.poison * 3; e.poison = 0; }
    if (card.exec && e.hp <= e.maxHp * 0.35) base = card.exec === true ? 24 : card.exec;
    if (hasRes('flurryRes') && !state.flurryUsed) { base += 3; state.flurryUsed = true; }
    if (state.dayNight === 'day') base += 2;   // 白昼: 玩家攻击+2
    if (pb && pb.dmg) base += pb.dmg;          // 昼夜词缀
    if (state.dayNight === 'night' && state.powers.eternalNight) base += 3;   // 永夜君主
    if (card.thornsDmg) base += state.thorns * card.thornsDmg;   // 星棘转伤
    if (state._sacDmg) base += state._sacDmg;   // 献祭伤害
    if (card.dmgEnergy) base += state.energy * card.dmgEnergy;
    if (card.dmgHand) base += state.hand.length * card.dmgHand;
    if (card.dmgDiscard) base += state.discard.length * card.dmgDiscard;
    if (card.dmgBlock) base += state.block * card.dmgBlock;
    if (card.blockBonus && e.block > 0) base += card.blockBonus;

    let totalDealt = 0;
    for (let h = 0; h < hits; h++) {
      let d = base + state.strength;
      d = Math.round(d * state.buff);
      if (state.pWeak > 0) d = Math.round(d * Math.max(0.4, 1 - 0.12 * state.pWeak));
      if (e.vuln > 0) d = Math.round(d * (1 + 0.25 * e.vuln));
      if (card.vulnBonus && e.vuln > 0) d += card.vulnBonus;
      if (state.powers.giant && e.hp > e.maxHp / 2) d = Math.round(d * 1.5);
      const absorbed = Math.min(e.block, d);
      e.block -= absorbed;
      d -= absorbed;
      e.hp -= d;
      totalDealt += d;
    }
    grandTotal += totalDealt;
    e.hitFlash = 1;
    addFeedback('-' + totalDealt + (hits > 1 ? ' x' + hits : ''), '#ffd24d', e.x);
    spawnParticles(e.x, '#ffd24d', 12 + Math.min(14, totalDealt), 7);
    logMsg('对 ' + e.name + ' 造成 ' + totalDealt + ' 点伤害', 'lh');

    const poisonOnHit = (card.poison || 0) + (state.powers.venom ? 1 : 0);
    if (poisonOnHit > 0) {
      e.poison += poisonGain(poisonOnHit);
      addFeedback('侵蚀 +' + poisonGain(poisonOnHit), '#7bd44d', e.x);
      if (state.powers.poisonHeal) heal(1);
    }
    if (card.vuln) { e.vuln += card.vuln; addFeedback('裂解 +' + card.vuln + '层', '#ff6b6b', e.x); }
    if (card.weak) { e.weak += card.weak; addFeedback('衰微 +' + card.weak + '层', '#b8b8d0', e.x); }

    if (e.hp <= 0) handleEnemyDeath(e);
    else if (e.thorns) {   // 镜灵: 受击反弹
      state.hp -= e.thorns;
      addFeedback('镜反 -' + e.thorns, '#c9a8ff', 0.16);
      spawnParticles(0.16, '#c9a8ff', 6, 4);
      if (state.hp <= 0) { state.hp = 0; lose(); return; }
    }
  });

  state.buff = 1;
  state.pulse = 1;
  if (grandTotal >= 50) addFeedback(grandTotal + '!! 突破界层!', '#e05555', 0.5);   // 大伤害彩蛋
  state.shake = Math.max(state.shake, 0.6 + Math.min(0.6, grandTotal * 0.02));
  state.kickX = -(10 + Math.min(26, grandTotal * 0.8)) * devicePixelRatio;
  state.kickY = (Math.random() - 0.5) * 10 * devicePixelRatio;
  if (grandTotal >= 12) state.zoomK = Math.min(0.05, 0.015 + grandTotal * 0.0012);
  hitstop(70 + Math.min(80, grandTotal * 2));

  const leechHeal = Math.floor(grandTotal * state.leech);
  if (leechHeal > 0) heal(leechHeal);
}

function handleEnemyDeath(e) {
  e.alive = false;
  e.hp = 0;
  quip('kill', 0.3);
  logMsg(e.name + ' 消散了', 'lb');
  spawnParticles(e.x, '#b44dff', 18, 8);
  if (e.sp && e.sp.deathDmg) {   // 殉爆: 死亡自爆
    const abs = Math.min(state.block, e.sp.deathDmg);
    state.block -= abs;
    const dh = e.sp.deathDmg - abs;
    state.hp -= dh;
    addFeedback('殉爆 -' + dh, '#ff9d5c', 0.16);
    spawnParticles(0.16, '#ff9d5c', 10, 5);
    if (state.hp <= 0) { state.hp = 0; lose(); return; }
  }
  if (state.dayNight === 'night') {   // 黑夜击杀赏金
    run.crystals += 2;
    addFeedback('夜猎 +2 结晶', '#ffd24d', e.x);
  }
  if (state.target === e.idx) {
    const next = state.enemies.find(x => x.alive);
    if (next) state.target = next.idx;
  }
  if (state.enemies.every(x => !x.alive)) win();
}

function heal(n) {
  if (state.dayNight === 'day') n = Math.round(n * 1.5);   // 白昼: 治疗+50%
  const real = Math.min(state.maxHp - state.hp, n);
  if (real > 0) { state.hp += real; addFeedback('+' + real + ' 生命', '#7bd44d', 0.16); }
}

function setPhase(p) {
  state.dayNight = p;
  state.dnTimer = 3;
  state.dnFx = { dir: p === 'night' ? 1 : 0, t0: performance.now() };   // v18.3: 过渡演出
  showBanner(p === 'day' ? '切换 · 白昼' : '切换 · 黑夜');
  sfxPower();
}

// ================= 回响流程 =================
function endTurn() {
  if (!state.started || state.gameOver || state.busy) return;
  if (_tut) {   // 引导锁定: 仅放行「结束回响」步骤
    const a = tutAllow();
    if (!a || !a.end) { tutDeny(); return; }
  }
  sfxEndTurn();
  state.busy = true;
  const discarding = state.hand.slice();
  discardHandFx(discarding);
  state.discard.push(...state.hand);
  state.hand = [];
  updateHud();
  logMsg('—— 回响 ' + state.turn + ' 结束 ——', 'lt');
  setTimeout(enemyPhase, 550 + discarding.length * 70);
}

// 弃牌动画: 手牌逐一飞向弃牌堆
function discardHandFx(cards) {
  if (!cards.length) return;
  const pile = $('discardPile');
  if (!pile || !SETTINGS.fx) return;
  const pr = pile.getBoundingClientRect();
  cards.forEach((c, k) => {
    const el = handEls.get(c.uid);
    if (!el) return;
    const r = el.getBoundingClientRect();
    const ghost = el.cloneNode(true);
    ghost.className = el.className.replace(' deal', '') + ' fly-card';
    ghost.style.left = r.left + 'px';
    ghost.style.top = r.top + 'px';
    ghost.style.transition = 'none';
    document.body.appendChild(ghost);
    el.style.opacity = '0';
    const dx = pr.left + pr.width / 2 - (r.left + r.width / 2);
    const dy = pr.top + pr.height / 2 - (r.top + r.height / 2);
    ghost.animate([
      { transform: 'translate(0,0) rotate(0deg) scale(1)', opacity: 1 },
      { transform: 'translate(' + dx * 0.55 + 'px,' + (dy * 0.55 - 60) + 'px) rotate(' + (6 + k * 2) + 'deg) scale(0.72)', opacity: 1, offset: 0.55 },
      { transform: 'translate(' + dx + 'px,' + dy + 'px) rotate(' + (10 + k * 3) + 'deg) scale(0.3)', opacity: 0 },
    ], { duration: 400, delay: k * 70, easing: 'cubic-bezier(0.3, 0.6, 0.4, 1)', fill: 'both' });
    setTimeout(() => ghost.remove(), k * 70 + 420);
    setTimeout(() => {   // 落堆: 弃牌堆轻弹一下
      pile.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.14)' }, { transform: 'scale(1)' }],
        { duration: 180, easing: 'ease-out' });
    }, k * 70 + 360);
    setTimeout(sfxDraw, k * 70 + 80);
  });
}

function enemyPhase() {
  const alive = state.enemies.filter(e => e.alive);
  alive.forEach(e => { e.block = 0; });
  alive.forEach((e, i) => {
    setTimeout(() => {
      if (state.gameOver || !e.alive) {
        if (i === alive.length - 1) setTimeout(startPlayerTurn, 400);
        return;
      }
      enemyActOne(e);
      updateHud();
      if (i === alive.length - 1 && !state.gameOver) setTimeout(startPlayerTurn, 480);
    }, i * 520);
  });
}

function enemyActOne(e) {
  if (e.sp && e.sp.healTurn) {   // 聚灵: 治疗最虚弱的友军
    const ally = state.enemies.filter(x => x.alive && x.hp < x.maxHp * 0.7)   // 聚灵: 只救残血友军
      .sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
    if (ally) {
      ally.hp = Math.min(ally.maxHp, ally.hp + e.sp.healTurn);
      addFeedback('愈合 +' + e.sp.healTurn, '#7bd44d', ally.x);
      spawnParticles(ally.x, '#7bd44d', 6, 3);
    }
  }
  if (e.poison > 0) {
    const pdmg = state.dayNight === 'night' ? Math.round(e.poison * 1.5) : e.poison;   // 黑夜: 侵蚀+50%
    e.hp -= pdmg;
    addFeedback('侵蚀 -' + pdmg, '#7bd44d', e.x);
    spawnParticles(e.x, '#7bd44d', 8, 4);
    logMsg(e.name + ' 被侵蚀吞噬 ' + pdmg + ' 点', 'lh');
    sfxPoison();
    e.poison--;
    if (e.hp <= 0) { handleEnemyDeath(e); return; }
  }

  if (e.intent.type === 'attack') {
    let raw = e.dmg + (state.dayNight === 'night' ? 2 : 0);   // 黑夜: 敌攻+2
    if (e.weak > 0) raw = Math.round(raw * Math.max(0.4, 1 - 0.12 * e.weak));
    const absorbed = Math.min(state.block, raw);
    state.block -= absorbed;
    let hurt = raw - absorbed;
    if (state.pVuln > 0) hurt = Math.round(hurt * (1 + 0.25 * state.pVuln));
    state.hp -= hurt;
    e.lunge = 1;
    state.pulse = 1;
    state.shake = hurt > 0 ? 0.85 + Math.min(0.6, hurt * 0.045) : 0.3;
    if (hurt > 0) {
      hitstop(85);
      state.kickX = (10 + Math.min(26, hurt * 0.9)) * devicePixelRatio;
      state.kickY = (Math.random() - 0.5) * 12 * devicePixelRatio;
      state.zoomK = Math.min(0.05, 0.016 + hurt * 0.0015);
    }
    addFeedback(hurt > 0 ? '-' + hurt : '完全抵御!', hurt > 0 ? '#ff5555' : '#7fd4ff', 0.16);
    spawnParticles(0.16, hurt > 0 ? '#ff5555' : '#7fd4ff', hurt > 0 ? 14 : 8, 6);
    if (hurt > 0) { flashVignette(); state.playerFlash = 1; }
    if (hurt > 0 && e.sp) {   // 种类命中特效(50% 概率触发, 避免多敌集火滚雪球)
      const spChance = Math.random() < 0.5;
      if (e.sp.onHitDot && spChance) { state.hp -= e.sp.onHitDot; addFeedback('蚀毒 -' + e.sp.onHitDot, '#7bd44d', 0.16); }
      if (e.sp.onHitVuln && spChance) { state.pVuln = Math.min(3, state.pVuln + 1); addFeedback('裂解 +1 层', '#ff6b6b', 0.16); }
      if (e.sp.onHitWeak && spChance) { state.pWeak = Math.min(3, state.pWeak + 1); addFeedback('衰微 +1 层', '#b8b8d0', 0.16); }
      if (e.sp.drain && spChance) { state.energyNext = Math.max(-2, state.energyNext - e.sp.drain); addFeedback('以太被汲取 -' + e.sp.drain, '#4dc9ff', 0.16); }
    }
    logMsg(e.name + ' 发动攻击，澪奈受到 ' + hurt + ' 点伤害', 'ld');
    if (hurt > 0) sfxHurt(); else sfxBlock();
    if (state.thorns > 0) {
      e.hp -= state.thorns;
      addFeedback('星棘反弹 -' + state.thorns, '#9be8ff', e.x);
      spawnParticles(e.x, '#9be8ff', 8, 5);
      logMsg('星棘反弹 ' + state.thorns + ' 点', 'lh');
      if (e.hp <= 0) { handleEnemyDeath(e); }
    }
    e.atkCount = (e.atkCount || 0) + 1;
    if (e.atkCount % 2 === 0) e.dmg += e.growth;   // 每2次攻击才成长, 防止滚雪球
    if (state.hp <= 0) { state.hp = 0; lose(); return; }
  } else if (e.intent.type === 'charge') {
    e.dmg += 2;
    addFeedback('聚集虚空! 侵蚀力+2', '#ff9d5c', e.x);
    logMsg(e.name + ' 正在聚集虚空……', 'ld');
    sfxGrowl();
  } else if (e.intent.type === 'curse') {
    state.pWeak = Math.min(3, state.pWeak + 1);
    state.pVuln = Math.min(3, state.pVuln + 1);
    addFeedback('被诅咒! 衰微+1 裂解+1', '#9a55e0', 0.16);
    spawnParticles(0.16, '#9a55e0', 10, 4);
    logMsg(e.name + ' 向澪奈降下诅咒（攻击-12%/层・受伤+25%/层）', 'ld');
    sfxGrowl();
  } else if (e.intent.type === 'defend') {
    e.block += 10;
    addFeedback('虚壳 +10', '#b8b8d0', e.x);
    logMsg(e.name + ' 凝成了虚壳', 'ld');
    sfxBlock();
  }

  if (e.vuln > 0) e.vuln--;
  if (e.weak > 0) e.weak--;
  e.patternIndex = (e.patternIndex + 1) % e.cycle.length;
  e.intent.type = e.cycle[e.patternIndex];
}

function startPlayerTurn() {
  if (state.gameOver) return;
  state.turn++;
  state._dealSeq = 0;
  state._dfUsed = false;
  // 昼夜交替(每3回响), 永夜君主锁定黑夜
  if (state.powers.eternalNight) {
    if (state.dayNight !== 'night') { state.dayNight = 'night'; state.dnFx = { dir: 1, t0: performance.now() }; showBanner('永夜降临'); }
    state.dnTimer = 3;
  } else if (SETTINGS.dn) {
    state.dnTimer--;
    if (state.dnTimer <= 0) {
      state.dayNight = state.dayNight === 'day' ? 'night' : 'day';
      state.dnTimer = 3;
      state.dnFx = { dir: state.dayNight === 'night' ? 1 : 0, t0: performance.now() };   // v18.3: 过渡演出
      if (state.dayNight === 'night') {
        state._nightHappened = true;
        quip('night');
        showBanner('夜幕降临 · 敌攻+2');
        logMsg('夜幕降临……敌人变得狂躁', 'ld');
      } else {
        quip('dawn');
        showBanner('黎明升起 · 攻击+2');
        logMsg('黎明升起，光落在澪奈肩上', 'lb');
      }
      state.dnTimer = curWorld().mod.dnFast ? 2 : 3;
    }
  }
  state.block = state.keepBlock ? state.block : 0;
  state.keepBlock = false;
  state.energy = Math.max(0, Math.min(10, state.maxEnergy + state.energyNext));
  state.energyNext = 0;
  if (state.dayNight === 'day') { state.block += 2; }   // 白昼: 每回响+2屏障
  state.playedThisTurn = 0;
  state.flurryUsed = false;
  if (state.pVuln > 0) state.pVuln--;
  if (state.pWeak > 0) state.pWeak--;
  if (state.hp <= state.maxHp * 0.3) quip('lowhp', 0.45);
  // 权能·回合开始
  if (state.powers.regen) heal(2);
  if (state.powers.regen2) heal(4);
  if (state.powers.sharp) { state.strength += 1; addFeedback('奇点: 意志+1', '#ffd24d', 0.16); }
  if (state.powers.venomAura || state.powers.venomAura2) {
    const n = state.powers.venomAura2 ? 2 : 1;
    state.enemies.filter(e => e.alive).forEach(e => {
      e.poison += n;
      addFeedback('侵蚀 +' + n, '#7bd44d', e.x);
    });
    sfxPoison();
  }
  if (state.powers.foresight && Math.random() < 0.4) {
    state.energy = Math.min(10, state.energy + 1);
    addFeedback('预言: +1 以太', '#4aa8dd', 0.16);
  }
  let drawGuard = 0;   // 防死循环: 牌堆+弃牌堆全空时 drawCard 空转
  while (state.hand.length < handCap() && drawGuard++ < 12) drawCard();
  state.busy = false;
  showBanner('回响 ' + state.turn);
  sfxFan();
  updateHud();
}

// ================= 战斗结果 =================
function win() {
  if (_tut) { tutAllDead(); return; }   // 引导战: 分波/收束链
  sfxWin();
  run.hp = Math.min(run.maxHp, state.hp + 10 + (curWorld().mod.battleHeal || 0));   // 战斗胜利休整(熔核世界+4)
  if (state.nodeType === 'boss') { if (run.worldIdx < 5) worldClear(); else runVictory(); }
  else battleWin();
}

function lose() {
  sfxLose();
  logMsg('澪奈 倒下了……', 'ld');
  state.started = false;
  setBattleUI(false);
  showStory(STORY_DEATH, losePanel);
}

function losePanel() { settleImmerse('death'); }

function victoryPanel() { settleImmerse('victory'); }

// ================= 全屏沉浸结算(死亡=冷色消散 / 通关=暖金归途) =================
function settleImmerse(kind) {
  const vic = kind === 'victory';
  const dk = h => {   // 世界色转暗
    const n = parseInt(h.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.2 | 0) + ',' + ((n >> 8 & 255) * 0.2 | 0) + ',' + ((n & 255) * 0.2 | 0) + ')';
  };
  const beam = vic ? '255,214,140' : BGPAL.beam;
  const title = vic ? '第一千四百三十九个' : '意识消散';
  const lore = vic
    ? '她回望了一眼身后的虚无，然后推开了门。<br>门的另一边，是雨过天晴的清晨。'
    : '澪奈的身影，隐没在虚无之中。';
  const stats = vic
    ? [[run.crystals, '以太结晶'], ['+20', '记忆碎片'], [run.deck.length, '牌组']]
    : [['第' + (run.worldIdx + 1) + '界 · 第' + (run.pos.l + 1) + '层', '抵达', 1], [run.crystals, '以太结晶'], [run.deck.length, '牌组']];
  const btns = vic
    ? [['新的轮回', 'startRun'], ['返回主菜单', 'showMenu']]
    : [['再次踏入虚无', 'startRun'], ['返回主菜单', 'showMenu']];
  let motes = '';
  for (let i = 0; i < 10; i++)
    motes += '<i style="left:' + (4 + Math.random() * 92).toFixed(1) + '%;bottom:-2%;' +
      'animation-duration:' + (9 + Math.random() * 9).toFixed(1) + 's;animation-delay:' + (Math.random() * 8).toFixed(1) + 's"></i>';
  const fx = document.createElement('div');
  fx.className = 'dm-fx ' + kind;
  fx.innerHTML =
    '<div class="dm-veil" style="background:' + (vic
      ? 'linear-gradient(168deg,#14101e 0%,#241a2e 55%,#1c1626 100%)'
      : 'linear-gradient(168deg,' + dk(BGPAL.grad[0]) + ' 0%,' + dk(BGPAL.grad[1]) + ' 52%,' + dk(BGPAL.grad[2]) + ' 100%)') + '"></div>' +
    '<div class="dm-glow" style="background:radial-gradient(circle at 50% 60%, rgba(' + beam + ',0.16), transparent 62%)"></div>' +
    '<div class="dm-motes">' + motes + '</div>' +
    '<div class="dm-core">' +
      '<h2 class="dm-title">' + title.split('').map((ch, i) =>
        '<span style="--di:' + i + '">' + ch + '</span>').join('') + '</h2>' +
      '<p class="dm-lore">' + lore + '</p>' +
      '<div class="dm-stats">' + stats.map((s, i) =>
        '<div class="dm-stat" style="--si:' + i + ';--sc:rgba(' + beam + ',0.55)">' +
        '<div class="dm-v"' + (s[2] ? ' style="font-size:21px"' : '') + '>' + s[0] + '</div>' +
        '<div class="dm-l">' + s[1] + '</div></div>').join('') + '</div>' +
      (vic ? '<p class="dm-lore dm-end">—— Re:EthePath · 终 ——</p>' : '<p class="dm-lore dm-rand">' + randomLore() + '</p>') +
      '<div class="dm-btns">' + btns.map(b =>
        '<button class="dm-btn" onclick="dmOut(' + b[1] + ')">' + b[0] + '</button>').join('') + '</div>' +
    '</div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
}
function dmOut(fn) {   // 消散离场后执行跳转
  sClick();
  const fx = qs('.dm-fx');
  if (fx && fx.classList) { fx.classList.add('out'); setTimeout(() => { fx.remove(); fn(); }, 420); }
  else fn();
}

function runVictory() {
  run.crystals += 100;
  META.frags += 20;
  saveMeta();
  state.started = false;
  setBattleUI(false);
  showStory([WORLD_STORIES[curWorld().key].clear, STORY_ENDING], victoryPanel);   // 终界收束章+终章合篇
}

// 单界通关: 奖励 → 合篇(本界收束章 + 下一界序章, 节转场时切世界)
function worldClear() {
  run.crystals += 90;
  META.frags += 12;
  // 世界解锁链: 固定 WORLDS 序, 击败第 i 界守望者解锁第 i+1 界(与开局界无关)
  const wi = WORLDS.indexOf(curWorld());
  const nxt = WORLDS[wi + 1];
  if (nxt && !isWorldUnlocked(nxt.key)) {
    META.worlds.push(nxt.key);
    run._justUnlocked = nxt.key;
  }
  saveMeta();
  run.hp = run.maxHp;   // 过界全恢复: 30 场长跑的喘息点
  state.started = false;
  setBattleUI(false);
  const curKey = curWorld().key;
  const nxtKey = run.worldOrder[run.worldIdx + 1];
  const introPart = Object.assign({}, WORLD_STORIES[nxtKey].intro, { onEnter: applyNextWorld });
  showStory([WORLD_STORIES[curKey].clear, introPart], arriveNextWorld);
}

function applyNextWorld() {   // 节钩子: 切世界状态(onEnter 兜底, 跳过剧情也会执行)
  run.worldIdx++;
  run.depthScale = 1 + run.worldIdx * 0.1;
  BGPAL = curWorld();
  run.map = genMap();
  run.pos = { l: -1, i: 0 };
  run._storyShown = 0;
}

function arriveNextWorld() {
  if (run._justUnlocked) {   // 首次抵达: 沉浸解锁演出(v18.0, 替代朴素 showTip)
    const w = WORLDS.find(x => x.key === run._justUnlocked);
    run._justUnlocked = null;
    showUnlockFx(w, showMap);
  } else showMap();
}

// 新世界解锁: 全屏沉浸演出(世界色光晕+题字+界名大字+光尘), 短暂停留自动/点击进地图
function showUnlockFx(w, then) {
  const dk = h => {
    const n = parseInt(h.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.2 | 0) + ',' + ((n >> 8 & 255) * 0.2 | 0) + ',' + ((n & 255) * 0.2 | 0) + ')';
  };
  const beamRGB = w.beam || '170,200,255';
  let motes = '';
  for (let i = 0; i < 10; i++)
    motes += '<i style="left:' + (6 + Math.random() * 88).toFixed(1) + '%;bottom:-2%;' +
      'animation-duration:' + (8 + Math.random() * 8).toFixed(1) + 's;animation-delay:' + (Math.random() * 7).toFixed(1) + 's"></i>';
  hidePanel();
  const old = qs('.unlock-fx');
  if (old && old.remove) old.remove();
  const fx = document.createElement('div');
  fx.className = 'dm-fx unlock-fx';
  fx.innerHTML =
    '<div class="dm-veil" style="background:linear-gradient(168deg,' + dk(w.grad[0]) + ' 0%,' + dk(w.grad[1]) + ' 52%,' + dk(w.grad[2]) + ' 100%)"></div>' +
    '<div class="dm-glow" style="background:radial-gradient(circle at 50% 42%, rgba(' + beamRGB + ',0.2), transparent 60%)"></div>' +
    '<div class="dm-motes">' + motes + '</div>' +
    '<div class="dm-core">' +
      '<p class="ul-kicker">✦ 新 世 界 解 锁 ✦</p>' +
      '<h2 class="ul-name">' + w.name.split('').map((ch, i) => '<span style="--di:' + i + '">' + ch + '</span>').join('') + '</h2>' +
      '<p class="dm-lore">' + w.desc + '</p>' +
      '<p class="dm-lore ul-sub">深渊的下一层天，已在归途上亮起。</p>' +
    '</div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
  sWin(); setTimeout(() => sChantBell(1.2), 260);
  let done = false;
  const fin = () => {
    if (done) return;
    done = true;
    fx.classList.add('out');
    setTimeout(() => { fx.remove(); then(); }, 460);
  };
  fx.addEventListener('click', fin);
  setTimeout(fin, 3400);   // 停留自动过
}

// ================= 分支跑图 =================
function genMap() {
  const layers = [[{ t: 'battle' }]];
  for (let l = 1; l < 4; l++) {
    const n = 2 + (Math.random() < 0.6 ? 1 : 0);
    const layer = [];
    for (let i = 0; i < n; i++) layer.push({ t: pickNodeType(l) });
    for (let i = 1; i < layer.length; i++)
      for (let j = 0; j < i; j++)
        if (layer[i].t === layer[j].t && (layer[i].t === 'shop' || layer[i].t === 'rest'))
          layer[i].t = 'event';
    layers.push(layer);
  }
  layers.push([{ t: 'boss' }]);

  const edges = {};
  for (let l = 0; l < layers.length - 1; l++) {
    const A = layers[l], B = layers[l + 1];
    A.forEach((a, i) => {
      const links = new Set();
      const j0 = Math.round(i * (B.length - 1) / Math.max(1, A.length - 1));
      links.add(Math.max(0, Math.min(B.length - 1, j0)));
      if (Math.random() < 0.6)
        links.add(Math.max(0, Math.min(B.length - 1, j0 + (Math.random() < 0.5 ? -1 : 1))));
      edges[l + ',' + i] = [...links];
    });
    B.forEach((b, j) => {
      const hasIn = A.some((a, i) => edges[l + ',' + i].includes(j));
      if (!hasIn) edges[l + ',' + ((Math.random() * A.length) | 0)].push(j);
    });
  }
  return { layers, edges };
}

function pickNodeType(l) {
  const pool = ['battle', 'battle', 'battle', 'event', 'event', 'shop', 'rest', 'rest'];
  if (l >= 2) pool.push('elite');
  if (l >= 3) pool.push('elite', 'shop');
  return pool[(Math.random() * pool.length) | 0];
}

function reachableNodes() {
  if (run.pos.l === -1) return run.map.layers[0].map((n, i) => i);
  return run.map.edges[run.pos.l + ',' + run.pos.i] || [];
}

function nodeXY(l, i) {
  const L = run.map.layers.length;
  const n = run.map.layers[l].length;
  return { x: (i + 1) / (n + 1) * 1000, y: 560 - l * (500 / (L - 1)) };
}

function showMap() {
  state.started = false;
  setBattleUI(false);
  renderMap();
}

function renderMap() {
  const res = calcResonance(run.deck);
  const reach = reachableNodes();
  const L = run.map.layers.length;
  const W = curWorld();
  const dk = h => {   // 世界色转暗(纱幕)
    const n = parseInt(h.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.2 | 0) + ',' + ((n >> 8 & 255) * 0.2 | 0) + ',' + ((n & 255) * 0.2 | 0) + ')';
  };
  const SHORT = { battle: '战斗', elite: '精英', shop: '商店', event: '异象', rest: '锚点', boss: 'Boss' };

  let lines = '';
  for (let l = 0; l < L - 1; l++) {
    run.map.layers[l].forEach((a, i) => {
      const from = nodeXY(l, i);
      const isCurSrc = run.pos.l === l && run.pos.i === i;
      (run.map.edges[l + ',' + i] || []).forEach(j => {
        const to = nodeXY(l + 1, j);
        const cls = a.done ? 'done' : (isCurSrc && reach.includes(j)) || (run.pos.l === -1 && l === 0) ? 'can' : '';
        const pts = 'x1="' + from.x + '" y1="' + from.y + '" x2="' + to.x + '" y2="' + to.y + '"';
        lines += '<line ' + pts + ' class="mlink gl ' + cls + '"/><line ' + pts + ' class="mlink ' + cls + '"/>';
      });
    });
  }

  let nodes = '';
  run.map.layers.forEach((layer, l) => {
    layer.forEach((nd, i) => {
      const p = nodeXY(l, i);
      const isCur = run.pos.l === l && run.pos.i === i;
      const isReach = (run.pos.l === -1 && l === 0) || (run.pos.l === l - 1 && reach.includes(i));
      const cls = isCur ? 'cur' : isReach ? 'can' : 'lock';
      const clickable = isReach && !isCur;
      nodes += '<button class="mnode n-' + nd.t + ' ' + cls + '" style="left:' + (p.x / 10) + '%;top:' + (p.y / 6) + '%;--ml:' + l + '" ' +
        (clickable ? 'onclick="enterNode(' + l + ',' + i + ')"' : 'disabled') + '>' +
        '<span class="nicon">' + NODE_ICON[nd.t] + '</span><span class="nname">' + SHORT[nd.t] + '</span></button>';
    });
  });

  const html =
    '<div class="map2" id="map2" style="--beam:rgba(' + W.beam + ',0.85)">' +
      '<div class="mp-veil" style="background:linear-gradient(172deg,' + dk(W.grad[0]) + ' 0%,' + dk(W.grad[1]) + ' 52%,' + dk(W.grad[2]) + ' 100%)"></div>' +
      '<div class="ws-stars s1"></div><div class="ws-stars s2"></div>' +
      '<div class="mp-glow" style="background:radial-gradient(circle at 50% 42%, rgba(' + W.beam + ',0.14), transparent 60%)"></div>' +
      '<button class="corner-home" onclick="showMenu()" title="返回主菜单">↩</button>' +
      '<div class="mp-head">' +
        '<h2 class="mp-title">' + W.name + '</h2>' +
        '<div class="mp-sub">第 ' + (run.pos.l + 2) + ' / 5 层　·　第 ' + (run.worldIdx + 1) + ' / 6 界</div>' +
        '<p class="mp-lore">' + WORLD_LAYER_LORE[W.key][Math.min(Math.max(run.pos.l + 1, 0), 4)] + '</p>' +
      '</div>' +
      '<div class="mp-info">澪奈 HP ' + run.hp + '/' + run.maxHp + '　・　以太结晶 ' + run.crystals + '　・　牌组 ' + run.deck.length + ' 张　・　碎片 ' + META.frags +
      (res.length ? '　・　共鸣 ' + res.map(r => '<span title="' + r.desc + '">[' + r.name + ']</span>').join(' ') : '') + '</div>' +
      '<div class="map-wrap"><svg viewBox="0 0 1000 600" preserveAspectRatio="none">' + lines + '</svg>' + nodes + '</div>' +
      '<div class="map-legend">⚔ 战斗　☠ 精英　◈ 商店　？ 异象　✦ 锚点　♦ Boss</div>' +
      '<details class="deck-view"><summary>查看牌组</summary><div class="deck-list">' +
      ['u', 's', 'n'].map(g =>
        '<div class="deck-grp"><span class="dg-name">' + GRP_NAME[g] + '</span>' +
        run.deck.filter(c => cardGrp(c) === g)
          .map(c => '<span style="color:' + RARITY[c.rarity].color + '">' + c.name + '</span>').join(' · ') +
        '</div>').join('') +
      '</div></details>' +
    '</div>';
  showPanel(html);
  bindMapParallax();
}

// 地图页视差: 星层/光晕轻跟手
function bindMapParallax() {
  const root = $('map2');
  if (!root || !root.addEventListener) return;
  const l1 = root.querySelector('.ws-stars.s1'), l2 = root.querySelector('.ws-stars.s2');
  const glow = root.querySelector('.mp-glow');
  root.addEventListener('pointermove', e => {
    root._px = e.clientX / window.innerWidth - 0.5;
    root._py = e.clientY / window.innerHeight - 0.5;
    if (!root._pRaf) root._pRaf = requestAnimationFrame(() => {
      root._pRaf = 0;
      const x = root._px || 0, y = root._py || 0;
      if (l1 && l1.style) l1.style.transform = 'translate(' + (x * -12) + 'px,' + (y * -7) + 'px)';
      if (l2 && l2.style) l2.style.transform = 'translate(' + (x * -26) + 'px,' + (y * -14) + 'px)';
      if (glow && glow.style) glow.style.transform = 'translate(' + (x * 16) + 'px,' + (y * 9) + 'px)';
    });
  });
}

function enterNode(l, i) {
  run._nextPos = { l, i };
  const t = run.map.layers[l][i].t;
  run.map.layers[l][i].done = true;
  const go = () => {
    if (t === 'battle' || t === 'elite' || t === 'boss') startBattle(t, l);
    else if (t === 'shop') showShop();
    else if (t === 'event') showEvent();
    else if (t === 'rest') showRest();
  };
  if (t === 'boss') { layerStory(curWorld().key, go); return; }
  if (t === 'battle' && firstTime('battle')) { showTip('⚔ 初战', TIP_BATTLE, go); return; }
  if (t === 'elite' && firstTime('elite')) { showTip('☠ 精英接近', TIP_ELITE, go); return; }
  if (t === 'shop' && firstTime('shop')) { showTip('◈ 以太商队', TIP_SHOP, go); return; }
  go();
}

function afterNode() {
  run._removeMode = false;
  run.pos = run._nextPos;
  showMap();
}

// ================= 战斗生成(多敌人) =================
function startBattle(type, layer) {
  const W = curWorld();
  const hpMod = W.mod.enemyHp || 1;
  const dmgMod = W.mod.enemyDmg || 0;
  const ds = run.depthScale || 1;   // 深度递进: 每世界 +0.18, 与世界 mod 叠乘
  const normCycle = W.mod.cycleDream ? DREAM_CYCLE : W.mod.defendBonus ? FROST_CYCLE : INTENT_CYCLE;
  const defs = [];
  if (type === 'boss') {
    defs.push({ name: W.enemies.boss, glyph: W.enemies.bossGlyph, hp: Math.round(260 * hpMod * ds), dmg: Math.round((11 + dmgMod) * ds), growth: 1, cycle: BOSS_CYCLE });
  } else if (type === 'elite') {
    const n = run.worldIdx >= 3 && Math.random() < 0.5 ? 2 : 1;   // 后期世界精英可能双发
    for (let i = 0; i < n; i++)
      defs.push({ name: W.enemies.elite, glyph: W.enemies.eliteGlyph, hp: Math.round((120 + layer * 10) * hpMod * ds), dmg: Math.round((6 + (layer >> 1) + dmgMod) * ds), growth: 1, cycle: normCycle });
  } else {
    const hpBase = [80 + layer * 10, 62 + layer * 8, 96 + layer * 9];
    const dmgBase = [5 + (layer >> 1), 4 + (layer >> 1), 3 + (layer >> 1)];
    const idxs = shuffle([0, 1, 2]);
    const n = layer < 2 ? 1 : layer < 5 ? (Math.random() < 0.5 ? 1 : 2)
      : layer < 8 ? (Math.random() < 0.25 ? 3 : 2)
      : (Math.random() < 0.1 ? 4 : Math.random() < 0.35 ? 3 : 2);
    const spPool = layer < 4 ? ENEMY_SPECIES.slice(0, 8)
      : ENEMY_SPECIES.concat([ENEMY_SPECIES[0], ENEMY_SPECIES[0], ENEMY_SPECIES[0]]);   // 标准种×3 稀释高压种类
    const sps = shuffle(spPool.slice());
    for (let i = 0; i < n; i++) {
      const k = idxs[i % 3];
      const sp = sps[i];
      defs.push({
        name: W.enemies.normal[k] + ' · ' + sp.tag, glyph: '残响',
        hp: Math.round(hpBase[k] * hpMod * ds * sp.hpM), dmg: Math.max(1, Math.round((dmgBase[k] + dmgMod + sp.dmgA) * ds)),
        growth: sp.growth !== undefined ? sp.growth : 1, cycle: sp.cycle || normCycle, sp,
      });
    }
  }
  const xs = defs.length === 1 ? [0.8] : defs.length === 2 ? [0.66, 0.88] : defs.length === 3 ? [0.56, 0.78, 0.94] : [0.46, 0.64, 0.82, 0.97];

  state.nodeType = type;
  state.started = true; state.gameOver = false; state.busy = false;
  state.turn = 1;
  state.hp = run.hp; state.maxHp = run.maxHp;
  state.block = 0; state.keepBlock = false;
  state.energy = 3; state.maxEnergy = 3; state.energyNext = 0;
  state.strength = 0; state.thorns = 0; state.leech = 0;
  state.pVuln = 0; state.pWeak = 0;
  state.powers = {}; state.flurryUsed = false; state.doubleNext = false; state._dfUsed = false;
  state.playedThisTurn = 0; state.buff = 1;
  state.enemies = defs.map((d, i) => ({
    idx: i, x: xs[i], name: d.name, glyph: d.glyph,
    hp: d.hp, maxHp: d.hp, dmg: d.dmg, growth: d.growth, cycle: d.cycle,
    block: d.sp && d.sp.startBlock || 0, poison: 0, vuln: 0, weak: 0,
    thorns: d.sp && d.sp.thorns || 0, sp: d.sp || null,
    alive: true, patternIndex: i % d.cycle.length, hitFlash: 0, lunge: 0,
    intent: { type: d.cycle[i % d.cycle.length] },
  }));
  state.target = 0;
  state.dayNight = 'day';
  state.dnTimer = curWorld().mod.dnFast ? 2 : 3;
  state._nightHappened = false;
  const builtDeck = run.deck.map(c => Object.assign({ uid: Math.random() }, c));
  state.deck = window._tutOrdered ? builtDeck.reverse() : shuffle(builtDeck);   // 教学关不洗牌: pop() 从尾取, reverse 后按 TUT_DECK 序抽
  state.hand = []; state.discard = []; state.exhaustPile = [];
  state.particles = [];
  state.hitstop = 0;
  state.focus = 0;
  state._seenCards = new Set();
  state._dealSeq = 4;   // 首次发牌延迟 ~450ms, 等牌桌升起后再发

  state.resonance = calcResonance(run.deck);
  if (hasRes('powerRes')) state.maxEnergy += 1;

  hidePanel();
  setBattleUI(true);
  resize();
  $('log').innerHTML = '';
  logMsg('—— 遭遇 ' + (defs.length > 1 ? defs.length + ' 只敌人' : defs[0].name) + ' ——', 'lt');
  if (defs.length > 1) logMsg('点击敌人 或 Tab 切换目标', 'lb');
  showBanner(NODE_NAME[type]);
  quip('start');
  state.enemies.forEach((e, i) =>
    setTimeout(() => sSpawn(type === 'boss' || type === 'elite'), 320 + i * 260));   // 敌人登场音
  battleEnterFx(type);   // 入场演出(纯视觉叠加, 战斗逻辑不等动画)
  for (let i = 0; i < handCap(); i++) drawCard();
  updateHud();
}

// ================= 战斗入场演出(守 SETTINGS.fx, 不打断时序) =================
function battleEnterFx(type) {
  if (!SETTINGS.fx || !document.createElement) return;
  const W = curWorld();
  const fx = document.createElement('div');
  fx.className = 'be-fx be-' + type;
  if (type === 'boss') {
    // 守望者现身: 巨大 glyph 浮现 + 低语 + 压迫暗场 + 低音, ~2.2s
    fx.innerHTML =
      '<div class="be-veil"></div>' +
      '<div class="be-glyph">' + W.enemies.bossGlyph + '</div>' +
      '<div class="be-whisper">它一直在等你。</div>';
    AU.tone('sine', 55, 38, 1.2, 0.3);
    AU.noise(0.8, 0.14, 'lowpass', 400, 120, 0.8);
    setTimeout(() => sThunder(), 200);
  } else if (type === 'elite') {
    // 精英: 暗场压迫 + glyph 闪现 + 雷, ~1.4s
    fx.innerHTML =
      '<div class="be-veil"></div>' +
      '<div class="be-glyph">' + W.enemies.eliteGlyph + '</div>';
    sThunder();
    AU.tone('sine', 90, 52, 0.5, 0.22);
  } else {
    // 小怪: 世界色光幕向两侧拉开, ~0.9s
    fx.innerHTML =
      '<div class="be-curtain l" style="background:linear-gradient(105deg,' + hexA(W.grad[1], 0.85) + ',' + hexA(W.grad[2], 0.6) + ')"></div>' +
      '<div class="be-curtain r" style="background:linear-gradient(255deg,' + hexA(W.grad[1], 0.85) + ',' + hexA(W.grad[2], 0.6) + ')"></div>';
  }
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
  setTimeout(() => fx.classList.add('out'), type === 'boss' ? 2100 : type === 'elite' ? 1300 : 800);
  setTimeout(() => fx.remove(), type === 'boss' ? 2600 : type === 'elite' ? 1750 : 1200);
}

// ================= 战利品(轮盘选牌) =================
function battleWin() {
  const elite = state.nodeType === 'elite';
  const gain = elite ? 45 + ((Math.random() * 15) | 0) : 22 + ((Math.random() * 12) | 0);
  const frag = (elite ? 5 : 2) + (curWorld().mod.fragBonus || 0) + (state._nightHappened ? 1 : 0);
  run.crystals += gain;
  META.frags += frag;
  saveMeta();
  state.started = false;
  setBattleUI(false);

  const weights = elite ? W_BOOST : W_NORMAL;
  const opts = [], names = new Set();
  let guard = 0;
  while (opts.length < 3 && guard++ < 60) {
    const c = rollCard(weights);
    if (!names.has(c.name)) { names.add(c.name); opts.push(c); }
  }
  run._rewardOpts = opts;

  // 全屏沉浸小结算(与意识消散同语言)
  const dk = h => {
    const n = parseInt(h.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.2 | 0) + ',' + ((n >> 8 & 255) * 0.2 | 0) + ',' + ((n & 255) * 0.2 | 0) + ')';
  };
  const beam = BGPAL.beam;
  let motes = '';
  for (let i = 0; i < 8; i++)
    motes += '<i style="left:' + (4 + Math.random() * 92).toFixed(1) + '%;bottom:-2%;' +
      'animation-duration:' + (9 + Math.random() * 9).toFixed(1) + 's;animation-delay:' + (Math.random() * 8).toFixed(1) + 's"></i>';
  hidePanel();
  const old = qs('.bw-fx');
  if (old && old.remove) old.remove();
  const fx = document.createElement('div');
  fx.className = 'dm-fx bw-fx';
  fx.innerHTML =
    '<div class="dm-veil" style="background:linear-gradient(168deg,' + dk(BGPAL.grad[0]) + ' 0%,' + dk(BGPAL.grad[1]) + ' 52%,' + dk(BGPAL.grad[2]) + ' 100%)"></div>' +
    '<div class="dm-glow" style="background:radial-gradient(circle at 50% 44%, rgba(' + beam + ',0.15), transparent 62%)"></div>' +
    '<div class="dm-motes">' + motes + '</div>' +
    '<div class="dm-core">' +
      '<h2 class="dm-title">' + (elite ? '凶残响湮灭' : '残响消散').split('').map((ch, i) =>
        '<span style="--di:' + i + '">' + ch + '</span>').join('') + '</h2>' +
      '<p class="dm-lore">' + randomLore() + '</p>' +
      '<div class="dm-stats">' +
        '<div class="dm-stat" style="--si:0;--sc:rgba(' + beam + ',0.55)"><div class="dm-v" id="stGain">0</div><div class="dm-l">以太结晶</div></div>' +
        '<div class="dm-stat" style="--si:1;--sc:rgba(255,214,140,0.6)"><div class="dm-v" id="stFrag">+0</div><div class="dm-l">记忆碎片</div></div>' +
        '<div class="dm-stat" style="--si:2;--sc:rgba(' + beam + ',0.55)"><div class="dm-v">' + run.deck.length + '</div><div class="dm-l">牌组</div></div>' +
      '</div>' +
      '<p class="dm-lore dm-rand">记 忆 凝 聚 中 ……</p>' +
      '<div class="bw-picks">' +
        opts.map((c, i) => '<div class="pick" id="slot' + i + '" style="--si:' + i + '">' +
          '<div class="card static roulette-ghost"><div class="cname">？</div><div class="cdesc">凝聚中</div></div></div>').join('') +
      '</div>' +
      '<div class="dm-btns"><button class="dm-btn" onclick="skipReward()">放弃（+8 结晶）</button></div>' +
    '</div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
  countUp($('stGain'), gain, 750);
  countUp($('stFrag'), frag, 750, '+');
  opts.forEach((c, i) => roulette(i, c, 900 + i * 450));
}

// 数字滚动(缓出)
function countUp(el, to, ms, prefix) {
  if (!el || !el.style) return;
  const t0 = performance.now();
  const iv = setInterval(() => {
    const p = Math.min(1, (performance.now() - t0) / ms);
    el.textContent = (prefix || '') + Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p >= 1) clearInterval(iv);
  }, 40);
}

function roulette(slot, finalCard, dur) {
  const el = $('slot' + slot);
  if (!el) return;
  const t0 = performance.now();
  let last = 0;
  const iv = setInterval(() => {
    const p = (performance.now() - t0) / dur;
    if (p >= 1) {
      clearInterval(iv);
      el.innerHTML = cardHtml(finalCard);
      el.firstChild.classList.add('settle');
      el.classList.add('settled');
      el.onclick = () => pickReward(slot);
      sfxTick(1.7);
      return;
    }
    if (performance.now() - last > 55 + p * p * 200) {
      last = performance.now();
      const rc = CARD_POOL[(Math.random() * CARD_POOL.length) | 0];
      el.innerHTML = '<div class="card static roulette-ghost"><div class="cname">' + rc.name + '</div>' +
        '<div class="cdesc">？</div></div>';
      sfxTick(0.9 + p * 0.5);
    }
  }, 30);
}

function pickReward(i) {
  run.deck.push(run._rewardOpts[i]);
  sfxCoin();
  const fx = qs('.bw-fx');   // 清小结算层
  if (fx && fx.remove) fx.remove();
  afterNode();
}

function skipReward() {
  run.crystals += 8;
  const fx = qs('.bw-fx');   // 放弃也要清小结算层
  if (fx && fx.remove) fx.remove();
  afterNode();
}

// ================= 商店 =================
function cardPrice(c) {
  return Math.round(PRICE[c.rarity] * (0.9 + Math.random() * 0.2) * (curWorld().mod.shopDiscount || 1));
}

function showShop() {
  const key = run._nextPos.l + ',' + run._nextPos.i;
  if (!run.shopStock || run.shopKey !== key) {
    run.shopStock = [];
    const names = new Set();
    let g = 0;
    while (run.shopStock.length < 5 && g++ < 80) {
      const c = rollCard(W_NORMAL);
      if (!names.has(c.name)) { names.add(c.name); run.shopStock.push({ card: c, price: cardPrice(c), sold: false }); }
    }
    run.shopKey = key;
    run.shopRemoveUsed = false;
    run.shopHealUsed = false;
    run._removeMode = false;
  }

  // 全屏商队(深空摊位氛围)
  const dk = h => {
    const n = parseInt(h.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.2 | 0) + ',' + ((n >> 8 & 255) * 0.2 | 0) + ',' + ((n & 255) * 0.2 | 0) + ')';
  };
  hidePanel();
  const old = qs('.shop-fx');
  if (old && old.remove) old.remove();
  const fx = document.createElement('div');
  fx.className = 'dm-fx shop-fx';
  let shelf = '';
  run.shopStock.forEach((it, i) => {
    if (it.sold) {
      shelf += '<div class="shop-slot sold"><div class="sold-tag">已售出</div></div>';
    } else {
      const afford = run.crystals >= it.price ? '' : ' poor';
      shelf += '<div class="shop-slot' + afford + '" style="--si:' + i + '" onclick="buyCard(' + i + ')">' +
        cardHtml(it.card) + '<div class="price">◈ ' + it.price + '</div></div>';
    }
  });
  fx.innerHTML =
    '<div class="dm-veil" style="background:linear-gradient(168deg,' + dk(BGPAL.grad[0]) + ' 0%,' + dk(BGPAL.grad[1]) + ' 52%,' + dk(BGPAL.grad[2]) + ' 100%)"></div>' +
    '<div class="dm-glow" style="background:radial-gradient(circle at 50% 38%, rgba(' + BGPAL.beam + ',0.15), transparent 60%)"></div>' +
    '<div class="dm-core">' +
      '<h2 class="dm-title">以太商队</h2>' +
      '<p class="dm-lore">「客人，你身上记忆的成色不错。要换点什么吗？」——没有面孔的商人</p>' +
      '<div class="shop-bar">以太结晶 ◈ ' + run.crystals + '　・　澪奈 HP ' + run.hp + '/' + run.maxHp + '</div>' +
      '<div class="shop-shelf">' + shelf + '</div>' +
      '<div class="dm-btns">' +
        '<button class="dm-btn small-btn" ' + (run.shopHealUsed ? 'disabled' : '') + ' onclick="shopHeal()">以太浸浴 · 回复20（◈40）</button>' +
        '<button class="dm-btn small-btn" ' + (run.shopRemoveUsed ? 'disabled' : '') + ' onclick="shopRemove()">记忆销毁 · 移除一张（◈60）</button>' +
        '<button class="dm-btn" onclick="shopLeave()">离开商队</button>' +
      '</div>' +
      (run._removeMode ? '<p class="dm-lore">选择要销毁的记忆：</p><div class="deck-list shop-rm">' +
        run.deck.map((c, i) => '<button class="pbtn small" onclick="doRemove(' + i + ')">' +
          '<span style="color:' + RARITY[c.rarity].color + '">' + c.name + '</span></button>').join(' ') + '</div>' : '') +
    '</div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
}
function shopLeave() {   // 清商队层再走
  const fx = qs('.shop-fx');
  if (fx && fx.remove) fx.remove();
  afterNode();
}

function buyCard(i) {
  const it = run.shopStock[i];
  if (it.sold || run.crystals < it.price) return;
  run.crystals -= it.price;
  it.sold = true;
  run.deck.push(it.card);
  sfxCoin();
  // 购买动画: 商品卡飞向牌组(右上)再重建货架
  const slots = document.querySelectorAll('.shop-fx .shop-slot');
  const el = slots && slots[i];
  if (el && el.animate) {
    el.animate([
      { transform: 'translateY(0) scale(1)', opacity: 1 },
      { transform: 'translate(60px,-40px) scale(1.08)', opacity: 1, offset: 0.3 },
      { transform: 'translate(38vw,-52vh) scale(0.3) rotate(18deg)', opacity: 0 },
    ], { duration: 520, easing: 'cubic-bezier(0.3, 0.6, 0.3, 1)', fill: 'forwards' });
    setTimeout(showShop, 500);
  } else showShop();
}

function shopHeal() {
  if (run.crystals < 40 || run.shopHealUsed) return;
  run.crystals -= 40;
  run.shopHealUsed = true;
  run.hp = Math.min(run.maxHp, run.hp + 20);
  showShop();
}

function shopRemove() {
  if (run.crystals < 60 || run.shopRemoveUsed) return;
  run._removeMode = true;
  showShop();
}

function doRemove(i) {
  if (run.crystals < 60) return;
  run.crystals -= 60;
  run.shopRemoveUsed = true;
  run._removeMode = false;
  run.deck.splice(i, 1);
  showShop();
}

// ================= 虚空异象(事件) =================
const EVENTS = [
  {
    text: '一块石碑静静漂浮。碑文的字迹，像是澪奈自己的笔迹：「第1437号宇宙已静默。请勿回头。」',
    choices: [
      { label: '触摸碑文（获得一段幻忆以上的记忆）', result: '碑文化作光尘，涌入澪奈的掌心。',
        fn() {
          const c = Math.random() < 0.5 ? rollCardOf('E', true) : rollCardOf('L', true);
          if (c) run.deck.push(Object.assign({}, c));
          else META.frags += 6, saveMeta();
        } },
      { label: '刮下碑上的结晶（+30结晶）', result: '结晶冰凉。石碑在它离开的地方，仿佛轻轻叹息。',
        fn() { run.crystals += 30; } },
    ],
  },
  {
    text: '前方的虚空里，站着另一个澪奈。她的影子——比你多一个。',
    choices: [
      { label: '与她交谈（失去6生命，获得烁忆以上的牌）', result: '「别相信用熟人声音说话的东西。」她说完就散了。',
        fn() {
          run.hp = Math.max(1, run.hp - 6);
          const p = CARD_POOL.filter(c => c.rarity !== 'C' && isUnlocked(c.name));
          if (p.length) run.deck.push(Object.assign({}, p[(Math.random() * p.length) | 0]));
        } },
      { label: '绕开她（无事发生）', result: '你走出很远，仍能感觉到三道目光。',
        fn() {} },
    ],
  },
  {
    text: '一眼以太泉在虚无中翻涌，泉水里沉着细碎的光。',
    choices: [
      { label: '饮泉（回复15生命）', result: '是温的。像很久以前的某个午后。',
        fn() { run.hp = Math.min(run.maxHp, run.hp + 15); } },
      { label: '汲取以太（+25结晶，受到5伤害）', result: '光刺进血管。值得。大概。',
        fn() { run.crystals += 25; run.hp = Math.max(1, run.hp - 5); } },
    ],
  },
  {
    text: '一段不属于澪奈的记忆飘来：满是杂音的电台，循环播放着一首没人听过的歌。',
    choices: [
      { label: '收下这段记忆（随机获得一张牌，生命上限+3）', result: '歌留在脑子里了。意外地，不难听。',
        fn() { run.maxHp += 3; run.hp += 3; run.deck.push(Object.assign({}, rollCard(W_NORMAL))); } },
      { label: '将它撕碎（随机移除一张凡忆）', result: '杂音消失了。安静得有点过分。',
        fn() { const idxs = run.deck.map((c, i) => c.rarity === 'C' ? i : -1).filter(i => i >= 0);
               if (idxs.length) run.deck.splice(idxs[(Math.random() * idxs.length) | 0], 1);
               else run.crystals += 10; } },
    ],
  },
  {
    text: '许愿池——如果虚无里也有这种东西的话。池底沉着细小的光。',
    choices: [
      { label: '投入10结晶（获得6记忆碎片）', result: '光浮了上来，落进澪奈的口袋。',
        fn() { if (run.crystals >= 10) { run.crystals -= 10; META.frags += 6; saveMeta(); } else { META.frags += 2; saveMeta(); } } },
      { label: '默默离开', result: '池水倒映出一个不是澪奈的澪奈。',
        fn() {} },
    ],
  },
  {
    text: '一群残响围成半圆，正在合唱。没有歌词，但澪奈听懂了——是她在原来的世界哼过的调子。',
    choices: [
      { label: '跟着唱（失去4生命，获得「不屈呐喊」）', result: '合唱停了一拍。然后，它们开始为你伴奏。',
        fn() { run.hp = Math.max(1, run.hp - 4); run.deck.push(Object.assign({}, findCard('不屈呐喊'))); } },
      { label: '鞠躬致意，转身离开', result: '身后的调子，跟了很远。',
        fn() {} },
    ],
  },
  {
    text: '一台锈住的祈愿机，投币口卡着半枚结晶。屏幕上闪着一行字：「再试一次，万一呢？」',
    choices: [
      { label: '投入8结晶（随机解锁一张未拥有卡）', result: '机器咳嗽了两声，吐出一段发光的记忆。',
        fn() {
          if (run.crystals >= 8) {
            run.crystals -= 8;
            const locked = CARD_POOL.filter(c => !isUnlocked(c.name));
            if (locked.length) { META.unlocked.push(locked[(Math.random() * locked.length) | 0].name); saveMeta(); }
            else META.frags += 4, saveMeta();
          }
        } },
      { label: '踹它一脚（+15结晶）', result: '卡住的结晶掉了出来。机器屏幕灭了，像松了口气。',
        fn() { run.crystals += 15; } },
    ],
  },
  {
    text: '镜中的图书馆。每面镜子里都有一本翻开的书，书页上的字都是澪奈的笔迹。',
    choices: [
      { label: '抄录一页（复制牌组中随机一张牌）', result: '镜子碎了一面。书页上的字，变成了你的。',
        fn() { if (run.deck.length) run.deck.push(Object.assign({}, run.deck[(Math.random() * run.deck.length) | 0])); } },
      { label: '烧掉一封信（移除一张凡忆，+10结晶）', result: '火焰很安静。信封里掉出几枚结晶。',
        fn() { const idxs = run.deck.map((c, i) => c.rarity === 'C' ? i : -1).filter(i => i >= 0);
               if (idxs.length) run.deck.splice(idxs[(Math.random() * idxs.length) | 0], 1);
               run.crystals += 10; } },
    ],
  },
  {
    text: '一尊风化的战士雕像，手里还握着剑。基座上刻着：「我曾抵达第九层。」',
    choices: [
      { label: '低头致敬（生命上限+6）', result: '风停了一瞬。雕像的剑尖，向下垂了一寸。',
        fn() { run.maxHp += 6; run.hp += 6; } },
      { label: '取走他的剑（获得随机攻击牌，失去4生命）', result: '「谢谢。」风里有声音说。你的手被石屑划破了。',
        fn() { run.hp = Math.max(1, run.hp - 4); const p = CARD_POOL.filter(c => c.type === 'attack' && isUnlocked(c.name)); run.deck.push(Object.assign({}, p[(Math.random() * p.length) | 0])); } },
    ],
  },
  {
    text: '一道时间裂缝，边缘像被撕开的胶片。里面有个声音说：「想看看别的可能吗？」',
    choices: [
      { label: '凝视裂缝（随机权能牌，失去3生命）', result: '你看到了一千种输法。其中一种里，你赢了。',
        fn() { run.hp = Math.max(1, run.hp - 3); const p = CARD_POOL.filter(c => c.type === 'power' && isUnlocked(c.name)); if (p.length) run.deck.push(Object.assign({}, p[(Math.random() * p.length) | 0])); } },
      { label: '快步走开（+2碎片）', result: '裂缝在身后合上了，像从未张开过。',
        fn() { META.frags += 2; saveMeta(); } },
    ],
  },
  {
    text: '一个残响赌徒拦住了去路，指间转着两枚结晶：「赌一把？输了算我的，赢了……也多半算我的。」',
    choices: [
      { label: '押15结晶（五五开，赢+40结晶）', result: '赌徒盯着结晶看了很久，骂了句没人听懂的话，把结晶抛了过来。',
        fn() {
          if (run.crystals >= 15) {
            run.crystals -= 15;
            if (Math.random() < 0.5) run.crystals += 40;
            else run.hp = Math.max(1, run.hp - 3);
          } else run.hp = Math.max(1, run.hp - 3);
        } },
      { label: '押3记忆碎片（赢+10碎片）', result: '「跟你赌真没意思。」他嘟囔着，把碎片撒进你口袋。',
        fn() {
          if (META.frags >= 3) { META.frags -= 3; if (Math.random() < 0.5) META.frags += 10; }
          else META.frags += 1;
          saveMeta();
        } },
      { label: '不赌（无事发生）', result: '「胆小鬼活得久。」他在你身后笑，「但都死在半路上。」',
        fn() {} },
    ],
  },
  {
    text: '记忆典当行。柜台后的残响拨着算盘：「典记忆，活当死当都行——死当价高。」',
    choices: [
      { label: '死当一张烁忆以上的牌（+45结晶）', result: '算盘声停了。「好货。」记忆被装进一只小瓶，塞上木塞。',
        fn() {
          const idxs = run.deck.map((c, i) => c.rarity !== 'C' ? i : -1).filter(i => i >= 0);
          if (idxs.length) { run.deck.splice(idxs[(Math.random() * idxs.length) | 0], 1); run.crystals += 45; }
          else run.crystals += 10;
        } },
      { label: '活当一张凡忆（+18结晶）', result: '「随时来赎。」他笑着说。你们都知道你不会来。',
        fn() {
          const idxs = run.deck.map((c, i) => c.rarity === 'C' ? i : -1).filter(i => i >= 0);
          if (idxs.length) { run.deck.splice(idxs[(Math.random() * idxs.length) | 0], 1); run.crystals += 18; }
          else run.crystals += 6;
        } },
    ],
  },
  {
    text: '回声剧场正在上演最后一幕。演员都是没有名字的残响，演的是某个宇宙最后的一天。',
    choices: [
      { label: '看完它（回复8生命，+2碎片）', result: '谢幕时，所有演员朝你的方向深深鞠躬。你不记得剧情，但眼眶是热的。',
        fn() { run.hp = Math.min(run.maxHp, run.hp + 8); META.frags += 2; saveMeta(); } },
      { label: '中途离场（无事发生）', result: '身后的掌声响起来的时候，你莫名有些愧疚。',
        fn() {} },
    ],
  },
  {
    text: '一个迷路的小残响拽着你的衣角。它怀里抱着一块牌子：「有人会来接我。」',
    choices: [
      { label: '给它5结晶买盏灯（获得烁忆牌）', result: '它把灯举得很高，一蹦一跳地走了。灯光在虚无里亮了很久。',
        fn() {
          if (run.crystals >= 5) run.crystals -= 5;
          const p = CARD_POOL.filter(c => c.rarity === 'R' && isUnlocked(c.name));
          if (p.length) run.deck.push(Object.assign({}, p[(Math.random() * p.length) | 0]));
        } },
      { label: '陪它坐一会儿（生命上限+4）', result: '它靠着你睡着了。醒来时它不见了，你身上多了一点说不清的力气。',
        fn() { run.maxHp += 4; run.hp += 4; } },
    ],
  },
  {
    text: '一口昼夜井。井水一半白昼一半黑夜，分界线像一把尺。井边说：「舀一瓢，只能舀一边。」',
    choices: [
      { label: '舀白昼（回复10生命）', result: '水温是晒过太阳的被子味。',
        fn() { run.hp = Math.min(run.maxHp, run.hp + 10); } },
      { label: '舀黑夜（+6碎片，失去4生命）', result: '水是凉的，甜得像一句谎话。',
        fn() { META.frags += 6; saveMeta(); run.hp = Math.max(1, run.hp - 4); } },
    ],
  },
  {
    text: '末班车站台。长椅空着，椅背上贴着一张泛黄的字条：「车总会来的。」',
    choices: [
      { label: '坐下来，等一会儿（生命上限+4，+2碎片）', result: '没有车进站。但坐着坐着，你想起家门口那条街的样子。起身时，脚步轻了一点。',
        fn() { run.maxHp += 4; run.hp += 4; META.frags += 2; saveMeta(); } },
      { label: '把字条抚平，悄悄离开（+5结晶）', result: '站台深处有个苍老的声音说：「等的人，总会到的。」',
        fn() { run.crystals += 5; } },
    ],
  },
  {
    text: '一柄插进浮石的巨剑，剑身缠满褪色的忆带。石座上写着：「借你一式。记得还。」',
    choices: [
      { label: '拔剑（失去7生命，获得一张大招）', result: '剑离石的瞬间，你听见一声满足的叹息。一式，够本。',
        fn() {
          run.hp = Math.max(1, run.hp - 7);
          const p = CARD_POOL.filter(c => ULT_CARDS.includes(c.name) && isUnlocked(c.name));
          if (p.length) run.deck.push(Object.assign({}, p[(Math.random() * p.length) | 0]));
        } },
      { label: '鞠躬，不借（+2碎片）', result: '剑身轻轻震了一下，像在还礼。',
        fn() { META.frags += 2; saveMeta(); } },
    ],
  },
  {
    text: '你多出来的那个影子忽然开口了。它说：「我替你保管的东西，你想看看吗？」',
    choices: [
      { label: '看（失去5生命，随机获得两张凡忆）', result: '你看见了自己忘记的三秒钟。很普通的三秒钟。你哭了。',
        fn() { run.hp = Math.max(1, run.hp - 5); for (let k = 0; k < 2; k++) run.deck.push(Object.assign({}, rollCardOf('C', true) || rollCard(W_NORMAL))); } },
      { label: '不看（+3碎片）', result: '「也好。」影子说，「那就继续存着。利息很高的。」',
        fn() { META.frags += 3; saveMeta(); } },
    ],
  },
  {
    text: '一台自动贩售机，售卖栏里只有一件商品：「昨天的勇气（限购一次）」。',
    choices: [
      { label: '投入12结晶（获得随机权能牌）', result: '机器咣当一响。勇气是温的，像刚从谁的手心里递出来。',
        fn() {
          if (run.crystals >= 12) {
            run.crystals -= 12;
            const p = CARD_POOL.filter(c => c.type === 'power' && isUnlocked(c.name));
            if (p.length) run.deck.push(Object.assign({}, p[(Math.random() * p.length) | 0]));
          }
        } },
      { label: '敲敲玻璃，放弃购买（回复5生命）', result: '玻璃里面，昨天的你朝你比了个大拇指。',
        fn() { run.hp = Math.min(run.maxHp, run.hp + 5); } },
    ],
  },
];

function showEvent() {
  // 不重复事件池: 抽完一轮重洗(且不与上一个重复)
  if (!run._evPool || !run._evPool.length)
    run._evPool = shuffle(EVENTS.map((_, i) => i).filter(i => i !== run._evLast));
  const idx = run._evPool.pop();
  run._evLast = idx;
  const ev = EVENTS[idx];
  run._event = ev;
  // 全屏沉浸异象(剧情级排版 + 竖排抉择卡)
  const dk = h => {
    const n = parseInt(h.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.2 | 0) + ',' + ((n >> 8 & 255) * 0.2 | 0) + ',' + ((n & 255) * 0.2 | 0) + ')';
  };
  hidePanel();
  const old = qs('.ev-fx');
  if (old && old.remove) old.remove();
  const fx = document.createElement('div');
  fx.className = 'dm-fx ev-fx';
  fx.innerHTML =
    '<div class="dm-veil" style="background:linear-gradient(168deg,' + dk(BGPAL.grad[0]) + ' 0%,' + dk(BGPAL.grad[1]) + ' 52%,' + dk(BGPAL.grad[2]) + ' 100%)"></div>' +
    '<div class="dm-glow" style="background:radial-gradient(circle at 50% 40%, rgba(' + BGPAL.beam + ',0.16), transparent 62%)"></div>' +
    '<div class="dm-core ev-core">' +
      '<h2 class="dm-title">虚空异象</h2>' +
      '<p class="dm-lore ev-text">' + ev.text.split('').map((ch, i) =>
        '<span style="--di:' + i + '">' + ch + '</span>').join('') + '</p>' +
      '<div class="ev-choices">' +
      ev.choices.map((c, i) =>
        '<button class="ev-choice" style="--si:' + i + '" onclick="eventChoice(' + i + ')">' + c.label + '</button>').join('') +
      '</div>' +
    '</div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
}

function eventChoice(i) {
  const c = run._event.choices[i];
  sClick();
  const fx = qs('.ev-fx');
  const btns = fx && fx.querySelectorAll ? fx.querySelectorAll('.ev-choice') : [];
  btns.forEach((b, k) => {   // 抉择确认: 选中亮起, 其余淡出
    if (k === i) { b.classList.add('chosen'); }
    else b.classList.add('fade');
  });
  setTimeout(() => {
    c.fn();
    if (!fx || !fx.querySelector) { afterNode(); return; }
    fx.querySelector('.ev-choices').innerHTML = '';
    const tx = fx.querySelector('.ev-text');
    if (tx) {
      tx.innerHTML = c.result.split('').map((ch, k) =>
        '<span style="--di:' + k + '">' + ch + '</span>').join('');
      tx.classList.remove('ev-text'); tx.classList.add('ev-result');
    }
    fx.querySelector('.dm-core').insertAdjacentHTML('beforeend',
      '<div class="dm-btns"><button class="dm-btn" onclick="evDone()">继续向上</button></div>');
  }, 420);
}
function evDone() {
  const fx = qs('.ev-fx');
  if (fx && fx.remove) fx.remove();
  afterNode();
}

// ================= 回响锚点(休息) =================
function showRest() {   // 全屏沉浸层: 暖光晕+萤火缓升+涟漪, 与商店/事件/设置同语言
  const healAmt = Math.round(run.maxHp * 0.3);
  hidePanel();
  const old = qs('.rest-fx');
  if (old && old.remove) old.remove();
  const dk = h => {
    const n = parseInt(h.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.2 | 0) + ',' + ((n >> 8 & 255) * 0.2 | 0) + ',' + ((n & 255) * 0.2 | 0) + ')';
  };
  let amb = '';
  if (SETTINGS.fx) {
    let motes = '';
    for (let i = 0; i < 10; i++)   // 萤火: 比结算光尘更慢更暖
      motes += '<i style="left:' + (6 + Math.random() * 88).toFixed(1) + '%;bottom:-2%;' +
        'animation-duration:' + (12 + Math.random() * 10).toFixed(1) + 's;animation-delay:' + (Math.random() * 10).toFixed(1) + 's"></i>';
    amb = '<div class="dm-motes rest-motes">' + motes + '</div>' +
      '<div class="rest-ripples"><i></i><i></i><i></i></div>';
  }
  const fx = document.createElement('div');
  fx.className = 'dm-fx rest-fx';
  fx.innerHTML =
    '<div class="dm-veil" style="background:linear-gradient(168deg,' + dk(BGPAL.grad[0]) + ' 0%,' + dk(BGPAL.grad[1]) + ' 52%,' + dk(BGPAL.grad[2]) + ' 100%)"></div>' +
    '<div class="dm-glow" style="background:radial-gradient(circle at 50% 44%, rgba(255, 214, 150, 0.14), transparent 60%)"></div>' +
    amb +
    '<div class="dm-core">' +
      '<h2 class="dm-title">' + '回响锚点'.split('').map((ch, i) => '<span style="--di:' + i + '">' + ch + '</span>').join('') + '</h2>' +
      '<p class="dm-lore">虚无中罕见的安静角落。残响不会靠近这里——<br>它们生前，也曾在这样的地方休息过。</p>' +
      '<div class="rest-hp">澪奈 HP <b id="restHpNow">' + run.hp + '</b>/' + run.maxHp +
        '<div class="rest-hpbar"><i id="restHpBar" style="width:' + Math.round(run.hp / run.maxHp * 100) + '%"></i></div></div>' +
      '<div class="rest-choices">' +
        '<button class="rest-choice" style="--si:0" onclick="restPick(0)"><span class="rc-name">沉 睡</span>' +
          '<span class="rc-desc">回复 30% 生命 · +' + healAmt + ' HP</span></button>' +
        '<button class="rest-choice" style="--si:1" onclick="restPick(1)"><span class="rc-name">冥 想</span>' +
          '<span class="rc-desc">生命上限 +8 · 并回复 8</span></button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
}

function restPick(i) {   // 功能逻辑与旧 restHeal/restMeditate 一致, 只加确认动效+反馈小演出
  sClick();
  const fx = qs('.rest-fx');
  const btns = fx && fx.querySelectorAll ? fx.querySelectorAll('.rest-choice') : [];
  btns.forEach((b, k) => b.classList.add(k === i ? 'chosen' : 'fade'));
  const healAmt = Math.round(run.maxHp * 0.3);
  setTimeout(() => {
    if (i === 0) run.hp = Math.min(run.maxHp, run.hp + healAmt);
    else { run.maxHp += 8; run.hp += 8; }
    const now = $('restHpNow'), bar = $('restHpBar');
    if (now) now.textContent = run.hp;
    if (bar && bar.style) bar.style.width = Math.round(run.hp / run.maxHp * 100) + '%';
    if (i === 0) sBuff(); else sPower();
    if (fx && SETTINGS.fx && fx.appendChild) {   // 沉睡=青绿光萦绕, 冥想=鎏金光扩散
      const boon = document.createElement('div');
      boon.className = 'rest-boon ' + (i === 0 ? 'heal' : 'mind');
      let ps = '';
      for (let k = 0; k < 12; k++)
        ps += '<i style="--ba:' + (Math.random() * 360).toFixed(0) + 'deg;--bd:' + (60 + Math.random() * 90).toFixed(0) + 'px;' +
          'animation-delay:' + (Math.random() * 0.3).toFixed(2) + 's"></i>';
      boon.innerHTML = ps;
      fx.appendChild(boon);
      setTimeout(() => boon.remove(), 1400);
    }
  }, 380);
  setTimeout(() => {
    if (fx && fx.remove) fx.remove();
    afterNode();
  }, 1650);
}

// ================= 主菜单 =================
// 印章式确认 + 平滑转场: 卡片像被印下去一样一沉, 墨晕荡开, 页面淡出上移切换
function stampCard(el, colors, cb) {
  initAudio();
  sStamp();
  if (el) {
    const base = el.style.transform || '';
    el.animate([
      { transform: base, filter: 'brightness(1)', offset: 0 },
      { transform: base + ' translateY(5px)', filter: 'brightness(1.2)', offset: 0.35 },
      { transform: base, filter: 'brightness(1)', offset: 1 },
    ], { duration: 240, easing: 'cubic-bezier(0.3, 0.7, 0.4, 1)' });
    if (SETTINGS.fx) {
      const r = el.getBoundingClientRect();
      const ring = document.createElement('div');
      ring.className = 'stamp-ring';
      ring.style.left = (r.left + r.width / 2) + 'px';
      ring.style.top = (r.top + r.height / 2) + 'px';
      if (colors && colors[0]) ring.style.borderColor = hexA(colors[0], 0.85);
      document.body.appendChild(ring);
      setTimeout(() => ring.remove(), 620);
    }
  }
  const panel = $('panel');
  const inner = panel && panel.firstElementChild;
  if (inner && inner.animate)
    inner.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-18px)' }],
      { duration: 230, delay: 120, easing: 'ease-in', fill: 'forwards' });
  setTimeout(cb, 360);
}

let _pickingWorld = false;
function pickWorld(el, key) {
  if (_pickingWorld) return;
  _pickingWorld = true;
  const w = WORLDS.find(x => x.key === key) || WORLDS[0];
  stampCard(el, [w.grad[1], w.grad[2], '#ffffff'], () => {
    _pickingWorld = false;
    startRun(key);
  });
}

// ---------- 多边形切片(把卡片切成不规则碎片) ----------
function polyArea(p) {
  let a = 0;
  for (let i = 0; i < p.length; i++) {
    const q = p[(i + 1) % p.length];
    a += p[i][0] * q[1] - q[0] * p[i][1];
  }
  return Math.abs(a / 2);
}
function polyCentroid(p) {
  let x = 0, y = 0;
  p.forEach(pt => { x += pt[0]; y += pt[1]; });
  return [x / p.length, y / p.length];
}
// 等周比: 4πA/P², 越接近 1 越圆润, 细长条会很小(asp = 高/宽, 修正卡片非正方形)
function polyFatness(p, asp) {
  let per = 0;
  for (let i = 0; i < p.length; i++) {
    const q = p[(i + 1) % p.length];
    per += Math.hypot(q[0] - p[i][0], (q[1] - p[i][1]) * asp);
  }
  if (!per) return 0;
  return 4 * Math.PI * polyArea(p) * asp / (per * per);
}
// 保留过 ctr、法线为 (nx,ny) 的直线正侧(Sutherland–Hodgman)
function slicePoly(poly, nx, ny, ctr) {
  const out = [];
  const d = pt => (pt[0] - ctr[0]) * nx + (pt[1] - ctr[1]) * ny;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length];
    const da = d(a), db = d(b);
    if (da >= 0) out.push(a);
    if ((da >= 0) !== (db >= 0)) {
      const t = da / (da - db);
      out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
    }
  }
  return out;
}

// 玻璃碎裂特效(已停用: 用户改为印章式转场, 代码保留备复用)
function hexA(hex, a) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
}
function glassShatterFx(el, colors) {
  const r = el.getBoundingClientRect();
  const box = document.createElement('div');
  box.className = 'shatter-fx';
  document.body.appendChild(box);
  const cx = r.left + r.width / 2, cy = r.top + r.height / 2;

  // 爆闪 + 冲击波环(染主题色)
  const flash = document.createElement('div');
  flash.className = 'sflash';
  flash.style.left = cx + 'px'; flash.style.top = cy + 'px';
  flash.style.background = 'radial-gradient(circle, rgba(255,255,255,0.95), ' + hexA(colors[0], 0.55) + ' 45%, rgba(255,255,255,0) 68%)';
  box.appendChild(flash);
  const ring = document.createElement('div');
  ring.className = 'sring';
  ring.style.left = cx + 'px'; ring.style.top = cy + 'px';
  ring.style.borderColor = hexA(colors[0], 0.95);
  ring.style.boxShadow = '0 0 24px ' + hexA(colors[0], 0.8) + ', inset 0 0 18px rgba(255,255,255,0.6)';
  box.appendChild(ring);

  // 把卡片(百分比坐标)切成 11~13 块: 过半的刀是偏心削渣(大块少, 小渣多)
  // 细长条(等周比过低)的切法作废, 保证碎片都是饱满的块
  const asp = r.height / r.width;
  let polys = [[[0, 0], [100, 0], [100, 100], [0, 100]]];
  const cuts = 13 + ((Math.random() * 3) | 0);   // 部分刀会因细长校验作废, 多给几刀补偿
  for (let c = 0; c < cuts; c++) {
    polys.sort((a, b) => polyArea(b) - polyArea(a));
    const target = polys.shift();
    const ctr = polyCentroid(target);
    const ang = Math.random() * Math.PI;
    const nx = Math.cos(ang), ny = Math.sin(ang);
    let px = ctr[0], py = ctr[1];
    if (Math.random() < 0.55) {
      // 偏心一刀: 切线偏离重心, 只从边上削下一小块渣
      let ext = 0;
      target.forEach(pt => { ext = Math.max(ext, Math.abs((pt[0] - ctr[0]) * nx + (pt[1] - ctr[1]) * ny)); });
      const off = (0.25 + Math.random() * 0.35) * ext * (Math.random() < 0.5 ? 1 : -1);
      px += nx * off; py += ny * off;
    }
    const a = slicePoly(target, nx, ny, [px, py]), b = slicePoly(target, -nx, -ny, [px, py]);
    if (a.length >= 3 && b.length >= 3 && polyFatness(a, asp) >= 0.13 && polyFatness(b, asp) >= 0.13) polys.push(a, b);
    else polys.push(target);
  }

  // 每块碎片 = 卡片克隆 + clip-path 裁出该块, 从破裂点向外飞
  polys.forEach(poly => {
    const frag = el.cloneNode(true);
    frag.removeAttribute('id');
    frag.classList.remove('shatter', 'cur', 'noanim');
    frag.style.position = 'fixed';
    frag.style.left = r.left + 'px';
    frag.style.top = r.top + 'px';
    frag.style.width = r.width + 'px';
    frag.style.height = r.height + 'px';
    frag.style.margin = '0';
    frag.style.transform = 'none';
    frag.style.transition = 'none';
    frag.style.opacity = '1';
    frag.style.zIndex = '';
    frag.style.pointerEvents = 'none';
    frag.style.clipPath = 'polygon(' + poly.map(pt => pt[0].toFixed(1) + '% ' + pt[1].toFixed(1) + '%').join(',') + ')';
    box.appendChild(frag);
    const ctr = polyCentroid(poly);
    const dx0 = (ctr[0] - 50) / 50, dy0 = (ctr[1] - 50) / 50;   // 相对中心的方向
    const light = Math.max(0.55, Math.min(1.7, 1100 / (polyArea(poly) + 350)));   // 小渣轻, 飞得更高更远
    const dist = (160 + Math.random() * 230) * light;
    const dx = dx0 * dist + (Math.random() - 0.5) * 110;        // 横向更散
    const up = (-(70 + Math.random() * 150) + dy0 * 40) * light;   // 先向上飞溅
    const fall = 380 + Math.random() * 220 + 250 / light;       // 大块更快坠出画面
    const rot = (dx0 >= 0 ? 1 : -1) * (25 + Math.random() * 75);
    const glow = hexA(colors[0], 0.55), glowSoft = hexA(colors[0], 0.3);
    frag.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1, filter: 'brightness(1.45) drop-shadow(0 0 10px ' + glow + ')', offset: 0 },
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1, filter: 'brightness(1.45) drop-shadow(0 0 10px ' + glow + ')', offset: 0.02, easing: 'cubic-bezier(0.1, 0.7, 0.3, 1)' },
      { transform: 'translate(' + dx * 0.75 + 'px,' + up + 'px) rotate(' + rot * 0.6 + 'deg)', opacity: 1, filter: 'brightness(1.1) drop-shadow(0 0 5px ' + glowSoft + ')', offset: 0.42, easing: 'cubic-bezier(0.55, 0.05, 0.9, 0.55)' },   // 抛到顶点
      { transform: 'translate(' + dx * 0.9 + 'px,' + fall * 0.55 + 'px) rotate(' + rot * 0.85 + 'deg)', opacity: 0.45, filter: 'brightness(1.22) drop-shadow(0 0 8px ' + glowSoft + ')', offset: 0.58 },   // 开始淡出
      { transform: 'translate(' + dx + 'px,' + fall + 'px) rotate(' + rot + 'deg)', opacity: 0, filter: 'brightness(0.9)', offset: 0.74 },
      { transform: 'translate(' + dx * 1.05 + 'px,' + (fall + 120) + 'px) rotate(' + rot * 1.15 + 'deg)', opacity: 0, filter: 'brightness(0.9)', offset: 1 },
    ], { duration: 800 + Math.random() * 240, easing: 'linear', fill: 'forwards' });
  });
  el.style.visibility = 'hidden';   // 本体让位给碎片

  // 细玻璃屑陪衬(主题色为主, 白色只作高光)
  spawnShards(box, r, cx, cy, colors, 14, 3, 9, 300);
  setTimeout(() => box.remove(), 1500);
}

function spawnShards(box, r, cx, cy, colors, n, szMin, szMax, spread) {
  for (let i = 0; i < n; i++) {
    const s = document.createElement('div');
    s.className = 'shard';
    const px = r.left + Math.random() * r.width, py = r.top + Math.random() * r.height;
    const sz = szMin + Math.random() * (szMax - szMin);
    s.style.left = px + 'px'; s.style.top = py + 'px';
    s.style.width = sz + 'px'; s.style.height = sz + 'px';
    const c = colors[(Math.random() * colors.length) | 0];
    s.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, ' + c + ' 55%)';
    s.style.filter = 'drop-shadow(0 0 4px ' + c + ')';
    const p = () => (Math.random() * 100).toFixed(0) + '%';
    s.style.clipPath = 'polygon(' + p() + ' ' + p() + ',' + p() + ' ' + p() + ',' + p() + ' ' + p() + ')';
    box.appendChild(s);
    const ang = Math.atan2(py - cy, px - cx) + (Math.random() - 0.5) * 0.8;
    const dist = spread * 0.4 + Math.random() * spread;
    const dx = Math.cos(ang) * dist;
    const up = Math.sin(ang) * dist * 0.4 - (60 + Math.random() * 90);   // 先向上溅
    const fall = 260 + Math.random() * 200;                              // 再落下
    const rot = (Math.random() - 0.5) * 900;
    s.animate([
      { transform: 'translate(0,0) rotate(0deg)', opacity: 1, offset: 0, easing: 'cubic-bezier(0.1, 0.7, 0.3, 1)' },
      { transform: 'translate(' + dx * 0.4 + 'px,' + up * 0.6 + 'px) rotate(' + rot * 0.3 + 'deg)', opacity: 0.35, offset: 0.22 },   // 闪烁
      { transform: 'translate(' + dx * 0.8 + 'px,' + up + 'px) rotate(' + rot * 0.6 + 'deg)', opacity: 1, offset: 0.4, easing: 'cubic-bezier(0.55, 0.05, 0.9, 0.55)' },
      { transform: 'translate(' + dx * 0.95 + 'px,' + fall * 0.7 + 'px) rotate(' + rot * 0.85 + 'deg)', opacity: 0, offset: 0.7 },   // 提前淡出
      { transform: 'translate(' + dx + 'px,' + fall + 'px) rotate(' + rot + 'deg)', opacity: 0, offset: 1 },
    ], { duration: 700 + Math.random() * 420, easing: 'linear', fill: 'forwards' });
  }
}

function startRun(worldKey) {
  initAudio();
  BGM.playTrack('battle');
  run.world = worldKey || 'void';
  const startIdx = Math.max(0, WORLDS.findIndex(w => w.key === run.world));
  run.worldOrder = [];
  for (let i = 0; i < WORLDS.length; i++) run.worldOrder.push(WORLDS[(startIdx + i) % WORLDS.length].key);
  run.worldIdx = 0;
  run.depthScale = 1;
  BGPAL = curWorld();
  try { localStorage.setItem('re_world', run.world); } catch (e) {}
  run.hp = 60; run.maxHp = 60; run.crystals = 40;
  run.deck = STARTER.map(n => Object.assign({}, findCard(n)));
  for (let i = 0; i < RANDOM_PICKS; i++) run.deck.push(Object.assign({}, rollCard(W_NORMAL)));
  run.map = genMap();
  run.pos = { l: -1, i: 0 };
  run._storyShown = 0;
  hidePanel();
  showStory([STORY_PROLOGUE, WORLD_STORIES[curWorld().key].intro], showMap);   // 序章+首界序合篇, 只播一次
}

// ================= 世界选择(全屏通栏选关) =================
const WICON = { void: '✦', cyber: '⌬', ember: '▲', frost: '❄', dream: '❀', storm: '⚡' };
let wSelIdx = 0;

function showWorldSelect() {
  const last = loadJSON('re_world', 'void');
  BGM.play();
  let lastIdx = Math.max(0, WORLDS.findIndex(w => w.key === last));
  if (!isWorldUnlocked(WORLDS[lastIdx].key)) lastIdx = 0;   // 上次世界已锁(旧存档/异常)回退 void
  const panes = WORLDS.map((w, wi) => {
    if (!isWorldUnlocked(w.key))   // 锁定态: 锁图标 + 解锁条件
      return '<div class="ws-pane lock" data-i="' + wi + '" style="transition-delay:' + wi * 70 + 'ms">' +
        '<div class="ws-num">0' + (wi + 1) + '</div>' +
        '<div class="ws-icon ws-lockicon">🔒</div>' +
        '<div class="ws-body"><div class="ws-name">' + w.name + '</div>' +
        '<div class="ws-lockcond">击败「' + WORLDS[wi - 1].name + '」的守望者</div></div>' +
      '</div>';
    return '<div class="ws-pane" data-i="' + wi + '" style="' +
      'background:linear-gradient(180deg,' + hexA(w.grad[0], 0.1) + ',' + hexA(w.grad[2], 0.34) + ');' +
      'transition-delay:' + wi * 70 + 'ms">' +
      '<div class="ws-glow" style="background:radial-gradient(circle at 50% 78%, rgba(' + w.beam + ',0.5), transparent 62%)"></div>' +
      '<div class="ws-num">0' + (wi + 1) + '</div>' +
      '<div class="ws-icon">' + WICON[w.key] + '</div>' +
      (last === w.key ? '<div class="ws-last">上次坠落</div>' : '') +
      '<div class="ws-body">' +
        '<div class="ws-name">' + w.name + '</div>' +
        '<div class="ws-sub">' + w.sub + '</div>' +
        '<div class="ws-xtra">' +
          '<div class="ws-desc">' + w.desc + '</div>' +
          '<div class="ws-mods">' + w.sub.split('·').map(s => '<span class="wchip">' + s.trim() + '</span>').join('') + '</div>' +
          '<div class="ws-go">点 击 坠 入 →</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
  showPanel(
    '<div class="wsel2" id="wsel2">' +
    '<div class="ws-stars s1"></div><div class="ws-stars s2"></div>' +
    '<div class="ws-wash" id="wsWash"></div>' +
    '<canvas class="menu-viz ws-viz" id="menuViz"></canvas>' +
    '<button class="wrap-home" onclick="showMenu()" title="返回主菜单">↩</button>' +
    '<div class="ws-head"><h2 class="ws-title">选择坠落的起点</h2>' +
    '<p class="ws-lore">六个平行的虚无，六种死去的规则。选一个方向，坠入其中。</p></div>' +
    '<div class="ws-strip" id="wsStrip">' + panes + '</div>' +
    '<div class="ws-hint">← → · 滚轮 选择　|　点击 / 回车 坠入</div>' +
    '</div>'
  );
  wSelIdx = lastIdx;
  wSelSetWorld(lastIdx, true);
  layoutWSel();
  bindWSelInput();
  // 入场: 面板错峰升起, 结束后清掉错峰延迟
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll('#wsStrip .ws-pane').forEach(el => el.classList.add('in'));
    setTimeout(() => document.querySelectorAll('#wsStrip .ws-pane')
      .forEach(el => { el.style.transitionDelay = ''; }), WORLDS.length * 70 + 600);
  }));
}

function wSelSetWorld(i, instant) {
  BGPAL = WORLDS[i];
  const wash = $('wsWash');
  if (wash && wash.style) {
    wash.style.background = 'radial-gradient(circle at 50% 72%, rgba(' + WORLDS[i].beam + ',0.2), rgba(255,255,255,0) 64%)';
    if (!instant && wash.animate) wash.animate([{ opacity: 0.3 }, { opacity: 1 }], { duration: 600, easing: 'ease-out' });
  }
}

function layoutWSel() {
  const strip = $('wsStrip');
  if (!strip) return;
  strip.querySelectorAll('.ws-pane').forEach(el => {
    el.classList.toggle('cur', parseInt(el.dataset.i, 10) === wSelIdx);
  });
}

function wSelNudge(d) {
  if (_pickingWorld) return;
  let t = wSelIdx;
  for (let k = 0; k < WORLDS.length; k++) {   // 跳过锁定面板
    t += d;
    if (t < 0 || t >= WORLDS.length) return;
    if (isWorldUnlocked(WORLDS[t].key)) break;
  }
  if (t === wSelIdx) return;
  wSelIdx = t;
  sfxSelect();
  wSelSetWorld(t);
  layoutWSel();
}

function wSelActivate() {
  if (_pickingWorld) return;
  if (!isWorldUnlocked(WORLDS[wSelIdx].key)) return;   // 锁定界不可坠入(解锁只是 UI 层限制, startRun 本身不拦截)
  const w = WORLDS[wSelIdx];
  const panes = $('wsStrip').querySelectorAll('.ws-pane');
  let el = null;
  panes.forEach(c => { if (parseInt(c.dataset.i, 10) === wSelIdx) el = c; });
  if (el) pickWorld(el, w.key);
  else startRun(w.key);
}

function bindWSelInput() {
  const root = $('wsel2'), strip = $('wsStrip');
  if (!root || root._bound || !strip) return;
  root._bound = true;

  root.addEventListener('wheel', e => {
    e.preventDefault();
    const now = performance.now();
    if (now - (root._wl || 0) < 160) return;
    root._wl = now;
    wSelNudge(e.deltaY > 0 ? 1 : -1);
  }, { passive: false });

  strip.querySelectorAll('.ws-pane').forEach(el => el.addEventListener('mouseenter', () => {
    if (el.classList.contains('lock')) return;
    const i = parseInt(el.dataset.i, 10);
    if (i === wSelIdx || _pickingWorld) return;
    wSelIdx = i; sfxHover(); wSelSetWorld(i); layoutWSel();
  }));

  strip.addEventListener('click', e => {
    if (_pickingWorld) return;
    const pane = e.target.closest('.ws-pane');
    if (!pane || pane.classList.contains('lock')) return;
    const i = parseInt(pane.dataset.i, 10);
    if (i === wSelIdx) wSelActivate();
    else { wSelIdx = i; sfxSelect(); wSelSetWorld(i); layoutWSel(); }
  });

  // 视差: 星层/光晕/面板条按不同系数跟手(rAF 节流)
  const l1 = root.querySelector('.ws-stars.s1'), l2 = root.querySelector('.ws-stars.s2');
  const wash = $('wsWash');
  root.addEventListener('pointermove', e => {
    root._px = e.clientX / window.innerWidth - 0.5;
    root._py = e.clientY / window.innerHeight - 0.5;
    if (!root._pRaf) root._pRaf = requestAnimationFrame(() => wsParallax(root, l1, l2, wash, strip));
  });
}
function wsParallax(root, l1, l2, wash, strip) {
  root._pRaf = 0;
  const x = root._px || 0, y = root._py || 0;
  if (l1 && l1.style) l1.style.transform = 'translate(' + (x * -16) + 'px,' + (y * -9) + 'px)';
  if (l2 && l2.style) l2.style.transform = 'translate(' + (x * -34) + 'px,' + (y * -18) + 'px)';
  if (wash && wash.style) wash.style.transform = 'translate(' + (x * 22) + 'px,' + (y * 12) + 'px)';
  if (strip && strip.style) strip.style.transform = 'translate(' + (x * 9) + 'px,' + (y * 5) + 'px)';
}

// ================= 主菜单(Phigros 滚动选卡) =================
let menuIdxF = 0, menuIdx = 0, menuDrag = null;

function menuItems() {
  const unlockedCount = CARD_POOL.filter(c => isUnlocked(c.name)).length;
  return [
    { key: 'start',    title: '踏上 EthePath', sub: '开始新的一局',                          desc: '从所选世界坠入，连穿六界各五层', color: '#6a9ee8', icon: '⚔' },
    { key: 'codex',    title: '记忆图鉴',     sub: unlockedCount + ' / ' + CARD_POOL.length + ' 已解锁', desc: '检视所有记忆，按稀有度筛选', color: '#5ab0e0', icon: '❖' },
    { key: 'gacha',    title: '记忆祈愿',     sub: '碎片 ' + META.frags,                    desc: '10 碎片，换取一段新记忆', color: '#a87ae0', icon: '✦' },
    { key: 'settings', title: '设置',         sub: '音效 · 震动 · 特效',                    desc: '调整你的体验', color: '#8a96c0', icon: '⚙' },
    { key: 'guide',    title: '引导',         sub: '规则说明',                              desc: '五分钟了解 Re:EthePath', color: '#7bc98a', icon: '？' },
  ];
}

function showMenu() {
  state.started = false;
  setBattleUI(false);
  BGM.play();
  const handoff = !!window._bootHandoff;   // boot 标题 FLIP 交接中: 标题先隐身等落位
  const replay = !handoff && !!window._menuIntroDone;   // v18.9: 回访主菜单也重播召唤(水晶蓄力发光+卡牌自水晶旋转归位)
  const cards = menuItems().map((m, i) =>
    '<div class="mcard" data-i="' + i + '">' +
      '<div class="mart" style="background:linear-gradient(150deg,' + m.color + 'd9,' + m.color + '73)">' +
      '<span class="micon">' + m.icon + '</span><div class="mlines"></div></div>' +
      '<div class="minfo"><div class="mtitle">' + (m.key === 'start'
        ? '踏上 <span class="etitle">EthePath</span>'
        : m.title) + '</div>' +
      '<div class="msub">' + m.sub + '</div>' +
      '<div class="mdesc">' + m.desc + '</div></div>' +
    '</div>').join('');
  const titleChars = 'Re:EthePath'.split('').map((ch, i) =>
    '<span class="mt-ch" style="--mi:' + i + '">' + ch + '</span>').join('');
  let motes = '';
  for (let i = 0; i < 16; i++)   // 环绕上飘星尘(相对坠落感)
    motes += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;' +
      'animation-duration:' + (7 + Math.random() * 9).toFixed(1) + 's;animation-delay:' + (Math.random() * 8).toFixed(1) + 's;' +
      'opacity:' + (0.3 + Math.random() * 0.5).toFixed(2) + '"></i>';
  let shards = '';
  for (let i = 0; i < 8; i++) {   // 底部破碎世界残片
    const sz = (60 + Math.random() * 150) | 0;
    const pts = [];
    const nv = 4 + (Math.random() * 3 | 0);
    for (let v = 0; v < nv; v++) {
      const aa = (v / nv) * Math.PI * 2, rr = 38 + Math.random() * 24;
      pts.push((50 + Math.cos(aa) * rr).toFixed(1) + '% ' + (50 + Math.sin(aa) * rr).toFixed(1) + '%');
    }
    shards += '<i style="left:' + (Math.random() * 96).toFixed(1) + '%;bottom:' + (-30 + Math.random() * 46).toFixed(0) + 'px;' +
      'width:' + sz + 'px;height:' + (sz * 0.62 | 0) + 'px;' +
      'clip-path:polygon(' + pts.join(',') + ');' +
      'animation-duration:' + (7 + Math.random() * 6).toFixed(1) + 's;animation-delay:' + (-Math.random() * 7).toFixed(1) + 's"></i>';
  }
  showPanel(
    '<div class="menu-wrap m3' + (handoff ? ' handoff' : '') + '">' +
      '<div class="m3-sky"></div>' +
      '<div class="ws-stars s1"></div><div class="ws-stars s2"></div>' +
      (SETTINGS.fx ? '<div class="m3-nebula"><i class="n1"></i><i class="n2"></i></div>' : '') +
      '<div class="m3-meteors" id="m3meteors"></div>' +
      '<div class="m3-motes">' + motes + '</div>' +
      '<div class="m3-world">' + shards + '</div>' +
      '<canvas class="menu-viz" id="menuViz"></canvas>' +
      '<div class="m3-crystal" id="m3crystal">' +
        '<div class="cry-l1"><div class="cry-halo"></div></div>' +
        '<div class="cry-l2"><svg class="cry-svg" viewBox="0 0 200 280">' +
          '<defs><linearGradient id="cryBody" x1="0" y1="0" x2="1" y2="1">' +
            '<stop offset="0" stop-color="#e8f0ff" stop-opacity="0.95"/>' +
            '<stop offset="0.5" stop-color="#a8c8f8" stop-opacity="0.75"/>' +
            '<stop offset="1" stop-color="#6a9ee8" stop-opacity="0.85"/>' +
          '</linearGradient>' +
          '<radialGradient id="cryCore" cx="0.5" cy="0.5" r="0.5">' +
            '<stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/>' +
            '<stop offset="0.6" stop-color="#c8e0ff" stop-opacity="0.5"/>' +
            '<stop offset="1" stop-color="#8ab8ff" stop-opacity="0"/>' +
          '</radialGradient></defs>' +
          '<path d="M100 12 L162 96 L100 268 L38 96 Z" fill="url(#cryBody)" stroke="rgba(220,235,255,0.7)" stroke-width="1.5"/>' +
          '<path d="M100 12 L162 96 L100 268 Z" fill="rgba(255,255,255,0.28)"/>' +   // 右棱面高光
          '<path d="M100 12 L38 96 L100 268 Z" fill="rgba(90,130,200,0.22)"/>' +    // 左棱面折射
          '<path d="M100 12 L100 268" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>' +
          '<path d="M38 96 L162 96" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>' +
          '<path d="M100 12 L162 96 L100 268 L38 96 Z" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="0.8"/>' +
          '<circle cx="100" cy="140" r="52" fill="url(#cryCore)" class="cry-core"/>' +
        '</svg></div>' +
        '<div class="cry-l3">' +
          '<i class="cry-orbit o1"></i><i class="cry-orbit o2"></i><i class="cry-orbit o3"></i>' +
          '<i class="cry-spark s1"></i><i class="cry-spark s2"></i>' +
        '</div>' +
      '</div>' +
      '<h1 class="menu-title">' + titleChars + '<i class="mt-grad">Re:EthePath</i><i class="mt-sheen">Re:EthePath</i></h1>' +
      '<p class="menu-lore" id="menuLore">' + randomLore() + '</p>' +
      '<div class="mcarousel m3-ring" id="mcarousel">' + cards + '</div>' +
      '<div class="menu-hint">滚轮 / 拖动 旋转　·　点击 / 回车 进入</div>' +
      '<div class="menu-ver" onclick="verTap()">' + VERSION + '</div>' +
    '</div>'
  );
  menuIdxF = menuIdx = 0;
  layoutMenu(true);
  if (handoff || replay) {   // boot 交接/回访重演: 卡牌要等 menuSummon 从水晶召唤, 先隐身——否则先落位亮相再被打回重演(出现两次)
    const bx = $('mcarousel');
    if (bx && bx.querySelectorAll) bx.querySelectorAll('.mcard').forEach(el => { el.style.transition = 'none'; el.style.opacity = '0'; });
  }
  bindMenuInput();
  bindMenuFx();
  // 水晶入场: 坠入+光聚+落定后粒子苏醒(与卡片入场错峰); boot 交接/回访重演时跳过坠入(直接落定待命)
  const cry = $('m3crystal');
  if (cry && cry.classList) {
    if (handoff || replay) cry.classList.add('landed');
    else {
      cry.classList.add('enter');
      setTimeout(() => { const c2 = $('m3crystal'); if (c2 && c2.classList) { c2.classList.add('landed'); } }, 1550);
    }
  }
  if (window._menuLoreTimer) clearInterval(window._menuLoreTimer);
  window._menuLoreTimer = setInterval(() => {
    const el = $('menuLore');
    if (!el) { clearInterval(window._menuLoreTimer); return; }
    el.style.opacity = 0;
    setTimeout(() => {
      const el2 = $('menuLore');
      if (el2) { el2.textContent = randomLore(); el2.style.opacity = 1; }
    }, 500);
  }, 6000);
  // 碎片近景擦屏 + 镜头轻震(2.5~6s 随机, 可同屏 1~2 块, 震幅减半)
  if (window._menuWipeTimer) clearTimeout(window._menuWipeTimer);
  const wipeLoop = () => {
    if (!$('mcarousel') || state.started) return;
    menuWipe();
    if (Math.random() < 0.4) menuWipe();   // 四成概率双块同屏
    window._menuWipeTimer = setTimeout(wipeLoop, 2500 + Math.random() * 3500);
  };
  window._menuWipeTimer = setTimeout(wipeLoop, 2800 + Math.random() * 2400);
  // 流星 + 碎世界微光碎片(v17.3): 菜单夜空氛围, 克制随机
  if (window._meteorTimer) clearTimeout(window._meteorTimer);
  const meteorLoop = () => {
    const layer = $('m3meteors');
    if (!layer || !layer.appendChild || state.started) return;
    if (SETTINGS.fx) {
      spawnMeteor(layer);
      if (Math.random() < 0.25)   // 偶尔双星伴飞
        setTimeout(() => { const l2 = $('m3meteors'); if (l2 && l2.appendChild && SETTINGS.fx) spawnMeteor(l2); }, 160 + Math.random() * 260);
    }
    window._meteorTimer = setTimeout(meteorLoop, 3000 + Math.random() * 5000);
  };
  window._meteorTimer = setTimeout(meteorLoop, 1600 + Math.random() * 2600);
  if (window._glintTimer) clearTimeout(window._glintTimer);
  const glintLoop = () => {
    const world = qs('.m3-world');
    if (!world || !world.appendChild || state.started) return;
    if (SETTINGS.fx) {
      const d = document.createElement('div');
      d.className = 'm3-glint';
      d.style.left = (16 + Math.random() * 68) + '%';
      d.style.top = (82 + Math.random() * 12) + '%';
      world.appendChild(d);
      const dx = (Math.random() - 0.5) * 46;
      d.animate([
        { transform: 'translate(0,0) scale(0.6)', opacity: 0 },
        { opacity: 0.85, offset: 0.3 },
        { transform: 'translate(' + dx.toFixed(0) + 'px,-' + (130 + Math.random() * 110).toFixed(0) + 'px) scale(0.9)', opacity: 0 },
      ], { duration: 1900 + Math.random() * 700, easing: 'ease-out' });
      setTimeout(() => d.remove(), 2800);
    }
    window._glintTimer = setTimeout(glintLoop, 7000 + Math.random() * 6000);
  };
  window._glintTimer = setTimeout(glintLoop, 4200 + Math.random() * 3000);
  if (handoff) {
    window._menuIntroDone = true;
    _menuPicking = true;   // 召唤前锁住环卡输入(转动会触发 layoutMenu 把隐身卡牌重新刷亮)
    setTimeout(menuSummon, 1050);   // 水晶落位(1s FLIP)→蓄力一拍→从水晶召唤五牌
  } else if (replay) {   // v18.9: 回访重演召唤(水晶已落定, 短延迟等布局)
    _menuPicking = true;
    setTimeout(menuSummon, 150);
  } else if (!window._menuIntroDone && typeof document.querySelector === 'function') {
    window._menuIntroDone = true;
    menuIntro();
  }
}

// 菜单氛围: 碎片近景擦屏(大+模糊+速度感), 擦过瞬间镜头轻震
function menuWipe() {
  const wrap = qs('.menu-wrap');
  if (!wrap || !wrap.appendChild || !SETTINGS.fx) return;
  const d = document.createElement('div');
  d.className = 'm3-wipe';
  const sz = 120 + Math.random() * 160;
  d.style.width = sz + 'px';
  d.style.height = (sz * 0.8 | 0) + 'px';
  d.style.top = (8 + Math.random() * 70).toFixed(0) + '%';
  wrap.appendChild(d);
  const dir = Math.random() < 0.5 ? 1 : -1;
  const W = window.innerWidth;
  d.animate([
    { transform: 'translate(' + (dir > 0 ? -sz * 1.6 : W + sz * 0.6) + 'px,0) rotate(0deg)', opacity: 0 },
    { opacity: 0.85, offset: 0.14 },
    { opacity: 0.85, offset: 0.82 },
    { transform: 'translate(' + (dir > 0 ? W + sz * 0.6 : -sz * 1.6) + 'px,' + ((Math.random() * 60 - 30) | 0) + 'px) rotate(' + (dir * (50 + Math.random() * 60)).toFixed(0) + 'deg)', opacity: 0 },
  ], { duration: 620 + Math.random() * 260, easing: 'cubic-bezier(0.25, 0.6, 0.4, 1)' });
  if (SETTINGS.shake && wrap.animate && sz > 200)   // 只有大碎片擦过才轻震(减半幅度)
    wrap.animate([
      { transform: 'translate(0,0)' },
      { transform: 'translate(' + dir * -3.5 + 'px, 1.5px)' },
      { transform: 'translate(1px, -0.5px)' },
      { transform: 'translate(0,0)' },
    ], { duration: 320, easing: 'ease-out' });
  setTimeout(() => d.remove(), 950);
}

// 菜单视差: 星层/少女三层跟手(丝带 > 身体 > 光晕)
function bindMenuFx() {
  const wrap = qs('.menu-wrap');
  if (!wrap || !wrap.addEventListener) return;
  const l1 = wrap.querySelector('.ws-stars.s1'), l2 = wrap.querySelector('.ws-stars.s2');
  const neb = wrap.querySelector('.m3-nebula'), met = wrap.querySelector('.m3-meteors');
  const g1 = wrap.querySelector('.cry-l1'), g2 = wrap.querySelector('.cry-l2'), g3 = wrap.querySelector('.cry-l3');
  const ring = wrap.querySelector('.m3-ring'), world = wrap.querySelector('.m3-world');
  wrap.addEventListener('pointermove', e => {
    wrap._px = e.clientX / window.innerWidth - 0.5;
    wrap._py = e.clientY / window.innerHeight - 0.5;
    if (!wrap._pRaf) wrap._pRaf = requestAnimationFrame(() => {
      wrap._pRaf = 0;
      const x = wrap._px || 0, y = wrap._py || 0;
      if (neb && neb.style) neb.style.transform = 'translate(' + (x * -5) + 'px,' + (y * -3) + 'px)';   // 星云最远
      if (l1 && l1.style) l1.style.transform = 'translate(' + (x * -10) + 'px,' + (y * -6) + 'px)';
      if (met && met.style) met.style.transform = 'translate(' + (x * -16) + 'px,' + (y * -9) + 'px)';   // 流星层随远星
      if (l2 && l2.style) l2.style.transform = 'translate(' + (x * -22) + 'px,' + (y * -12) + 'px)';
      if (g1 && g1.style) g1.style.transform = 'translate(' + (x * 6) + 'px,' + (y * 4) + 'px)';
      if (g2 && g2.style) g2.style.transform = 'translate(' + (x * 12) + 'px,' + (y * 7) + 'px)';
      if (g3 && g3.style) g3.style.transform = 'translate(' + (x * 20) + 'px,' + (y * 11) + 'px)';
      if (ring && ring.style) ring.style.transform = 'translate(' + (x * 14) + 'px,' + (y * 8) + 'px)';   // 卡环略强
      if (world && world.style) world.style.transform = 'translate(' + (x * 26) + 'px,' + (y * 14) + 'px)';   // 碎世界最强
    });
  });
}

// 流星: 亮核+渐变拖尾, 斜划夜空速度感, 划过即散(v17.3)
function spawnMeteor(layer) {
  const W = window.innerWidth, H = window.innerHeight;
  const dir = Math.random() < 0.5 ? 1 : -1;   // 右下/左下
  const x0 = (dir > 0 ? 0.04 + Math.random() * 0.42 : 0.54 + Math.random() * 0.42) * W;
  const y0 = -H * 0.05 - Math.random() * H * 0.14;
  const dy = H * (0.55 + Math.random() * 0.4);
  const dx = dir * dy * (0.45 + Math.random() * 0.25);
  const ang = Math.atan2(dy, dx) * 180 / Math.PI;
  const d = document.createElement('div');
  d.className = 'm3-meteor';
  d.style.width = (150 + Math.random() * 110).toFixed(0) + 'px';
  layer.appendChild(d);
  d.animate([
    { transform: 'translate(' + x0.toFixed(0) + 'px,' + y0.toFixed(0) + 'px) rotate(' + ang.toFixed(1) + 'deg) scaleX(0.4)', opacity: 0 },
    { transform: 'translate(' + x0.toFixed(0) + 'px,' + y0.toFixed(0) + 'px) rotate(' + ang.toFixed(1) + 'deg) scaleX(1)', opacity: 1, offset: 0.14 },
    { opacity: 1, offset: 0.7 },
    { transform: 'translate(' + (x0 + dx).toFixed(0) + 'px,' + (y0 + dy).toFixed(0) + 'px) rotate(' + ang.toFixed(1) + 'deg) scaleX(1)', opacity: 0 },
  ], { duration: 750 + Math.random() * 320, easing: 'cubic-bezier(0.3, 0.4, 0.6, 1)' });   // 加速感
  setTimeout(() => d.remove(), 1400);
}

// ================= 主菜单入场运镜 =================
// 先只露标题 + 脉动提示, 点击后镜头由近拉远, 卡牌叠成一摞旋转飞散各就各位
let _menuIntro = false;
function menuIntro() {
  const wrap = qs('.menu-wrap');
  const box = $('mcarousel');
  if (!wrap || !box) return;
  _menuIntro = true; _menuPicking = true;
  const cards = Array.from(box.querySelectorAll('.mcard'));
  cards.forEach(el => { el.style.transition = 'none'; el.style.opacity = '0'; });
  wrap.classList.add('intro-wait');
  // 开场标题居中: 量出标题中心与屏幕中心的差, 整个 wrap 下移补齐
  const titleEl = wrap.querySelector('.menu-title');
  requestAnimationFrame(() => {
    const r = titleEl.getBoundingClientRect();
    wrap._introDy = window.innerHeight / 2 - (r.top + r.height / 2);
    wrap.style.transform = 'translateY(' + wrap._introDy + 'px)';
  });
  const hint = document.createElement('div');
  hint.className = 'menu-intro-hint';
  hint.textContent = '— 点击任意处，展开记忆 —';
  wrap.appendChild(hint);
  const begin = e => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    document.removeEventListener('pointerdown', begin, true);
    document.removeEventListener('keydown', begin, true);
    hint.classList.add('out');
    setTimeout(() => hint.remove(), 400);
    wrap.classList.remove('intro-wait');
    initAudio();
    // 运镜: 标题上移归位 + 镜头由近拉远
    const dy = wrap._introDy || 0;
    wrap.style.transform = 'translateY(' + dy + 'px)';
    wrap.animate([
      { transform: 'translateY(' + dy + 'px) scale(1.08)' },
      { transform: 'translateY(0px) scale(1)' },
    ], { duration: 1300, easing: 'cubic-bezier(0.2, 0.8, 0.25, 1)' });
    wrap.style.transform = '';   // 动画结束回落到无变换
    menuIntroFly(cards);
  };
  document.addEventListener('pointerdown', begin, true);
  document.addEventListener('keydown', begin, true);
}

// boot 交接版入场(v17.2): 水晶落位 → 蓄力一拍(光核增亮/光环收拢/微粒向心) → 五牌自水晶中心召唤飞出
function menuSummon() {
  const box = $('mcarousel');
  const cry = qs('.m3-crystal');
  if (!box || !cry || !cry.classList || !cry.getBoundingClientRect) { menuIntroAuto(); return; }   // 兜底走旧入场
  _menuIntro = true; _menuPicking = true;
  const cards = Array.from(box.querySelectorAll('.mcard'));
  if (!cards.length) { _menuIntro = false; _menuPicking = false; return; }
  cards.forEach(el => { el.style.transition = 'none'; el.style.opacity = '0'; });
  const cr = cry.getBoundingClientRect();
  const br = box.getBoundingClientRect();
  const cx = cr.left + cr.width / 2, cy = cr.top + cr.height / 2;
  cry.classList.add('charge');
  AU.tone('sine', 320, 640, 0.7, 0.06);   // 蓄力上行音
  const wrap = qs('.menu-wrap');
  if (wrap && wrap.appendChild && SETTINGS.fx) {   // 微粒向心汇聚进水晶
    for (let k = 0; k < 10; k++) {
      const d = document.createElement('div');
      d.style.cssText = 'position:absolute;left:' + cx + 'px;top:' + cy + 'px;width:4px;height:4px;border-radius:50%;' +
        'background:#dce8ff;box-shadow:0 0 8px rgba(180,210,255,0.9);opacity:0;pointer-events:none;z-index:3;';
      wrap.appendChild(d);
      const a = Math.random() * Math.PI * 2, dist = 120 + Math.random() * 170;
      d.animate([
        { transform: 'translate(' + (Math.cos(a) * dist).toFixed(0) + 'px,' + (Math.sin(a) * dist * 0.7).toFixed(0) + 'px) scale(1)', opacity: 0 },
        { opacity: 0.9, offset: 0.35 },
        { transform: 'translate(0px,0px) scale(0.3)', opacity: 0 },
      ], { duration: 600 + Math.random() * 160, delay: k * 42, easing: 'cubic-bezier(0.4, 0, 0.6, 1)' });
      setTimeout(() => d.remove(), 1400);
    }
  }
  setTimeout(() => {
    cry.classList.remove('charge');
    cry.classList.add('birth');   // 召唤瞬: 核心闪一拍
    setTimeout(() => { const c2 = qs('.m3-crystal'); if (c2 && c2.classList) c2.classList.remove('birth'); }, 520);
    menuIntroFly(cards, { x: cx - br.left, y: cy - br.top });   // 出生点=水晶中心(相对环原点)
  }, 720);
}

// boot 交接版入场(兜底): 标题已由 boot 演过(FLIP 落位), 直接卡片飞散
function menuIntroAuto() {
  const box = $('mcarousel');
  if (!box) return;
  _menuIntro = true; _menuPicking = true;
  const cards = Array.from(box.querySelectorAll('.mcard'));
  if (!cards.length) { _menuIntro = false; _menuPicking = false; return; }
  cards.forEach(el => { el.style.transition = 'none'; el.style.opacity = '0'; });
  menuIntroFly(cards);
}

// 卡牌叠成一摞旋转飞散, 各就各位到环形轨道(两种入场共用; from=出生点偏移, 水晶召唤时=水晶中心)
function menuIntroFly(cards, from) {
  const finals = cards.map((el, i) => {
    const p = ringPoseAt(i, 0);   // menuIdxF = 0
    return {
      t: 'translate(' + p.x.toFixed(1) + 'px,' + p.y.toFixed(1) + 'px) rotateZ(' + p.r.toFixed(1) + 'deg) rotateY(' + p.ry.toFixed(1) + 'deg) scale(' + p.s.toFixed(3) + ')',
      o: p.o, z: p.z,
      f: 'saturate(0.75) brightness(' + (0.82 + p.front * 0.18).toFixed(2) + ')' + (p.blur > 0.1 ? ' blur(' + p.blur.toFixed(1) + 'px)' : ''),
    };
  });
  const fx0 = from ? from.x : 0, fy0 = from ? from.y : 70, fs0 = from ? 0.06 : 0.28;
  const anims = [];
  cards.forEach((el, i) => {
    const side = i - (cards.length - 1) / 2;
    const anim = el.animate([
      { transform: 'translate(' + fx0.toFixed(1) + 'px, ' + fy0.toFixed(1) + 'px) rotateY(0deg) rotateZ(' + side * 8 + 'deg) scale(' + fs0 + ')', opacity: 0, offset: 0 },
      { transform: 'translate(' + (fx0 * 0.55).toFixed(1) + 'px, ' + (fy0 * 0.55).toFixed(1) + 'px) rotateY(360deg) rotateZ(' + side * 8 + 'deg) scale(0.55)', opacity: 1, offset: 0.3 },
      { transform: 'translate(' + side * 90 + 'px, -26px) rotateY(720deg) rotateZ(0deg) scale(1.05)', opacity: 1, offset: 0.62 },
      { transform: finals[i].t, opacity: finals[i].o, offset: 1 },
    ], { duration: 1000, delay: 120 + i * 95, easing: 'cubic-bezier(0.2, 0.85, 0.3, 1)', fill: 'both' });
    anims.push(anim);
    setTimeout(sfxDraw, 120 + i * 95 + 150);
  });
  setTimeout(sfxSelect, 120 + cards.length * 95 + 720);
  setTimeout(() => {
    _menuIntro = false; _menuPicking = false;
    // 先把落位状态写回内联样式, 再取消动画, 避免回落闪烁
    cards.forEach((el, i) => {
      el.style.transition = 'none';
      el.style.transform = finals[i].t;
      el.style.opacity = finals[i].o;
      el.style.zIndex = finals[i].z;
      el.style.filter = finals[i].f;
    });
    anims.forEach(a => a.cancel());
    requestAnimationFrame(() => {
      cards.forEach(el => { el.style.transition = ''; });
      layoutMenu();
    });
  }, 120 + cards.length * 95 + 1010);
}

// 环形轨道: 竖轴压缩的椭圆, 正前方(下方)为选中位, 带透视 3D 感
function ringPoseAt(i, f) {
  const n = menuItems().length;
  const th = (90 + (i - f) * (360 / n)) * Math.PI / 180;
  const fx = Math.cos(th), fy = Math.sin(th);   // fy=1 → 正前方
  const front = (fy + 1) / 2;
  return {
    x: fx * Math.min(430, window.innerWidth * 0.34),
    y: fy * 148,
    s: 0.56 + 0.52 * front,                     // 后卡明显缩小
    o: 0.3 + 0.7 * front,                       // 后卡压暗
    z: Math.round(front * 10),
    r: fx * -7,
    ry: fx * -38,                               // 绕水晶的转向透视
    blur: (1 - front) * 1.6,                    // 景深微糊
    front,
  };
}
function layoutMenu() {
  const box = $('mcarousel');
  if (!box) return;
  box.querySelectorAll('.mcard').forEach(el => {
    const i = parseInt(el.dataset.i, 10);
    const p = ringPoseAt(i, menuIdxF);
    el.classList.toggle('noanim', !!menuDrag);
    el.style.transform =
      'translate(' + p.x.toFixed(1) + 'px,' + p.y.toFixed(1) + 'px) ' +
      'rotateZ(' + p.r.toFixed(1) + 'deg) rotateY(' + p.ry.toFixed(1) + 'deg) scale(' + p.s.toFixed(3) + ')';
    el.style.opacity = p.o;
    el.style.zIndex = p.z;
    el.style.filter = 'saturate(0.75) brightness(' + (0.82 + p.front * 0.18).toFixed(2) + ')' + (p.blur > 0.1 ? ' blur(' + p.blur.toFixed(1) + 'px)' : '');
    el.classList.toggle('cur', ((Math.round(menuIdxF) % menuItems().length) + menuItems().length) % menuItems().length === i && !menuDrag);
  });
  window._bgScroll = menuIdxF * 0.5;
}

// 选中运镜: 平滑推近(无回弹顿挫)
function menuKick() {
  if (_menuIntro) return;
  const wrap = qs('.menu-wrap');
  if (wrap && wrap.animate) wrap.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(1.015)' },
    { transform: 'scale(1)' },
  ], { duration: 700, easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' });
}

function menuSnap() {
  const items = menuItems().length;
  const t = Math.round(menuIdxF);   // 无限环: 不 clamp, 取模定选中
  const norm = ((t % items) + items) % items;
  if (norm !== menuIdx) { menuIdx = norm; sfxSelect(); menuKick(); }
  menuIdxF = t;
  layoutMenu();
}

function menuNudge(d) {
  if (_menuPicking) return;
  const items = menuItems().length;
  menuIdxF += d;   // 无限环: 单向可一直转
  menuIdx = ((Math.round(menuIdxF) % items) + items) % items;
  sfxSelect();
  menuKick();
  layoutMenu();
}

let _menuPicking = false;
function menuActivate() {
  if (_menuPicking) return;
  const items = menuItems();
  const item = items[((menuIdx % items.length) + items.length) % items.length];   // 无限环取模
  const key = item.key;
  const el = qs('.mcard.cur');
  _menuPicking = true;
  const go = () => {
    _menuPicking = false;
    if (key === 'start') showWorldSelect();   // v18.2: 不再强制教学(用户反馈), 想复习走菜单「引导」
    else if (key === 'codex') showCodex('ALL');
    else if (key === 'gacha') showGacha();
    else if (key === 'settings') showSettings();
    else if (key === 'guide') tutorialStart(false);   // 可玩引导关(复习用, 独立状态不动存档)
  };
  if (el) stampCard(el, [item.color, '#ffffff'], go);
  else { sClick(); go(); }
}

function bindMenuInput() {
  const box = $('mcarousel');
  if (!box || box._bound) return;
  box._bound = true;

  box.addEventListener('pointerdown', e => {
    if (_menuPicking) return;
    menuDrag = { x: e.clientX, startF: menuIdxF };
  });
  box.addEventListener('pointermove', e => {
    if (!menuDrag) return;
    menuIdxF = menuDrag.startF - (e.clientX - menuDrag.x) / 380;   // 无限环: 不 clamp
    layoutMenu();
  });
  const endDrag = () => {
    if (!menuDrag) return;
    menuDrag = null;
    menuSnap();
  };
  box.addEventListener('pointerup', endDrag);
  box.addEventListener('pointercancel', endDrag);

  box.addEventListener('wheel', e => {
    e.preventDefault();
    const now = performance.now();
    if (now - (box._wl || 0) < 160) return;
    box._wl = now;
    menuNudge(e.deltaY > 0 ? 1 : -1);
  }, { passive: false });

  box.querySelectorAll('.mcard').forEach(el => {
    el.addEventListener('mouseenter', sfxHover);
  });

  box.addEventListener('click', e => {
    if (_menuPicking) return;
    const card = e.target.closest('.mcard');
    if (!card) return;
    const i = parseInt(card.dataset.i, 10);
    if (i === menuIdx) menuActivate();
    else {   // 无限环: 转到离当前位置最近的该卡位
      const n = menuItems().length;
      const cur = ((Math.round(menuIdxF) % n) + n) % n;
      let diff = i - cur;
      if (diff > n / 2) diff -= n;
      if (diff < -n / 2) diff += n;
      menuIdxF = Math.round(menuIdxF) + diff;
      menuIdx = i;
      sfxSelect(); menuKick(); layoutMenu();
    }
  });
}

// ================= 图鉴 =================
function showCodex(filter) {
  const filters = [['ALL', '全部'], ['C', '凡忆'], ['R', '烁忆'], ['E', '幻忆'], ['L', '源忆']];
  const tabs = '<div class="cw-tabs">' + filters.map(f =>
    '<button class="cw-tab' + (filter === f[0] ? ' on' : '') + '" data-f="' + f[0] + '">' + f[1] + '</button>').join('') + '</div>';
  const cards = CARD_POOL.filter(c => filter === 'ALL' || c.rarity === filter);
  const grid = cards.map((c, i) => {
    if (isUnlocked(c.name))
      return '<div class="cw-cell" style="--wi:' + (i % 40) + ';--gc:' + RARITY[c.rarity].color + '">' + cardHtml(c) + '</div>';
    return '<div class="cw-cell" style="--wi:' + (i % 40) + '"><div class="card static mini-locked r-' + c.rarity + '"><div class="lockq">？</div>' +
      '<div class="lockr" style="color:' + RARITY[c.rarity].color + '">' + RARITY[c.rarity].name + '</div></div></div>';
  }).join('');
  cardWall({
    title: '记忆图鉴',
    sub: '已解锁 ' + CARD_POOL.filter(c => isUnlocked(c.name)).length + ' / ' + CARD_POOL.length,
    tabs,
    body: '<div class="cw-grid">' + grid + '</div>',
    closeLabel: '返回主菜单',
    onClose: showMenu,
  });
  // 绑定 tab 点击(cardWall 重建后重新绑)
  const fx = qs('.cw-fx');
  if (fx && fx.querySelectorAll) {
    fx.querySelectorAll('.cw-tab').forEach(b => {
      b.onclick = () => { sClick(); fx.remove(); showCodex(b.dataset.f); };
    });
  }
}

// ================= 记忆祈愿(抽奖) =================
// ================= 记忆祈愿(v18.0 重写): 深空沉浸祈愿台 =================
function showGacha(msg) {
  hidePanel();
  const old = qs('.gc-fx');
  if (old && old.remove) old.remove();
  const dk = h => {
    const n = parseInt(h.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.2 | 0) + ',' + ((n >> 8 & 255) * 0.2 | 0) + ',' + ((n & 255) * 0.2 | 0) + ')';
  };
  const left = { C: 0, R: 0, E: 0, L: 0 };
  CARD_POOL.forEach(c => { if (!isUnlocked(c.name)) left[c.rarity] = (left[c.rarity] || 0) + 1; });
  let motes = '';
  for (let i = 0; i < 8; i++)
    motes += '<i style="left:' + (4 + Math.random() * 92).toFixed(1) + '%;bottom:-2%;' +
      'animation-duration:' + (9 + Math.random() * 8).toFixed(1) + 's;animation-delay:' + (Math.random() * 8).toFixed(1) + 's"></i>';
  const fx = document.createElement('div');
  fx.className = 'dm-fx gc-fx';
  fx.innerHTML =
    '<div class="dm-veil" style="background:linear-gradient(168deg,' + dk(BGPAL.grad[0]) + ' 0%,' + dk(BGPAL.grad[1]) + ' 52%,' + dk(BGPAL.grad[2]) + ' 100%)"></div>' +
    '<div class="dm-glow" style="background:radial-gradient(circle at 50% 42%, rgba(' + BGPAL.beam + ',0.15), transparent 62%)"></div>' +
    '<div class="dm-motes">' + motes + '</div>' +
    '<div class="dm-core">' +
      '<h2 class="dm-title">' + '记忆祈愿'.split('').map((ch, i) => '<span style="--di:' + i + '">' + ch + '</span>').join('') + '</h2>' +
      '<p class="dm-lore">将记忆碎片投入虚无，换取一段尚未属于你的记忆。<br>祈愿消耗 10 碎片 · 凡38% 烁35% 幻19% 源8% · 重复的会化作4碎片</p>' +
      '<div class="gc-frags">记忆碎片 <b>' + META.frags + '</b></div>' +
      '<div class="gc-pool">' + ['C', 'R', 'E', 'L'].map(r =>
        '<span class="gc-chip r' + r + '">' + RARITY[r].name + ' 余 ' + (left[r] || 0) + '</span>').join('') + '</div>' +
      '<div class="gc-note">' + (msg || '') + '</div>' +
      '<div class="dm-btns">' +
        '<button class="dm-btn" onclick="gachaPull()">祈愿 ×1（10碎片）</button>' +
        '<button class="dm-btn" onclick="gachaPull(10)">祈愿 ×10（100碎片）</button>' +
        '<button class="dm-btn small-btn" onclick="gachaBack()">返回主菜单</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
}
function gachaBack() {
  const fx = qs('.gc-fx');
  if (fx && fx.remove) fx.remove();
  showMenu();
}

function gachaPull(n) {
  n = n || 1;
  const locked = CARD_POOL.filter(c => !isUnlocked(c.name));
  if (!locked.length) { showGacha('全部记忆已集齐！'); return; }
  n = Math.min(n, locked.length);
  const cost = n * 10;
  if (META.frags < cost) { showGacha('碎片不足（需要' + cost + '）'); return; }
  META.frags -= cost;
  saveMeta();
  const menu = qs('.gc-fx');   // 祈愿台层(z55)在演出层(z40)之上——开抽先收台, 完事由 onDone 重建
  if (menu && menu.remove) menu.remove();

  let total = 0;
  for (const k in W_GACHA) total += W_GACHA[k];
  const remaining = locked.slice();
  const cards = [];
  for (let i = 0; i < n; i++) {
    let r = Math.random() * total, rarity = 'C';
    for (const k in W_GACHA) { r -= W_GACHA[k]; if (r <= 0) { rarity = k; break; } }
    let pool = remaining.filter(c => c.rarity === rarity);
    if (!pool.length) pool = remaining;
    const pick = pool[(Math.random() * pool.length) | 0];
    remaining.splice(remaining.indexOf(pick), 1);
    cards.push(Object.assign({}, pick));
  }

  if (n === 1) runGachaFx(cards[0], () => showGacha());
  else runGachaFx10(cards, () => showGacha());
}

// ================= 祈愿演出(v18.0 重写): 碎片聚茧 → 蓄光 → 破茧 → 揭示 =================
// 四幕: ①记忆碎片光点向心聚成忆茧 ②茧呼吸膨胀+光环收紧+心跳渐近 ③破茧爆发(规模按稀有度) ④卡片翻转定格
function gfx2Base(color) {
  const fx = document.createElement('div');
  fx.id = 'gachaFx';
  fx.innerHTML =
    '<div class="gf-veil"></div>' +
    '<div class="gf-stars"></div>' +
    '<div class="gf-cam">' +
      '<div class="gf-ring r1" style="border-color:' + color + '"></div>' +
      '<div class="gf-ring r2" style="border-color:' + color + '"></div>' +
      '<div class="gf-cocoon"></div>' +
      '<div class="gf-flash"></div>' +
      '<div class="gf-rays" style="background:conic-gradient(from 0deg,transparent,' + color + '40,transparent 26%)"></div>' +
    '</div>' +
    '<div class="gf-skip">点击任意处继续</div>';
  document.body.appendChild(fx);
  return fx;
}
function gfx2Burst(cam, color, n) {
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i');
    p.className = 'gf-p';
    const a = Math.random() * Math.PI * 2, d = 110 + Math.random() * 300;
    p.style.setProperty('--dx', (Math.cos(a) * d).toFixed(0) + 'px');
    p.style.setProperty('--dy', (Math.sin(a) * d).toFixed(0) + 'px');
    p.style.background = Math.random() < 0.3 ? '#ffffff' : color;
    cam.appendChild(p);
    setTimeout(() => p.remove(), 1400);
  }
}
function gfx2Gather(cam, n) {   // 碎片向心聚茧
  for (let i = 0; i < n; i++) {
    const p = document.createElement('i');
    p.className = 'gf-p';
    const a = (i / n) * Math.PI * 2 + Math.random() * 0.4;
    const d = 200 + Math.random() * 160;
    p.style.background = i % 3 ? '#cfe0ff' : '#ffffff';
    cam.appendChild(p);
    p.animate([
      { transform: 'translate(' + (Math.cos(a) * d).toFixed(0) + 'px,' + (Math.sin(a) * d * 0.8).toFixed(0) + 'px) scale(1)', opacity: 0 },
      { opacity: 0.95, offset: 0.35 },
      { transform: 'translate(0px,0px) scale(0.25)', opacity: 0 },
    ], { duration: 700 + Math.random() * 260, delay: 80 + i * 46, easing: 'cubic-bezier(0.4, 0, 0.5, 1)' });
    setTimeout(() => p.remove(), 1800);
  }
}
const GACHA_TIER = { C: { n: 18 }, R: { n: 26 }, E: { n: 40 }, L: { n: 64 } };

function runGachaFx(finalCard, onDone) {
  const color = RARITY[finalCard.rarity].color;
  const fx = gfx2Base(color);
  const cam = fx.querySelector('.gf-cam');
  const timers = [];
  const T = (fn, ms) => timers.push(setTimeout(fn, ms));

  // 幕一: 碎片聚茧(0~0.75s)——v18.3 全程提速
  gfx2Gather(cam, 14);
  sChantDrone(1.9);
  T(() => fx.classList.add('cocoon'), 720);   // 茧成形
  // 幕二: 蓄光(0.75~1.75s): 环收紧 + 心跳渐近 + 上升音
  T(() => fx.classList.add('charge'), 980);
  T(() => AU.noise(0.55, 0.15, 'bandpass', 480, 4200, 1.5), 1120);
  T(() => sTick(0.7), 1180);
  T(() => sTick(0.85), 1340);
  T(() => sTick(1.0), 1490);
  // 幕三: 破茧(1.75s)——规模按稀有度
  const tier = GACHA_TIER[finalCard.rarity];
  T(() => {
    fx.classList.add('burst');
    sChantRelease(finalCard.rarity === 'L' ? 'full' : 'short');
    gfx2Burst(cam, color, tier.n);
    if (finalCard.rarity === 'L') {   // 源卡: 双层冲击环 + 四星曳光
      fx.classList.add('mega');
      for (let k = 0; k < 4; k++) {
        const m = document.createElement('i');
        m.className = 'gf-p meteor';
        m.style.background = '#ffe9a8';
        cam.appendChild(m);
        const ang = -35 + k * 24;
        m.animate([
          { transform: 'translate(0,0) rotate(' + ang + 'deg) scaleX(0.2)', opacity: 0 },
          { opacity: 1, offset: 0.25 },
          { transform: 'translate(' + Math.cos(ang * Math.PI / 180) * 420 + 'px,' + Math.sin(ang * Math.PI / 180) * 300 + 'px) rotate(' + ang + 'deg) scaleX(1.6)', opacity: 0 },
        ], { duration: 620, delay: k * 80, easing: 'ease-out' });
        setTimeout(() => m.remove(), 1500);
      }
    }
  }, 1750);
  // 幕四: 翻面揭示 + 稀有度横幅
  T(() => {
    fx.classList.add('reveal');
    const cv = document.createElement('div');
    cv.className = 'gf-card r' + finalCard.rarity;
    cv.style.setProperty('--gc', color);
    cv.innerHTML = cardHtml(finalCard) +
      '<div class="gf-rarity">' + RARITY[finalCard.rarity].name + '</div>';
    cam.appendChild(cv);
    if (finalCard.rarity === 'L') { [784, 988, 1175, 1568].forEach((f, i) => AU.tone('sine', f, f, 0.4, 0.18, i * 100)); gfx2Burst(cam, '#ffe9a8', 24); }
    else if (finalCard.rarity === 'E') [659, 784, 988].forEach((f, i) => AU.tone('sine', f, f, 0.35, 0.16, i * 100));
    else sPower();
    if (!isUnlocked(finalCard.name)) { META.unlocked.push(finalCard.name); saveMeta(); }
  }, 2150);
  T(() => fx.classList.add('skippable'), 2500);

  let finished = false;
  function finish() {
    if (finished) return;
    finished = true;
    timers.forEach(clearTimeout);
    fx.classList.add('out');
    setTimeout(() => { fx.remove(); onDone(); }, 430);
  }
  fx.addEventListener('click', () => { if (fx.classList.contains('skippable')) finish(); });
  T(finish, 6200);
}

// ================= 十连祈愿: 同茧 → 十卡两行错峰翻面 =================
function runGachaFx10(cards, onDone) {
  const RANK = { C: 0, R: 1, E: 2, L: 3 };
  const best = cards.reduce((a, c) => RANK[c.rarity] > RANK[a.rarity] ? c : a, cards[0]);
  const color = RARITY[best.rarity].color;
  const fx = gfx2Base(color);
  const cam = fx.querySelector('.gf-cam');
  const timers = [];
  const T = (fn, ms) => timers.push(setTimeout(fn, ms));

  gfx2Gather(cam, 14);
  sChantDrone(1.9);
  T(() => fx.classList.add('cocoon'), 720);
  T(() => fx.classList.add('charge'), 980);
  T(() => AU.noise(0.55, 0.15, 'bandpass', 480, 4200, 1.5), 1120);
  T(() => sTick(0.7), 1180);
  T(() => sTick(0.85), 1340);
  T(() => sTick(1.0), 1490);
  T(() => {
    fx.classList.add('burst');
    if (RANK[best.rarity] >= 3) fx.classList.add('mega');
    sChantRelease('full');
    gfx2Burst(cam, color, 30 + RANK[best.rarity] * 10);
    const grid = document.createElement('div');
    grid.className = 'gf-grid';
    cam.appendChild(grid);
    cards.forEach((c, i) => {
      const cell = document.createElement('div');
      cell.className = 'gf-cell r' + c.rarity;
      cell.style.setProperty('--gc', RARITY[c.rarity].color);
      cell.innerHTML = cardHtml(c);
      grid.appendChild(cell);
      cell.animate([
        { transform: 'translate(0px, 40vh) rotateY(90deg) scale(0.45)', opacity: 0 },
        { transform: 'translate(0px, 0px) rotateY(0deg) scale(1)', opacity: 1 },
      ], { duration: 500, delay: 120 + i * 85, easing: 'cubic-bezier(0.2, 0.8, 0.3, 1.2)', fill: 'backwards' });
      T(() => {
        if (c.rarity === 'L') sChantBell(1.3);
        else if (c.rarity === 'E') sChantBell(1.1);
        else sTick(c.rarity === 'R' ? 1.2 : 1);
        if (!isUnlocked(c.name)) { META.unlocked.push(c.name); saveMeta(); }
      }, 320 + i * 85);
    });
  }, 1750);
  T(() => fx.classList.add('skippable'), 1750 + 320 + cards.length * 85 + 420);

  let finished = false;
  function finish() {
    if (finished) return;
    finished = true;
    timers.forEach(clearTimeout);
    fx.classList.add('out');
    setTimeout(() => { fx.remove(); onDone(); }, 430);
  }
  fx.addEventListener('click', () => { if (fx.classList.contains('skippable')) finish(); });
  T(finish, 7600);
}


// ================= 设置 =================
let settingsBack = 'menu';
function showSettings(back) {
  settingsBack = back || 'menu';
  const grp = (title, rows) =>
    '<div class="set-grp"><div class="set-grp-t">' + title + '</div>' + rows + '</div>';
  const row = (key, name, desc) =>
    '<div class="set-row"><div><div class="set-name">' + name + '</div>' +
    '<div class="set-desc">' + desc + '</div></div>' +
    '<button class="set-toggle' + (SETTINGS[key] ? ' on' : '') + '" onclick="toggleSetting(\'' + key + '\')">' +
    '<i></i></button></div>';
  const dk = h => {
    const n = parseInt(h.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.2 | 0) + ',' + ((n >> 8 & 255) * 0.2 | 0) + ',' + ((n & 255) * 0.2 | 0) + ')';
  };
  hidePanel();
  const old = qs('.set-fx');
  if (old && old.remove) old.remove();
  const fx = document.createElement('div');
  fx.className = 'dm-fx set-fx';
  fx.innerHTML =
    '<div class="dm-veil" style="background:linear-gradient(168deg,' + dk(BGPAL.grad[0]) + ' 0%,' + dk(BGPAL.grad[1]) + ' 52%,' + dk(BGPAL.grad[2]) + ' 100%)"></div>' +
    '<div class="dm-glow" style="background:radial-gradient(circle at 50% 40%, rgba(' + BGPAL.beam + ',0.15), transparent 62%)"></div>' +
    '<div class="dm-core set-core">' +
      '<h2 class="dm-title">设置</h2>' +
      '<div class="set-scroll">' +
      grp('声 音', row('bgm', '背景音乐', '主菜单与战斗的背景音乐（切轨从头淡入）') +
        row('sfx', '音效', '全部声音效果（出牌/打击/界面）')) +
      grp('画 面', row('fx', '特效粒子', '命中粒子、背景碎片与光带') +
        row('shake', '屏幕震动', '打击时的震屏、踢屏与镜头推近') +
        row('cursor', '鼠标指针', '游戏内自定义水晶指针（光环随世界主题变色）')) +
      grp('演 出', row('dn', '昼夜交替', '战斗中每3回响昼夜轮换：白昼攻击+2，黑夜敌攻+2') +
        row('chant', '咏唱演出', '打出大招/强力技能时的全屏忆词咏唱（关闭则瞬发）')) +
      grp('试 音 台', '<div class="btn-row sound-test">' +
        [['出牌啪', 'sfxWhoosh'], ['挥砍', 'sSlash'], ['命中', 'sHit'], ['爆炸', 'sExplode'],
         ['碎裂', 'sGlass'], ['护罩', 'sShield'], ['侵蚀', 'sPoison'], ['换牌', 'sSelect'],
         ['滴答', 'sfxTick'], ['结晶', 'sCoin'], ['权能', 'sPower'], ['胜利', 'sfxWin'], ['失败', 'sfxLose'],
         ['咏唱氛围', 'sChantDrone'], ['忆词落音', 'sChantBell'], ['敌人登场', 'sSpawn'], ['印章', 'sStamp'], ['落雷', 'sThunder'],
         ['音乐测试', 'bgmTest'],
        ].map(s => '<button class="pbtn small" onclick="' + s[1] + '(1)">' + s[0] + '</button>').join('') +
        '</div>') +
      '</div>' +
      '<div class="dm-btns"><button class="dm-btn" onclick="' +
      (settingsBack === 'pause' ? 'settingsBackPause()' : 'settingsBackMenu()') + '">返回</button></div>' +
    '</div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
}
function settingsBackPause() {   // 设置→暂停: 先清设置层再弹暂停层
  const fx = qs('.set-fx');
  if (fx && fx.remove) fx.remove();
  state.paused = false;   // togglePause 会翻转, 先归位
  togglePause();
}
function settingsBackMenu() {
  const fx = qs('.set-fx');
  if (fx && fx.remove) fx.remove();
  showMenu();
}

function toggleSetting(key) {
  SETTINGS[key] = !SETTINGS[key];
  saveSettings();
  if (key === 'bgm') {
    if (SETTINGS.bgm) BGM.unpause();
    else BGM.stop();
  }
  // 只刷拨片, 不重建整层(避免滚动条跳)
  const fx = qs('.set-fx');
  if (fx && fx.querySelectorAll) {
    fx.querySelectorAll('.set-toggle').forEach(b => {
      const m = b.getAttribute('onclick').match(/toggleSetting\('(\w+)'\)/);
      if (m) b.classList.toggle('on', !!SETTINGS[m[1]]);
    });
  } else showSettings(settingsBack);
}

// BGM 诊断: 把真实状态摆出来, 便于定位无声问题(不切换轨道, 诊断当前轨)
function bgmTest() {
  BGM.unpause();
  const k = BGM.cur || 'menu';
  const nd = BGM.nodes && BGM.nodes[k];
  const lines =
    '当前轨: ' + (k === 'battle' ? '战斗' : '菜单') +
    ' · 状态: ' + (nd ? '播放中(BufferSource)' : '未在播') +
    ' · ctx: ' + (AU.ctx ? AU.ctx.state : '未初始化') +
    ' · 开关: ' + (SETTINGS.bgm ? '开' : '关') +
    ' · 频谱: ' + (VIZ.analyser ? '真实接管' : '模拟兜底');
  const fx = qs('.set-fx');
  if (fx && fx.querySelector) {
    let el = fx.querySelector('.bgm-diag');
    if (!el) {
      el = document.createElement('p');
      el.className = 'bgm-diag';
      el.style.cssText = 'font-size:12px;color:rgba(150,170,220,0.85);letter-spacing:1px;margin-top:10px;text-align:center';
      const sc = fx.querySelector('.set-scroll');
      if (sc) sc.appendChild(el);
    }
    el.textContent = lines;
  }
}

// ================= 引导(分页手册) =================
const GUIDE_PAGES = [
  { h: '目标与旅程', b: '少女「澪奈」坠入平行宇宙之间的虚无。沿分支地图连穿六界（每界五层），击败每一界的<b>守望者</b>，找到回家的路。<br><br>中层 2~3 个节点，<b>只能走相连的路线</b>：战斗、精英、商店、异象、锚点——路线规划本身就是策略。' },
  { h: '战斗基础', b: '每回响抽满手牌、回复以太，出牌消耗以太。<br><br><b>敌人头顶</b>显示当前意图，小字是下回合动作——看两步再落子。<br>点击敌人或 <b>Tab</b> 切换目标；<b>空格</b>打出选中牌，<b>1~8</b> 数字键直出，<b>回车</b>结束回响，<b>Esc</b> 暂停。<br>屏障在回响开始时会清零（除非有"保留"效果）。' },
  { h: '卡牌与稀有度', b: '卡牌分三组：<b>普通组</b>（攻击/减益，卡组主力）、<b>技能组</b>（增益/防御/权能）、<b>大招组</b>（金色「大招」徽标，打出后<b>本场战斗消散</b>——每场只此一发的爆发，附带全屏咏唱演出）。<br><br>稀有度：凡忆 → 烁忆 → 幻忆 → 源忆。基础 34 张自带，其余通过「记忆祈愿」解锁。<br>同一流派 3 张以上会激活<b>共鸣</b>（虚无/星雨/权能），构筑有方向才有强度。' },
  { h: '减益与净化', b: '<b>侵蚀</b>：每层回合开始扣血，逐层衰减。<br><b>裂解</b>：每层受伤 +25%，可叠加。<br><b>衰微</b>：每层攻击 -12%（至多 -60%），可叠加。<br><br>敌人也会给你上这些——用「静观」「净化仪式」一键清除。减益是你最强的杠杆：铺好裂解，爆发翻倍。' },
  { h: '经济与祈愿', b: '<b>以太结晶</b>（局内货币）：商店买卡、治疗、销毁多余卡牌。<br><b>记忆碎片</b>（永久货币）：战斗胜利获得，死亡不丢失，用于「记忆祈愿」解锁新卡。<br><br>主菜单按 <b>G</b> 可以预览祈愿动画。' },
  { h: '昼夜交替', b: '战斗中每 3 回响昼夜轮换（设置可关）：<br><b>☀ 白昼</b>：攻击+2 · 每回响+2屏障 · 治疗+50%<br><b>☾ 黑夜</b>：敌攻+2 · 侵蚀结算+50% · 击杀每个敌人+2结晶 · 经历夜晚的战斗碎片+1<br><br>部分卡牌有<b>昼夜词缀</b>（白昼/黑夜时触发额外效果），「日晷」「月蚀」可以手动改天。「永夜君主」会把战场永远锁进黑夜——是黑夜流派的发动机。' },
];
function showGuide(page) {
  page = page || 0;
  const p = GUIDE_PAGES[page];
  showPanel(
    '<div class="panel-box guide-box"><h2>引导 ' + (page + 1) + ' / ' + GUIDE_PAGES.length + '</h2>' +
    '<div class="guide-sec"><h3>◆ ' + p.h + '</h3><p>' + p.b + '</p></div>' +
    '<div class="btn-row">' +
    (page > 0 ? '<button class="pbtn" onclick="showGuide(' + (page - 1) + ')">上一页</button>' : '') +
    (page < GUIDE_PAGES.length - 1 ? '<button class="pbtn" onclick="showGuide(' + (page + 1) + ')">下一页</button>' : '') +
    '<button class="pbtn" onclick="showMenu()">返回主菜单</button></div></div>'
  );
}

// ================= 新手引导关(脚本化教学战, 不动正常 run/存档) =================
let _tut = null, _tutFromStart = false;
// 教学卡组: 固定演出四张 + 自由体验包(四稀有度/权能/群攻/多段全覆盖)。数组序=抽到序(教学不洗牌, 每局体验一致)
const TUT_DECK = [
  '坠星重击', '微光刃', '微光屏障', '精灵祝福', '裂地波',   // 回响1: 攻击/0费/盾/增益/群攻
  '虚无淬刃', '时空裂隙', '星雨坠落', '以太暴走',           // 回响2: 权能(蚀)/符阵/多段/权能(以太)
  '神罚',                                                 // 压轴大招(脚本 ensure 兜底, 顺序仅影响自由战)
];
function tutorialStart(fromStart) {
  initAudio();
  BGM.playTrack('battle');
  sClick();
  _tutFromStart = !!fromStart;
  showStory([   // 引导剧情(合篇): 设定 2 屏
    { title: '引导 · 坠落', text: `听得到吗？这里是虚无之间。
你在坠落。别慌——坠落也可以是一种前进。
你手里的牌，是你的记忆。打出去，它们会亮一下，然后淡一点。` },
    { title: '引导 · 记忆', text: `看到前方那团游光了吗？那是残响——死去宇宙的回声。
它不恨你。它只是太寂寞了。
举起你的记忆。我教你，一步一步来。` },
  ], tutorialBattle);
}
function tutorialBattle() {
  // 独立局: 固定卡组 + 肉盾弱敌, 不写任何存档
  run.world = 'void';
  run.worldOrder = WORLDS.map(w => w.key);
  run.worldIdx = 0;
  run.depthScale = 1;
  BGPAL = curWorld();
  run.hp = 60; run.maxHp = 60; run.crystals = 40;
  run.deck = TUT_DECK.map(n => Object.assign({}, findCard(n)));
  window._tutOrdered = true;   // 首手在 startBattle 内同步发出, 洗牌跳过要在进 startBattle 前挂
  startBattle('battle', 0);
  window._tutOrdered = false;
  BGM.playTrack('battle');   // 兜底: 剧情期误触 menu 轨在这里扳回(v18.9)
  // 肉盾陪练: 吃完整套流程不死, 伤害挠痒
  setTimeout(() => {
    const e = state.enemies[0];
    if (e) { e.hp = e.maxHp = 60; e.dmg = 1; e.growth = 0; }
  }, 600);
  _tut = { step: 0, t0: performance.now(), waves: 0, lastPlayed: null };
  state._tutSwitched = false;
  document.body.classList.add('tutorial');
  const fx = document.createElement('div');
  fx.className = 'tut-fx';
  fx.id = 'tutFx';
  fx.innerHTML =
    '<div class="tut-hole" id="tutHole"></div>' +
    '<div class="tut-card" id="tutCard"><div class="tut-txt" id="tutTxt"></div>' +
    '<div class="tut-dots" id="tutDots"></div></div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
  tutShowStep(0);
  _tut.poll = setInterval(tutTick, 250);
}
// 步骤协议: sel=聚光目标('#xx'/'enemy'/'card:卡名') allow={play:'卡名'|'any', end, target} 放行项
// ensure=把该卡抓进手牌 spawn=补波 wait=推进条件(ms 数值或谓词) free=进自由战
const TUT_STEPS = [
  { sel: '#handTray', shape: 'wide', txt: '这是你的手牌。每回响自动抽满，打牌消耗以太——以太就是记忆的价格。', wait: 3600 },
  { sel: 'card:坠星重击', shape: 'card', txt: '攻击牌·凡忆。点它（或按数字键），砸向残响。', allow: { play: '坠星重击' }, ensure: '坠星重击', wait: () => _tut.lastPlayed === '坠星重击' },
  { sel: 'enemy', shape: 'enemy', txt: '看残响头顶：大字是当前意图，小字是下一招。读两步，再落子。', wait: 3800 },
  { sel: 'card:精灵祝福', shape: 'card', txt: '技能牌·烁忆。不伤人，但让你站得更稳——打一张。', allow: { play: '精灵祝福' }, ensure: '精灵祝福', wait: () => _tut.lastPlayed === '精灵祝福' },
  { sel: 'card:时空裂隙', shape: 'card', txt: '幻忆·符阵。残片洗回记忆、再抽三张——这类牌打出即消散，一局只亮一次。', allow: { play: '时空裂隙' }, ensure: '时空裂隙', wait: () => _tut.lastPlayed === '时空裂隙' },
  { sel: '#endTurnBtn', shape: 'btn', txt: '打完了？回车，或点「结束回响」。残响要还手了——别怕，它很轻。', allow: { end: true }, wait: () => state.turn >= 2 },
  { sel: null, shape: null, txt: '它叫来了同伴。按 Tab（或点另一只残响）切换目标——看，光在跟着你走。', spawn: 2, allow: { target: true }, wait: () => !!state._tutSwitched },
  { sel: 'card:神罚', shape: 'card', txt: '最后。源忆·大招——每场只唱一次的歌。举起它，看以太的全力。', allow: { play: '神罚' }, ensure: '神罚', wait: () => _tut.lastPlayed === '神罚' },
  { sel: null, shape: null, txt: '剩下的路你自己走。卡组已补齐——凡烁幻源都在，自由打，把它们都看一遍。', allow: { play: 'any', end: true, target: true }, free: true, wait: null },
];
function tutAllow() { return _tut && TUT_STEPS[_tut.step] && TUT_STEPS[_tut.step].allow; }
function tutDeny() {   // 锁定操作的极轻反馈(指引卡微晃, 不闪烁)
  const c = $('tutCard');
  if (!c || !c.classList || c.classList.contains('deny')) return;
  c.classList.add('deny');
  setTimeout(() => { const c2 = $('tutCard'); if (c2 && c2.classList) c2.classList.remove('deny'); }, 330);
}
function tutEnsureCard(name) {   // 脚本发牌: 从牌堆/弃牌堆抓出指定卡进手牌(没有就现造)
  if (state.hand.some(c => c.name === name)) return;
  let card = null;
  let i = state.deck.findIndex(c => c.name === name);
  if (i >= 0) card = state.deck.splice(i, 1)[0];
  else {
    i = state.discard.findIndex(c => c.name === name);
    if (i >= 0) card = state.discard.splice(i, 1)[0];
    else {
      card = Object.assign({}, findCard(name));
      if (!card.name) return;
    }
  }
  card.uid = Math.random();
  state.hand.push(card);
  updateHud();
}
function tutSpawnWave(n) {   // 补波: 弱敌登场(教学不死人)
  const W = curWorld();
  for (let k = 0; k < n; k++) {
    const idx = state.enemies.reduce((m, e) => Math.max(m, e.idx), -1) + 1;
    state.enemies.push({
      idx, x: 0, name: W.enemies.normal[(idx - 1 + 3) % 3] , glyph: '残响',
      hp: 26, maxHp: 26, dmg: 1, growth: 0, cycle: INTENT_CYCLE,
      block: 0, poison: 0, vuln: 0, weak: 0, thorns: 0, sp: null,
      alive: true, patternIndex: idx % INTENT_CYCLE.length, hitFlash: 0, lunge: 0,
      intent: { type: INTENT_CYCLE[idx % INTENT_CYCLE.length] },
    });
  }
  const alive = state.enemies.filter(e => e.alive);
  const xs = alive.length === 1 ? [0.8] : alive.length === 2 ? [0.66, 0.88] : [0.56, 0.78, 0.94];
  alive.forEach((e, i) => e.x = xs[i] || 0.9);
  state.enemies.forEach((e, i) => setTimeout(() => sSpawn(false), 200 + i * 220));
  logMsg('—— 新的残响 聚拢过来 ——', 'lt');
  updateHud();
}
function tutAllDead() {   // 胜利拦截: 自由战分波, 打完全波才收束
  if (!_tut) return;
  if (_tut.waves > 0) {
    _tut.waves--;
    setTimeout(() => tutSpawnWave(2), 700);
    return;
  }
  tutorialWin();
}
function tutShowStep(i) {
  if (!_tut) return;
  _tut.step = i;
  _tut.t0 = performance.now();
  const s = TUT_STEPS[i];
  if (!s) return;
  if (s.ensure) {   // 脚本发牌 + 以太管够
    tutEnsureCard(s.ensure);
    const c = findCard(s.ensure);
    if (c && c.name) { state.energy = Math.max(state.energy, c.cost); updateHud(); }
  }
  if (s.spawn && !_tut.spawned) { _tut.spawned = true; tutSpawnWave(s.spawn); }
  if (s.free) { _tut.waves = 2; }   // 自由战: 清场后再补两波
  const hole = $('tutHole'), txt = $('tutTxt'), dots = $('tutDots');
  if (!hole || !txt) return;
  if (dots) dots.innerHTML = TUT_STEPS.map((_, k) =>
    '<i class="' + (k < i ? 'done' : k === i ? 'on' : '') + '"></i>').join('');
  txt.style.opacity = 0;
  setTimeout(() => { const t2 = $('tutTxt'); if (t2) { t2.textContent = s.txt; t2.style.opacity = 1; } }, 260);
  const card = $('tutCard');
  if (card) card.classList.remove('nag');
  tutHoleTrack();
  tutMark();
}
function tutHoleTrack() {   // 聚光洞持续跟随目标: 卡牌入场/打出重排/补波换位都会移动目标, 一次性测量必偏(踩过)
  const hole = $('tutHole');
  if (!_tut || !hole || !hole.style) return;
  const s = TUT_STEPS[_tut.step];
  let r = null;
  if (s && s.sel === 'enemy') {
    const e = state.enemies && state.enemies.find(x => x.alive);
    if (e && canvas.getBoundingClientRect) {
      const cr = canvas.getBoundingClientRect();
      const midY = cr.top + (cr.height - 210) * 0.46;   // 与 drawEnemies 的 midY=stageH*0.46 同公式
      r = { left: cr.left + e.x * cr.width - 110, top: midY - 100, width: 220, height: 200 };
    }
  } else if (s && s.sel && s.sel.startsWith('card:')) {
    const hc = state.hand.find(c => c.name === s.sel.slice(5));
    const el = hc && handEls.get(hc.uid);
    if (el && el.getBoundingClientRect) r = el.getBoundingClientRect();
  } else if (s && s.sel) {
    const el = qs(s.sel);
    if (el && el.getBoundingClientRect) r = el.getBoundingClientRect();
  }
  if (r && r.width) {
    hole.style.display = '';
    hole.style.transform = 'translate(' + (r.left - 14) + 'px,' + (r.top - 14) + 'px)';
    hole.style.width = (r.width + 28) + 'px';
    hole.style.height = (r.height + 28) + 'px';
    hole.style.borderRadius = s.shape === 'card' || s.shape === 'btn' ? '14px' : (s.shape === 'enemy' ? '50%' : '18px');
  } else {
    hole.style.display = 'none';   // 纯文字步 / 目标尚未出现
  }
}
function tutMark() {   // 锁定态可视化: 放行卡高亮, 其余压暗
  const a = tutAllow();
  state.hand.forEach(c => {
    const el = handEls.get(c.uid);
    if (!el || !el.classList) return;
    const okP = !!(a && a.play && (a.play === 'any' || c.name === a.play));
    el.classList.toggle('tut-ok', okP);
    el.classList.toggle('tut-no', !okP);
  });
  const eb = $('endTurnBtn');
  if (eb && eb.classList) eb.classList.toggle('tut-no', !(a && a.end));
}
function tutTick() {
  if (!_tut) return;
  const s = TUT_STEPS[_tut.step];
  if (!s) return;
  tutMark();
  tutHoleTrack();   // 每次轮询跟随目标(0.55s CSS 过渡平滑滑动)
  const pass = typeof s.wait === 'number' ? performance.now() - _tut.t0 > s.wait : s.wait && s.wait();
  if (pass) {   // 条件达成 → 下一步(正向反馈)
    sfxSelect();
    const c = $('tutCard');
    if (c && c.classList) { c.classList.remove('stepok'); void c.offsetWidth; c.classList.add('stepok'); }
    tutShowStep(_tut.step + 1);
    return;
  }
  if (performance.now() - _tut.t0 > 30000) {   // 卡死兜底: 指引卡闪烁
    const c = $('tutCard');
    if (c && c.classList) c.classList.add('nag');
  }
}
function tutorialWin() {   // 教学战胜利(接管 win 链)
  sfxWin();
  clearInterval(_tut.poll);
  const fromStart = _tutFromStart;
  _tut = null;
  document.body.classList.remove('tutorial');
  const fx = $('tutFx');
  if (fx && fx.classList) { fx.classList.add('out'); setTimeout(() => fx.remove(), 400); }
  state.started = false;
  setBattleUI(false);
  META.tutDone = true; saveMeta();   // 教学完成标记(新玩家强制解除)
  showStory({ title: '引导 · 向上', text: `看，没那么难。
记忆会淡，但你已经学会怎么赢了。
去吧。六个世界在等你——家在最高的那层天。` },
    fromStart ? showWorldSelect : showMenu);   // 强制入学路径: 毕业直接上旅途(世界选择)
}
function tutorialQuit() {
  if (!_tut) return;
  clearInterval(_tut.poll);
  _tut = null;
  document.body.classList.remove('tutorial');
  const fx = $('tutFx');
  if (fx && fx.classList) { fx.classList.add('out'); setTimeout(() => fx.remove(), 300); }
  state.started = false;
  state.paused = false;
  setBattleUI(false);
  tutFadeTo(showMenu);   // 干净回落, 不硬切
}
// 软黑场过渡(教学退出等短链路用)
function tutFadeTo(fn) {
  const d = document.createElement('div');
  d.className = 'tut-fade';
  document.body.appendChild(d);
  requestAnimationFrame(() => d.classList.add('in'));
  setTimeout(() => {
    fn();
    d.classList.remove('in');
    setTimeout(() => d.remove(), 420);
  }, 300);
}

// ================= 面板系统 =================
function showPanel(html) {
  $('panel').innerHTML = html;
  $('panel').classList.remove('hidden');
  _sfxPanel();
}
function hidePanel() { $('panel').classList.add('hidden'); }
function setBattleUI(on) {
  ['hud', 'hand', 'handTray', 'deckPile', 'discardPile', 'endTurnBtn', 'pileInfo', 'log', 'pauseBtn', 'playerTags'].forEach(id => {
    $(id).style.display = on ? '' : 'none';
  });
  if (!on) $('cardPreview').classList.add('hidden');
  // 战斗内可视化条(JS 动态挂载, 离场即摘)
  let bv = typeof $ === 'function' ? $('battleViz') : null;
  if (on && !bv && SETTINGS.fx && document.createElement) {
    bv = document.createElement('canvas');
    bv.id = 'battleViz';
    document.body.appendChild(bv);
  }
  if (!on && bv && bv.remove) bv.remove();
  if (document.body && document.body.classList) {
    document.body.classList.remove('battle-enter');
    if (on) {
      void document.body.offsetWidth;   // 重启动画
      document.body.classList.add('battle-enter');
    }
  }
}

// ================= 暂停菜单 =================
function togglePause() {
  if (_tut) return;   // 引导中锁暂停/设置入口(Esc 退出在 keydown 先行拦截)
  if (!state.started || state.gameOver) return;
  state.paused = !state.paused;
  if (state.paused) {
    const dk = h => {
      const n = parseInt(h.slice(1), 16);
      return 'rgb(' + ((n >> 16 & 255) * 0.2 | 0) + ',' + ((n >> 8 & 255) * 0.2 | 0) + ',' + ((n & 255) * 0.2 | 0) + ')';
    };
    showPanel(
      '<div class="pause-fx">' +
      '<div class="pause-veil" style="background:linear-gradient(168deg,' + dk(BGPAL.grad[0]) + ' 0%,' + dk(BGPAL.grad[1]) + ' 52%,' + dk(BGPAL.grad[2]) + ' 100%)"></div>' +
      '<div class="pause-glow" style="background:radial-gradient(circle at 50% 42%, rgba(' + BGPAL.beam + ',0.15), transparent 60%)"></div>' +
      '<div class="pause-core">' +
      '<h2 class="pause-title">暂 停</h2>' +
      '<p class="pause-lore">' + randomLore() + '</p>' +
      '<div class="pause-btns">' +
      '<button class="pause-btn" style="--pi:0" onclick="togglePause()">继续战斗</button>' +
      '<button class="pause-btn" style="--pi:1" onclick="showSettings(\'pause\')">设置</button>' +
      '<button class="pause-btn" style="--pi:2" onclick="abandonRun()">放弃本局 · 返回主菜单</button>' +
      '</div></div></div>'
    );
    requestAnimationFrame(() => { const el = qs('.pause-fx'); if (el && el.classList) el.classList.add('go'); });
  } else {
    hidePanel();
  }
}

function abandonRun() {
  state.paused = false;
  state.started = false;
  showMenu();
}

// ================= 卡牌纹样(矢量图标) =================
const P = {
  sword:  '<path d="M5 19L17 7" /><path d="M14 6l4 4" /><path d="M17 4l3 3" />',
  star:   '<path d="M12 3l2.2 4.6 5 .6-3.7 3.4 1 4.9-4.5-2.5-4.5 2.5 1-4.9L4.8 8.2l5-.6z" fill="currentColor" stroke="none"/><path d="M17 15l4 5M14.5 17.5L16 21" />',
  dagger: '<path d="M7 17l8-8" /><path d="M12 10l2 2" /><circle cx="6" cy="18" r="1.4" />',
  shield: '<path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" />',
  fang:   '<path d="M6 4c2 8 6 12 12 14-2 2-5 2-7 1C7 17 5 11 6 4z" fill="currentColor" stroke="none"/>',
  dslash: '<path d="M6 6l8 8" /><path d="M10 5l9 9" /><path d="M5 10l9 9" />',
  pblade: '<path d="M6 15L15 6" /><path d="M12 5l3 3" /><path d="M9 18c1.5 2 4 2 4 4a2 2 0 01-4 0c0-1 .5-3 0-4z" fill="currentColor" stroke="none"/>',
  crack:  '<rect x="5" y="5" width="14" height="14" rx="1.5" /><path d="M12 5l-2 5 4 3-3 6" />',
  drain:  '<path d="M5 19L15 9" /><path d="M12 8l3 3" /><path d="M17 12c2.5 3.5 4 5 4 7a4 4 0 01-8 0c0-2 1.5-3.5 4-7z" fill="currentColor" stroke="none"/>',
  cleave: '<path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M5 21h14" />',
  spiral: '<path d="M12 12a2 2 0 012 2 4 4 0 01-4 4 6 6 0 01-6-6 8 8 0 018-8" />',
  axe:    '<path d="M8 20L16 6" /><path d="M14 5a6 6 0 015 7l-4 1z" fill="currentColor" stroke="none"/>',
  burst:  '<path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />',
  meteor: '<circle cx="14" cy="14" r="4" /><path d="M4 6l5 3M5 12h5M9 5l3 4" />',
  eye:    '<path d="M2.5 12S6.5 6 12 6s9.5 6 9.5 6-4 6-9.5 6S2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.4" />',
  flame:  '<path d="M12 3c1 4-4 5-2 9 1 2 3 2 3 0 3 2 2 6-1 7-4 1-7-2-6-6 1-3 5-5 6-10z" fill="currentColor" stroke="none"/>',
  glowsh: '<path d="M12 4.5l5.5 2.4v4.8c0 3.2-2.4 5.6-5.5 7.3-3.1-1.7-5.5-4.1-5.5-7.3V6.9z" /><path d="M12 1.5v1.5M4 12H2.5M22 12h-1.5" />',
  lotus:  '<path d="M12 16c-2-2-2-5 0-7 2 2 2 5 0 7z" /><path d="M8 17c-1-2.5 0-5 2-6M16 17c1-2.5 0-5-2-6" />',
  dash:   '<path d="M4 8h9M6 12h9M4 16h9" /><path d="M16 8l5 4-5 4z" fill="currentColor" stroke="none"/>',
  horn:   '<path d="M4 10v4l4 1 8 5V4L8 9z" fill="currentColor" stroke="none"/><path d="M18.5 9a4 4 0 010 6" />',
  cloud:  '<path d="M7 18a4 4 0 01-.5-8A5.5 5.5 0 0118 12a3.5 3.5 0 01-.5 6z" />',
  pulse:  '<path d="M12 20s-7-4.5-7-9a4 4 0 017-3 4 4 0 017 3c0 4.5-7 9-7 9z" /><path d="M6 12h3l1.5-2.5 2 5L14 12h4" />',
  wall:   '<rect x="4" y="6" width="16" height="12" rx="1" /><path d="M4 12h16M12 6v6M8 12v6M16 12v6" />',
  mist:   '<path d="M7 14a4 4 0 01-.5-8A5.5 5.5 0 0118 8a3.5 3.5 0 01-.5 6z" /><path d="M9 18v.5M13 19v.5M17 18v.5" />',
  mirror: '<ellipse cx="12" cy="10" rx="5" ry="6" /><path d="M12 16v5M8 21h8" /><path d="M9 10l3-2.5L13.5 10" />',
  wave:   '<path d="M3 9c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0M3 15c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0" />',
  starhd: '<path d="M12 5l1.6 3.3 3.6.4-2.7 2.4.8 3.5-3.3-1.8-3.3 1.8.8-3.5-2.7-2.4 3.6-.4z" fill="currentColor" stroke="none"/><path d="M5 19c2-2.5 4-3.5 7-3.5s5 1 7 3.5" />',
  hourgl: '<path d="M6.5 4h11M6.5 20h11M8.5 4c0 5 7 6.5 7 12M15.5 4c0 5-7 6.5-7 12" />',
  ablade: '<path d="M6 16L15 7" /><path d="M12 6l3 3" /><circle cx="18" cy="6" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="14" cy="19" r="1" />',
  note:   '<path d="M9 17V6l8-2v11" /><circle cx="7" cy="17" r="2.2" /><circle cx="15" cy="15" r="2.2" />',
  bolt:   '<path d="M13 2L5 13h5l-1 9 8-11h-5z" fill="currentColor" stroke="none"/>',
  thorn:  '<path d="M12 4l6 2.5V12c0 3.5-2.6 6-6 8-3.4-2-6-4.5-6-8V6.5z" /><path d="M12 1.5v2M4 4l1.5 1.5M20 4l-1.5 1.5" />',
  gsword: '<path d="M12 2v14" /><path d="M8 16h8" /><path d="M12 20v2" /><path d="M9 5l3-3 3 3" />',
  hlink:  '<path d="M12 19s-6-3.8-6-7.7A3.4 3.4 0 0112 9a3.4 3.4 0 016 2.3c0 3.9-6 7.7-6 7.7z" /><circle cx="12" cy="12.5" r="1.6" />',
};
const CARD_ICON = {
  '碎光刺': 'sword', '坠星重击': 'star', '微光刃': 'dagger', '虚空盾击': 'shield', '噬光': 'fang',
  '双界连斩': 'dslash', '虚无蚀刃': 'pblade', '破界一击': 'crack', '虹吸之剑': 'drain', '断界重劈': 'cleave',
  '星尘旋斩': 'spiral', '终焉处决': 'axe', '虚无爆裂': 'burst', '界核重击': 'meteor',
  '万象终焉': 'eye', '燃命之怒': 'flame',
  '微光屏障': 'glowsh', '静观': 'lotus', '相位闪避': 'dash', '不屈呐喊': 'horn', '虚无迷雾': 'cloud',
  '心灵脉冲': 'pulse', '绝对壁垒': 'wall', '侵蚀之雾': 'mist', '镜面反姿': 'mirror', '以太涌流': 'wave',
  '澪奈的执念': 'starhd', '命运重构': 'hourgl',
  '虚无淬刃': 'ablade', '宇宙律动': 'note', '以太暴走': 'bolt', '星棘护甲': 'thorn',
  '弑神者': 'gsword', '生命契约': 'hlink',
  '连突刺': 'dslash', '回光斩': 'sword', '裂空刺': 'crack', '蚀骨钉': 'pblade', '闪光连打': 'dslash',
  '破盾击': 'shield', '轻羽斩': 'sword', '残月击': 'cleave', '穿界刺': 'crack', '毒牙突袭': 'fang',
  '三连星': 'star', '湮灭之触': 'pblade', '破魔斩': 'axe', '镜花水月': 'mirror', '陨铁拳': 'meteor',
  '毒液喷洒': 'mist', '虚空震荡': 'burst', '蓄雷一击': 'bolt', '记忆投刃': 'dagger', '裂解重锤': 'cleave',
  '星雨坠落': 'star', '虚无洪流': 'wave', '灭界一击': 'crack', '处刑宣告': 'axe', '蚀心咒': 'mist',
  '弃牌风暴': 'burst', '屏障冲击': 'wall', '终焉回响': 'burst', '以太湮灭': 'bolt', '神罚': 'gsword',
  '万界裂解': 'crack',
  '微光疗愈': 'pulse', '蓄能': 'bolt', '硬化': 'shield', '专注': 'lotus', '净化仪式': 'mirror',
  '迅捷步伐': 'dash', '以太储能': 'bolt', '双倍刻印': 'dslash', '战地治疗': 'pulse', '铜墙铁壁': 'wall',
  '记忆汲取': 'hourgl', '精灵祝福': 'starhd', '余震护盾': 'thorn', '过载充能': 'bolt',
  '不死鸟': 'flame', '绝对防御': 'shield', '未来视': 'eye', '战斗记忆': 'horn', '时空裂隙': 'hourgl',
  '澪奈的决意': 'starhd', '命运丝线': 'hlink',
  '再生因子': 'pulse', '星尘屏障': 'thorn', '小型暴走': 'bolt', '痛苦回响': 'hlink',
  '循环记忆': 'hourgl', '吸血獠牙': 'fang', '巨人猎手': 'gsword', '双重奏': 'dslash',
  '毒经': 'mist', '界域行者': 'eye', '以太炉心': 'meteor', '万毒之源': 'mist', '不灭': 'glowsh', '奇点': 'star',
  '晨曦刃': 'star', '夜蚀刃': 'pblade', '日晷': 'hourgl', '月蚀': 'eye', '辉昼盾': 'glowsh', '暗潮': 'wave', '永夜君主': 'eye',
  '旋光刃': 'dslash', '碎梦击': 'crack', '雷牙': 'bolt', '夺魄': 'axe', '双日连射': 'star', '夜枭': 'eye',
  '裂地波': 'burst', '连珠溅射': 'star', '星屑散射': 'star', '破阵横扫': 'cleave', '蚀雨': 'mist', '万剑归潮': 'wave',
  '蚀骨潮': 'mist', '雷界崩落': 'bolt', '献祭': 'flame', '棘牙': 'thorn', '永昼斩': 'gsword', '噬月': 'eye',
  '晨露': 'lotus', '夜行者': 'dash', '白昼祷言': 'horn', '入夜仪式': 'mirror', '雷鸣蓄能': 'bolt',
  '梦甲': 'shield', '黎明觉醒': 'starhd', '荆棘王座': 'thorn', '梦貘': 'pulse', '双子星': 'dslash', '雷鸣神核': 'meteor',
};
const RARITY_PIPS = { C: 1, R: 2, E: 3, L: 4 };

function cardInner(c) {
  const r = RARITY[c.rarity];
  const icon = P[CARD_ICON[c.name]] || P.sword;
  const spk = c.rarity === 'C' ? '' :
    '<i class="spk s1"></i><i class="spk s2"></i><i class="spk s3"></i>';
  const lenCls = c.desc.length > 26 ? ' xlong' : c.desc.length > 17 ? ' long' : '';
  return '<div class="ccost"><span>' + c.cost + '</span></div>' + spk +
    '<div class="cart tbg-' + c.type + ' rb-' + c.rarity + '"><div class="cart-ring"></div>' +
    '<svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
    'stroke-linecap="round" stroke-linejoin="round">' + icon + '</svg></div>' +
    '<div class="cname">' + c.name + '</div>' +
    '<div class="ctags">' + (cardGrp(c) === 'u' ? '<span class="ctag ult-tag">大招</span>' : '') +
    (c.aoe || (c.day && c.day.aoe) || (c.night && c.night.aoe) ? '<span class="ctag aoe-tag">群</span>' : '') +
    '<span class="ctag">' + TYPE_NAME[c.type] + '</span>' +
    '<span class="rtag" style="color:' + r.color + '">' + r.name + '</span></div>' +
    '<div class="cdesc' + lenCls + '">' + c.desc + '</div>' +
    '<div class="pips" style="color:' + r.color + '">' + '◆'.repeat(RARITY_PIPS[c.rarity]) + '</div>';
}

function cardHtml(c) {
  return '<div class="card r-' + c.rarity + ' t-' + c.type + ' static">' + cardInner(c) + '</div>';
}

// ================= 交互式动态背景 =================
const stars = [];
for (let i = 0; i < 150; i++)
  stars.push({ x: Math.random(), y: Math.random(), z: 0.25 + Math.random() * 0.75, tw: Math.random() * 6.28 });
const bgShards = [];
for (let i = 0; i < 22; i++)
  bgShards.push({ x: Math.random(), y: Math.random(), s: 3 + Math.random() * 7, v: 0.010 + Math.random() * 0.022, ph: Math.random() * 6.28, cy: Math.random() < 0.5 });
const frags = [];
for (let i = 0; i < 7; i++) {
  const pts = [];
  const nv = 5 + ((Math.random() * 3) | 0);
  for (let v = 0; v < nv; v++) {
    const aa = (v / nv) * Math.PI * 2;
    const rr = 20 + Math.random() * 38;
    pts.push([Math.cos(aa) * rr, Math.sin(aa) * rr]);
  }
  frags.push({
    x: Math.random(), y: Math.random(), z: 0.3 + Math.random() * 0.7,
    pts, rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.16,
    vy: 0.004 + Math.random() * 0.008,
  });
}
const beams = [
  { x: 0.2,  w: 0.16, v: 0.006, a: 0.22 },
  { x: 0.65, w: 0.22, v: 0.004, a: 0.17 },
  { x: 0.9,  w: 0.12, v: 0.008, a: 0.19 },
];
const mouse = { x: 0.5, y: 0.5 };
window.addEventListener('mousemove', e => { mouse.x = e.clientX / window.innerWidth; mouse.y = e.clientY / window.innerHeight; });
const ripples = [];
function addRipple(xFrac, color) { ripples.push({ x: xFrac, color, born: performance.now() }); }

let _bgGrad = null;
function drawBackground(W, H, dp, t) {
  const bgKey = BGPAL.grad.join('|') + '|' + H;   // v18.3: 背景渐变按世界缓存, 不逐帧新建
  if (!_bgGrad || _bgGrad.k !== bgKey) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, BGPAL.grad[0]);
    g.addColorStop(0.55, BGPAL.grad[1]);
    g.addColorStop(1, BGPAL.grad[2]);
    _bgGrad = { k: bgKey, g };
  }
  ctx.fillStyle = _bgGrad.g;
  const M = 90 * dp;   // 过扫边距: 震屏/踢屏/旋转把场景推斜时边缘不露画布透明底(透出 body 浅色底, 像滚动条闪现)
  ctx.fillRect(-M, -M, W + 2 * M, H + 2 * M);
  // 鼠标跟随光晕(v18.3: 渐变精灵缓存; v18.9 再收小: 70dp/0.12)
  const mx = mouse.x * W, my = mouse.y * H;
  const mgs = _auraSprite('rgb(' + BGPAL.beam + ')');
  if (mgs) {
    ctx.globalAlpha = 0.12;
    ctx.drawImage(mgs, mx - 70 * dp, my - 70 * dp, 140 * dp, 140 * dp);
    ctx.globalAlpha = 1;
  } else {
    const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 70 * dp);
    mg.addColorStop(0, 'rgba(' + BGPAL.beam + ', 0.12)');
    mg.addColorStop(1, 'rgba(' + BGPAL.beam + ', 0)');
    ctx.fillStyle = mg;
    ctx.fillRect(0, 0, W, H);
  }
  const parX = (mouse.x - 0.5) * 2 + (window._bgScroll || 0), parY = (mouse.y - 0.5) * 2;
  if (SETTINGS.fx) {
    for (const b of beams) {
      const bx = ((b.x + t * b.v) % 1.3 - 0.15) * W;
      const bw = b.w * W;
      ctx.save();
      ctx.transform(1, 0, -0.3, 1, 0, 0);
      const gg = ctx.createLinearGradient(bx, 0, bx + bw, 0);
      gg.addColorStop(0, 'rgba(' + BGPAL.beam + ',0)');
      gg.addColorStop(0.5, 'rgba(' + BGPAL.beam + ',' + (b.a + state.pulse * 0.05) + ')');
      gg.addColorStop(1, 'rgba(' + BGPAL.beam + ',0)');
      ctx.fillStyle = gg;
      ctx.fillRect(bx, -H * 0.3, bw, H * 1.6);
      ctx.restore();
    }
    for (const f of frags) {
      const fy = ((f.y + t * f.vy) % 1.16 - 0.08) * H;
      const fx = ((f.x + parX * 0.045 * f.z) % 1 + 1) % 1 * W;
      const rot = f.rot + t * f.vr;
      ctx.save();
      ctx.translate(fx, fy);
      ctx.rotate(rot);
      ctx.scale(f.z, f.z);
      ctx.globalAlpha = 0.35 + 0.2 * f.z + state.pulse * 0.15;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.strokeStyle = 'rgba(130, 150, 195, 0.5)';
      ctx.lineWidth = 1.2 * dp;
      ctx.beginPath();
      ctx.moveTo(f.pts[0][0], f.pts[0][1]);
      for (let v = 1; v < f.pts.length; v++) ctx.lineTo(f.pts[v][0], f.pts[v][1]);
      ctx.closePath();
      ctx.fill(); ctx.stroke();
      ctx.globalAlpha *= 0.5;
      ctx.beginPath();
      ctx.moveTo(f.pts[0][0] * 0.6, f.pts[0][1] * 0.6);
      ctx.lineTo(0, 0);
      ctx.lineTo(f.pts[2][0] * 0.6, f.pts[2][1] * 0.6);
      ctx.stroke();
      ctx.restore();
    }
    ctx.globalAlpha = 1;
  }
  for (const s of stars) {
    const sx = ((s.x + parX * 0.03 * s.z) % 1 + 1) % 1 * W;
    const sy = ((s.y + t * 0.006 * s.z + parY * 0.02 * s.z) % 1 + 1) % 1 * H;
    const a = 0.3 + 0.4 * Math.sin(t * 1.6 + s.tw) + state.pulse * 0.25 + (state.nightBlend || 0) * 0.25;   // 夜晚星光更亮
    ctx.globalAlpha = Math.max(0.08, Math.min(1, a));
    ctx.fillStyle = s.z > 0.7 ? '#ffffff' : BGPAL.star;
    const r = s.z * 3.6 * dp;
    ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fill();
  }
  for (const s of bgShards) {
    const yy = ((s.y - t * s.v) % 1 + 1) % 1 * H;
    const xx = (s.x + Math.sin(t * 0.7 + s.ph) * 0.012 + parX * 0.02) * W;
    const a = 0.24 + state.pulse * 0.35 + 0.12 * Math.sin(t * 2 + s.ph);
    ctx.globalAlpha = Math.max(0.08, Math.min(0.85, a));
    ctx.fillStyle = s.cy ? BGPAL.shard[0] : BGPAL.shard[1];
    const r = s.s * dp;
    ctx.beginPath();
    ctx.moveTo(xx, yy - r); ctx.lineTo(xx + r * 0.7, yy); ctx.lineTo(xx, yy + r); ctx.lineTo(xx - r * 0.7, yy);
    ctx.closePath(); ctx.fill();
  }
  ctx.globalAlpha = 1;
  const nowMs = performance.now();
  for (let i = ripples.length - 1; i >= 0; i--) {
    const age = (nowMs - ripples[i].born) / 600;
    if (age >= 1) { ripples.splice(i, 1); continue; }
    ctx.globalAlpha = (1 - age) * 0.5;
    ctx.strokeStyle = ripples[i].color;
    ctx.lineWidth = 3 * dp * (1 - age * 0.5);
    ctx.beginPath();
    ctx.arc(ripples[i].x * W, (H - 210 * dp) * 0.46, age * W * 0.12 + 10 * dp, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  // 星尘粒子(与战斗粒子同轨, 菜单态由 menuDust 供给)
  const dtBg = state._dtN || 1;
  for (let i = state.particles.length - 1; i >= 0; i--) {
    const p = state.particles[i];
    const age = (nowMs - p.born) / p.life;
    if (age >= 1) { state.particles.splice(i, 1); continue; }
    p.x += p.vx * dtBg;
    p.y += p.vy * dtBg;
    p.vy += (p.g === undefined ? 0.15 : p.g) * dp * dtBg;
    ctx.globalAlpha = (1 - age) * (p.a === undefined ? 1 : p.a);
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.r, p.r);
  }
  ctx.globalAlpha = 1;
}

// 菜单音频可视化(DOM 层 canvas: canvas 底的律动条被 #panel 白纱盖住, 挪到菜单内容之下、面板底纱之上)
// v18.0: 顶部倒影行已删(用户反馈), 只留底部一行
function drawVizBars(c, W, H, kA) {
  c.clearRect(0, 0, W, H);
  const n = 64, data = VIZ.read(n);
  const bw = W / n;
  for (let i = 0; i < n; i++) {
    const v = data[i];
    const h = v * H * 0.55;   // v16.2: 0.78→0.55 收克制
    if (h < 1) continue;
    const x = (i + 0.17) * bw;
    c.fillStyle = 'rgba(' + BGPAL.beam + ',' + Math.min(0.92, 0.3 + v * 0.5) * kA + ')';
    c.fillRect(x, H - h, bw * 0.66, h);
  }
}
function drawMenuViz(mv) {
  const dp = devicePixelRatio;
  const W = mv.clientWidth * dp, H = mv.clientHeight * dp;
  if (!W || !H) return;
  if (mv.width !== W || mv.height !== H) { mv.width = W; mv.height = H; }
  drawVizBars(mv.getContext('2d'), W, H, 1);
}
function drawBattleViz(bv) {
  const dp = devicePixelRatio;
  const W = bv.clientWidth * dp, H = bv.clientHeight * dp;
  if (!W || !H) return;
  if (bv.width !== W || bv.height !== H) { bv.width = W; bv.height = H; }
  const c = bv.getContext('2d');
  c.clearRect(0, 0, W, H);
  const n = 64, data = VIZ.read(n);
  const bw = W / n;
  const bc = BGPAL.beam.split(',');   // 战斗托盘是白纱: beam 转深 0.52 保证可读
  const dark = ((bc[0] * 0.52) | 0) + ',' + ((bc[1] * 0.52) | 0) + ',' + ((bc[2] * 0.52) | 0);
  for (let i = 0; i < n; i++) {
    const v = data[i];
    const h = v * H * 0.6;   // v16.2: 0.86→0.6 收克制
    if (h < 1) continue;
    c.fillStyle = 'rgba(' + dark + ',' + Math.min(0.85, 0.34 + v * 0.55) + ')';
    c.fillRect((i + 0.17) * bw, H - h, bw * 0.66, h);
  }
}

// 径向渐变精灵缓存(v18.3): 预渲染 128² 离屏 canvas, 逐帧 drawImage 复用——每帧 createRadialGradient 是掉帧大户
const _auraCache = {};
function _auraSprite(color) {
  let sp = _auraCache[color];
  if (sp === undefined) {
    sp = null;
    if (typeof document.createElement === 'function') {
      const c = document.createElement('canvas');
      if (c && c.getContext) {
        c.width = c.height = 128;
        const g2 = c.getContext('2d');
        if (g2 && g2.createRadialGradient) {
          const rg = g2.createRadialGradient(64, 64, 0, 64, 64, 64);
          rg.addColorStop(0, color);
          rg.addColorStop(1, 'rgba(0,0,0,0)');
          g2.fillStyle = rg;
          g2.fillRect(0, 0, 128, 128);
          sp = c;
        }
      }
    }
    _auraCache[color] = sp;
  }
  return sp;
}
function aura(cx, cy, r, color, alpha) {
  const sp = _auraSprite(color);
  ctx.globalAlpha = alpha;
  if (sp) ctx.drawImage(sp, cx - r, cy - r, r * 2, r * 2);
  else {   // 无头桩兜底: 老路径
    const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    rg.addColorStop(0, color);
    rg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rg;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
}

// ================= 主角状态标签(DOM, 悬停详情) =================
const POWER_TIP = {
  venom: '虚无淬刃：攻击牌附加1层侵蚀',
  draw: '宇宙律动：每回响多抽1张牌',
  energy: '以太暴走：每回响+1以太',
  thorns: '星棘护甲：+4星棘（被攻击反弹）',
  giant: '弑神者：对生命>50%的敌人伤害+50%',
  leech: '生命契约：攻击伤害的25%转化为治疗',
  regen: '再生因子：每回响回复2生命',
  regen2: '不灭：每回响回复4生命',
  venomAura: '毒经：每回响所有敌人+1层侵蚀',
  venomAura2: '万毒之源：每回响所有敌人+2层侵蚀',
  doubleFirst: '双重奏：每回响首张攻击牌×2',
  mastery: '以太炉心：每回响+1以太且多抽1张',
  foresight: '界域行者：每回响40%概率+1以太',
  sharp: '奇点：每回响+1意志',
  poisonHeal: '痛苦回响：施加侵蚀时回复1生命',
  eternalNight: '永夜君主：永夜锁定，黑夜攻击+3',
};
// ================= 牌堆查看 =================
function showDeckView() {
  if (_tut) return;   // 引导中锁牌堆查看
  if (!state.started) return;
  sfxClick();
  const sec = (title, list) =>
    '<div class="cw-sec">' + title + ' · ' + list.length + '</div><div class="cw-grid">' +
    (list.length ? list.map((c, i) => '<div class="cw-cell" style="--wi:' + i + ';--gc:' + RARITY[c.rarity].color + '">' + cardHtml(c) + '</div>').join('') :
      '<p style="color:#78829f">（空）</p>') + '</div>';
  cardWall({
    title: '记忆全貌',
    sub: '手牌 ' + state.hand.length + ' · 牌堆 ' + state.deck.length + ' · 残片 ' + state.discard.length + ' · 消散 ' + state.exhaustPile.length,
    body: sec('手牌', state.hand) + sec('牌堆', state.deck) + sec('残片', state.discard) + sec('消散', state.exhaustPile),
    closeLabel: '返回战斗',
    onClose: hidePanel,
  });
}

// 全屏卡牌墙(牌组查看/图鉴共用): 深色纱幕+光晕+错峰网格
function cardWall(opts) {
  const dk = h => {
    const n = parseInt(h.slice(1), 16);
    return 'rgb(' + ((n >> 16 & 255) * 0.2 | 0) + ',' + ((n >> 8 & 255) * 0.2 | 0) + ',' + ((n & 255) * 0.2 | 0) + ')';
  };
  hidePanel();
  const old = qs('.cw-fx');
  if (old && old.remove) old.remove();
  const fx = document.createElement('div');
  fx.className = 'cw-fx';
  fx.innerHTML =
    '<div class="cw-veil" style="background:linear-gradient(168deg,' + dk(BGPAL.grad[0]) + ' 0%,' + dk(BGPAL.grad[1]) + ' 52%,' + dk(BGPAL.grad[2]) + ' 100%)"></div>' +
    '<div class="cw-glow" style="background:radial-gradient(circle at 50% 40%, rgba(' + BGPAL.beam + ',0.14), transparent 62%)"></div>' +
    '<div class="cw-head"><h2 class="cw-title">' + opts.title + '</h2>' +
    '<div class="cw-sub">' + opts.sub + '</div>' +
    (opts.tabs || '') + '</div>' +
    '<div class="cw-scroll"><div class="cw-body">' + opts.body + '</div></div>' +
    '<div class="cw-close"><button class="cw-btn">' + opts.closeLabel + '</button></div>';
  document.body.appendChild(fx);
  requestAnimationFrame(() => fx.classList.add('go'));
  const btn = fx.querySelector('.cw-btn');
  if (btn) btn.onclick = () => {
    sClick();
    fx.classList.add('out');
    setTimeout(() => { fx.remove(); opts.onClose(); }, 380);
  };
}

function renderPlayerTags() {  const box = $('playerTags');
  const tags = [];
  if (state.block > 0) tags.push({ l: '屏障 ' + state.block, c: '#5ab0e0', tip: '屏障：抵挡伤害。回响开始时清零（除非有保留效果）' });
  if (state.strength > 0) tags.push({ l: '意志 ' + state.strength, c: '#e0a030', tip: '意志：攻击牌伤害 +' + state.strength });
  if (state.thorns > 0) tags.push({ l: '星棘 ' + state.thorns, c: '#4aa8dd', tip: '星棘：被攻击时反弹 ' + state.thorns + ' 点伤害' });
  if (state.pVuln > 0) tags.push({ l: '裂解 ' + state.pVuln, c: '#e05555', tip: '裂解(减益)：每层受伤 +25%，当前 ' + state.pVuln + ' 层，回响开始衰减' });
  if (state.pWeak > 0) tags.push({ l: '衰微 ' + state.pWeak, c: '#8a8aa8', tip: '衰微(减益)：每层攻击 -12%，当前 ' + state.pWeak + ' 层，回响开始衰减' });
  for (const k in POWER_SHORT) {
    if (state.powers[k]) tags.push({ l: POWER_SHORT[k], c: '#9a55e0', tip: POWER_TIP[k] || k });
  }
  if (state.dayNight === 'night' && SETTINGS.dn) tags.push({ l: '☾ 夜', c: '#6a7ab8', tip: '黑夜：敌攻+2 · 侵蚀结算+50% · 击杀+2结晶' });
  else if (SETTINGS.dn) tags.push({ l: '☀ 昼', c: '#d9a030', tip: '白昼：攻击+2 · 每回响+2屏障 · 治疗+50%' });
  box.innerHTML = tags.map(t =>
    '<div class="ptag" style="color:' + t.c + ';border-color:' + t.c + '80">' + t.l +
    '<div class="ptip">' + t.tip + '</div></div>').join('');
  box.style.top = ((canvas.clientHeight - 210) * 0.46 + 96) + 'px';
  box.style.display = state.started && tags.length ? '' : 'none';
}
const POWER_SHORT = {
  venom: '淬', draw: '律', energy: '暴', thorns: '甲', giant: '弑', leech: '契',
  regen: '生', regen2: '灭', venomAura: '毒', venomAura2: '源', doubleFirst: '双',
  mastery: '炉', foresight: '行', sharp: '奇', poisonHeal: '痛', eternalNight: '夜',
};
function drawPlayerTags(px, midY, dp) {
  const tags = [];
  if (state.strength > 0) tags.push(['意志' + state.strength, '#e0a030']);
  if (state.thorns > 0)   tags.push(['星棘' + state.thorns, '#4aa8dd']);
  if (state.pVuln > 0)    tags.push(['裂解' + state.pVuln, '#e05555']);
  if (state.pWeak > 0)    tags.push(['衰微' + state.pWeak, '#8a8aa8']);
  for (const k in POWER_SHORT) if (state.powers[k]) tags.push([POWER_SHORT[k], '#9a55e0']);
  if (!tags.length) return;
  const fs = 10.5 * dp;
  ctx.font = 'bold ' + fs + 'px sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const gap = 4 * dp, ph = 16 * dp;
  for (let row = 0; row * 5 < tags.length; row++) {
    const rowTags = tags.slice(row * 5, row * 5 + 5);
    const widths = rowTags.map(tg => ctx.measureText(tg[0]).width + 12 * dp);
    let x = px - (widths.reduce((a, b) => a + b, 0) + gap * (rowTags.length - 1)) / 2;
    const y = midY + 80 * dp + row * (ph + 5 * dp);
    rowTags.forEach((tg, i) => {
      ctx.fillStyle = tg[1] + '26';
      ctx.strokeStyle = tg[1] + '90';
      ctx.lineWidth = 1 * dp;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, widths[i], ph, ph / 2); else ctx.rect(x, y, widths[i], ph);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = tg[1];
      ctx.fillText(tg[0], x + widths[i] / 2, y + ph / 2 + 0.5);
      x += widths[i] + gap;
    });
  }
}

function glyphKind(text) {
  if (text === '澪奈') return 'player';
  if (/守望|根目录|熔核|冰冕|魇主|雷皇/.test(text)) return 'boss';
  if (text[0] === '凶') return 'elite';
  return 'wisp';
}

function drawGlyph(text, x, y, size, color, flash, t, seed) {
  const bob = Math.sin(t * 2 + seed) * 4 * (size / 70);
  let jx = 0, jy = 0;
  if (flash > 0.05) {
    jx = (Math.random() - 0.5) * 12 * flash;
    jy = (Math.random() - 0.5) * 8 * flash;
  }
  // 辉光: 渐变精灵缓存(v18.3, 原每帧 createRadialGradient 是掉帧大户)
  const gc = flash > 0.4 ? '#ffffff' : color;
  const gr = size * 1.15;
  const gsp = _auraSprite(gc);
  ctx.globalAlpha = 0.32;
  if (gsp) ctx.drawImage(gsp, x + jx - gr, y + bob + jy - gr, gr * 2, gr * 2);
  else {
    const rg = ctx.createRadialGradient(x + jx, y + bob + jy, 0, x + jx, y + bob + jy, gr);
    rg.addColorStop(0, gc + '59');
    rg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rg;
    ctx.beginPath(); ctx.arc(x + jx, y + bob + jy, gr, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
  const kind = glyphKind(text);
  const u = size / 70;
  if (kind === 'player') drawPlayerFigure(x + jx, y + bob + jy, u, gc, t);
  else if (kind === 'boss') drawBossFigure(x + jx, y + bob + jy, u, gc, t, seed);
  else drawWispFigure(x + jx, y + bob + jy, u, gc, t, seed, kind === 'elite');
}

// 澪奈: 发光小光点(柔和白金光核 + 呼吸光晕 + 环绕微粒)
function drawPlayerFigure(x, y, u, gc, t) {
  const breathe = 0.5 + 0.5 * Math.sin(t * 2.2);   // 呼吸
  const R = 7 * u * (1 + breathe * 0.12);          // 光核半径微胀缩
  // 外层光晕+光核(v18.3: 渐变精灵缓存, 呼吸走 globalAlpha)
  const hsp = _auraSprite('rgb(255, 246, 214)');
  if (hsp) {
    ctx.globalAlpha = 0.30 + breathe * 0.16;
    ctx.drawImage(hsp, x - R * 4.6, y - R * 4.6, R * 9.2, R * 9.2);
  }
  const csp = _auraSprite('#ffffff');
  if (csp) {
    ctx.globalAlpha = 0.95;
    ctx.drawImage(csp, x - R * 2.2, y - R * 2.2, R * 4.4, R * 4.4);
  }
  ctx.globalAlpha = 1;
  if (!hsp || !csp) {   // 无头桩兜底: 老路径
    const halo = ctx.createRadialGradient(x, y, 0, x, y, R * 4.6);
    halo.addColorStop(0, 'rgba(255, 248, 220,' + (0.32 + breathe * 0.18) + ')');
    halo.addColorStop(0.45, 'rgba(255, 244, 200,' + (0.14 + breathe * 0.08) + ')');
    halo.addColorStop(1, 'rgba(255, 244, 200, 0)');
    ctx.fillStyle = halo;
    ctx.beginPath(); ctx.arc(x, y, R * 4.6, 0, Math.PI * 2); ctx.fill();
    const core = ctx.createRadialGradient(x, y, 0, x, y, R * 2.2);
    core.addColorStop(0, '#ffffff');
    core.addColorStop(0.5, 'rgba(255, 250, 230, 0.95)');
    core.addColorStop(1, 'rgba(255, 230, 170, 0)');
    ctx.fillStyle = core;
    ctx.beginPath(); ctx.arc(x, y, R * 2.2, 0, Math.PI * 2); ctx.fill();
  }
  // 内核亮点
  ctx.fillStyle = '#ffffff';
  ctx.beginPath(); ctx.arc(x, y, R * 0.6, 0, Math.PI * 2); ctx.fill();
  // 周期扩散光环(v18.2): 每 2.6s 一圈柔和扩散
  const rip = (t % 2.6) / 2.6;
  ctx.strokeStyle = 'rgba(255, 240, 200,' + (0.26 * (1 - rip)) + ')';
  ctx.lineWidth = 1.4 * u;
  ctx.beginPath(); ctx.arc(x, y, (9 + rip * 36) * u, 0, Math.PI * 2); ctx.stroke();
  // 环绕微粒(5 颗缓慢绕转, 大小/相位分层)
  for (let k = 0; k < 5; k++) {
    const a = t * 0.9 + k * (Math.PI * 2 / 5);
    const orbR = (22 + (k % 2) * 7) * u;
    const ox = Math.cos(a) * orbR, oy = Math.sin(a) * orbR * 0.36;
    ctx.globalAlpha = 0.45 + 0.4 * Math.sin(t * 2 + k * 2);
    ctx.fillStyle = k % 2 ? 'rgba(255, 246, 214, 0.9)' : 'rgba(210, 228, 255, 0.9)';
    ctx.beginPath(); ctx.arc(x + ox, y + oy, (1.4 + (k % 3) * 0.5) * u, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
}

// 残响: 圆顶游灵 + 波浪下摆(精英加王冠怒目)
function drawWispFigure(x, y, u, gc, t, seed, elite) {
  const ph = t * 2.4 + seed;
  const w = (elite ? 17 : 15) * u, h = (elite ? 24 : 20) * u;
  ctx.fillStyle = gc;
  ctx.beginPath();
  ctx.moveTo(x - w, y + h * 0.3);
  ctx.quadraticCurveTo(x - w * 1.05, y - h, x, y - h);
  ctx.quadraticCurveTo(x + w * 1.05, y - h, x + w, y + h * 0.3);
  const waveY = y + h * 0.85;
  ctx.quadraticCurveTo(x + w * 0.7, waveY + Math.sin(ph) * 3 * u, x + w * 0.45, y + h * 0.55);
  ctx.quadraticCurveTo(x + w * 0.2, waveY + Math.sin(ph + 2) * 3 * u, x, y + h * 0.62);
  ctx.quadraticCurveTo(x - w * 0.2, waveY + Math.sin(ph + 4) * 3 * u, x - w * 0.45, y + h * 0.55);
  ctx.quadraticCurveTo(x - w * 0.7, waveY + Math.sin(ph + 1) * 3 * u, x - w, y + h * 0.3);
  ctx.closePath();
  ctx.fill();
  if (elite) {
    ctx.beginPath();
    for (let k = -1; k <= 1; k++) {
      const bx = x + k * 8 * u;
      ctx.moveTo(bx - 3.5 * u, y - h + 2 * u);
      ctx.lineTo(bx, y - h - 8 * u);
      ctx.lineTo(bx + 3.5 * u, y - h + 2 * u);
      ctx.closePath();
    }
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(30, 38, 64, 0.8)';
  if (elite) {
    ctx.save(); ctx.translate(x - 5.5 * u, y - h * 0.25); ctx.rotate(0.35);
    ctx.beginPath(); ctx.ellipse(0, 0, 3.2 * u, 2 * u, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    ctx.save(); ctx.translate(x + 5.5 * u, y - h * 0.25); ctx.rotate(-0.35);
    ctx.beginPath(); ctx.ellipse(0, 0, 3.2 * u, 2 * u, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
  } else {
    ctx.beginPath(); ctx.arc(x - 5 * u, y - h * 0.2, 2.6 * u, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(x + 5 * u, y - h * 0.2, 2.6 * u, 0, Math.PI * 2); ctx.fill();
  }
}

// 守望者: 背环长袍 + 独眼面具 + 环绕光点
function drawBossFigure(x, y, u, gc, t, seed) {
  ctx.strokeStyle = gc; ctx.globalAlpha = 0.5; ctx.lineWidth = 2.5 * u;
  ctx.beginPath(); ctx.arc(x, y - 4 * u, 30 * u, 0, Math.PI * 2); ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle = gc;
  ctx.beginPath();   // 长袍
  ctx.moveTo(x - 6 * u, y - 12 * u);
  ctx.quadraticCurveTo(x - 20 * u, y + 4 * u, x - 17 * u, y + 30 * u);
  ctx.quadraticCurveTo(x - 8 * u, y + 36 * u, x, y + 33 * u);
  ctx.quadraticCurveTo(x + 8 * u, y + 36 * u, x + 17 * u, y + 30 * u);
  ctx.quadraticCurveTo(x + 20 * u, y + 4 * u, x + 6 * u, y - 12 * u);
  ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.ellipse(x, y - 20 * u, 11 * u, 15 * u, 0, 0, Math.PI * 2); ctx.fill();   // 面具
  ctx.fillStyle = '#ffffff';
  ctx.beginPath(); ctx.ellipse(x, y - 20 * u, 5.5 * u, 6.5 * u, 0, 0, Math.PI * 2); ctx.fill(); // 独眼
  const look = Math.sin(t * 0.9 + seed) * 1.6 * u;
  ctx.fillStyle = 'rgba(30, 38, 64, 0.9)';
  ctx.beginPath(); ctx.arc(x + look, y - 20 * u, 2.4 * u, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = gc;
  for (let k = 0; k < 3; k++) {
    const a = t * 0.8 + k * 2.09;
    ctx.globalAlpha = 0.75;
    ctx.beginPath(); ctx.arc(x + Math.cos(a) * 34 * u, y + Math.sin(a) * 12 * u - 4 * u, 2 * u, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function draw() {
  const W = canvas.width, H = canvas.height;
  const dp = devicePixelRatio;
  const t = performance.now() / 1000;
  const dk = state._dtN || 1;                    // 帧率无关衰减系数
  const dec = b => Math.pow(b, dk);
  ctx.save();
  if (SETTINGS.shake) {
    state.kickX *= dec(0.85);
    state.kickY *= dec(0.85);
    state.zoomK *= dec(0.88);
    if (Math.abs(state.kickX) > 0.3 || Math.abs(state.kickY) > 0.3)
      ctx.translate(state.kickX, state.kickY);
    if (state.zoomK > 0.001) {
      ctx.translate(W / 2, H / 2);
      ctx.scale(1 + state.zoomK, 1 + state.zoomK);
      ctx.translate(-W / 2, -H / 2);
    }
    if (state.shake > 0.02) {
      ctx.translate((Math.random() - 0.5) * 26 * state.shake * dp,
                    (Math.random() - 0.5) * 26 * state.shake * dp);
      ctx.rotate((Math.random() - 0.5) * 0.022 * state.shake);
      state.shake *= dec(0.93);
    }
  }
  drawBackground(W, H, dp, t);
  // 昼夜丝滑过渡(渐入渐出)——v18.3 提速 + 过渡演出
  const dnTgt = (state.dayNight === 'night' && SETTINGS.dn) ? 1 : 0;
  state.nightBlend = (state.nightBlend || 0) + (dnTgt - (state.nightBlend || 0)) * Math.min(1, dk * 0.075);
  const nb = state.nightBlend;
  if (nb > 0.004) {
    ctx.fillStyle = 'rgba(30, 42, 90,' + (0.17 * nb) + ')';
    ctx.fillRect(-90 * dp, -90 * dp, W + 180 * dp, H + 180 * dp);   // 夜景罩也盖过扫边距
  }
  // 日月(v18.9): 昼出太阳(左上)夜升月(右上), 随昼夜交替升落; 鼠标视差(远景反向) + 悬停增辉互动
  if (SETTINGS.dn) {
    const easeN = nb * nb * (3 - 2 * nb);
    const sbD = 1 - nb, easeD = sbD * sbD * (3 - 2 * sbD);
    const pax = (mouse.x - 0.5) * -18 * dp, pay = (mouse.y - 0.5) * -10 * dp;
    const mpx = mouse.x * W, mpy = mouse.y * H;
    if (easeD > 0.004) {   // 太阳
      const sx = W * 0.14 + pax, sy = H * (-0.12 + easeD * 0.3) + pay;
      const sr = 30 * dp;
      const hov = Math.hypot(mpx - sx, mpy - sy) < 150 * dp;
      const tw = 1 + 0.05 * Math.sin(t * 1.6) + (hov ? 0.28 : 0);
      const sg = _auraSprite('#ffd88a');
      if (sg) {
        ctx.globalAlpha = (0.45 + (hov ? 0.3 : 0)) * Math.min(1, easeD + 0.15);
        ctx.drawImage(sg, sx - sr * 4.4 * tw, sy - sr * 4.4 * tw, sr * 8.8 * tw, sr * 8.8 * tw);
        ctx.globalAlpha = 1;
      }
      ctx.strokeStyle = 'rgba(255, 214, 140,' + Math.min(1, 0.5 * easeD + (hov ? 0.22 : 0)) + ')';   // 光芒: 8 条短射线极缓旋转
      ctx.lineWidth = 2.2 * dp;
      for (let i = 0; i < 8; i++) {
        const a = t * 0.05 + i * Math.PI / 4;
        const r0 = sr * 1.35, r1 = sr * (1.75 + 0.12 * Math.sin(t * 2 + i) + (hov ? 0.25 : 0));
        ctx.beginPath();
        ctx.moveTo(sx + Math.cos(a) * r0, sy + Math.sin(a) * r0);
        ctx.lineTo(sx + Math.cos(a) * r1, sy + Math.sin(a) * r1);
        ctx.stroke();
      }
      ctx.fillStyle = 'rgba(255, 226, 160,' + (0.95 * easeD) + ')';
      ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255, 246, 220,' + (0.9 * easeD) + ')';   // 日面高光
      ctx.beginPath(); ctx.arc(sx - sr * 0.22, sy - sr * 0.22, sr * 0.62, 0, Math.PI * 2); ctx.fill();
    }
    if (nb > 0.004) {   // 明月升起(原效果 + 视差/悬停)
      const moonX = W * 0.86 + pax, moonY = H * (-0.12 + easeN * 0.3) + pay;
      const mr = 26 * dp;
      const hov = Math.hypot(mpx - moonX, mpy - moonY) < 140 * dp;
      const mgsp = _auraSprite('rgb(220,232,255)');
      if (mgsp) {
        ctx.globalAlpha = (0.5 + (hov ? 0.3 : 0)) * nb;
        ctx.drawImage(mgsp, moonX - mr * 3.4, moonY - mr * 3.4, mr * 6.8, mr * 6.8);
        ctx.globalAlpha = 1;
      }
      ctx.fillStyle = 'rgba(238, 244, 255,' + (0.92 * nb) + ')';
      ctx.beginPath(); ctx.arc(moonX, moonY, mr, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(180, 196, 230,' + (0.5 * nb) + ')';   // 月海
      ctx.beginPath(); ctx.arc(moonX - 8 * dp, moonY - 5 * dp, 5 * dp, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(moonX + 7 * dp, moonY + 8 * dp, 3.4 * dp, 0, Math.PI * 2); ctx.fill();
    }
  }
  // 昼夜过渡演出(v18.3): 夜=天幕垂落+星芒迸发; 昼=地平线金光带上涌+暖意泛光
  if (state.dnFx) {
    const age = (performance.now() - state.dnFx.t0) / 1150;
    if (age >= 1) state.dnFx = null;
    else {
      const k = 1 - Math.pow(1 - age, 3);   // easeOutCubic
      const fade = age < 0.72 ? 1 : 1 - (age - 0.72) / 0.28;
      if (state.dnFx.dir === 1) {
        const hh = (H * 1.02) * k;
        const ng = ctx.createLinearGradient(0, -90 * dp, 0, Math.max(1, hh));
        ng.addColorStop(0, 'rgba(22, 32, 72,' + (0.52 * fade) + ')');
        ng.addColorStop(1, 'rgba(22, 32, 72, 0)');
        ctx.fillStyle = ng;
        ctx.fillRect(-90 * dp, -90 * dp, W + 180 * dp, hh + 90 * dp);
        if (age > 0.3) {   // 星芒迸发: 夜幕铺开后逐颗点亮, 十字微芒
          for (let i = 0; i < 9; i++) {
            const tw = Math.sin((age - 0.3) * 8.5 + i * 1.9);
            if (tw <= 0) continue;
            const sx = ((i * 0.371 + 0.07) % 1) * W;
            const sy = ((i * 0.23 + 0.05) % 0.62) * H * Math.min(1, k * 1.15);
            const sr = (1.6 + (i % 3)) * dp;
            ctx.globalAlpha = tw * fade * 0.85;
            ctx.fillStyle = '#dfe8ff';
            ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();
            ctx.globalAlpha = tw * fade * 0.4;
            ctx.fillRect(sx - sr * 3.2, sy - 0.6 * dp, sr * 6.4, 1.2 * dp);
            ctx.fillRect(sx - 0.6 * dp, sy - sr * 3.2, 1.2 * dp, sr * 6.4);
          }
          ctx.globalAlpha = 1;
        }
      } else {
        const bandY = H * 0.74 - H * 0.52 * k;   // 金光带自地平线升起
        const dg = ctx.createLinearGradient(0, bandY - 70 * dp, 0, bandY + 170 * dp);
        dg.addColorStop(0, 'rgba(255, 214, 140, 0)');
        dg.addColorStop(0.5, 'rgba(255, 214, 140,' + (0.36 * fade) + ')');
        dg.addColorStop(1, 'rgba(255, 214, 140, 0)');
        ctx.fillStyle = dg;
        ctx.fillRect(-90 * dp, bandY - 70 * dp, W + 180 * dp, 240 * dp);
        ctx.fillStyle = 'rgba(255, 238, 205,' + (0.10 * fade * (1 - k * 0.35)) + ')';   // 暖意泛光
        ctx.fillRect(-90 * dp, -90 * dp, W + 180 * dp, H + 180 * dp);
      }
    }
  }
  state.pulse *= dec(0.94);

  let maxHit = 0, maxLunge = 0;
  state.enemies.forEach(e => { maxHit = Math.max(maxHit, e.hitFlash); maxLunge = Math.max(maxLunge, e.lunge); });
  if (maxHit > 0.95 && !state._ripE) { addRipple(0.82, '#4dc9ff'); state._ripE = true; }
  if (maxHit < 0.5) state._ripE = false;
  if (maxLunge > 0.95 && !state._ripP) { addRipple(0.16, '#ff5555'); state._ripP = true; }
  if (maxLunge < 0.5) state._ripP = false;

  const stageH = H - 210 * dp;   // 战场区高度: 全屏画布刨去底部牌桌区
  const midY = stageH * 0.46;

  ctx.globalAlpha = 0.20 + state.pulse * 0.10;
  ctx.fillStyle = '#8fb8ff';
  ctx.beginPath(); ctx.ellipse(180 * dp, midY + stageH * 0.26, 140 * dp, 14 * dp, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#c9a8ff';
  ctx.beginPath(); ctx.ellipse(W * 0.78, midY + stageH * 0.26, 280 * dp, 14 * dp, 0, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1;

  // 环境光尘(v18.2/v18.3): 无状态缓漂微光点, 纯色圆点不走渐变(帧率友好)
  ctx.fillStyle = 'rgb(' + BGPAL.beam + ')';
  for (let i = 0; i < 12; i++) {
    const mSpd = (14 + (i % 4) * 6) * dp;
    const mx2 = ((i * 0.618 + 0.13) % 1) * W + Math.sin(t * 0.24 + i * 1.7) * 26 * dp;
    const my2 = stageH + 40 * dp - ((t * mSpd + i * 173 * dp) % (stageH + 90 * dp));
    const mTw = 0.5 + 0.5 * Math.sin(t * (1.1 + i * 0.13) + i * 2.4);
    ctx.globalAlpha = 0.10 + mTw * 0.16;
    ctx.beginPath(); ctx.arc(mx2, my2, (1.4 + (i % 3) * 0.8) * dp, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;

  const px = 180 * dp;
  state.playerFlash *= dec(0.88);
  aura(px, midY, 200 * dp, '#7fa8e8', 0.22 + state.pulse * 0.1);
  drawGlyph('澪奈', px, midY, 92 * dp, '#4a6fa8', state.playerFlash, t, 0);   // glyphKind 按名判定 player, 光点不另画名
  if (state.block > 0) {
    ctx.strokeStyle = '#5ab0e0';
    ctx.lineWidth = (3 + Math.min(state.block, 20) * 0.3) * dp;
    ctx.globalAlpha = 0.8;
    ctx.beginPath(); ctx.arc(px, midY, 118 * dp, 0, Math.PI * 2); ctx.stroke();
    ctx.globalAlpha = 1;
  }

  const n = state.enemies.length;
  const gsize = (state.nodeType === 'boss' ? 104 : n >= 4 ? 54 : n >= 3 ? 62 : n === 2 ? 74 : 84) * dp;   // v18.2: 模型整体放大 ~30%
  state.enemies.forEach(e => {
    if (!e.alive) return;
    const ex = e.x * W - e.lunge * 70 * dp;
    let ecolor = '#9a86c8';
    if (e.intent.type === 'charge') ecolor = '#e08030';
    if (e.intent.type === 'curse') ecolor = '#9a55e0';
    if (e.intent.type === 'defend') ecolor = '#6a96b8';
    if (e.poison > 0) ecolor = '#5da545';
    e.hitFlash *= dec(0.88);
    e.lunge *= dec(0.9);
    const isTarget = e.idx === state.target;
    aura(ex, midY, gsize * 2.4, ecolor, (isTarget ? 0.3 : 0.16) + state.pulse * 0.1);
    drawGlyph(e.glyph, ex, midY, gsize, ecolor, e.hitFlash, t, 2 + e.idx);
    ctx.font = 13 * dp + 'px "Microsoft YaHei", sans-serif';
    ctx.fillStyle = 'rgba(90, 100, 130, 0.7)';
    ctx.textAlign = 'center';
    ctx.fillText(e.name, ex, midY + gsize * 0.78);
    const bw = gsize * 1.5;   // 血条随模型宽度
    ctx.fillStyle = 'rgba(150, 165, 195, 0.3)';
    ctx.fillRect(ex - bw / 2, midY + gsize * 0.92, bw, 6 * dp);
    ctx.fillStyle = '#c9a8ff';
    ctx.fillRect(ex - bw / 2, midY + gsize * 0.92, bw * Math.max(0, e.hp / e.maxHp), 6 * dp);
    // 血条末端亮头(v18.2)
    const hpFrac = Math.max(0, e.hp / e.maxHp);
    if (hpFrac > 0.02) {
      ctx.fillStyle = 'rgba(240, 230, 255, 0.9)';
      ctx.fillRect(ex - bw / 2 + bw * hpFrac - 2 * dp, midY + gsize * 0.92 - 1 * dp, 3 * dp, 8 * dp);
    }
    if (e.block > 0) {
      ctx.strokeStyle = '#9ab8d8';
      ctx.lineWidth = 3 * dp;
      ctx.beginPath(); ctx.arc(ex, midY, gsize * 1.35, 0, Math.PI * 2); ctx.stroke();
    }
    let st = [];
    if (e.poison > 0) st.push('蚀' + e.poison);
    if (e.vuln > 0) st.push('裂' + e.vuln);
    if (e.weak > 0) st.push('衰' + e.weak);
    if (st.length) {
      ctx.font = 'bold ' + 11 * dp + 'px sans-serif';
      ctx.fillStyle = '#5da545';
      ctx.fillText(st.join(' '), ex, midY + gsize * 1.08 + 14 * dp);
    }
    const nextT = e.cycle[(e.patternIndex + 1) % e.cycle.length];
    ctx.font = 'bold ' + 15 * dp + 'px sans-serif';
    const icon = e.intent.type === 'charge' ? '聚气…'
      : e.intent.type === 'curse' ? '咒!'
      : e.intent.type === 'defend' ? '🛡'
      : '⚔' + (e.weak > 0 ? Math.round(e.dmg * Math.max(0.4, 1 - 0.12 * e.weak)) : e.dmg);
    ctx.fillStyle = e.intent.type === 'charge' ? '#e08030'
      : e.intent.type === 'curse' ? '#9a55e0'
      : e.intent.type === 'defend' ? '#6a96b8' : '#e05555';
    ctx.fillText(icon, ex, midY - gsize * 0.85 - 14 * dp);
    const nextIcon = nextT === 'charge' ? '聚气' : nextT === 'curse' ? '诅咒' : nextT === 'defend' ? '凝壳' : '攻击';
    ctx.font = 11.5 * dp + 'px sans-serif';
    ctx.fillStyle = 'rgba(120, 132, 152, 0.75)';
    ctx.fillText('下:' + nextIcon, ex, midY - gsize * 0.85 - 1 * dp);
    if (isTarget && n > 1) {   // v18.2: 目标金环呼吸 + ▼ 浮动, 击杀自动切换后光环跟着走
      const tr = 0.5 + 0.5 * Math.sin(t * 3.2);
      ctx.strokeStyle = 'rgba(255, 208, 110,' + (0.35 + tr * 0.3) + ')';
      ctx.lineWidth = 2.5 * dp;
      ctx.beginPath(); ctx.arc(ex, midY, gsize * (1.45 + tr * 0.14), 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#e0a030';
      ctx.font = 'bold ' + 17 * dp + 'px sans-serif';
      ctx.fillText('▼', ex, midY - gsize * 0.85 - 40 * dp + Math.sin(t * 3) * 4 * dp);
    }
  });

  const nowMs = performance.now();
  // 澪奈内心独白(屏幕上方居中, 细字, 无气泡框)
  if (state.quip) {
    const qAge = (nowMs - state.quip.born) / 2600;
    if (qAge >= 1) state.quip = null;
    else {
      const qx = W / 2, qy = 66 * dp;
      ctx.globalAlpha = qAge < 0.12 ? qAge / 0.12 : 1 - Math.max(0, (qAge - 0.75) / 0.25);
      ctx.font = '300 ' + 14 * dp + 'px "Microsoft YaHei", sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(90, 100, 130, 0.85)';
      ctx.fillText('「 ' + state.quip.text + ' 」', qx, qy);
      // 两侧细线
      const tw2 = ctx.measureText('「 ' + state.quip.text + ' 」').width;
      ctx.strokeStyle = 'rgba(140, 160, 210, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(qx - tw2 / 2 - 30 * dp, qy); ctx.lineTo(qx - tw2 / 2 - 8 * dp, qy);
      ctx.moveTo(qx + tw2 / 2 + 8 * dp, qy); ctx.lineTo(qx + tw2 / 2 + 30 * dp, qy);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }
  }
  // 纸飞机(偶尔飘过)
  if (!paperPlane && Math.random() < 0.0006)
    paperPlane = { x: -0.06, y: 0.12 + Math.random() * 0.3, ph: Math.random() * 6.28 };
  if (paperPlane) {
    paperPlane.x += 0.0011 * dk;
    if (paperPlane.x > 1.06) paperPlane = null;
    else {
      const ppx = paperPlane.x * W, ppy = (paperPlane.y + Math.sin(t * 2 + paperPlane.ph) * 0.02) * H;
      ctx.save();
      ctx.translate(ppx, ppy);
      ctx.rotate(-0.22 + Math.sin(t + paperPlane.ph) * 0.1);
      ctx.globalAlpha = 0.75;
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = 'rgba(130, 150, 195, 0.7)';
      ctx.lineWidth = 1 * dp;
      ctx.beginPath();
      ctx.moveTo(14 * dp, 0);
      ctx.lineTo(-10 * dp, -7 * dp);
      ctx.lineTo(-4 * dp, 0);
      ctx.lineTo(-10 * dp, 7 * dp);
      ctx.closePath();
      ctx.fill(); ctx.stroke();
      ctx.restore();
    }
  }
  for (let i = state.particles.length - 1; i >= 0; i--) {
    const p = state.particles[i];
    const age = (nowMs - p.born) / p.life;
    if (age >= 1) { state.particles.splice(i, 1); continue; }
    p.x += p.vx * dk;
    p.y += p.vy * dk;
    p.vy += (p.g === undefined ? 0.15 : p.g) * dp * dk;
    p.vx *= dec(0.98);
    ctx.globalAlpha = 1 - age;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.r, p.r);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

// ================= HUD =================
function statusText(list) { return list.filter(Boolean).join('　'); }

function updateHud() {
  const ce = curEnemy();
  $('hpText').textContent = state.hp + '/' + state.maxHp;
  $('hpFill').style.width = (state.hp / state.maxHp * 100) + '%';
  $('energyText').textContent = state.energy + '/' + state.maxEnergy;
  $('energyFill').style.width = (state.energy / state.maxEnergy * 100) + '%';
  $('buffText').textContent = state.buff > 1 ? '增幅x' + state.buff.toFixed(1) : '';
  $('blockText').textContent = '屏障: ' + state.block;
  $('turnText').textContent = '回响 ' + state.turn +
    (SETTINGS.dn ? ' · ' + (state.dayNight === 'day' ? '☀' : '☾') + ' ' + state.dnTimer : '');

  if (ce) {
    $('enemyName').textContent = ce.name + (state.enemies.filter(e => e.alive).length > 1 ? '（目标）' : '');
    $('enemyHpText').textContent = ce.hp + '/' + ce.maxHp + (ce.block > 0 ? ' (虚壳' + ce.block + ')' : '');
    $('enemyHpFill').style.width = (ce.hp / ce.maxHp * 100) + '%';
    $('enemyDmgInfo').textContent = '侵蚀力: ' + ce.dmg;
    const it = $('intentText');
    const nxt = ce.cycle[(ce.patternIndex + 1) % ce.cycle.length];
    const nxtLabel = nxt === 'charge' ? '聚气' : nxt === 'curse' ? '诅咒' : nxt === 'defend' ? '凝壳' : '攻击';
    it.textContent = (ce.intent.type === 'charge' ? '敌人意图: 聚集虚空(侵蚀力+3)'
      : ce.intent.type === 'curse' ? '敌人意图: 诅咒(衰微+1 裂解+1)'
      : ce.intent.type === 'defend' ? '敌人意图: 凝壳(虚壳+10)'
      : '敌人意图: 攻击 ' + ce.dmg) + '　· 下回合: ' + nxtLabel;
    it.className = (ce.intent.type === 'charge' || ce.intent.type === 'curse') ? 'charge' : '';
    $('enemyStatus').innerHTML = statusText([
      ce.poison > 0 ? '<span style="color:#5da545">侵蚀' + ce.poison + '</span>' : '',
      ce.vuln > 0   ? '<span style="color:#e05555">裂解' + ce.vuln + '</span>' : '',
      ce.weak > 0   ? '<span style="color:#8a8aa8">衰微' + ce.weak + '</span>' : '',
    ]);
  } else {
    $('enemyName').textContent = '——';
    $('enemyHpText').textContent = '';
    $('enemyHpFill').style.width = '0%';
    $('enemyDmgInfo').textContent = '';
    $('intentText').textContent = '';
    $('enemyStatus').innerHTML = '';
  }

  const powerNames = {
    venom: '虚无淬刃', draw: '宇宙律动', energy: '以太暴走', thorns: '星棘护甲',
    giant: '弑神者', leech: '生命契约', regen: '再生因子', regen2: '不灭',
    venomAura: '毒经', venomAura2: '万毒之源', doubleFirst: '双重奏',
    mastery: '以太炉心', foresight: '界域行者', sharp: '奇点', poisonHeal: '痛苦回响',
    eternalNight: '永夜君主',
  };
  $('playerStatus').innerHTML = statusText([
    state.strength > 0 ? '<span style="color:#e0a030">意志' + state.strength + '</span>' : '',
    state.thorns > 0   ? '<span style="color:#4aa8dd">星棘' + state.thorns + '</span>' : '',
    state.pVuln > 0    ? '<span style="color:#e05555">裂解' + state.pVuln + '</span>' : '',
    state.pWeak > 0    ? '<span style="color:#8a8aa8">衰微' + state.pWeak + '</span>' : '',
    Object.keys(state.powers).filter(k => state.powers[k])
      .map(k => '<span style="color:#9a55e0">[' + powerNames[k] + ']</span>').join(''),
  ]);
  $('pileInfo').textContent =
    '结晶 ' + run.crystals + ' · 记忆 ' + state.deck.length +
    ' · 残片 ' + state.discard.length + ' · 消散 ' + state.exhaustPile.length;
  $('deckCount').textContent = state.deck.length;
  $('discCount').textContent = state.discard.length;
  // 夜晚: 托盘与牌堆换夜装
  const isNight = state.dayNight === 'night' && SETTINGS.dn;
  ['handTray', 'deckPile', 'discardPile'].forEach(id => $(id).classList.toggle('night', isNight));
  $('endTurnBtn').disabled = state.busy || state.gameOver;
  renderHand();
  renderPlayerTags();
}

// ================= 手牌轮盘 =================
const handEls = new Map();

function setFocus(i, silent) {
  const n = state.hand.length;
  if (!n) { state.focus = 0; updatePreview(); return; }
  const f = Math.max(0, Math.min(n - 1, i));
  if (f !== state.focus) {
    state.focus = f;
    if (!silent) sfxSelect();
    layoutHand();
    updatePreview();
  }
}

function updatePreview() {
  const pv = $('cardPreview');
  const c = state.hand[state.focus];
  if (!state.started || !c) { pv.classList.add('hidden'); return; }
  const html = cardHtml(c);
  if (pv._lastHtml !== html) {
    pv._lastHtml = html;
    pv.innerHTML = html;
    if (pv.style) {   // 换卡时重播入场动画
      pv.style.animation = 'none';
      void pv.offsetWidth;
      pv.style.animation = '';
    }
  }
  pv.classList.remove('hidden');
}

function layoutHand() {
  const box = $('hand');
  const Wc = box.clientWidth, Hc = box.clientHeight;
  const R = 470, cx = Wc / 2, cy = Hc + 430;
  const SPREAD = 10;
  const n = state.hand.length;
  const mid = (n - 1) / 2;
  state.hand.forEach((c, i) => {
    const d = handEls.get(c.uid);
    if (!d || d._leaving) return;
    const off = i - mid;
    const a = off * SPREAD * Math.PI / 180;
    const focused = i === state.focus;
    d.style.left = (cx + R * Math.sin(a) - 66) + 'px';
    d.style.top = (cy - R * Math.cos(a) - 186 + (focused ? -48 : 0)) + 'px';
    d.style.zIndex = focused ? 10 : 6 - Math.abs(off);
    d.style.transform = 'rotate(' + (focused ? 0 : off * SPREAD * 0.9) + 'deg) scale(' + (focused ? 1.32 : 0.94) + ')';
    if (d._born) {
      const dl = d._delay || 0;
      d.style.transitionDelay = dl + 'ms';
      requestAnimationFrame(() => { d.style.opacity = '1'; });
      setTimeout(() => { d.style.transitionDelay = '0ms'; }, dl + 380);
      d._born = 0;
    }
  });
}

function renderHand() {
  const box = $('hand');
  const present = new Set();
  state.focus = Math.max(0, Math.min(state.hand.length - 1, state.focus || 0));
  state.hand.forEach((c, i) => {
    present.add(c.uid);
    let d = handEls.get(c.uid);
    if (!d) {
      d = document.createElement('div');
      d.className = 'card r-' + c.rarity + ' t-' + c.type;
      d.innerHTML = cardInner(c) + '<div class="ckey">' + (i + 1) + '</div>';
      d.style.opacity = '0';
      d._born = performance.now();
      d._delay = (state._dealSeq = (state._dealSeq || 0) + 1) * 90;
      d.style.left = '26px';
      d.style.top = (box.clientHeight - 60) + 'px';
      d.onmouseenter = () => { const idx = state.hand.findIndex(x => x.uid === c.uid); if (idx >= 0) setFocus(idx); };
      d.onclick = () => { const idx = state.hand.findIndex(x => x.uid === c.uid); if (idx >= 0) playCard(idx); };
      box.appendChild(d);
      handEls.set(c.uid, d);
    }
    const usable = state.energy >= c.cost && !state.busy && !state.gameOver;
    d.classList.toggle('disabled', !usable);
  });
  for (const [uid, el] of handEls) {
    if (!present.has(uid) && !el._leaving) { el.remove(); handEls.delete(uid); }
  }
  layoutHand();
  updatePreview();
}

// ================= 主循环 =================
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = canvas.clientWidth * devicePixelRatio;
  canvas.height = canvas.clientHeight * devicePixelRatio;
}
window.addEventListener('resize', resize);
resize();

let _lastT = 0;
function frame() {
  requestAnimationFrame(frame);
  const nowMs = performance.now();
  state._dtN = Math.min(3, (nowMs - _lastT) / 16.667) || 1;   // 帧率无关时间步(60fps=1)
  _lastT = nowMs;
  if (!state.started) {
    drawBackground(canvas.width, canvas.height, devicePixelRatio, nowMs / 1000);
    const mv = $('menuViz');
    if (mv) drawMenuViz(mv);
    return;
  }
  if (state.paused) return;
  if (nowMs < state.hitstop) return;
  draw();
  const bv = $('battleViz');   // 战斗内低调律动条(背景之上 UI 之后)
  if (bv) drawBattleViz(bv);
}
requestAnimationFrame(frame);

// ================= 输入 =================
function demoGacha() {
  const demo = CARD_POOL.filter(c => c.rarity === 'E' || c.rarity === 'L');
  runGachaFx(demo[(Math.random() * demo.length) | 0], () => showMenu());
}

document.addEventListener('keydown', e => {
  if (qs('.story-fx')) return;   // 剧情演出期间屏蔽全局快捷键(此前 Enter 可穿透剧情层触发 menuActivate, 叠出第二层剧情/双教学, 踩过)
  if (!state.started && $('wsel2')) {   // 世界选择通栏选关
    if (e.key === 'ArrowLeft') wSelNudge(-1);
    else if (e.key === 'ArrowRight') wSelNudge(1);
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); wSelActivate(); }
    return;
  }
  if (!state.started && $('mcarousel')) {   // 主菜单滚动选卡
    if (e.key === 'ArrowLeft') menuNudge(-1);
    else if (e.key === 'ArrowRight') menuNudge(1);
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); menuActivate(); }
    else if (e.key.toLowerCase() === 'g') demoGacha();   // 祈愿动画演示
    return;
  }
  if (e.key === 'Escape' && _tut) { tutorialQuit(); return; }   // 引导中 Esc = 退出引导
  if (e.key === 'Escape' && state.started) { togglePause(); return; }
  if (!state.started || state.paused) return;
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= 8) quickPlay(n - 1);
  if (e.key === 'ArrowLeft') setFocus(state.focus - 1);
  if (e.key === 'ArrowRight') setFocus(state.focus + 1);
  if (e.key === ' ') { e.preventDefault(); playCard(state.focus); }
  if (e.key === 'Tab') {
    e.preventDefault();
    if (_tut) {   // 引导锁定: 仅目标教学步放行
      const a = tutAllow();
      if (!a || !a.target) { tutDeny(); return; }
    }
    const alive = state.enemies.filter(x => x.alive);
    if (alive.length > 1) {
      const cur = alive.findIndex(x => x.idx === state.target);
      state.target = alive[(cur + 1) % alive.length].idx;
      if (_tut) state._tutSwitched = true;
      sfxSelect();
      updateHud();
    }
  }
  if (e.key === 'Enter') endTurn();
});

canvas.addEventListener('click', e => {
  if (!state.started || state.gameOver) return;
  if (_tut) {   // 引导锁定: 仅目标教学步放行切换
    const a = tutAllow();
    if (!a || !a.target) { tutDeny(); return; }
  }
  const r = canvas.getBoundingClientRect();
  const x = (e.clientX - r.left) * devicePixelRatio;
  const y = (e.clientY - r.top) * devicePixelRatio;
  for (const en of state.enemies) {
    if (!en.alive) continue;
    const ex = en.x * canvas.width, ey = (canvas.height - 210 * devicePixelRatio) * 0.46;
    if (Math.abs(x - ex) < 150 * devicePixelRatio && Math.abs(y - ey) < 165 * devicePixelRatio) {   // v18.2: 随模型放大
      if (state.target !== en.idx) { state.target = en.idx; if (_tut) state._tutSwitched = true; sfxSelect(); updateHud(); }
      break;
    }
  }
});

$('endTurnBtn').onclick = endTurn;
$('pauseBtn').onclick = () => { if (_tut) { tutDeny(); return; } togglePause(); };   // 引导中锁设置入口(Esc 退出通道保留)
$('deckPile').onclick = () => { if (_tut) { tutDeny(); return; } showDeckView(); };   // 引导中锁牌堆
$('discardPile').onclick = () => { if (_tut) { tutDeny(); return; } showDeckView(); };
$('log').classList.add('collapsed');
$('log').onclick = () => $('log').classList.toggle('collapsed');

document.addEventListener('pointerdown', () => {   // 任意手势: 恢复 BGM(自动播放解锁)
  if (SETTINGS.bgm && BGM.cur) BGM.unpause();
}, true);

document.addEventListener('click', e => {
  if (!AU.ctx) initAudio();
  // 首次手势解锁 BGM: 仅当菜单/世界选择面板真正可见且无剧情层覆盖时(教学剧情期间菜单 DOM 未藏, 点剧情曾误切 menu 轨, v18.9 踩过)
  if (!state.started && !qs('.story-fx') && !$('panel').classList.contains('hidden') && ($('mcarousel') || $('wsel2'))) BGM.play();
  if (e.target.closest('.menu-title')) { titleTap(); return; }
  if (e.target.closest('#hand') || e.target.closest('#endTurnBtn') || e.target.closest('#startBtn')) return;
  if (e.target.closest('.pbtn, .node, .mnode, .pick, summary')) sfxClick();
});
document.addEventListener('mouseover', e => {
  if (e.target.closest('#hand')) return;   // 手牌悬停只走 setFocus 的选牌音
  if (e.target.closest('.pbtn, .node, .mnode')) sfxHover();
});

// ================= 自定义鼠标指针 =================
(function initCursor() {
  const el = document.createElement('div');
  el.id = 'gcursor';
  el.innerHTML = '<div class="gcr"></div><div class="gcd"></div>';
  document.body.appendChild(el);
  const dot = el.querySelector('.gcd'), ring = el.querySelector('.gcr');
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2, rx: 0, ry: 0 };
  pos.rx = pos.x; pos.ry = pos.y;
  window.addEventListener('mousemove', e => {
    pos.x = e.clientX; pos.y = e.clientY;
    el.classList.add('on');
    dot.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
  });
  document.addEventListener('mouseleave', () => el.classList.remove('on'));
  document.addEventListener('mouseover', e => {
    el.classList.toggle('hot', !!(e.target && e.target.closest &&
      e.target.closest('button, .pbtn, .mcard, .ws-pane, .card, .mnode, .cx, .pile, summary, .ws-title')));
  });
  window.addEventListener('pointerdown', () => el.classList.add('down'));
  window.addEventListener('pointerup', () => el.classList.remove('down'));
  (function loop() {
    requestAnimationFrame(loop);
    pos.rx += (pos.x - pos.rx) * 0.22;   // 光环延迟跟随
    pos.ry += (pos.y - pos.ry) * 0.22;
    ring.style.transform = 'translate(' + pos.rx + 'px,' + pos.ry + 'px)';
    const bc = 'rgba(' + BGPAL.beam + ',0.85)';
    if (ring.style.borderColor !== bc) ring.style.borderColor = bc;
    const dc = 'rgba(' + BGPAL.beam + ',0.95)';
    if (dot.style.background !== dc) {
      dot.style.background = dc;
      dot.style.boxShadow = '0 0 0 1.5px rgba(255,255,255,0.85), 0 0 10px rgba(' + BGPAL.beam + ',0.9)';
    }
    if (document.body.classList) document.body.classList.toggle('gcursor', !!SETTINGS.cursor);
  })();
})();

// ================= 开场黑场(坠落 → 化尘成题 → 按任意键 · 溯光 → FLIP 落位进菜单) =================
function bootIntro() {
  const boot = document.createElement('div');
  boot.id = 'boot';
  let motes = '';
  for (let i = 0; i < 9; i++)   // 深渊下坠微粒
    motes += '<i style="left:' + (3 + Math.random() * 94).toFixed(1) + '%;' +
      'animation-duration:' + (5 + Math.random() * 7).toFixed(1) + 's;animation-delay:' + (Math.random() * 5).toFixed(1) + 's"></i>';
  let feathers = '';
  for (let i = 0; i < 8; i++)   // 落定光羽: 细屑自晶周缓缓上浮消散(不喷射, 只飘散)
    feathers += '<i style="--fx:' + (-70 + Math.random() * 140).toFixed(0) + 'px;' +
      '--fxd:' + (-14 + Math.random() * 28).toFixed(0) + 'px;' +
      '--fy:-' + (40 + Math.random() * 36).toFixed(0) + 'px;' +
      '--fr:' + (-40 + Math.random() * 80).toFixed(0) + 'deg;' +
      '--fo:' + (0.45 + Math.random() * 0.4).toFixed(2) + ';' +
      '--fd:' + (1.9 + Math.random() * 0.8).toFixed(2) + 's;' +
      '--fdel:' + (0.98 + i * 0.07 + Math.random() * 0.12).toFixed(2) + 's"></i>';
  let snow = '';
  for (let i = 0; i < 26; i++)   // 细雪: 外 i 垂直落(带透明度), 内 b 横摆; 大小/透明度/速度分层, 负延迟开场即在半空
    snow += '<i style="left:' + (Math.random() * 100).toFixed(1) + '%;' +
      '--sw:' + (1.6 + Math.random() * 3).toFixed(1) + 'px;' +
      '--so:' + (0.22 + Math.random() * 0.42).toFixed(2) + ';' +
      '--sd:' + (8 + Math.random() * 9).toFixed(1) + 's;' +
      '--ss:' + (2.2 + Math.random() * 2.8).toFixed(1) + 's;' +
      '--sx:' + (7 + Math.random() * 18).toFixed(0) + 'px;' +
      '--sb:-' + (Math.random() * 4).toFixed(1) + 's;' +
      'animation-delay:-' + (Math.random() * 14).toFixed(1) + 's"><b></b></i>';
  boot.innerHTML =
    '<div class="bt-abyss"></div>' +
    '<div class="bt-motes">' + motes + '</div>' +
    '<div class="bt-snow">' + snow + '</div>' +
    '<div class="bt-crystal" id="btCrystal"><svg class="bt-cry-svg" viewBox="0 0 200 280">' +
      '<defs><linearGradient id="bcrBody" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#e8f0ff" stop-opacity="0.95"/>' +
        '<stop offset="0.5" stop-color="#a8c8f8" stop-opacity="0.75"/>' +
        '<stop offset="1" stop-color="#6a9ee8" stop-opacity="0.85"/>' +
      '</linearGradient>' +
      '<radialGradient id="bcrCore" cx="0.5" cy="0.5" r="0.5">' +
        '<stop offset="0" stop-color="#ffffff" stop-opacity="0.95"/>' +
        '<stop offset="0.6" stop-color="#c8e0ff" stop-opacity="0.5"/>' +
        '<stop offset="1" stop-color="#8ab8ff" stop-opacity="0"/>' +
      '</radialGradient></defs>' +
      '<path d="M100 12 L162 96 L100 268 L38 96 Z" fill="url(#bcrBody)" stroke="rgba(220,235,255,0.7)" stroke-width="1.5"/>' +
      '<path d="M100 12 L162 96 L100 268 Z" fill="rgba(255,255,255,0.28)"/>' +
      '<path d="M100 12 L38 96 L100 268 Z" fill="rgba(90,130,200,0.22)"/>' +
      '<path d="M100 12 L100 268" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>' +
      '<path d="M38 96 L162 96" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>' +
      '<circle cx="100" cy="140" r="52" fill="url(#bcrCore)"/>' +
    '</svg></div>' +
    '<div class="bt-ripple"></div><div class="bt-ripple r2"></div>' +
    '<div class="bt-glowpulse"></div>' +
    '<div class="bt-feathers">' + feathers + '</div>' +
    '<div class="bt-title">' + 'Re:EthePath'.split('').map((ch, i) =>
      '<span class="bt-ch" style="--bi:' + i + '">' + ch + '</span>').join('') +
      '<i class="bt-grad">Re:EthePath</i></div>' +
    '<div class="bt-anykey">按任意键 · 溯光</div>';
  document.body.appendChild(boot);
  const dropEl = boot.querySelector('.bt-crystal');   // 水晶=主角在坠落
  const titleEl = boot.querySelector('.bt-title');
  if (!dropEl || !titleEl) { boot.remove(); showMenu(); return; }   // 无头环境兜底
  let phase = 'drop', done = false;
  let timers = [];
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const clearAll = () => { timers.forEach(clearTimeout); timers = []; };
  // 水晶不消融: 悬停等标题, finish 时 FLIP 到菜单水晶位(同一颗)
  later(revealTitle, 1900);
  function revealTitle() {
    if (phase !== 'drop') return;   // 幂等守卫
    phase = 'title';
    clearAll();
    boot.classList.add('title-on');
    later(() => { titleEl.classList.add('lit'); sChantBell(1); }, 950);   // 字符就位后流光+呼吸光晕
    later(() => {   // 标题定格后: 任意键门槛(提示浮现前点击/按键不影响流程)
      phase = 'gate';
      const ak = boot.querySelector('.bt-anykey');
      if (ak && ak.classList) ak.classList.add('show');
    }, 2300);
  }
  function finish() {
    if (done) return;
    done = true;
    phase = 'end';
    clearAll();
    document.removeEventListener('keydown', onGateKey, true);
    // FLIP 无缝交接: boot 标题不淡出, 落到菜单标题 rect 的同一帧菜单标题顶格显现, 随即移除 boot
    window._bootHandoff = true;
    showMenu();
    const mt = qs('.menu-title');   // 无头桩没有 querySelector
    const from = titleEl.getBoundingClientRect();
    const to = mt && mt.getBoundingClientRect ? mt.getBoundingClientRect() : null;
    boot.classList.add('clear');
    if (to && to.width && titleEl.animate) {
      const dx = to.left + to.width / 2 - (from.left + from.width / 2);
      const dy = to.top + to.height / 2 - (from.top + from.height / 2);
      const s = from.height ? to.height / from.height : 0.84;
      titleEl.animate([
        { transform: 'translateY(-50%)', opacity: 1, offset: 0 },
        { transform: 'translateY(-50%) translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px) scale(' + s.toFixed(3) + ')', opacity: 1, offset: 1 },
      ], { duration: 1000, easing: 'cubic-bezier(0.3, 0.7, 0.2, 1)', fill: 'forwards' });
    }
    // 水晶也 FLIP 到菜单水晶位(同一颗): 标题上移它下移, 各落各位
    const btCry = boot.querySelector('.bt-crystal');
    const menuCry = qs('.m3-crystal');
    if (btCry && btCry.animate && menuCry && menuCry.getBoundingClientRect) {
      // v18.9 无缝交接: 先读当前相位(bob 中的 matrix), 再停 CSS 动画——WAAPI 首帧=当前相位, 起飞不抽; 末帧干净 translate+scale 落位, 接管不抖
      const cf = btCry.getBoundingClientRect();
      const liveTf = getComputedStyle(btCry).transform;
      btCry.style.animation = 'none';
      const ct = menuCry.getBoundingClientRect();
      if (ct.width) {
        const cdx = ct.left + ct.width / 2 - (cf.left + cf.width / 2);
        const cdy = ct.top + ct.height / 2 - (cf.top + cf.height / 2);
        const cs = cf.width ? ct.width / cf.width : 1;   // 尺寸差一并 FLIP(菜单 200×280 vs boot 120×168), 飞行中连续放大
        btCry.animate([
          { transform: (liveTf && liveTf !== 'none' ? liveTf : 'translate(0px,0px)') + ' scale(1)', opacity: 1, offset: 0 },
          { transform: 'translate(' + cdx.toFixed(1) + 'px,' + cdy.toFixed(1) + 'px) scale(' + cs.toFixed(3) + ')', opacity: 1, offset: 1 },
        ], { duration: 1000, easing: 'cubic-bezier(0.3, 0.7, 0.2, 1)', fill: 'forwards' });
      }
    }
    setTimeout(() => {   // 落位帧: 菜单标题/水晶同帧顶格接管(视觉上是同一颗停在那里)
      if (typeof document.querySelector !== 'function') return;
      const wrap = qs('.menu-wrap');
      if (wrap && wrap.classList) wrap.classList.add('ready');
      const landed = boot.querySelector('.bt-crystal');
      if (landed && landed.remove) landed.remove();   // 水晶瞬间交接(菜单水晶已完全重合), 标题继续叠化到 1120ms
    }, 1000);
    setTimeout(() => { boot.innerHTML = ''; boot.remove(); window._bootHandoff = false; }, 1120);
  }
  const onGateKey = e => {   // capture 阶段吃掉: 同一按键不得再触发菜单激活
    if (phase !== 'gate') return;
    e.preventDefault(); e.stopPropagation();
    initAudio(); finish();
  };
  document.addEventListener('keydown', onGateKey, true);
  boot.addEventListener('click', () => {   // 只在门槛阶段生效; 事件冒泡到 document 不挡全局音频解锁
    if (phase === 'gate') { initAudio(); finish(); }
  });
}

// ================= 启动 =================
$('overlay').classList.add('hidden');
if (location.hash === '#gacha-demo') {
  // 动画演示: 随机一张幻忆/源忆卡, 不扣碎片
  const demo = CARD_POOL.filter(c => c.rarity === 'E' || c.rarity === 'L');
  window._menuIntroDone = true;   // v18.3: 演示不走 intro-wait(菜单下移露顶灰带)
  showMenu();
  setTimeout(() => runGachaFx(demo[(Math.random() * demo.length) | 0], () => showMenu()), 600);
} else {
  bootIntro();
}
