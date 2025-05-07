// Testing navbar functionality
console.log('Testing navbar functionality');
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (!hamburger || !navLinks) {
        console.error('Hamburger or nav-links not found');
        return;
    }

    console.log('Hamburger and nav-links found');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        console.log('Hamburger clicked, active class toggled');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navbar functionality
    initNavbar();
    
    // Initialize hero animations
    initHeroAnimations();
    
    // Initialize collection slider
    initCollectionSlider();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize 3D experience hover effect
    initExperienceHover();
});

function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

function initHeroAnimations() {
    const heroImage = document.querySelector('.hero-image .image-container');
    
    // Add hover effect to hero image
    heroImage.addEventListener('mousemove', function(e) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        this.style.transform = `perspective(1000px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    heroImage.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateY(-15deg)';
    });
}

function initCollectionSlider() {
    const slides = document.querySelectorAll('.collection-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    
    // Create dots
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dots span');
    dots[0].classList.add('active');
    
    // Next slide function
    function nextSlide() {
        goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    }
    
    // Previous slide function
    function prevSlide() {
        goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide - 1);
    }

    // Go to specific slide
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-slide functionality
    setInterval(nextSlide, 5000);
}

function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate');

    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('animated');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
}

function initExperienceHover() {
    const experienceItems = document.querySelectorAll('.experience-item');

    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('hovered');
        });
    });
}