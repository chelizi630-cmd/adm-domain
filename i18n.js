/* ============================================================
   ADM Domain — i18n.js
   三语字典：中文 / English / Français
   - 全部 UI 文本 + 15 个模块的 title / 副标题 / 描述
   - 占位符 placeholder / title 属性 / aria-label 也支持
   ============================================================ */

const I18N = {
    // ============================================================
    // 中文
    // ============================================================
    'zh': {
        'meta.title': 'ADM 先进制造域 · Advanced Manufacturing Domain',
        'meta.desc': '面向访客/领导/生产/工厂 4 类用户画像的先进制造域平台。包含 NEA 项目、领域项目、绩效计分卡、技能培训、审核申请、灯塔工厂等 15 个核心模块。',
        'skip.link': '跳到主要内容',

        // 搜索
        'search.placeholder': '搜索模块、文档、案例…（试试 NEA、培训、审核）',
        'search.empty': '没有匹配结果。试试 NEA、培训、审核…',

        // 顶部导航
        'nav.persona': '用户入口',
        'nav.modules': '模块',
        'nav.dashboards': '看板',
        'nav.board': '留言',

        // Hero
        'hero.eyebrow': 'INDUSTRY 5.0 · NEA DOMAIN',
        'hero.title': '面向 先进制造 的一站式协同平台',
        'hero.sub': '从项目立项到灯塔工厂，从技能培训到审计追溯——4 类用户，15 个核心模块，按你的角色直达所需。',

        // 4 persona
        'persona.A.tag': '访客 / 初学者',
        'persona.A.q': '"这平台是干嘛的？"',
        'persona.A.cta': '进入访客视图 →',
        'persona.B.tag': '领导者',
        'persona.B.q': '"目前进展和表现如何？"',
        'persona.B.cta': '进入领导看板 →',
        'persona.C.tag': '生产 / 技术',
        'persona.C.q': '"我怎么做得更好？"',
        'persona.C.cta': '进入生产/技术看板 →',
        'persona.C.more': '+ 4 更多',
        'persona.C.badge': '最广',
        'persona.D.tag': '工厂管理者',
        'persona.D.q': '"我们工厂达标了吗？"',
        'persona.D.cta': '进入工厂看板 →',

        // 模块区
        'modules.eyebrow': '15 个核心模块',
        'modules.title': '按问题驱动的索引，而不是技术分类',
        'modules.desc': '每个模块都标记了适用画像，悬停查看详情，点击进入对应模块。',
        'filter.all': '全部 (15)',
        'filter.A': '👀 访客',
        'filter.B': '📊 领导',
        'filter.C': '🛠️ 生产',
        'filter.D': '🏭 工厂',

        // 15 个模块
        'mod.A.title': '组织架构图',
        'mod.A.en': 'Organization Chart',
        'mod.A.desc': 'NEA / 领域项目 / 工厂团队的组织层级与汇报关系。',
        'mod.B.title': 'NEA 项目',
        'mod.B.en': 'NEA Project',
        'mod.B.desc': '下一代先进制造项目立项与进展。',
        'mod.C.title': '领域项目',
        'mod.C.en': 'Domain Project',
        'mod.C.desc': '按行业 / 区域 / 主题划分的领域级项目协同与里程碑。',
        'mod.D.title': '绩效计分卡',
        'mod.D.en': 'Performance Scorecard',
        'mod.D.desc': '关键 KPI / OEE / 良品率 等指标的实时计分卡与对标分析。',
        'mod.E.title': '技能清单',
        'mod.E.en': 'Skills List',
        'mod.E.desc': '按岗位 / 等级梳理的 ADM 技能矩阵与个人能力图谱。',
        'mod.F.title': '在线培训',
        'mod.F.en': 'Training Online',
        'mod.F.desc': '视频课程 / 认证路径 / 在线考试 / 学习记录追踪。',
        'mod.G.title': '参观需求清单',
        'mod.G.en': 'Visit Needs List',
        'mod.G.desc': '工厂对内 / 对外参观申请的提交、审批与档期管理。',
        'mod.H.title': '灯塔工厂参观',
        'mod.H.en': 'Lighthouse Factory BP/GP Sharing',
        'mod.H.desc': '世界级灯塔工厂的参观安排与最佳实践分享。',
        'mod.I.title': '最佳实践分享',
        'mod.I.en': 'GP/BP Sharing',
        'mod.I.desc': '跨工厂 / 跨项目 / 跨领域的 Good Practice / Best Practice 沉淀。',
        'mod.J.title': '工具箱',
        'mod.J.en': 'Tools (AI / Useful Methods)',
        'mod.J.desc': 'AI 工具 / 实用方法论 / 模板下载 —— 让生产/技术人员事半功倍。',
        'mod.K.title': '审核申请/日历',
        'mod.K.en': 'Audit Application & Calendar',
        'mod.K.desc': '内审 / 外审 / 认证申请的提交流程 + 全年审核日历。',
        'mod.L.title': '追溯性',
        'mod.L.en': 'Traceability',
        'mod.L.desc': '物料 / 工艺 / 设备的全链路追溯与一键反查。',
        'mod.M.title': 'API 链接/扫描',
        'mod.M.en': 'API Link (Scan ABC)',
        'mod.M.desc': '与 MES / ERP / WMS 等系统对接的 API 文档与扫码集成。',
        'mod.N.title': '寻源查询',
        'mod.N.en': 'Sourcing Searching',
        'mod.N.desc': '供应商寻源 / 比价 / 历史合作记录的统一查询入口。',
        'mod.O.title': '留言本',
        'mod.O.en': 'Q&A / Feedback',
        'mod.O.desc': '提问、建议、反馈 —— 留言后由平台运营 24h 内回复。',

        // persona tags on module cards
        'tag.A': '访客',
        'tag.B': '领导',
        'tag.C': '生产',
        'tag.D': '工厂',

        // 看板
        'dashboards.eyebrow': '按角色进入看板',
        'dashboards.title': '4 个一站式工作台',
        'dashboards.desc': '每个看板把"该画像最常用"的 4-6 个模块拼成一个工作台。点 persona 卡片后这里会自动滚到对应看板。',
        'dash.A.title': '访客视图 · Discover',
        'dash.A.kpi1': '个核心模块',
        'dash.A.kpi2': '类用户画像',
        'dash.A.item1': '📘 平台是什么 → B NEA 项目',
        'dash.A.item2': '🌍 在做什么 → C 领域项目',
        'dash.A.item3': '✨ 谁做得好 → I 最佳实践',
        'dash.B.title': '领导视图 · Lead',
        'dash.B.kpi1': '绩效计分卡',
        'dash.B.kpi2': '组织架构',
        'dash.B.item1': '📈 表现如何 → D 绩效计分卡',
        'dash.B.item2': '📂 谁在推进 → A 组织架构',
        'dash.B.item3': '📰 行业资讯 → I 最佳实践',
        'dash.C.title': '生产/技术视图 · Build',
        'dash.C.kpi1': '技能清单',
        'dash.C.kpi2': '在线培训',
        'dash.C.kpi3': 'AI 工具箱',
        'dash.C.kpi4': '审核申请',
        'dash.C.item1': '📚 我要学 → E 技能 + F 培训',
        'dash.C.item2': '🤖 用 AI → J 工具箱',
        'dash.C.item3': '🏆 看灯塔 → H 灯塔工厂',
        'dash.C.badge': '最广',
        'dash.D.title': '工厂视图 · Operate',
        'dash.D.kpi1': '审核申请',
        'dash.D.kpi2': '追溯性',
        'dash.D.item1': '✅ 申请审核 → K 审核申请',
        'dash.D.item2': '🔎 查追溯 → L 追溯性',
        'dash.D.item3': '🔌 接系统 → M API 链接',

        // 留言板
        'board.eyebrow': 'Q&A · 留言本',
        'board.title': '有想法？直接说。24h 内回复。',
        'board.desc': '留言会保存在本机浏览器，运营人员导出后会在 GitHub Discussions 同步留档。所有留言支持回复与置顶。',
        'form.h3': '📝 写一条留言',
        'form.persona': '你的身份（可匿名）',
        'form.name': '称呼',
        'form.name.placeholder': '比如 张工 / 王厂长',
        'form.message': '留言内容',
        'form.message.placeholder': '建议、问题、Bug 反馈都可以…（最多 500 字）',
        'form.hint': '按 ⌘+Enter 快速提交',
        'form.submit': '提交留言',
        'list.h3': '💬 全部留言',
        'list.filter.all': '全部',
        'list.filter.A': '访客',
        'list.filter.B': '领导',
        'list.filter.C': '生产/技术',
        'list.filter.D': '工厂',
        'list.empty': '还没有留言。要不要做第一个？',
        'list.empty.emoji': '🌱',
        'msg.reply': '↩ 回复',
        'msg.delete': '🗑 删除',
        'msg.delete.confirm': '确定删除这条留言？',
        'msg.reply.prompt': '回复内容：',
        'msg.reply.name': '回复人称呼：',
        'msg.reply.name.default': '运营',
        'msg.time.just': '刚刚',
        'msg.time.mins': ' 分钟前',
        'msg.time.hours': ' 小时前',
        'msg.time.days': ' 天前',

        // Footer
        'footer.tagline': '先进制造域 · 由 4 类用户 × 15 个模块 驱动',
        'footer.col1.title': '用户入口',
        'footer.col1.l1': '访客视图',
        'footer.col1.l2': '领导视图',
        'footer.col1.l3': '生产/技术视图',
        'footer.col1.l4': '工厂视图',
        'footer.col2.title': '模块',
        'footer.col2.l1': 'B NEA 项目',
        'footer.col2.l2': 'D 绩效计分卡',
        'footer.col2.l3': 'F 在线培训',
        'footer.col2.l4': 'K 审核申请',
        'footer.col3.title': '资源',
        'footer.col3.l1': 'GitHub 仓库',
        'footer.col3.l2': '留言反馈',
        'footer.col3.l3': '回到顶部 ↑',
        'footer.bottom': '© 2026 ADM Domain. 由 Cherry AI 协助重构 · 站龄 1 年',
    },

    // ============================================================
    // English
    // ============================================================
    'en': {
        'meta.title': 'ADM Domain · Advanced Manufacturing',
        'meta.desc': 'A one-stop platform for 4 user personas (Visitor, Leader, Production, Factory) in advanced manufacturing. Includes 15 core modules: NEA Project, Domain Project, Performance Scorecard, Skills Training, Audit, Lighthouse Factory, etc.',
        'skip.link': 'Skip to main content',

        'search.placeholder': 'Search modules, docs, cases… (try NEA, training, audit)',
        'search.empty': 'No matches. Try NEA, training, audit…',

        'nav.persona': 'Personas',
        'nav.modules': 'Modules',
        'nav.dashboards': 'Dashboards',
        'nav.board': 'Feedback',

        'hero.eyebrow': 'INDUSTRY 5.0 · NEA DOMAIN',
        'hero.title': 'A one-stop platform for advanced manufacturing',
        'hero.sub': 'From project kickoff to lighthouse factories, from skills training to audit traceability — 4 user types, 15 core modules, get to what you need by your role.',

        'persona.A.tag': 'Visitor / Beginner',
        'persona.A.q': '"What is this platform?"',
        'persona.A.cta': 'Open Visitor view →',
        'persona.B.tag': 'Leader',
        'persona.B.q': '"How is progress and performance?"',
        'persona.B.cta': 'Open Leader dashboard →',
        'persona.C.tag': 'Production / Tech',
        'persona.C.q': '"How can I do better?"',
        'persona.C.cta': 'Open Production/Tech dashboard →',
        'persona.C.more': '+ 4 more',
        'persona.C.badge': 'Widest',
        'persona.D.tag': 'Factory Manager',
        'persona.D.q': '"Is our factory compliant?"',
        'persona.D.cta': 'Open Factory dashboard →',

        'modules.eyebrow': '15 core modules',
        'modules.title': 'A problem-driven index, not a technical taxonomy',
        'modules.desc': 'Every module is tagged with applicable personas. Hover for details, click to enter.',
        'filter.all': 'All (15)',
        'filter.A': '👀 Visitor',
        'filter.B': '📊 Leader',
        'filter.C': '🛠️ Production',
        'filter.D': '🏭 Factory',

        'mod.A.title': 'Organization Chart',
        'mod.A.en': 'Organization Chart',
        'mod.A.desc': 'Hierarchy and reporting lines for NEA, domain projects, and factory teams.',
        'mod.B.title': 'NEA Project',
        'mod.B.en': 'NEA Project',
        'mod.B.desc': 'Next Era of Advanced Manufacturing — project initiation and progress.',
        'mod.C.title': 'Domain Project',
        'mod.C.en': 'Domain Project',
        'mod.C.desc': 'Domain-level project collaboration and milestones by industry / region / theme.',
        'mod.D.title': 'Performance Scorecard',
        'mod.D.en': 'Performance Scorecard',
        'mod.D.desc': 'Real-time scorecard of key KPIs / OEE / first-pass yield with benchmark analysis.',
        'mod.E.title': 'Skills List',
        'mod.E.en': 'Skills List',
        'mod.E.desc': 'ADM skills matrix and personal capability map by role and level.',
        'mod.F.title': 'Training Online',
        'mod.F.en': 'Training Online',
        'mod.F.desc': 'Video courses, certification paths, online exams, learning-trace tracking.',
        'mod.G.title': 'Visit Needs List',
        'mod.G.en': 'Visit Needs List',
        'mod.G.desc': 'Submit, approve, and schedule internal / external factory visits.',
        'mod.H.title': 'Lighthouse Factory',
        'mod.H.en': 'Lighthouse Factory BP/GP Sharing',
        'mod.H.desc': 'Visit world-class lighthouse factories and share best practices.',
        'mod.I.title': 'GP/BP Sharing',
        'mod.I.en': 'GP/BP Sharing',
        'mod.I.desc': 'Good Practice / Best Practice across factories, projects, and domains.',
        'mod.J.title': 'Tools',
        'mod.J.en': 'Tools (AI / Useful Methods)',
        'mod.J.desc': 'AI tools, useful methodologies, downloadable templates for production/tech staff.',
        'mod.K.title': 'Audit Calendar',
        'mod.K.en': 'Audit Application & Calendar',
        'mod.K.desc': 'Submit internal / external / certification audits + a year-long audit calendar.',
        'mod.L.title': 'Traceability',
        'mod.L.en': 'Traceability',
        'mod.L.desc': 'Full-chain traceability of material, process, and equipment — one-click lookup.',
        'mod.M.title': 'API / Scan',
        'mod.M.en': 'API Link (Scan ABC)',
        'mod.M.desc': 'API documentation and scan-code integration with MES / ERP / WMS.',
        'mod.N.title': 'Sourcing',
        'mod.N.en': 'Sourcing Searching',
        'mod.N.desc': 'Unified search for supplier sourcing, price comparison, and history.',
        'mod.O.title': 'Q&A',
        'mod.O.en': 'Q&A / Feedback',
        'mod.O.desc': 'Questions, suggestions, feedback — platform ops will reply within 24h.',

        'tag.A': 'Visitor',
        'tag.B': 'Leader',
        'tag.C': 'Production',
        'tag.D': 'Factory',

        'dashboards.eyebrow': 'Dashboards by role',
        'dashboards.title': '4 one-stop workspaces',
        'dashboards.desc': 'Each dashboard bundles the 4-6 most-used modules for a persona. Click a persona card to jump and highlight.',
        'dash.A.title': 'Visitor · Discover',
        'dash.A.kpi1': 'core modules',
        'dash.A.kpi2': 'user personas',
        'dash.A.item1': '📘 What is it → B NEA Project',
        'dash.A.item2': '🌍 What is in progress → C Domain Project',
        'dash.A.item3': '✨ Who is best → I GP/BP Sharing',
        'dash.B.title': 'Leader · Lead',
        'dash.B.kpi1': 'Scorecard',
        'dash.B.kpi2': 'Org Chart',
        'dash.B.item1': '📈 Performance → D Scorecard',
        'dash.B.item2': '📂 Who is moving → A Org Chart',
        'dash.B.item3': '📰 Industry news → I GP/BP Sharing',
        'dash.C.title': 'Production/Tech · Build',
        'dash.C.kpi1': 'Skills List',
        'dash.C.kpi2': 'Training',
        'dash.C.kpi3': 'AI Tools',
        'dash.C.kpi4': 'Audit',
        'dash.C.item1': '📚 Learn → E Skills + F Training',
        'dash.C.item2': '🤖 Use AI → J Tools',
        'dash.C.item3': '🏆 Visit lighthouse → H Lighthouse Factory',
        'dash.C.badge': 'Widest',
        'dash.D.title': 'Factory · Operate',
        'dash.D.kpi1': 'Audit',
        'dash.D.kpi2': 'Traceability',
        'dash.D.item1': '✅ Apply audit → K Audit',
        'dash.D.item2': '🔎 Trace → L Traceability',
        'dash.D.item3': '🔌 Integrate → M API',

        'board.eyebrow': 'Q&A · Feedback',
        'board.title': 'Have a thought? Just say it. We reply within 24h.',
        'board.desc': 'Messages are saved in your browser. Operators will sync to GitHub Discussions and reply.',
        'form.h3': '📝 Write a message',
        'form.persona': 'Your role (anonymous ok)',
        'form.name': 'Name',
        'form.name.placeholder': 'e.g. Engineer Zhang / Director Wang',
        'form.message': 'Message',
        'form.message.placeholder': 'Suggestions, questions, bug reports welcome… (max 500 chars)',
        'form.hint': 'Press ⌘+Enter to submit',
        'form.submit': 'Submit',
        'list.h3': '💬 All messages',
        'list.filter.all': 'All',
        'list.filter.A': 'Visitor',
        'list.filter.B': 'Leader',
        'list.filter.C': 'Production',
        'list.filter.D': 'Factory',
        'list.empty': 'No messages yet. Be the first?',
        'list.empty.emoji': '🌱',
        'msg.reply': '↩ Reply',
        'msg.delete': '🗑 Delete',
        'msg.delete.confirm': 'Delete this message?',
        'msg.reply.prompt': 'Reply:',
        'msg.reply.name': 'Reply by:',
        'msg.reply.name.default': 'Ops',
        'msg.time.just': 'just now',
        'msg.time.mins': ' min ago',
        'msg.time.hours': ' h ago',
        'msg.time.days': ' d ago',

        'footer.tagline': 'Advanced Manufacturing Domain · Powered by 4 personas × 15 modules',
        'footer.col1.title': 'Personas',
        'footer.col1.l1': 'Visitor view',
        'footer.col1.l2': 'Leader view',
        'footer.col1.l3': 'Production/Tech view',
        'footer.col1.l4': 'Factory view',
        'footer.col2.title': 'Modules',
        'footer.col2.l1': 'B NEA Project',
        'footer.col2.l2': 'D Scorecard',
        'footer.col2.l3': 'F Training',
        'footer.col2.l4': 'K Audit',
        'footer.col3.title': 'Resources',
        'footer.col3.l1': 'GitHub repo',
        'footer.col3.l2': 'Feedback',
        'footer.col3.l3': 'Back to top ↑',
        'footer.bottom': '© 2026 ADM Domain. Refactored with Cherry AI · Site age: 1 year',
    },

    // ============================================================
    // Français
    // ============================================================
    'fr': {
        'meta.title': 'ADM · Domaine de Fabrication Avancée',
        'meta.desc': 'Plateforme tout-en-un pour 4 profils (Visiteur, Leader, Production, Usine) en fabrication avancée. 15 modules : Projet NEA, Projet de Domaine, Tableau de Bord Performance, Formation, Audit, Usine Lighthouse, etc.',
        'skip.link': 'Aller au contenu principal',

        'search.placeholder': 'Rechercher modules, docs, cas… (essayez NEA, formation, audit)',
        'search.empty': 'Aucun résultat. Essayez NEA, formation, audit…',

        'nav.persona': 'Profils',
        'nav.modules': 'Modules',
        'nav.dashboards': 'Tableaux',
        'nav.board': 'Avis',

        'hero.eyebrow': 'INDUSTRIE 5.0 · DOMAINE NEA',
        'hero.title': 'Une plateforme tout-en-un pour la fabrication avancée',
        'hero.sub': 'Du lancement de projet aux usines lighthouse, de la formation des compétences à la traçabilité d\'audit — 4 profils, 15 modules, accédez à ce dont vous avez besoin selon votre rôle.',

        'persona.A.tag': 'Visiteur / Débutant',
        'persona.A.q': '"À quoi sert cette plateforme ?"',
        'persona.A.cta': 'Ouvrir la vue Visiteur →',
        'persona.B.tag': 'Leader',
        'persona.B.q': '"Quels progrès et performances ?"',
        'persona.B.cta': 'Ouvrir le tableau Leader →',
        'persona.C.tag': 'Production / Tech',
        'persona.C.q': '"Comment faire mieux ?"',
        'persona.C.cta': 'Ouvrir le tableau Production/Tech →',
        'persona.C.more': '+ 4 autres',
        'persona.C.badge': 'Le plus large',
        'persona.D.tag': 'Directeur d\'usine',
        'persona.D.q': '"Notre usine est-elle conforme ?"',
        'persona.D.cta': 'Ouvrir le tableau Usine →',

        'modules.eyebrow': '15 modules centraux',
        'modules.title': 'Index piloté par les problèmes, pas par la technique',
        'modules.desc': 'Chaque module est étiqueté par profil applicable. Survolez pour détails, cliquez pour entrer.',
        'filter.all': 'Tous (15)',
        'filter.A': '👀 Visiteur',
        'filter.B': '📊 Leader',
        'filter.C': '🛠️ Production',
        'filter.D': '🏭 Usine',

        'mod.A.title': 'Organigramme',
        'mod.A.en': 'Organization Chart',
        'mod.A.desc': 'Hiérarchie et reporting pour NEA, projets de domaine et équipes d\'usine.',
        'mod.B.title': 'Projet NEA',
        'mod.B.en': 'NEA Project',
        'mod.B.desc': 'Next Era of Advanced Manufacturing — lancement et avancement des projets.',
        'mod.C.title': 'Projet de Domaine',
        'mod.C.en': 'Domain Project',
        'mod.C.desc': 'Collaboration et jalons par industrie / région / thème.',
        'mod.D.title': 'Tableau de Bord',
        'mod.D.en': 'Performance Scorecard',
        'mod.D.desc': 'Tableau de bord temps réel des KPIs / OEE / taux de réussite avec benchmarking.',
        'mod.E.title': 'Liste des Compétences',
        'mod.E.en': 'Skills List',
        'mod.E.desc': 'Matrice de compétences ADM et carte de capacités par poste et niveau.',
        'mod.F.title': 'Formation en Ligne',
        'mod.F.en': 'Training Online',
        'mod.F.desc': 'Cours vidéo, parcours de certification, examens en ligne, suivi d\'apprentissage.',
        'mod.G.title': 'Besoins de Visite',
        'mod.G.en': 'Visit Needs List',
        'mod.G.desc': 'Soumettre, approuver et planifier les visites internes / externes d\'usine.',
        'mod.H.title': 'Usine Lighthouse',
        'mod.H.en': 'Lighthouse Factory BP/GP Sharing',
        'mod.H.desc': 'Visiter les usines lighthouse de classe mondiale et partager les bonnes pratiques.',
        'mod.I.title': 'Partage GP/BP',
        'mod.I.en': 'GP/BP Sharing',
        'mod.I.desc': 'Bonnes Pratiques / Meilleures Pratiques à travers usines, projets et domaines.',
        'mod.J.title': 'Boîte à Outils',
        'mod.J.en': 'Tools (AI / Useful Methods)',
        'mod.J.desc': 'Outils IA, méthodologies utiles, modèles téléchargeables pour la production/tech.',
        'mod.K.title': 'Audit / Calendrier',
        'mod.K.en': 'Audit Application & Calendar',
        'mod.K.desc': 'Soumettre audits internes / externes / certification + calendrier annuel.',
        'mod.L.title': 'Traçabilité',
        'mod.L.en': 'Traceability',
        'mod.L.desc': 'Traçabilité de bout en bout matériau, procédé, équipement — recherche en un clic.',
        'mod.M.title': 'API / Scan',
        'mod.M.en': 'API Link (Scan ABC)',
        'mod.M.desc': 'Documentation API et intégration scan-code avec MES / ERP / WMS.',
        'mod.N.title': 'Sourcing',
        'mod.N.en': 'Sourcing Searching',
        'mod.N.desc': 'Recherche unifiée de fournisseurs, comparaison de prix, historique.',
        'mod.O.title': 'Q&R',
        'mod.O.en': 'Q&A / Feedback',
        'mod.O.desc': 'Questions, suggestions, retours — réponse des opérations sous 24h.',

        'tag.A': 'Visiteur',
        'tag.B': 'Leader',
        'tag.C': 'Production',
        'tag.D': 'Usine',

        'dashboards.eyebrow': 'Tableaux par rôle',
        'dashboards.title': '4 espaces de travail tout-en-un',
        'dashboards.desc': 'Chaque tableau regroupe les 4-6 modules les plus utilisés. Cliquez sur un profil pour sauter et surligner.',
        'dash.A.title': 'Visiteur · Découvrir',
        'dash.A.kpi1': 'modules centraux',
        'dash.A.kpi2': 'profils',
        'dash.A.item1': '📘 Qu\'est-ce que c\'est → B Projet NEA',
        'dash.A.item2': '🌍 En cours → C Projet de Domaine',
        'dash.A.item3': '✨ Qui est meilleur → I Partage GP/BP',
        'dash.B.title': 'Leader · Piloter',
        'dash.B.kpi1': 'Scorecard',
        'dash.B.kpi2': 'Organigramme',
        'dash.B.item1': '📈 Performance → D Scorecard',
        'dash.B.item2': '📂 Qui avance → A Organigramme',
        'dash.B.item3': '📰 Actualités → I Partage GP/BP',
        'dash.C.title': 'Production/Tech · Construire',
        'dash.C.kpi1': 'Compétences',
        'dash.C.kpi2': 'Formation',
        'dash.C.kpi3': 'Outils IA',
        'dash.C.kpi4': 'Audit',
        'dash.C.item1': '📚 Apprendre → E Compétences + F Formation',
        'dash.C.item2': '🤖 Utiliser l\'IA → J Outils',
        'dash.C.item3': '🏆 Visiter lighthouse → H Usine Lighthouse',
        'dash.C.badge': 'Le plus large',
        'dash.D.title': 'Usine · Opérer',
        'dash.D.kpi1': 'Audit',
        'dash.D.kpi2': 'Traçabilité',
        'dash.D.item1': '✅ Demander audit → K Audit',
        'dash.D.item2': '🔎 Tracer → L Traçabilité',
        'dash.D.item3': '🔌 Intégrer → M API',

        'board.eyebrow': 'Q&R · Avis',
        'board.title': 'Une idée ? Dites-le. Réponse sous 24h.',
        'board.desc': 'Les messages sont sauvegardés dans votre navigateur. Synchronisation sur GitHub Discussions par les opérateurs.',
        'form.h3': '📝 Écrire un message',
        'form.persona': 'Votre rôle (anonyme ok)',
        'form.name': 'Nom',
        'form.name.placeholder': 'ex. Ingénieur Zhang / Directeur Wang',
        'form.message': 'Message',
        'form.message.placeholder': 'Suggestions, questions, rapports de bug bienvenus… (max 500 car.)',
        'form.hint': '⌘+Entrée pour soumettre',
        'form.submit': 'Soumettre',
        'list.h3': '💬 Tous les messages',
        'list.filter.all': 'Tous',
        'list.filter.A': 'Visiteur',
        'list.filter.B': 'Leader',
        'list.filter.C': 'Production',
        'list.filter.D': 'Usine',
        'list.empty': 'Pas encore de message. Soyez le premier ?',
        'list.empty.emoji': '🌱',
        'msg.reply': '↩ Répondre',
        'msg.delete': '🗑 Supprimer',
        'msg.delete.confirm': 'Supprimer ce message ?',
        'msg.reply.prompt': 'Réponse :',
        'msg.reply.name': 'Répondu par :',
        'msg.reply.name.default': 'Ops',
        'msg.time.just': 'à l\'instant',
        'msg.time.mins': ' min',
        'msg.time.hours': ' h',
        'msg.time.days': ' j',

        'footer.tagline': 'Domaine de Fabrication Avancée · 4 profils × 15 modules',
        'footer.col1.title': 'Profils',
        'footer.col1.l1': 'Vue Visiteur',
        'footer.col1.l2': 'Vue Leader',
        'footer.col1.l3': 'Vue Production/Tech',
        'footer.col1.l4': 'Vue Usine',
        'footer.col2.title': 'Modules',
        'footer.col2.l1': 'B Projet NEA',
        'footer.col2.l2': 'D Scorecard',
        'footer.col2.l3': 'F Formation',
        'footer.col2.l4': 'K Audit',
        'footer.col3.title': 'Ressources',
        'footer.col3.l1': 'Dépôt GitHub',
        'footer.col3.l2': 'Avis',
        'footer.col3.l3': 'Haut de page ↑',
        'footer.bottom': '© 2026 ADM Domain. Refactorisé avec Cherry AI · 1 an',
    }
};

