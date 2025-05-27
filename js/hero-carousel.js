// Hero Carousel & 3D Parallax Effect

document.addEventListener('DOMContentLoaded', function () {
    // Carousel logic
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.querySelector('.hero-dots');
    let current = 0;
    let interval;

    function showSlide(idx) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
            if (dotsContainer) {
                dotsContainer.children[i].classList.toggle('active', i === idx);
            }
        });
        current = idx;
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }

    // Dots
    if (dotsContainer) {
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.addEventListener('click', () => showSlide(i));
            dotsContainer.appendChild(dot);
        });
    }
    showSlide(0);

    // Auto-play
    function startAuto() {
        interval = setInterval(nextSlide, 6000);
    }
    function stopAuto() {
        clearInterval(interval);
    }
    startAuto();
    if (dotsContainer) {
        dotsContainer.addEventListener('mouseenter', stopAuto);
        dotsContainer.addEventListener('mouseleave', startAuto);
    }

    // 3D Parallax Effect
    document.querySelectorAll('.hero-img-3d').forEach(img => {
        img.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateY = (centerX - x) / 20;
            const rotateX = (centerY - y) / 20;
            this.style.transform = `perspective(900px) rotateY(${rotateY}deg) rotateX(${-rotateX}deg)`;
        });
        img.addEventListener('mouseleave', function () {
            this.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
        });
    });
});
