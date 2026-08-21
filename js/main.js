/* ============================================================
   ADM Domain — main.js (v2)
   功能：
   1. 站内搜索（fuzzy + JSON 索引）
   2. 留言板（localStorage + 4 画像 + 回复）
   3. 4 画像 → 看板 高亮联动
   4. 模块按画像筛选
   5. ⌘+K / Ctrl+K 唤起搜索
   6. 移动端汉堡菜单
   ============================================================ */

// ====== 站内搜索索引（15 个模块 + 4 persona） ======
// 多语言：在 i18n.js 里定义字典 + key 引用
const SEARCH_INDEX = [
    { id: 'A', titleKey: 'mod.A.title', enKey: 'mod.A.en', descKey: 'mod.A.desc', keywords: '组织架构 团队 层级 汇报 org chart hierarchy team organization', personas: ['B', 'D'] },
    { id: 'B', titleKey: 'mod.B.title', enKey: 'mod.B.en', descKey: 'mod.B.desc', keywords: 'NEA project 立项 项目 next era advanced manufacturing project initiative', personas: ['A', 'B', 'C'] },
    { id: 'C', titleKey: 'mod.C.title', enKey: 'mod.C.en', descKey: 'mod.C.desc', keywords: '领域 行业 区域 domain project industry theme region milestone', personas: ['A', 'B', 'C'] },
    { id: 'D', titleKey: 'mod.D.title', enKey: 'mod.D.en', descKey: 'mod.D.desc', keywords: '绩效 KPI OEE 良品率 指标 scorecard performance metric benchmark', personas: ['B', 'C', 'D'] },
    { id: 'E', titleKey: 'mod.E.title', enKey: 'mod.E.en', descKey: 'mod.E.desc', keywords: '技能 清单 岗位 等级 能力 skills matrix capability training needs', personas: ['C'] },
    { id: 'F', titleKey: 'mod.F.title', enKey: 'mod.F.en', descKey: 'mod.F.desc', keywords: '培训 在线 课程 认证 考试 视频 training course certification exam e-learning video', personas: ['C'] },
    { id: 'G', titleKey: 'mod.G.title', enKey: 'mod.G.en', descKey: 'mod.G.desc', keywords: '参观 访客 需求 申请 visit factory tour schedule', personas: ['C'] },
    { id: 'H', titleKey: 'mod.H.title', enKey: 'mod.H.en', descKey: 'mod.H.desc', keywords: '灯塔 工厂 参观 最佳实践 lighthouse factory BP GP best practice', personas: ['C'] },
    { id: 'I', titleKey: 'mod.I.title', enKey: 'mod.I.en', descKey: 'mod.I.desc', keywords: '最佳实践 分享 GP BP good practice best 案例 case study', personas: ['A', 'B', 'C', 'D'] },
    { id: 'J', titleKey: 'mod.J.title', enKey: 'mod.J.en', descKey: 'mod.J.desc', keywords: '工具 AI 方法 模板 工具箱 tools template method AI methodology download', personas: ['C'] },
    { id: 'K', titleKey: 'mod.K.title', enKey: 'mod.K.en', descKey: 'mod.K.desc', keywords: '审核 申请 日历 审计 认证 audit certification calendar 审核 申请', personas: ['C', 'D'] },
    { id: 'L', titleKey: 'mod.L.title', enKey: 'mod.L.en', descKey: 'mod.L.desc', keywords: '追溯 物料 工艺 设备 反查 traceability material process equipment lookup', personas: ['D'] },
    { id: 'M', titleKey: 'mod.M.title', enKey: 'mod.M.en', descKey: 'mod.M.desc', keywords: 'API 接口 集成 扫码 MES ERP WMS 集成 integration scan', personas: ['D'] },
    { id: 'N', titleKey: 'mod.N.title', enKey: 'mod.N.en', descKey: 'mod.N.desc', keywords: '寻源 供应商 比价 sourcing supplier price compare search', personas: ['D'] },
    { id: 'O', titleKey: 'mod.O.title', enKey: 'mod.O.en', descKey: 'mod.O.desc', keywords: '留言 反馈 Q A feedback question suggestion', personas: ['A', 'B', 'C', 'D'] },
    { id: 'persona-A', titleKey: 'persona.A.tag', enKey: null, descKey: 'persona.A.q', keywords: '访客 入门 新手 beginner visitor guest discover 入门', personas: ['A'] },
    { id: 'persona-B', titleKey: 'persona.B.tag', enKey: null, descKey: 'persona.B.q', keywords: '领导 管理者 决策 leader executive management 领导', personas: ['B'] },
    { id: 'persona-C', titleKey: 'persona.C.tag', enKey: null, descKey: 'persona.C.q', keywords: '生产 技术 工程师 操作员 production engineer technician 构建 build', personas: ['C'] },
    { id: 'persona-D', titleKey: 'persona.D.tag', enKey: null, descKey: 'persona.D.q', keywords: '工厂 厂长 总监 factory director plant manager operate 运营', personas: ['D'] }
];

