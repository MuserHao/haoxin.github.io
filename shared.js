// ========== THEME TOGGLE ==========
(function initTheme() {
    // Theme is set early via inline script in <head> to prevent flash.
    // This just wires up the toggle button and system preference listener.
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateParticleColors();
    }

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        setTheme(current === 'dark' ? 'light' : 'dark');
    });

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'light' : 'dark');
        }
    });
})();

// ========== PARTICLES ==========
function getParticleColors() {
    const style = getComputedStyle(document.documentElement);
    return [
        style.getPropertyValue('--neon-pink').trim() || '#ff006e',
        style.getPropertyValue('--neon-cyan').trim() || '#00f0ff',
        style.getPropertyValue('--neon-purple').trim() || '#b026ff',
        style.getPropertyValue('--neon-green').trim() || '#39ff14'
    ];
}

function createParticles(count) {
    const container = document.getElementById('particles');
    if (!container) return;
    const colors = getParticleColors();
    for (let i = 0; i < (count || 30); i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = Math.random() * 100 + '%';
        p.style.top = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 6 + 's';
        p.style.animationDuration = (Math.random() * 4 + 3) + 's';
        const size = Math.random() * 4 + 1;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(p);
    }
}

function updateParticleColors() {
    const colors = getParticleColors();
    document.querySelectorAll('.particle').forEach(p => {
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
    });
}

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('scrolled', window.pageYOffset > 50);
    }
});

// ========== HAMBURGER MENU ==========
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
});

// ========== INTERSECTION OBSERVER (FADE-IN) ==========
const sharedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
document.querySelectorAll('section').forEach(s => sharedObserver.observe(s));

// ========== CURSOR NEON GLOW ==========
(function initCursorGlow() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const glow = document.createElement('div');
    glow.classList.add('cursor-glow');
    document.body.appendChild(glow);

    let mx = -500, my = -500, cx = -500, cy = -500;

    document.addEventListener('mousemove', (e) => {
        mx = e.clientX;
        my = e.clientY;
    });

    (function animate() {
        cx += (mx - cx) * 0.15;
        cy += (my - cy) * 0.15;
        glow.style.left = cx + 'px';
        glow.style.top = cy + 'px';
        requestAnimationFrame(animate);
    })();
})();

// ========== CLICK RIPPLE ON NEON BUTTONS ==========
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.neon-btn');
    if (!btn) return;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const rect = btn.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
});

// ========== NEON FLICKER ==========
function initNeonFlicker() {
    const els = document.querySelectorAll('.neon-kanji');
    if (!els.length) return;

    els.forEach(el => {
        function scheduleFlicker() {
            const delay = 2000 + Math.random() * 6000;
            setTimeout(() => {
                // Quick double-blink mimicking neon tube flutter
                el.style.opacity = '0';
                setTimeout(() => {
                    el.style.opacity = '';
                    setTimeout(() => {
                        el.style.opacity = '0';
                        setTimeout(() => {
                            el.style.opacity = '';
                            scheduleFlicker();
                        }, 80);
                    }, 100);
                }, 60);
            }, delay);
        }
        scheduleFlicker();
    });
}

document.addEventListener('DOMContentLoaded', initNeonFlicker);

// ========== SKYLINE LIQUID WARP ==========
function initSkylineWarp() {
    const turb = document.getElementById('skyline-turbulence');
    const turbMid = document.getElementById('skyline-turbulence-mid');
    if (!turb) return;

    let t = 0;
    function animate() {
        t += 0.003;
        // Slowly oscillate the baseFrequency for a heat-mirage shimmer
        const bx = 0.015 + Math.sin(t) * 0.005;
        const by = 0.015 + Math.cos(t * 0.7) * 0.004;
        turb.setAttribute('baseFrequency', bx.toFixed(4) + ' ' + by.toFixed(4));

        if (turbMid) {
            const mx = 0.012 + Math.sin(t * 0.6 + 1) * 0.004;
            const my = 0.012 + Math.cos(t * 0.5 + 2) * 0.003;
            turbMid.setAttribute('baseFrequency', mx.toFixed(4) + ' ' + my.toFixed(4));
        }

        requestAnimationFrame(animate);
    }
    animate();
}

document.addEventListener('DOMContentLoaded', initSkylineWarp);
