/**
 * AI 聊天回复 Mock 数据
 */

const aiResponses = {
  greetings: [
    '你好！我是你的世界杯 AI 助手，有什么想聊的吗？',
    '嗨！欢迎来到 2026 世界杯！有什么想了解的吗？',
    '你好球迷！准备好迎接全球最大的足球盛会了吗？',
  ],

  match_preview: {
    '阿根廷 vs 法国': [
      '这是 2022 年世界杯决赛的重演！阿根廷有梅西的领导，法国则拥有姆巴佩。这将是一场史诗级对决。',
      '两队都是夺冠热门。阿根廷在梅西带领下战术更加成熟，而法国拥有最顶级的锋线球员。',
      '历史战绩：两队在世界杯上交手 4 次，阿根廷 2 胜 1 平 1 负，法国在 2018 年 16 强赛 4-3 击败阿根廷。',
    ],
    '巴西 vs 葡萄牙': [
      '南美足球代表 vs 欧洲劲旅！巴西的技术足球对决葡萄牙的力量足球。',
      'C 罗可能迎来最后一届世界杯，而巴西则希望在主场夺冠（虽然是在北美）。',
      '葡萄牙拥有超级中场（B 费、B 席），巴西则拥有超级锋线（维尼修斯、理查利森）。',
    ],
    '墨西哥 vs 加拿大': [
      '北美德比！两国都希望作为东道主表现出色。',
      '墨西哥拥有更丰富的大赛经验，加拿大则是冉冉升起的新星。',
    ],
  },

  predictions: [
    '根据数据模型分析，我预测阿根廷、法国、巴西、英格兰将进入半决赛。',
    '从赔率和球队状态来看，巴西是本届世界杯夺冠的最大热门。',
    '我预测本届金靴奖得主很可能是姆巴佩或维尼修斯，他们都有出色的进球效率。',
    '黑马球队预测：摩洛哥、加拿大和丹麦都有可能在本届世界杯上创造惊喜。',
    '数据显示，作为东道主之一的美国队在小组出线的概率约为 75%。',
  ],

  trivia: [
    '世界杯历史上进球最多的球员是德国的克洛泽，他在 2002-2014 年间共打进 16 球。',
    '巴西是唯一一支参加了所有 22 届世界杯的球队，并且赢得了 5 次冠军。',
    '2026 世界杯将首次由三个国家联合举办（美国、墨西哥、加拿大），也是世界杯首次扩军至 48 支球队。',
    '世界杯历史上最快的进球是土耳其的哈坎·苏克在 2002 年对阵韩国的比赛中开场 11 秒打进的。',
    '世界杯历史上最年轻的进球者是球王贝利，他在 1958 年瑞典世界杯上打进首球时只有 17 岁零 239 天。',
    '世界杯历史上只有 8 个国家曾夺得冠军：巴西(5)、德国(4)、意大利(4)、阿根廷(3)、法国(2)、乌拉圭(2)、英格兰(1)、西班牙(1)。',
    '2022 年卡塔尔世界杯是首次在阿拉伯国家举办的世界杯，也是梅西圆梦的一届。',
  ],

  rules: [
    '2026 世界杯将有 48 支球队参赛，分为 12 个小组，每组 4 队。小组前两名和 8 个最好的小组第三名晋级 32 强。',
    '小组赛采用积分制：胜 3 分，平 1 分，负 0 分。排名按积分、净胜球、进球数、相互战绩的顺序排列。',
    '淘汰赛阶段：如果 90 分钟打平，则进行 30 分钟加时赛；如果仍然打平，则通过点球大战决出胜负。',
    '世界杯比赛时长 90 分钟，上下半场各 45 分钟。伤停补时由主裁判根据比赛中断情况决定。',
    '每队在比赛中可以替换 5 名球员，分 3 次机会使用（不包括中场休息）。另外还有一个脑震荡换人名额。',
    '黄牌累计 2 张将在下一场比赛停赛。红牌则当场比赛罚下，并自动停赛一场，情节严重者可能追加停赛。',
    '点球大战规则：每队各派 5 名球员轮流罚球，进球多者获胜。如果 5 轮后仍平，则进入突然死亡法，每轮各罚一球直至分出胜负。',
  ],

  team_info: {
    阿根廷:
      '阿根廷是 2022 年世界杯冠军，拥有史上最伟大球员之一的梅西。球队以技术足球和坚韧的防守著称。核心球员包括梅西、阿尔瓦雷斯、德保罗和罗梅罗。',
    法国:
      '法国是 2018 年世界杯冠军，2022 年亚军。拥有姆巴佩、格列兹曼等顶级球员，以速度和力量著称。球队整体实力强大，是夺冠热门之一。',
    巴西:
      '巴西是 5 次世界杯冠军得主，足球王国。以技术足球、灵活的跑位和超级个人能力闻名。本届核心包括维尼修斯、罗德里戈和理查利森。',
    英格兰:
      '英格兰是 1966 年世界杯冠军。以现代足球风格和青训体系著称。核心球员包括凯恩、贝林厄姆、萨卡和福登。',
    西班牙:
      '西班牙是 2010 年世界杯冠军。以传控足球（Tiki-Taka）闻名。核心球员包括罗德里、莫拉塔和加维。',
    德国:
      '德国是 4 次世界杯冠军。以铁血防守和团队足球著称。核心球员包括穆西亚拉、基米希和格雷茨卡。',
    葡萄牙:
      '葡萄牙是欧洲劲旅，C 罗的祖国。以技术足球和中场控制著称。核心球员包括 C 罗、B 费和 B 席。',
    荷兰:
      '荷兰是全攻全守足球的代表。以攻势足球和出色的青训闻名。核心球员包括范戴克、加克波和德佩。',
    墨西哥:
      '墨西哥是传统中北美强队，16 强常客。以热情和技术足球著称。核心球员包括阿尔瓦雷斯、洛萨诺和希门尼斯。',
    美国:
      '美国作为东道主之一，是北美新兴足球力量。以年轻球员和快速发展的足球文化著称。核心球员包括普利西奇、麦肯尼和佩皮。',
    加拿大:
      '加拿大作为东道主之一，是北美足球新兴力量。以阿方索·戴维斯为核心，擅长快速反击。',
    摩洛哥:
      '摩洛哥是 2022 年世界杯四强，非洲足球代表。以坚韧防守和快速反击著称。核心球员包括哈基米、阿姆拉巴特和马兹拉维。',
  },

  player_insights: {
    梅西:
      '梅西是足球史上最伟大的球员之一，9 次金球奖得主。虽然年龄渐长，但他的传球、任意球和阅读比赛的能力仍然顶级。',
    姆巴佩:
      '姆巴佩是目前世界足坛最具潜力的年轻球员之一。速度和射门是他最大的武器。2022 世界杯金靴得主。',
    C罗:
      'C 罗是足球史上最伟大的射手之一，5 次金球奖得主。虽然年龄较大，但他的进球本能和职业精神依然无与伦比。',
    维尼修斯:
      '维尼修斯是巴西新一代球星代表。以闪电般的速度和盘带能力著称，是皇马的核心球员。',
    哈兰德:
      '哈兰德是挪威足球的超级新星。以强大的身体素质和惊人的进球效率著称，被视为未来金球奖的有力竞争者。',
    贝林厄姆:
      '贝林厄姆是英格兰最具天赋的年轻中场。以全能和跑动能力著称，已经成为皇家马德里的核心球员。',
    穆西亚拉:
      '穆西亚拉是德国足球的超级天才。以技术和创造力著称，被誉为德国足球的未来。',
    罗德里:
      '罗德里是西班牙的中场核心。以传球和防守能力著称，是曼城的关键球员。2024 年金球奖得主。',
  },

  tournament_facts: [
    '2026 年世界杯将在 16 个场馆举办，分布于美国、墨西哥和加拿大三国。',
    '决赛预计将在达拉斯的 AT&T 体育场（容量 8 万人）或墨西哥城的阿兹特克体育场（容量 8.75 万人）举行。',
    '本届世界杯将有 104 场比赛，比 2022 年卡塔尔世界杯（64 场）增加了 40 场。',
    '北美三国自动获得参赛资格，其余 45 个名额由各洲预选赛产生。',
    '由于参赛球队增加到 48 支，本届世界杯被认为是历史上规模最大的一届。',
  ],

  fun_facts: [
    '世界杯奖杯原名"雷米特杯"，以法国足协主席 Jules Rimet 的名字命名。',
    '1970 年世界杯的用球"Telstar"是第一个采用黑白相间图案的足球，以提高电视转播效果。',
    '世界杯历史上出现过著名的"马拉多纳上帝之手"和"世纪进球"，都是在同一场比赛（1986 年英格兰 vs 阿根廷）。',
    '乌拉圭在 1930 年成为第一个世界杯冠军时，他们的球队平均身高只有 1.68 米，却是一支极具战斗力的球队。',
    '世界杯历史上只有 1 位门将曾获得金球奖：德国的奥利弗·卡恩在 2002 年世界杯获得此项荣誉。',
  ],

  default_responses: [
    '这是一个很好的问题！让我想想...关于这个话题，我的建议是关注球队的整体状态和战术风格。',
    '感谢你的提问！世界杯充满了不确定性，这正是它的魅力所在。',
    '我理解你的兴趣！作为 AI 助手，我会基于数据分析给出我的见解。',
    '这个问题很有意思！让我为你提供一些相关信息。',
    '好问题！让我从多个角度为你分析一下。',
  ],
};