function searchIndexResolved() {
    const lang = window.ADM_LANG || 'zh';
    const t = (window.I18N && window.I18N[lang]) || (window.I18N && window.I18N.zh) || {};
    return SEARCH_INDEX.map(item => {
        const title = t[item.titleKey] || item.titleKey;
        const en = item.enKey ? (t[item.enKey] || '') : '';
        const desc = t[item.descKey] || '';
        return { ...item, title, desc, en };
    });
}

// ====== 简易 fuzzy 匹配 ======
function fuzzyScore(query, text) {
    if (!query) return 0;
    const q = query.toLowerCase().trim();
    const t = text.toLowerCase();
    if (t.includes(q)) return 100 - (t.indexOf(q) * 0.5);   // 越靠前分越高
    // 字符级模糊
    let qi = 0;
    for (let i = 0; i < t.length && qi < q.length; i++) {
        if (t[i] === q[qi]) qi++;
    }
    return qi === q.length ? 30 : 0;
}

function searchSite(query) {
    if (!query || !query.trim()) return [];
    const q = query.trim();
    const items = searchIndexResolved();
    return items
        .map(item => {
            const score = Math.max(
                fuzzyScore(q, item.title),
                fuzzyScore(q, item.desc),
                fuzzyScore(q, item.en || ''),
                fuzzyScore(q, item.keywords)
            );
            return { ...item, _score: score };
        })
        .filter(item => item._score > 0)
        .sort((a, b) => b._score - a._score)
        .slice(0, 8);
}

function personaBadge(p) {
    const lang = window.ADM_LANG || 'zh';
    const labels = {
        zh: { A: '访客', B: '领导', C: '生产', D: '工厂' },
        en: { A: 'Visitor', B: 'Leader', C: 'Production', D: 'Factory' },
        fr: { A: 'Visiteur', B: 'Leader', C: 'Production', D: 'Usine' }
    };
    return `<span class="tag-pill p-${p}">${(labels[lang] || labels.zh)[p] || p}</span>`;
}

function renderSearchResults(results) {
    const box = document.getElementById('searchResults');
    const lang = window.ADM_LANG || 'zh';
    const t = (window.I18N && window.I18N[lang]) || window.I18N.zh;
    if (!results.length) {
        box.innerHTML = `<div class="search-empty">${t['search.empty'] || '没有匹配结果'}</div>`;
        box.hidden = false;
        return;
    }
    box.innerHTML = results.map(r => {
        const isPersona = r.id.startsWith('persona-');
        const anchor = isPersona ? '#persona' : '#modules';
        return `
            <div class="search-result" data-anchor="${anchor}">
                <h4>${r.id.startsWith('persona-') ? '' : '<span style="font-family:JetBrains Mono,monospace;color:var(--primary);margin-right:6px;">' + r.id + '</span>'}${r.title}</h4>
                <p>${r.desc}</p>
                <div class="sr-tags">${(r.personas || []).map(personaBadge).join('')}</div>
            </div>
        `;
    }).join('');
    box.hidden = false;

    box.querySelectorAll('.search-result').forEach(el => {
        el.addEventListener('click', () => {
            const anchor = el.getAttribute('data-anchor');
            document.getElementById('searchInput').value = '';
            box.hidden = true;
            document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ====== 留言板 (localStorage + GAS 后端) ======
const BOARD_KEY = 'adm_board_messages_v1';

// ★ 部署新的 GAS 留言后端后，把下面的 URL 改成真正的 /exec 端点
const GAS_URL = 'https://script.google.com/macros/s/PASTE_NEW_DEPLOYMENT_ID/exec';
const GAS_TIMEOUT_MS = 4000;

function gasFetch(params = {}) {
    const u = new URL(GAS_URL);
    Object.entries(params).forEach(([k, v]) => u.searchParams.set(k, v));
    return Promise.race([
        fetch(u.toString(), { method: 'GET', redirect: 'follow' }),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), GAS_TIMEOUT_MS)),
    ]);
}

function gasPost(body) {
    return Promise.race([
        fetch(GAS_URL, {
            method: 'POST',
            redirect: 'follow',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(body),
        }),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), GAS_TIMEOUT_MS)),
    ]);
}

