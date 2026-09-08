const portfolio = {
  identity: {
    nameZh: '邱玉婷', nameEn: 'Helen', siteName: 'Helen Creative Desk',
    careerDirectionZh: '产品 / AI 产品', taglineZh: 'AI × 产品 × 设计 × Coding',
    statementZh: '把想法做成真正可以被使用的产品。', personalNoteZh: '这里放着一些，我认真做出来的东西。',
    education: ['深圳职业技术大学', '数字出版专业'], experienceSummary: '约一年 AIGC 设计师助理工作经验',
  },
  navigation: [
    { number: '01', label: 'PROJECTS', title: '项目作品', detail: 'Selected Work', page: 'projects' },
    { number: '02', label: 'AI LAB', title: 'AI 实验室', detail: 'Image / Video / Experiments', page: 'aiLab' },
    { number: '03', label: 'ABOUT', title: '关于我', detail: 'Experience / Education / Resume', page: 'about' },
    { number: '04', label: 'CONTACT', title: '联系我', detail: 'Say Hello', page: 'contact' },
  ],
  projects: [
    { label: '01 / FEATURED PRODUCT', featured: true, name: '真要买吗', englishName: 'Should I Really Buy It?', type: '微信小程序 · AI Product', description: '一个把冲动消费变成朋友审批流程的微信小程序。', tags: ['Product Design', 'AI Coding', 'WeChat Mini Program', 'CloudBase'], caseStudyUrl: null, status: '完整案例即将接入' },
    { label: '02 / CREATIVE PROJECT', featured: false, name: '我的島嶼車票', englishName: 'My Island Ticket', type: '互动网站 · Creative Project', description: '把旅行想象变成一张可以生成、保存和分享的纪念车票。', tags: ['Creative Coding', 'Interaction Design', 'AI-assisted Development'], projectUrl: null, status: '项目链接即将接入' },
  ],
  aiLab: { title: 'AI LAB', titleZh: 'AI 实验室', categories: [['01', 'AIGC IMAGE', '图像生成'], ['02', 'AIGC VIDEO', '视频生成'], ['03', 'EXPERIMENTS', '实验项目']] },
  about: ['我来自数字出版与 AIGC 设计，后来开始使用 AI Coding，把自己的产品想法真正做出来。', '我关心的不只是界面好不好看，更关心一个想法能不能被验证、被使用、被做出来。'],
  experience: [['经历', 'AIGC 设计师助理 · 约一年'], ['教育', '深圳职业技术大学 · 数字出版专业'], ['方向', '产品 / AI 产品']],
  toolkit: ['Product Thinking', 'AI Coding', 'Interaction Design', 'AIGC Image', 'AIGC Video', 'Creative Development'],
  contact: { status: '联系方式即将接入' },
};
export default portfolio;
