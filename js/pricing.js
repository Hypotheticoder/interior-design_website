document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Pricing card hover effects
    initPricingCardHover();
    
    // Modal functionality
    initModals();
    
    // Form submission
    initFormSubmission();
    
    // Service item animations on scroll
    initServiceAnimations();
});

function initAnimations() {
    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.animate__animated');
    animateElements.forEach(el => {
        el.style.opacity = '0';
    });
    
    // Animate hero section
    const hero = document.querySelector('.pricing-hero .container');
    hero.classList.add('animate__animated', 'animate__fadeIn');
    
    // Animate scroll down arrows
    const scrollDown = document.querySelector('.scroll-down');
    scrollDown.addEventListener('click', function() {
        window.scrollBy({
            top: window.innerHeight - 100,
            behavior: 'smooth'
        });
    });
}

function initPricingCardHover() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
    });
}

function initModals() {
    const modal = document.getElementById('pricingModal');
    const confirmationModal = document.getElementById('confirmationModal');
    const showFormBtns = document.querySelectorAll('.show-form-btn');
    const closeModal = document.querySelector('.close-modal');
    const closeConfirmation = document.getElementById('closeConfirmation');
    
    // Show form modal
    showFormBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const planName = this.getAttribute('data-plan');
            document.getElementById('planName').textContent = planName;
            document.getElementById('selectedPlan').value = planName;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modals
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    closeConfirmation.addEventListener('click', function() {
        confirmationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (event.target === confirmationModal) {
            confirmationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

function initFormSubmission() {
    const form = document.getElementById('pricingForm');
    const modal = document.getElementById('pricingModal');
    const confirmationModal = document.getElementById('confirmationModal');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const planName = formData.get('selectedPlan');
        
        // Here you would typically send the data to a server
        // For demo, we'll just show the confirmation
        document.getElementById('confirmedPlan').textContent = planName;
        
        // Reset form
        form.reset();
        
        // Hide form modal and show confirmation
        modal.style.display = 'none';
        confirmationModal.style.display = 'block';
        
        // You could add AJAX here to actually submit the form
        console.log('Form submitted:', {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            plan: planName,
            size: formData.get('propertySize'),
            requirements: formData.get('requirements'),
            budget: formData.get('budget'),
            timeline: formData.get('timeline')
        });
    });
}

function initServiceAnimations() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    // Set initial state
    serviceItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const animateOnScroll = function() {
        serviceItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.classList.add('animate__animated');
            }
        });
    };
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
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