const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

const portfolio = {
  identity: {
    nameZh: '邱玉婷', nameEn: 'Helen', siteName: 'Helen Creative Desk',
    careerDirectionZh: '产品 / AI 产品', taglineZh: 'AI × 产品 × 设计 × Coding',
    statementZh: '把想法做成真正可以被使用的产品。', personalNoteZh: '这里放着一些，我认真做出来的东西。',
    education: ['深圳职业技术大学', '数字出版专业'], experienceSummary: '约一年 AIGC 设计师助理工作经验',
  },
  navigation: [
    { number: '01', label: 'PROJECTS', title: '项目作品', detail: 'Selected Work', page: 'projects' },
    { number: '02', label: 'AI VISUAL WORKS', title: 'AI 影像作品', detail: 'Generative Film / Visual Storytelling', page: 'aiLab' },
    { number: '03', label: 'ABOUT', title: '关于我', detail: 'Experience / Education / Resume', page: 'about' },
  ],
  projects: [
    { label: '01 / FEATURED PRODUCT', featured: true, name: '真要买吗', englishName: 'Should I Really Buy It?', type: '微信小程序 · AI Product', description: '一个把冲动消费变成朋友审批流程的微信小程序。', tags: ['Product Design', 'AI Coding', 'WeChat Mini Program', 'CloudBase'], caseStudyUrl: 'https://helen-224.github.io/zhenyaoma-case-study/', status: '完整案例即将接入' },
    { label: '02 / CREATIVE PROJECT', featured: false, name: '我的島嶼車票', englishName: 'My Island Ticket', type: '互动网站 · Creative Project', description: '把旅行想象变成一张可以生成、保存和分享的纪念车票。', tags: ['Creative Coding', 'Interaction Design', 'AI-assisted Development'], projectUrl: 'https://taiwan-ticket-generator.pages.dev/', status: '项目链接即将接入' },
  ],
  aiLab: {
    kicker: 'AI VISUAL WORKS', title: 'AI VISUAL WORKS', titleZh: 'AI 影像作品', subtitle: 'GENERATIVE FILM / VISUAL STORYTELLING',
    introduction: '上一份工作中，我主要参与 AIGC 影像内容的制作。\n从叙事短片、科幻世界到动态漫画、新闻形式与动画实验，我持续尝试将生成式 AI 从单帧视觉扩展到更完整的影像表达。\n\n这里收录的是一组具有代表性的影像项目，它们分别对应不同的叙事类型、视觉风格与内容形式。',
    tags: 'ECO FILM · SCI-FI · NARRATIVE · NEWS FORMAT · MOTION COMIC · ANIMATION',
    films: [
      { id: 'white-migration', number: '01', selected: true, title: '白色迁徙', englishTitle: 'WHITE MIGRATION', tag: '生态影像 / 视觉随笔', description: '通过候鸟、湿地、海洋与塑料垃圾之间的视觉转换，借“迁徙”这一自然行为，隐喻塑料污染在生态系统中的扩散与入侵。', type: 'AI 生态影像', focus: '隐喻 / 自然 / 环境叙事', posterSrc: publicAsset('media/ai-visual-works/posters/白色迁徙.jpg'), videoSrc: publicAsset('media/ai-visual-works/videos/白色迁徙~1.mp4') },
      { id: 'dark-forest', number: '02', selected: true, title: '黑暗森林', englishTitle: 'THE DARK FOREST', tag: '科幻影像 / 世界观构建', description: '以《三体》中的“黑暗森林”法则为灵感，通过森林、宇宙与压迫性环境构建带有哲学意味的科幻影像。', type: 'AI 科幻影像', focus: '世界观构建 / 氛围 / 科幻概念', posterSrc: publicAsset('media/ai-visual-works/posters/黑暗森林.png'), videoSrc: publicAsset('media/ai-visual-works/videos/黑暗森林.mp4') },
      { id: 'before-countdown', number: '03', selected: true, title: '倒计时之前', englishTitle: 'BEFORE THE COUNTDOWN', tag: 'AI 影像 / 科幻叙事', description: '以汪淼的视角展开，在进入《三体》游戏之前，人物先遭遇无法解释的倒计时幻象与异常事件，逐步建立悬疑感与科幻叙事。', type: 'AI 叙事短片', focus: '人物 / 悬疑 / 科幻叙事', posterSrc: publicAsset('media/ai-visual-works/posters/倒计时之前.png'), videoSrc: publicAsset('media/ai-visual-works/videos/倒计时之前.mp4') },
      { id: 'floodline', number: '04', selected: true, title: '洪水围城', englishTitle: 'FLOODLINE', tag: '新闻影像 / 公共事件', description: '围绕 2026 年 7 月 6 日广西贵港暴雨洪灾事件展开，通过新闻播报、灾害现场与救援信息重建“12000 名师生被困”的公共事件叙事。', type: 'AI 新闻叙事', focus: '突发新闻 / 公共事件 / 灾害影像', posterSrc: publicAsset('media/ai-visual-works/posters/洪水围城.png'), videoSrc: publicAsset('media/ai-visual-works/videos/洪水围城.mp4') },
      { id: 'between-panels', number: '05', selected: false, title: '黑白之间', englishTitle: 'BETWEEN THE PANELS', tag: '动态漫画', description: '以黑白漫画作为主要视觉语言，将人物、空间与情节转化为具有运动感与节奏感的动态叙事。', type: 'AI 动态漫画', focus: '风格统一 / 连续叙事 / 动态节奏', posterSrc: publicAsset('media/ai-visual-works/posters/黑白之间.png'), videoSrc: publicAsset('media/ai-visual-works/videos/黑白之间.mp4') },
      { id: 'warm-baby', number: '06', selected: false, title: '暖宝宝', englishTitle: 'WARM BABY', tag: 'AI 情感叙事短片 / 家庭故事', description: '39.9℃的盛夏，留守男孩却执意买下一片暖宝宝。对他而言，那一点微弱的温度像母亲仍在身边的陪伴。作品从一个日常选择切入，借高温、身体感受与童年记忆，呈现孩子对亲情的想念与依赖。', type: 'AI 情感叙事短片', focus: '儿童视角 / 情感隐喻 / 家庭记忆', posterSrc: publicAsset('media/ai-visual-works/posters/暖宝宝.png'), videoSrc: publicAsset('media/ai-visual-works/videos/暖宝宝 .mp4') },
      { id: 'mad-bride', number: '07', selected: false, title: '疯子新娘', englishTitle: 'MAD BRIDE', tag: 'AI 情感叙事短片 / 悲剧故事', description: '取材于山东东明“婚纱疯娘”的民间叙事。一名女子在婚礼当天等来的并非迎亲队伍，而是爱人因车祸离世的消息。在亲历告别与安葬后，她始终穿着婚纱，执拗地等待那个再也不会出现的人。作品以婚纱、等待与记忆为线索，呈现创伤之后无法停止的思念。', type: 'AI 情感叙事短片', focus: '创伤记忆 / 角色 / 悲剧情绪', posterSrc: publicAsset('media/ai-visual-works/posters/疯子新娘.png'), videoSrc: publicAsset('media/ai-visual-works/videos/疯子新娘~1.mp4') },
      { id: 'no-reply', number: '08', selected: false, title: '没有回复的消息', englishTitle: 'NO REPLY', tag: 'AI 情感叙事短片 / 家庭故事', description: '围绕一位失去母亲的孩子展开。因为思念，男孩仍像从前一样向母亲的微信发送消息；家庭照片、手机界面与日常生活空间交替出现，呈现失去发生后依然没有消散的依恋与想念。', type: 'AI 情感叙事短片', focus: '家庭记忆 / 情绪叙事 / 数字媒介', posterSrc: publicAsset('media/ai-visual-works/posters/没有回复的消息.png'), videoSrc: publicAsset('media/ai-visual-works/videos/没有回复的消息 ~1.mp4') },
    ],
  },
  about: ['我来自数字出版与 AIGC 设计，后来开始使用 AI Coding，把自己的产品想法真正做出来。', '我关心的不只是界面好不好看，更关心一个想法能不能被验证、被使用、被做出来。'],
  experience: [['经历', 'AIGC 设计师助理 · 约一年'], ['教育', '深圳职业技术大学 · 数字出版专业'], ['方向', '产品 / AI 产品']],
  toolkit: ['Product Thinking', 'AI Coding', 'Interaction Design', 'AIGC Image', 'AIGC Video', 'Creative Development'],
  contact: { status: '联系方式即将接入' },
};
export default portfolio;