// 当前语言（默认从浏览器探测）
function detectInitialLang() {
    // 1. URL 参数 ?lang=xx（最高优先级，便于分享带语言链接）
    try {
        const url = new URLSearchParams(location.search);
        const urlLang = url.get('lang');
        if (urlLang && I18N[urlLang]) return urlLang;
    } catch (e) {}
    // 2. localStorage
    const saved = localStorage.getItem('adm_lang');
    if (saved && I18N[saved]) return saved;
    // 3. 浏览器语言
    const browser = (navigator.language || 'zh').slice(0, 2).toLowerCase();
    if (I18N[browser]) return browser;
    // 4. 兜底中文
    return 'zh';
}

// 应用一套语言到 DOM
function applyLang(lang) {
    if (!I18N[lang]) lang = 'zh';
    const dict = I18N[lang];

    document.documentElement.lang = lang;

    // textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = dict[key];
        if (val !== undefined) el.textContent = val;
    });
    // placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = dict[key];
        if (val !== undefined) el.placeholder = val;
    });
    // title (tooltip) / aria-label
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        const val = dict[key];
        if (val !== undefined) el.title = val;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        const val = dict[key];
        if (val !== undefined) el.setAttribute('aria-label', val);
    });

    // lang selector 高亮
    document.querySelectorAll('.lang-option').forEach(o => {
        o.classList.toggle('active', o.dataset.lang === lang);
    });

    localStorage.setItem('adm_lang', lang);
    window.ADM_LANG = lang;
}

// 暴露到全局
window.I18N = I18N;
window.applyLang = applyLang;
window.detectInitialLang = detectInitialLang;
