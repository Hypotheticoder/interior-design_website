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
        });

        // Scroll effect for navbar
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                console.log('Clicked outside navbar, active class removed');
            }
        });

        // Handle active link highlighting
        const currentPath = window.location.pathname;
        const navLinksList = navLinks.querySelectorAll('a');
        
        navLinksList.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (currentPath.endsWith(linkPath)) {
                link.classList.add('active');
            }
        });

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
}