export function getRandomGreeting() {
  return aiResponses.greetings[
    Math.floor(Math.random() * aiResponses.greetings.length)
  ];
}

export function getResponseForMatch(homeTeam, awayTeam) {
  const key = `${homeTeam} vs ${awayTeam}`;
  if (aiResponses.match_preview[key]) {
    return aiResponses.match_preview[key][
      Math.floor(Math.random() * aiResponses.match_preview[key].length)
    ];
  }
  return getRandomDefault();
}

export function getRandomPrediction() {
  return aiResponses.predictions[
    Math.floor(Math.random() * aiResponses.predictions.length)
  ];
}

export function getRandomTrivia() {
  return aiResponses.trivia[
    Math.floor(Math.random() * aiResponses.trivia.length)
  ];
}

export function getRandomRule() {
  return aiResponses.rules[
    Math.floor(Math.random() * aiResponses.rules.length)
  ];
}

export function getTeamInfo(teamName) {
  if (aiResponses.team_info[teamName]) {
    return aiResponses.team_info[teamName];
  }
  return `${teamName} 是一支值得关注的球队。他们将在 2026 世界杯上为自己的目标而战。`;
}

export function getPlayerInsight(playerName) {
  if (aiResponses.player_insights[playerName]) {
    return aiResponses.player_insights[playerName];
  }
  return `${playerName} 是一位非常出色的球员，他在俱乐部和国家队都有着稳定的表现。`;
}

