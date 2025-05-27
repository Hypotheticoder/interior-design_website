// Debugging logs added to verify functionality
console.log('Navbar script loaded');

// Check if navbar functionality is already initialized
if (!window.navbarInitialized) {
    window.navbarInitialized = true;

    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM fully loaded and parsed');

        // Get navbar elements
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navbar = document.querySelector('.navbar');
        
        // Check if required elements exist
        if (!hamburger || !navLinks || !navbar) {
            console.error('Navbar elements not found');
            return;
        }

        console.log('Navbar elements found');

        // Mobile menu toggle
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            console.log('Hamburger clicked, active class toggled');
        });

        // Close mobile menu when clicking on a link
        navLinks.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                console.log('Nav link clicked, active class removed');
            }
        });        // Enhanced scroll effect for navbar with logo animation
        const logoImage = document.querySelector('.logo-image');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 30) {
                navbar.classList.add('scrolled');
                navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
                
                // Subtle logo scale effect on scroll
                if (logoImage) {
                    logoImage.style.transform = 'scale(0.95)';
                }
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                
                // Reset logo size when back at top
                if (logoImage) {
                    logoImage.style.transform = 'scale(1)';
                }
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                console.log('Clicked outside navbar, active class removed');
            }
        });        // Improved active link highlighting
        const currentPath = window.location.pathname;
        const navLinksList = navLinks.querySelectorAll('a');
        let activeFound = false;
        
        navLinksList.forEach(link => {
            const linkPath = link.getAttribute('href');
            // Don't add active class to the Book Consultation button
            if (!link.classList.contains('btn')) {
                if ((linkPath === 'index.html' && (currentPath === '/' || currentPath.endsWith('index.html'))) || 
                    (linkPath !== 'index.html' && currentPath.includes(linkPath))) {
                    link.classList.add('active');
                    activeFound = true;
                } else {
                    link.classList.remove('active');
                }
            }
        });
        
        // If no active link is found and we're on homepage, set home as active
        if (!activeFound && (currentPath === '/' || currentPath.endsWith('index.html'))) {
            const homeLink = Array.from(navLinksList).find(link => 
                link.getAttribute('href').includes('index.html') || 
                link.getAttribute('href') === '/'
            );
            if (homeLink) homeLink.classList.add('active');
        }

        // Smooth scrolling for anchor links
        navLinksList.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's not an anchor link
                if (!href.startsWith('#')) return;
                
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - navbar.offsetHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });

    // Animate gradient elements on page load
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            const gradientElements = document.querySelectorAll('.gradient-text, .animate-gradient, .gradient-highlight');
            gradientElements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }, 300);
    });
}