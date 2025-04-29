document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-rotate slides (optional)
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause auto-rotation when hovering over slider
    const heroSlider = document.querySelector('.hero-slider');
    heroSlider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    heroSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Collections Carousel Navigation
    const collectionCards = document.querySelectorAll('.collection-card');
    const carouselDots = document.querySelector('.carousel-dots');
    
    // Create dots for collections carousel
    collectionCards.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => {
            // This would scroll the carousel to the corresponding card
            document.querySelector('.collections-carousel').scrollTo({
                left: index * 330, // 300px card width + 30px gap
                behavior: 'smooth'
            });
            updateDots(index);
        });
        carouselDots.appendChild(dot);
    });

    // Initialize first dot as active
    if (carouselDots.children.length > 0) {
        carouselDots.children[0].classList.add('active');
    }

    // Update active dot based on scroll position
    function updateDots(activeIndex) {
        Array.from(carouselDots.children).forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    }

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelector('.testimonial-dots');
    let currentTestimonial = 0;

    // Create dots for testimonial slider
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
        testimonialDots.appendChild(dot);
    });

    // Initialize first testimonial and dot as active
    if (testimonials.length > 0) {
        testimonials[0].classList.add('active');
    }
    if (testimonialDots.children.length > 0) {
        testimonialDots.children[0].classList.add('active');
    }

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonials[index].classList.add('active');
        
        Array.from(testimonialDots.children).forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentTestimonial = index;
    }

    // Auto-rotate testimonials (optional)
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 7000);

    // 3D Viewer Controls (placeholder functionality)
    const rotateBtn = document.querySelector('.rotate');
    const zoomInBtn = document.querySelector('.zoom-in');
    const zoomOutBtn = document.querySelector('.zoom-out');
    const viewerImage = document.querySelector('.placeholder-3d img');
    let rotation = 0;
    let scale = 1;

    rotateBtn.addEventListener('click', () => {
        rotation += 90;
        viewerImage.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    });

    zoomInBtn.addEventListener('click', () => {
        scale = Math.min(scale + 0.1, 2);
        viewerImage.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    });

    zoomOutBtn.addEventListener('click', () => {
        scale = Math.max(scale - 0.1, 0.5);
        viewerImage.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    });

    // Form submission handling (placeholder)
    const ctaForm = document.querySelector('.cta-form');
    if (ctaForm) {
        ctaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your request! We will contact you shortly.');
            this.reset();
        });
    }
});