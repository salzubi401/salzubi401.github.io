// Smooth scrolling for navigation links
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

// Remove the navbar background change on scroll since we want it to stay consistent
// const navbar = document.querySelector('.navbar');
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//         navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
//         navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
//     } else {
//         navbar.style.backgroundColor = '#ffffff';
//         navbar.style.boxShadow = 'none';
//     }
// });

// Add animation to research cards on scroll
const researchCards = document.querySelectorAll('.research-card');
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

researchCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add animation to publication items
const publicationItems = document.querySelectorAll('.publication-item');
publicationItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});

// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add animation to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});

// Add animation to profile image on load
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.style.opacity = '0';
    profileImage.style.transform = 'scale(0.8)';
    profileImage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
        profileImage.style.opacity = '1';
        profileImage.style.transform = 'scale(1)';
    }, 500);
}

// Show More Experience functionality
document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('show-more-exp');
    const hiddenItems = document.querySelectorAll('.timeline-item.hidden');
    let isExpanded = false;

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            isExpanded = !isExpanded;
            
            hiddenItems.forEach(item => {
                item.classList.toggle('visible');
                item.classList.toggle('hidden');
            });

            showMoreBtn.classList.toggle('expanded');
            showMoreBtn.innerHTML = isExpanded ? 
                'Show Less Experience <i class="fas fa-chevron-up"></i>' : 
                'Show More Experience <i class="fas fa-chevron-down"></i>';
        });
    }
});

// Mobile menu functionality
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
    }
}); 