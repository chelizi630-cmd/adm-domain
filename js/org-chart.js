/* ============================================================
   ADM Domain — org-chart.js
   Standalone page for A 组织架构详情
   - i18n 初始化
   - 语言切换器
   - 2026 / 2030 Tab 切换
   - 移动端汉堡菜单
   ============================================================ */

function orgChartInit() {
    // --- i18n init ---
    if (typeof detectInitialLang === 'function' && typeof applyLang === 'function') {
        const initialLang = detectInitialLang();
        applyLang(initialLang);

        // 更新语言按钮显示
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

        // 语言菜单开关
        const langBtn = document.getElementById('langBtn');
        const langMenu = document.getElementById('langMenu');
        langBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = langMenu.classList.toggle('open');
            langBtn.setAttribute('aria-expanded', isOpen);
        });
        document.addEventListener('click', (e) => {
            if (!document.getElementById('langSwitcher')?.contains(e.target)) {
                langMenu?.classList.remove('open');
                langBtn?.setAttribute('aria-expanded', 'false');
            }
        });
        document.querySelectorAll('.lang-option').forEach((opt) => {
            opt.addEventListener('click', () => {
                const lang = opt.dataset.lang;
                if (lang) {
                    applyLang(lang);
                    refreshLangButton(lang);
                    langMenu.classList.remove('open');
                    langBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- Tab 切换（2026 当前 ⇄ 2030 未来） ---
    function switchOrgTab(target) {
        if (!target) return;
        const orgTabs = document.querySelectorAll('.org-tab');
        const orgViews = document.querySelectorAll('.org-view[data-view]');
        orgTabs.forEach((t) => {
            const isActive = t.getAttribute('data-tab') === target;
            t.classList.toggle('active', isActive);
            t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        orgViews.forEach((view) => {
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

    // --- 移动端汉堡菜单 ---
    const hamburger = document.getElementById('hamburger');
    const primaryNav = document.querySelector('.primary-nav');
    if (hamburger && primaryNav) {
        hamburger.addEventListener('click', () => {
            const isOpen = primaryNav.classList.toggle('open');
            hamburger.setAttribute('aria-expanded', isOpen);
        });
        primaryNav.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', () => {
                primaryNav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }
}

// domReady 兜底
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', orgChartInit);
} else {
    orgChartInit();
}