function normalizeId(s) { return String(s || '').trim().slice(0, 64); }

async function postMessageToGAS(msg) {
    try {
        const r = await gasPost({ action: 'submit', ...msg });
        const data = await r.json();
        if (!data || !data.ok) throw new Error((data && data.error) || 'unknown');
        return { ok: true, id: data.id || msg.id };
    } catch (err) {
        return { ok: false, error: String((err && err.message) || err) };
    }
}

async function fetchMessagesFromGAS() {
    try {
        const r = await gasFetch({ action: 'list', limit: '200' });
        const data = await r.json();
        if (!data || !data.ok || !Array.isArray(data.messages)) throw new Error('bad payload');
        return data.messages;
    } catch {
        return null;
    }
}

function mergeMessages(local, remote) {
    // remote 是 source of truth；local 用来兜底 + 暂存离线提交
    const byId = new Map();
    [...(remote || []), ...(local || [])].forEach(m => {
        if (!m || !m.id) return;
        const id = normalizeId(m.id);
        if (!id) return;
        if (!byId.has(id)) {
            byId.set(id, m);
        } else {
            const cur = byId.get(id);
            const curReplies = (cur.replies || []).length;
            const newReplies = (m.replies || []).length;
            byId.set(id, newReplies > curReplies ? m : cur);
        }
    });
    return Array.from(byId.values()).sort((a, b) => (b.time || 0) - (a.time || 0));
}

function loadBoard() {
    try {
        return JSON.parse(localStorage.getItem(BOARD_KEY) || '[]');
    } catch { return []; }
}
function saveBoard(arr) {
    try { localStorage.setItem(BOARD_KEY, JSON.stringify(arr)); } catch {}
}
function defaultSeed() {
    // 首访给一些示例留言
    if (loadBoard().length > 0) return;
    const now = Date.now();
    const seed = [
        { id: 's1', persona: 'C', name: '张工', message: '技能清单里能否加个"AI 工具应用"维度？现在用 ChatGPT 优化工艺参数已经成为一线必备了。', time: now - 86400000 * 2, replies: [
            { name: '运营', time: now - 86400000 * 1.5, text: '已记录，下个版本把 AI 工具熟练度纳入技能矩阵。' }
        ] },
        { id: 's2', persona: 'B', name: '王副总', message: '建议绩效计分卡加一个"行业对标"模块，能看到我们和同行业 TOP 10 的差距。', time: now - 86400000, replies: [
            { name: '运营', time: now - 86400000 * 0.8, text: '已在对接数据中，预计 2 周内上线。' },
            { name: '陈数据', time: now - 86400000 * 0.5, text: '已联系 Gartner 数据源，对标维度会按子行业细分。' }
        ] },
        { id: 's3', persona: 'A', name: '匿名', message: '刚接触 ADM，请问 NEA 和普通"信息化项目"有什么区别？', time: now - 3600000, replies: [] }
    ];
    saveBoard(seed);
}

function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function timeAgo(ts) {
    const diff = Date.now() - ts;
    const lang = window.ADM_LANG || 'zh';
    const t = (window.I18N && window.I18N[lang]) || window.I18N.zh;
    if (diff < 60000) return t['msg.time.just'] || '刚刚';
    if (diff < 3600000) return Math.floor(diff / 60000) + (t['msg.time.mins'] || ' 分钟前');
    if (diff < 86400000) return Math.floor(diff / 3600000) + (t['msg.time.hours'] || ' 小时前');
    if (diff < 604800000) return Math.floor(diff / 86400000) + (t['msg.time.days'] || ' 天前');
    return new Date(ts).toLocaleDateString(lang === 'zh' ? 'zh-CN' : lang);
}

