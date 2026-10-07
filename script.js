  // Header Scroll Effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Create Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `-${size}px`;
        
        // Random animation duration between 10s and 20s
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        // Random color variation
        const hue = Math.random() * 20 + 240; // Purple/blue range
        particle.style.backgroundColor = `hsla(${hue}, 80%, 60%, ${Math.random() * 0.3 + 0.2})`;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles when DOM is loaded
document.addEventListener('DOMContentLoaded', createParticles);

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Animate elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .about-image, .about-content, .contact-container > div');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .about-image, .about-content, .contact-container > div');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Trigger first check
    animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Add hover effect to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.service-icon i');
        if (icon) {
            icon.style.transform = 'scale(1.1)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.service-icon i');
        if (icon) {
            icon.style.transform = 'scale(1)';
        }
    });
});