// ==================== NAVIGATION ====================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ==================== PROFILE IMAGE ====================
const profileImage = document.getElementById('profileImage');

// Profile image error handler - creates a stylish placeholder if image fails to load
profileImage.onerror = function() {
    // Create a gradient placeholder if image fails to load
    this.style.background = 'linear-gradient(135deg, #2563eb, #fbbf24)';
    this.style.display = 'flex';
    this.style.alignItems = 'center';
    this.style.justifyContent = 'center';
    this.style.fontSize = '4rem';
    this.style.fontWeight = 'bold';
    this.style.color = 'white';
    this.alt = 'SG';
    console.warn('Profile image not found. Using placeholder.');
};

// ==================== SCROLL REVEAL ANIMATION ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
const animateElements = document.querySelectorAll('.section-header, .bio-card, .about-card, .skill-card, .interest-card, .social-card, .contact-card, .contact-form-wrapper');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ==================== CONTACT FORM VALIDATION ====================
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateName(name) {
    return name.trim().length >= 2;
}

function validateMessage(message) {
    return message.trim().length >= 10;
}

function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

nameInput.addEventListener('input', () => {
    if (validateName(nameInput.value)) {
        clearError(nameInput, nameError);
    }
});

emailInput.addEventListener('input', () => {
    if (validateEmail(emailInput.value)) {
        clearError(emailInput, emailError);
    }
});

messageInput.addEventListener('input', () => {
    if (validateMessage(messageInput.value)) {
        clearError(messageInput, messageError);
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate name
    if (!validateName(nameInput.value)) {
        showError(nameInput, nameError, 'Name must be at least 2 characters long.');
        isValid = false;
    } else {
        clearError(nameInput, nameError);
    }

    // Validate email
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, emailError, 'Please enter a valid email address.');
        isValid = false;
    } else {
        clearError(emailInput, emailError);
    }

    // Validate message
    if (!validateMessage(messageInput.value)) {
        showError(messageInput, messageError, 'Message must be at least 10 characters long.');
        isValid = false;
    } else {
        clearError(messageInput, messageError);
    }

    if (isValid) {
        // Form is valid - show success message
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        console.log('Form submitted successfully:', formData);

        // Show success notification
        showNotification('Message validated successfully! Backend integration pending.', 'success');

        // Reset form
        contactForm.reset();
    }
});

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-family: 'Poppins', sans-serif;
    `;

    document.body.appendChild(notification);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== BACK TO TOP BUTTON ====================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== SMOOTH SCROLL FOR ALL LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== SKILL CARDS INTERACTION ====================
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.05)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== TYPING EFFECT ====================
const typingText = document.querySelector('.typing-text');
const text = 'B.Com Accountancy Honours Student | Commerce Enthusiast | Future Business Professional';
let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeText, 50);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    typingText.textContent = '';
    setTimeout(typeText, 500);
});

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Welcome to Shubhodip Ghosh\'s Portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cB.Com Accountancy Honours Student | Commerce Enthusiast', 'color: #fbbf24; font-size: 14px;');
console.log('%cContact: shubhodipghosh001@gmail.com', 'color: #10b981; font-size: 12px;');