function renderBoard(filterPersona = 'all') {
    const list = document.getElementById('boardList');
    const empty = document.getElementById('boardEmpty');
    const msgs = loadBoard()
        .filter(m => filterPersona === 'all' || m.persona === filterPersona)
        .sort((a, b) => b.time - a.time);

    const lang = window.ADM_LANG || 'zh';
    const t = (window.I18N && window.I18N[lang]) || window.I18N.zh;
    const personaLabels = {
        zh: { A: '访客', B: '领导', C: '生产', D: '工厂' },
        en: { A: 'Visitor', B: 'Leader', C: 'Production', D: 'Factory' },
        fr: { A: 'Visiteur', B: 'Leader', C: 'Production', D: 'Usine' }
    }[lang] || { A: '访客', B: '领导', C: '生产', D: '工厂' };

    document.getElementById('msgCount').textContent = msgs.length;

    if (!msgs.length) {
        list.innerHTML = '';
        empty.style.display = 'block';
        return;
    }
    empty.style.display = 'none';

    list.innerHTML = msgs.map(m => `
        <li class="msg-item" data-id="${m.id}">
            <div class="msg-head">
                <div class="msg-avatar">${escapeHtml((m.name || '匿')[0])}</div>
                <span class="msg-name">${escapeHtml(m.name || '匿名')}</span>
                <span class="msg-persona ${m.persona}">${personaLabels[m.persona] || m.persona}</span>
                <span class="msg-time">${timeAgo(m.time)}</span>
            </div>
            <div class="msg-body">${escapeHtml(m.message)}</div>
            ${(m.replies || []).map(r => `
                <div class="msg-reply">
                    <span class="reply-tag">${(lang === 'en' ? 'Reply · ' : lang === 'fr' ? 'Réponse · ' : '回复 · ')}${escapeHtml(r.name)}</span>${escapeHtml(r.text)}<br>
                    <span style="font-size:11px;color:var(--ink-3);">${timeAgo(r.time)}</span>
                </div>
            `).join('')}
            <div class="msg-actions">
                <button class="reply-btn" data-id="${m.id}">${t['msg.reply'] || '↩ 回复'}</button>
                <button class="del" data-id="${m.id}">${t['msg.delete'] || '🗑 删除'}</button>
            </div>
        </li>
    `).join('');

    // 绑定操作
    list.querySelectorAll('.del').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            if (!confirm(t['msg.delete.confirm'] || '确定删除这条留言？')) return;
            const arr = loadBoard().filter(m => m.id !== id);
            saveBoard(arr);
            renderBoard(document.getElementById('msgFilter').value);
        });
    });
    list.querySelectorAll('.reply-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const reply = prompt(t['msg.reply.prompt'] || '回复内容：');
            if (!reply || !reply.trim()) return;
            const name = prompt(t['msg.reply.name'] || '回复人称呼：', t['msg.reply.name.default'] || '运营') || (t['msg.reply.name.default'] || '运营');
            const arr = loadBoard();
            const m = arr.find(x => x.id === id);
            if (m) {
                m.replies = m.replies || [];
                m.replies.push({ name: name.trim(), text: reply.trim(), time: Date.now() });
                saveBoard(arr);
                renderBoard(document.getElementById('msgFilter').value);
            }
        });
    });
}

