// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Light / Dark mode toggle
const modeBtn = document.getElementById('mode-toggle');
modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    modeBtn.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});

// Payment modal
const payBtn = document.getElementById('pay-btn');
const payModal = document.getElementById('payment-modal');
const payClose = document.querySelector('.close-btn');

if (payBtn && payModal && payClose) {
    payBtn.onclick = () => payModal.style.display = 'flex';
    payClose.onclick = () => payModal.style.display = 'none';
    window.addEventListener('click', e => {
        if (e.target === payModal) payModal.style.display = 'none';
    });
}

// QR modal
const qrBtn = document.getElementById('qr-btn');
const qrModal = document.getElementById('qr-modal');
const qrClose = document.querySelector('.close-qr');

if (qrBtn && qrModal && qrClose) {
    qrBtn.onclick = () => qrModal.style.display = 'flex';
    qrClose.onclick = () => qrModal.style.display = 'none';
    window.addEventListener('click', e => {
        if (e.target === qrModal) qrModal.style.display = 'none';
    });
}
