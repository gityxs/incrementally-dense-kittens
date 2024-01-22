/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Sort By:": "排序: ",
    "(Left to Right) Lev, Mischa, Nikita, Rat, Choife": "（从左到右）列夫、米莎、尼基塔、拉特、乔伊夫",
    "(Legend) Grey: Not Found; Half Brightness: Found in a previous reset; Bright: Found this reset": "（图例）灰色：未找到； 半亮：在之前的重置中发现过； 明亮：本轮重置内发现的",
    "Equip More Cats!": "装备更多的猫！",
    "Open more eggs at once": "一次打开更多蛋",
    "Opens your active egg every x seconds": "每 x 秒打开您的活动蛋",
    "/10 kills": "/10 击杀",
    "100 Density: 20% increased health": "100 密度：生命值增加 20%",
    "250 Density: 20% increased damage": "250 密度：伤害增加 20%",
    "30 Density: 25% to crit for 150% damage (More Cats Increases Crit Damage)": "30 密度：25% 暴击，造成 150% 伤害（更多猫会增加暴击伤害）",
    "35% Increase in damage for every unique cat in your party": "队伍中每只独特的猫的伤害增加 35%",
    "50 Density: 5% increased attack speed": "50 密度：攻击速度提高 5%",
    "Acquire four unique cats to unlock pressure perks!": "获得四只独特的猫来解锁压力津贴！",
    "Almanac": "图鉴",
    "Also resets your Almanac, allowing you to get even more perk points!": "还可以重置您的年历，让您获得更多额外奖励点数！",
    "As a reward here are pictures of my 5 cats": "作为奖励，这是我的 5 只猫的照片",
    "Auto Egg Bot": "自动开蛋机器人",
    "Autobuying": "自动购买",
    "Basic Egg": "基础蛋",
    "Beat the game by collecting all cats in the Almanac across all of your resets": "通过在所有重置中收集年鉴中的所有猫来击败游戏",
    "Buy": "购买",
    "Cat Legion Unleashed": "猫军团出动",
    "Cat Party!": "猫党！",
    "Cats": "猫",
    "Coins": "硬币",
    "Coins:": "硬币：",
    "Collect more unique cats to get more perk points!": "收集更多独特的猫以获得更多奖励点数！",
    "Combat": "战斗",
    "Combine all of your existing cats into one denser cat (Minimum 5 cats)": "将您现有的所有猫组合成一只密度更大的猫（至少 5 只猫）",
    "Congrats!": "恭喜！",
    "Continue": "继续",
    "Cost:": "成本：",
    "Density": "密度",
    "Density Drive": "密度驱动",
    "Density:": "密度：",
    "Do you have too many cats?": "你有太多猫吗？",
    "dog": "狗",
    "Earn Extra Powerful Effects based on the Density of your Cats!": "根据猫的密度获得额外强大的效果！",
    "Eggs": "蛋",
    "Equip": "装备",
    "Equip Highest Density Cats": "装备最高密度的猫",
    "Equipped:": "装备：",
    "every": "每一个",
    "Excess damage in combat carries over to the next enemy": "战斗中的额外伤害会转移到下一个敌人身上",
    "Feline Frenzy": "猫科动物狂热",
    "Fight them by overwhelming them with your immense pressure caused by your high density cats!": "用你的高密度猫造成的巨大压力压倒他们，与他们战斗！",
    "Gain more points scaling based on pet rarity and egg cost!": "根据宠物稀有度和蛋成本获得更多点数！",
    "Health:": "生命值：",
    "Hydraulic Press": "液压机",
    "Hydraulic Press!": "液压机！",
    "I'm hoping to update this game soon with more layers, more cats, and more compression, but you have reached the end for now": "我希望尽快更新这个游戏，增加更多层、更多猫和更多压缩，但你现在已经到达终点了",
    "In loving Memory of John, who I made some of my first games with. You were taken too soon": "为了纪念约翰，我和他一起制作了一些游戏中的第一个。 你很快就会被它吸引",
    "Incrementally Dense Kittens!": "小猫越来越密集！",
    "Keep your 3 highest density cats when using the Hydraulic Press": "使用液压机时保留 3 只密度最高的猫",
    "Likes:": "喜欢：",
    "Load": "加载",
    "Multi Egg Elegance": "多蛋优雅",
    "Overkill Overdrive": "超杀超速",
    "Perk Points:": "津贴点数：",
    "Powerful Combat Effects!": "强大的战斗效果！",
    "Pressure Damage:": "压力伤害：",
    "Pressure Perks": "压力津贴",
    "Pressurized Coins": "加压硬币",
    "Pressurized Coins:": "加压硬币：",
    "Progress to next world:": "进入下一个世界的进度：",
    "Reset Game": "重置游戏",
    "Scale Attack Speed with amount of equipped cats. 10% per cat": "根据装备的猫的数量调整攻击速度。 每只猫 10%",
    "seconds": "秒",
    "These bonuses are per cat and they are additive per additional cat which meets the threshold!": "这些奖金是按每只猫计算的，并且每增加一只达到阈值的猫都会额外获得这些奖金！",
    "Too many cats? Unlock the Hydraulic press and new eggs based on compacting cats together": "猫太多了？ 将猫压在一起解锁液压机和新蛋",
    "Total Cat Density (Damage):": "猫总密度（伤害）：",
    "Type": "类型",
    "Type:": "类型：",
    "Unlock a new egg every 3 worlds! (Golden Worlds)": "每 3 个世界解锁一个新蛋！ （金色世界）",
    "Unlock powerful combat effects after hitting density milestones per cat (Crit, Attack Speed, etc)": "每只猫达到密度里程碑后解锁强大的战斗效果（暴击、攻击速度等）",
    "Unstoppable Pressure": "无法阻挡的压力",
    "Warning: This will remove all of your current cats": "警告：这将删除您当前的所有猫",
    "You have filled out the almanac and collected every cat this game currently has to offer!": "您已经填写了年鉴并收集了该游戏当前提供的每只猫！",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "You will also compress yours cats into a cat of power level": "你还将你的猫压缩成力量等级的猫",
    "You will Gain": "你将会收获",
    "Yours Stats": "你的统计",
    "Catalicious": "卡特里克斯",
    "Classy Cat": "优雅的猫",
    "Forks": "叉子",
    "fox": "狐狸",
    "Furrnando": "弗兰多",
    "Knitting Cat": "针织猫",
    "Pickles": "泡菜",
    "raccoon": "浣熊",
    "Sassyfras": "萨西弗拉斯",
    "Sir Purrsalot": "普萨洛特爵士",
    "Swimming?": "游泳？",
    "Unequip": "取消装备",
    "Backflips": "后空翻",
    "bee": "蜜蜂",
    "Chai Latte": "印度奶茶拿铁",
    "Chonker Egg": "琼克蛋",
    "dodo": "渡渡鸟",
    "Eatting Cars": "吃车",
    "High Spending Egg": "高价蛋",
    "Kitty Smalls": "凯蒂·斯莫尔斯",
    "Lunaflare": "月焰",
    "Purrlock Holmes": "普洛克·福尔摩斯",
    "Socks": "袜子",
    "Spike the Catster": "斯派克猫师",
    "beaver": "海狸",
    "Cat Toy Cat": "猫咪玩具猫",
    "Catalina Wine Mixer": "卡塔利娜葡萄酒搅拌机",
    "Catalyst": "催化剂",
    "Catsby": "凯茨比",
    "Flying": "飞行",
    "Furrball McGraw": "毛球·麦格劳",
    "Lilith Von Claw": "莉莉丝·冯·爪",
    "Meowcolm X": "马尔科姆·X",
    "Mewbacca": "丘巴卡",
    "Princess Cat": "公主猫",
    "Sphinxter": "括约肌",
    "Squirrel Cat": "松鼠猫",
    "Thunderpaws": "雷爪",
    "Void Cat": "虚空猫",
    "Whiskerbell": "胡须贝尔",
    "Zen Meowster": "禅·喵斯特",
    "bat": "蝙蝠",
    "Chonky Cat": "矮胖猫",
    "Hefty Cat": "大猫",
    "Mochi": "麻糬",
    "Nothing": "没有",
    "octopus": "章鱼",
    "Sir Fluffington": "弗拉芬顿爵士",
    "slime": "史莱姆",
    "Super Egg": "超级蛋",
    "Ziggy Stardust": "吉吉星尘",
    "Oliver Whiskerspoon": "奥利弗·维克斯彭",
    "Superhero Cat": "超级英雄猫",
    "Buddy Thunderstruck": "巴迪雷霆万钧",
    "Fuzz Lightyear": "模糊光年",
    "Megachonker": "超级大混战者",
    "Napoleon Whiskers": "拿破仑胡须",
    "Shadowpaws": "暗影之爪",
    "Whiskerino": "威斯克里诺",
    "goblin": "哥布林",
    "knife guy": "刀客",
    "lizard man": "蜥蜴人",
    "Not A Cat Egg": "不是猫蛋",
    "Pressurized Egg": "加压蛋",
    "Weapon Cats": "武器猫",
    "Captain Whiskerbeard": "威须须船长",
    "Catniss Everclean": "卡特尼斯·艾弗克林",
    "CleoCATra": "克莱奥·卡特拉",
    "cupcake": "纸杯蛋糕",
    "Cute Cat": "可爱的猫",
    "Cute Companions Egg": "可爱的同伴蛋",
    "Dog": "狗",
    "Fox": "狐狸",
    "Galacticat": "银河系",
    "golem": "傀儡",
    "Lawyer Cat": "律师猫",
    "lobster": "龙虾",
    "minotaur": "牛头怪",
    "Mittens von Scratchington": "米滕斯·冯·斯克拉金顿",
    "Mr. Meowgi": "喵吉先生",
    "Napoleon Cataparte": "拿破仑·卡塔帕特",
    "Office Cat": "办公室猫",
    "Pixel Paws": "像素爪子",
    "Pressurized Monster Egg": "加压怪物蛋",
    "pumpkin": "南瓜",
    "Purrplexing Pals": "令人困惑的朋友",
    "Soapie's Favorites": "苏皮的最爱",
    "Three Cats One Trenchcoat": "三只猫一件风衣",
    "toast": "吐司",
    "Turtle": "龟",
    "Waffles the Cat": "华夫饼猫",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "[Rebuyable] ": "[可重复购买] ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);