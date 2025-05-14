// 导航栏滚动效果
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'bg-opacity-95', 'backdrop-blur-xl', 'shadow-md');
    } else {
        navbar.classList.remove('bg-white', 'bg-opacity-95', 'backdrop-blur-xl', 'shadow-md');
    }
});

// 移动端菜单
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('-translate-y-full')) {
        mobileMenu.classList.remove('-translate-y-full');
        mobileMenu.classList.add('translate-y-0');
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-2xl"></i>';
    } else {
        mobileMenu.classList.add('-translate-y-full');
        mobileMenu.classList.remove('translate-y-0');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars text-2xl"></i>';
    }
});

// FAQ 折叠效果
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const targetId = toggle.getAttribute('data-target');
        const target = document.getElementById(targetId);

        // 切换当前FAQ项的显示状态
        if (target.classList.contains('hidden')) {
            target.classList.remove('hidden');
            toggle.querySelector('i').classList.add('rotate-180');
        } else {
            target.classList.add('hidden');
            toggle.querySelector('i').classList.remove('rotate-180');
        }
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // 如果是移动端，点击导航链接后关闭菜单
        if (!mobileMenu.classList.contains('-translate-y-full')) {
            mobileMenu.classList.add('-translate-y-full');
            mobileMenu.classList.remove('translate-y-0');
            menuBtn.innerHTML = '<i class="fa-solid fa-bars text-2xl"></i>';
        }

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
