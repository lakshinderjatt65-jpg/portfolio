// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.stat-item, .education-card, .skill-card, .hobby-card, .quality-card, .project-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    
    revealElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        }
    });
};

// Initialize elements for animation
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Contact Form - WhatsApp Integration
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Replace YOUR_WHATSAPP_NUMBER with your actual WhatsApp number (without + or spaces)
    // Example: if your number is +91 98765 43210, use: 919876543210
    const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // REPLACE THIS WITH YOUR ACTUAL NUMBER
    
    // Create the message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
        `*Name:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Subject:* ${subject}%0A%0A` +
        `*Message:*%0A${message}`;
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Optional: Clear form after submission
    contactForm.reset();
    
    // Optional: Show success message
    alert('Thank you for your message! WhatsApp will open shortly.');
});

// Enhanced Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(2, 6, 23, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.15)';
    }
});

// Animate skill bars on scroll
const skillSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    const sectionTop = skillSection.getBoundingClientRect().top;
    const sectionBottom = skillSection.getBoundingClientRect().bottom;
    
    if (sectionTop < window.innerHeight && sectionBottom >= 0) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
};

window.addEventListener('scroll', animateSkillBars);

// Initial animation check
animateSkillBars();

// Add active state to navigation links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing effect for hero subtitle - ENABLED
const heroSubtitle = document.querySelector('.hero-subtitle');
const roles = ['Computer Application Student', 'Web Developer', 'Tech Enthusiast', 'Non-Medical Graduate'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        heroSubtitle.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        heroSubtitle.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect after a small delay
setTimeout(typeEffect, 1000);

// Enhanced form validation with dark theme colors
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() !== '') {
            input.style.borderColor = '#3b82f6';
            input.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.3)';
        } else {
            input.style.borderColor = 'rgba(59, 130, 246, 0.3)';
            input.style.boxShadow = 'none';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '#10b981';
        input.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.4)';
    });
});

// Mouse move effect on cards
const cards = document.querySelectorAll('.education-card, .skill-card, .hobby-card, .quality-card, .stat-item');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add glow effect on scroll for section titles
const sectionTitles = document.querySelectorAll('.section-title');

const observerOptions = {
    threshold: 0.5
};

const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'glowPulse 2s ease-in-out infinite';
        } else {
            entry.target.style.animation = 'none';
        }
    });
}, observerOptions);

sectionTitles.forEach(title => titleObserver.observe(title));

// Add loading state to submit button with enhanced styling
const submitButton = contactForm.querySelector('button[type="submit"]');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.style.background = 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #06b6d4 100%)';
    submitButton.disabled = true;
    
    // Simulate sending (remove this in production)
    setTimeout(() => {
        submitButton.innerHTML = '<i class="fab fa-whatsapp"></i> Send via WhatsApp';
        submitButton.disabled = false;
    }, 2000);
});

// Add cursor glow effect
const cursor = document.createElement('div');
cursor.className = 'cursor-glow';
cursor.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    opacity: 0;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

// Add particle effect to hero section
const hero = document.querySelector('.hero');
if (hero) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const colors = ['rgba(59, 130, 246, ', 'rgba(16, 185, 129, ', 'rgba(6, 182, 212, '];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: ${randomColor}${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            pointer-events: none;
        `;
        hero.appendChild(particle);
    }
}

console.log('🚀 Portfolio loaded successfully with enhanced animations!');