export function getRandomTournamentFact() {
  return aiResponses.tournament_facts[
    Math.floor(Math.random() * aiResponses.tournament_facts.length)
  ];
}

export function getRandomFunFact() {
  return aiResponses.fun_facts[
    Math.floor(Math.random() * aiResponses.fun_facts.length)
  ];
}

export function getRandomDefault() {
  return aiResponses.default_responses[
    Math.floor(Math.random() * aiResponses.default_responses.length)
  ];
}

export function getSmartResponse(message) {
  const msg = message.toLowerCase();

  if (
    msg.includes('阿根廷') ||
    msg.includes('法国') ||
    msg.includes('巴西') ||
    msg.includes('英格兰') ||
    msg.includes('西班牙') ||
    msg.includes('德国') ||
    msg.includes('葡萄牙') ||
    msg.includes('荷兰') ||
    msg.includes('墨西哥') ||
    msg.includes('美国') ||
    msg.includes('加拿大') ||
    msg.includes('摩洛哥')
  ) {
    const teams = [
      '阿根廷',
      '法国',
      '巴西',
      '英格兰',
      '西班牙',
      '德国',
      '葡萄牙',
      '荷兰',
      '墨西哥',
      '美国',
      '加拿大',
      '摩洛哥',
    ];
    for (const team of teams) {
      if (msg.includes(team.toLowerCase())) {
        return getTeamInfo(team);
      }
    }
  }

  if (
    msg.includes('梅西') ||
    msg.includes('姆巴佩') ||
    msg.includes('c罗') ||
    msg.includes('c 罗') ||
    msg.includes('罗纳尔多') ||
    msg.includes('维尼修斯') ||
    msg.includes('哈兰德') ||
    msg.includes('贝林厄姆') ||
    msg.includes('穆西亚拉') ||
    msg.includes('罗德里')
  ) {
    const players = [
      '梅西',
      '姆巴佩',
      'C罗',
      '维尼修斯',
      '哈兰德',
      '贝林厄姆',
      '穆西亚拉',
      '罗德里',
    ];
    for (const player of players) {
      if (msg.includes(player.toLowerCase())) {
        return getPlayerInsight(player);
      }
    }
  }

  if (
    msg.includes('预测') ||
    msg.includes('谁会赢') ||
    msg.includes('谁能赢') ||
    msg.includes('冠军') ||
    msg.includes('热门')
  ) {
    return getRandomPrediction();
  }

  if (
    msg.includes('规则') ||
    msg.includes('怎么算') ||
    msg.includes('怎么踢') ||
    msg.includes('积分') ||
    msg.includes('晋级') ||
    msg.includes('淘汰')
  ) {
    return getRandomRule();
  }

  if (
    msg.includes('历史') ||
    msg.includes('记录') ||
    msg.includes('知识') ||
    msg.includes('冷知识') ||
    msg.includes('有趣')
  ) {
    return Math.random() > 0.5 ? getRandomTrivia() : getRandomFunFact();
  }

  if (msg.includes('场馆') || msg.includes('体育场') || msg.includes('城市')) {
    return getRandomTournamentFact();
  }

  if (
    msg.includes('你好') ||
    msg.includes('hi') ||
    msg.includes('hello') ||
    msg.includes('嗨') ||
    msg.includes('嘿')
  ) {
    return getRandomGreeting();
  }

  if (msg.includes('vs') || msg.includes('对') || msg.includes('对战')) {
    const teams = ['阿根廷', '法国', '巴西', '英格兰', '西班牙', '德国'];
    for (const t of teams) {
      if (msg.includes(t.toLowerCase())) {
        const otherTeam = teams.find((x) => x !== t && msg.includes(x.toLowerCase()));
        if (otherTeam) {
          return getResponseForMatch(t, otherTeam);
        }
      }
    }
    return getRandomDefault();
  }

  if (
    msg.includes('谢谢') ||
    msg.includes('感谢') ||
    msg.includes('thanks') ||
    msg.includes('thank you')
  ) {
    return '不客气！祝你观赛愉快！🎉';
  }

  return getRandomDefault();
}

export default aiResponses;