// ====== 初始化所有交互 ======
// domReady 兏底：脚本位于 body 底部，DOMContentLoaded 可能已 fire 过
function init() {

    // --- i18n 初始化（最先！）---
    const initialLang = detectInitialLang();
    applyLang(initialLang);
    // 更新语言选择器显示（默认中文按钮）
    const langFlag = document.getElementById('langFlag');
    const langCode = document.getElementById('langCode');
    const langLabelMap = {
        zh: ['🇨🇳', '中文'],
        en: ['🇬🇧', 'English'],
        fr: ['🇫🇷', 'Français']
    };
    function refreshLangButton(lang) {
        if (langFlag && langCode) {
            const m = langLabelMap[lang] || langLabelMap.zh;
            langFlag.textContent = m[0];
            langCode.textContent = m[1];
        }
    }
    refreshLangButton(initialLang);
    // 绑定语言切换
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    langBtn?.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = langMenu.classList.toggle('open');
        langBtn.setAttribute('aria-expanded', isOpen);
    });
    document.addEventListener('click', e => {
        if (!document.getElementById('langSwitcher')?.contains(e.target)) {
            langMenu?.classList.remove('open');
            langBtn?.setAttribute('aria-expanded', 'false');
        }
    });
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.dataset.lang;
            applyLang(lang);
            refreshLangButton(lang);
            langMenu.classList.remove('open');
            langBtn.setAttribute('aria-expanded', 'false');
            // 重新渲染动态内容
            renderBoard(document.getElementById('msgFilter').value);
            // 重新跑搜索索引
            if (document.getElementById('searchInput').value.trim()) {
                renderSearchResults(searchSite(document.getElementById('searchInput').value));
            }
        });
    });

    // --- 搜索 ---
    const searchInput = document.getElementById('searchInput');
    const searchBox = document.querySelector('.search-box');
    searchInput.addEventListener('input', e => {
        const q = e.target.value;
        if (!q.trim()) {
            document.getElementById('searchResults').hidden = true;
            return;
        }
        renderSearchResults(searchSite(q));
    });
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) renderSearchResults(searchSite(searchInput.value));
    });
    document.addEventListener('click', e => {
        if (!searchBox.contains(e.target)) document.getElementById('searchResults').hidden = true;
    });

    // ⌘+K / Ctrl+K
    document.addEventListener('keydown', e => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
        if (e.key === 'Escape' && !searchInput.value) {
            document.getElementById('searchResults').hidden = true;
        }
    });

    // --- 留言板 ---
    // 如果后端 (Code.gs) 已经注入留言，检测 <meta name="board-prefilled">
    // 有则跳过 defaultSeed + 首次 renderBoard，避免清空后端渲染的内容
    const prefilled = document.querySelector('meta[name="board-prefilled"]');
    if (prefilled) {
        // 从已渲染的 boardList 同步到 localStorage，让后续提交/筛选可用
        const items = Array.from(document.querySelectorAll('.msg-item')).map(li => ({
            id: li.dataset.id || ('srv-' + Date.now() + Math.random().toString(36).slice(2, 6)),
            persona: (li.querySelector('.msg-persona')?.classList && Array.from(li.querySelector('.msg-persona').classList).find(c => 'ABCD'.includes(c))) || 'A',
            name: li.querySelector('.msg-name')?.textContent || '匿名',
            message: li.querySelector('.msg-body')?.textContent || '',
            time: Date.now(),
            replies: []
        }));
        if (items.length > 0) {
            saveBoard(items);
            const countEl = document.getElementById('msgCount');
            if (countEl) countEl.textContent = String(items.length);
        } else {
            defaultSeed();
            renderBoard();
        }
    } else {
        defaultSeed();
        renderBoard();
    }

    // 启动时优先读 GAS 注入的 <template id="messages-data">（服务端 fetch，绕过浏览器 CSP），
    // 如果失败再 fallback 到客户端 fetchMessagesFromGAS
    (async () => {
        let remote = null;
        try {
            const tmpl = document.getElementById('messages-data');
            if (tmpl) {
                const raw = tmpl.textContent || tmpl.innerHTML || '';
                if (raw) {
                    remote = JSON.parse(raw);
                    if (!Array.isArray(remote)) remote = null;
                }
            }
        } catch (err) {
            console.warn('[adm-board] parse messages-data failed', err);
            remote = null;
        }
        if (!remote) remote = await fetchMessagesFromGAS();
        if (remote) {
            const local = loadBoard();
            saveBoard(mergeMessages(local, remote));
            renderBoard(document.getElementById('msgFilter').value);
        }
    })();

    document.getElementById('boardForm').addEventListener('submit', e => {
        e.preventDefault();
        const fd = new FormData(e.target);
        const message = (fd.get('message') || '').toString().trim();
        const name = (fd.get('name') || '').toString().trim() || '匿名';
        const persona = (fd.get('persona') || 'C').toString();
        if (!message) return;
        const id = 'm' + Date.now() + Math.random().toString(36).slice(2, 6);
        const arr = loadBoard();
        arr.push({ id, persona, name, message, time: Date.now(), replies: [], _pendingSync: true });
        saveBoard(arr);
        e.target.reset();
        renderBoard();

        // 异步 POST 到 GAS；成功清掉 pending，失败保留 localStorage 兜底
        postMessageToGAS({ id, persona, name, message }).then(res => {
            const list = loadBoard();
            const i = list.findIndex(m => m.id === id);
            if (i < 0) return;
            if (res.ok) {
                list[i]._pendingSync = false;
                if (res.id && res.id !== id) list[i].serverId = res.id;
                saveBoard(list);
                renderBoard(document.getElementById('msgFilter').value);
            } else {
                console.warn('[adm-board] GAS submit failed, kept locally:', res.error);
            }
        });

        // 滚到列表
        document.getElementById('boardList').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // ⌘+Enter 快速提交
    document.getElementById('boardForm').addEventListener('keydown', e => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            e.preventDefault();
            e.target.requestSubmit();
        }
    });

    document.getElementById('msgFilter').addEventListener('change', e => {
        renderBoard(e.target.value);
    });

    // --- 模块按画像筛选 ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const moduleCards = document.querySelectorAll('.module-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const f = btn.getAttribute('data-filter');
            moduleCards.forEach(card => {
                if (f === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const personas = (card.getAttribute('data-personas') || '').split(' ');
                    card.classList.toggle('hidden', !personas.includes(f));
                }
            });
        });
    });

    // --- A 组织架构详情：Tab 切换（2026 当前 ⇄ 2030 未来）---
    // 使用事件委托绑在 document 上，避免 DOMContentLoaded 时机问题
    function switchOrgTab(target) {
        if (!target) return;
        const orgTabs = document.querySelectorAll('.org-tab');
        const orgViews = document.querySelectorAll('.org-view[data-view]');
        orgTabs.forEach(t => {
            const isActive = t.getAttribute('data-tab') === target;
            t.classList.toggle('active', isActive);
            t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        orgViews.forEach(view => {
            const isMatch = view.getAttribute('data-view') === target;
            view.hidden = !isMatch;
        });
        // 重新触发 fade-in 动画
        const matched = document.querySelector(`.org-view[data-view="${target}"]`);
        if (matched) {
            matched.style.animation = 'none';
            // force reflow
            // eslint-disable-next-line no-unused-expressions
            matched.offsetHeight;
            matched.style.animation = '';
        }
    }
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.org-tab');
        if (!btn) return;
        const target = btn.getAttribute('data-tab');
        if (target) {
            e.preventDefault();
            switchOrgTab(target);
        }
    });

    // --- Persona 卡片 → 高亮对应看板 ---
    const personaCards = document.querySelectorAll('.persona-card');
    const dashboardCards = document.querySelectorAll('.dashboard-card');

    personaCards.forEach(card => {
        card.addEventListener('click', e => {
            e.preventDefault();
            const p = card.getAttribute('data-persona');
            // 高亮对应看板
            dashboardCards.forEach(d => {
                d.classList.remove('highlight');
                d.classList.toggle('dim', d.getAttribute('data-persona') !== p);
            });
            // 同步筛选模块
            filterBtns.forEach(b => {
                b.classList.toggle('active', b.getAttribute('data-filter') === p);
            });
            moduleCards.forEach(mc => {
                const personas = (mc.getAttribute('data-personas') || '').split(' ');
                mc.classList.toggle('hidden', !personas.includes(p));
            });
            // 滚动到看板
            setTimeout(() => {
                document.getElementById('dashboards').scrollIntoView({ behavior: 'smooth' });
            }, 100);
        });
    });

    // --- 汉堡菜单（移动端） ---
    const hamburger = document.getElementById('hamburger');
    const primaryNav = document.querySelector('.primary-nav');
    hamburger?.addEventListener('click', () => {
        const isOpen = primaryNav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });
    primaryNav?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            primaryNav.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // --- Intersection 滚动动画 ---
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(entries => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    en.target.style.opacity = '1';
                    en.target.style.transform = 'translateY(0)';
                    io.unobserve(en.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.persona-card, .module-card, .dashboard-card, .msg-item').forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(16px)';
            el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
            io.observe(el);
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOMContentLoaded 已 fire 过，立即跑
    init();
}
