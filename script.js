//Hero Section Count Words Heading Animation
const words = ["Data Scientist", "Data Analyst","Python Developer", "Video Editor" , "Canva Desginer","Prompt Engineer","Content Creator","AI Student"];
let wordIndex = 0;
let charIndex = 0;
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

function type() {
    if (charIndex < words[wordIndex].length) {
        typedText.textContent += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(type, 90);
    } else {
        setTimeout(erase, 1000);
    }
}
//Hero Section Overall Animation
document.addEventListener("DOMContentLoaded", function () {
    const hero = document.querySelector(".hero");

    // 🚀 **Faster Hero Animation**
    const animations = [
        "translateY(80vh) scale(1.1)",  // Appear Quickly from Bottom
    ];

    // **🎲 Randomly Select One Animation**
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

    // **🔥 Apply Animation (Super Fast)**
    hero.style.opacity = "0";
    hero.style.transform = randomAnimation;
    hero.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";  // Speed Boosted

    setTimeout(() => {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0) scale(1)";
    }, 100);  // Reduced Delay
});



// Scroll Animation for Education Timeline
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".edu-item");

    function scrollAnimation() {
        let triggerBottom = window.innerHeight * 0.85;

        items.forEach(item => {
            let itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation();
});

// Certifcation Animation
document.addEventListener("DOMContentLoaded", function () {
    const certCards = document.querySelectorAll(".cert-card");

    function animateCertifications() {
        let triggerBottom = window.innerHeight * 0.85;

        certCards.forEach((card, index) => {
            let cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom && !card.classList.contains("animated")) {
                card.classList.add("animated");

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0) scale(1)";
                }, index * 100);
            }
        });
    }

    // Listen for scrolling
    window.addEventListener("scroll", animateCertifications);
    animateCertifications();
});

// Service Box Animation
document.addEventListener("DOMContentLoaded", function () {
    const serviceBoxes = document.querySelectorAll(".service-box");

    function scrollAnimation() {
        let triggerBottom = window.innerHeight * 0.85;

        serviceBoxes.forEach((box, index) => {
            let boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                setTimeout(() => {
                    box.classList.add("show");
                }, index * 150); // Delayed effect for a smooth experience
            }
        });
    }

    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation();
});
// About Section Animation
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");

    function scrollAnimation() {
        let triggerBottom = window.innerHeight * 0.85;
        let aboutTop = aboutSection.getBoundingClientRect().top;

        if (aboutTop < triggerBottom) {
            aboutSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation();
});

function erase() {
    if (charIndex > 0) {
        typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}
// Hero Image Animation
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 500);
});

// Smooth Fade-in Effect on Load
gsap.from(".hero-image img", {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
});

// Smooth Floating Animation (NO JERK)
gsap.to(".hero-image img", {
    y: -45,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"  // Smooth Up-Down Motion
});

// Skill Circle Animation
document.addEventListener("DOMContentLoaded", function () {
    const skillCircles = document.querySelectorAll(".skill-circle");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let skill = entry.target;
                let percent = parseInt(skill.getAttribute("data-percent"));
                let progressCircle = skill.querySelector(".progress");
                let percentageText = skill.querySelector(".percent");

                let offsetMax = 251; // Full circle stroke-dasharray value
                let currentOffset = offsetMax; // Start from full offset
                let count = 0;

                let interval = setInterval(() => {
                    if (count <= percent) {
                        percentageText.textContent = count + "%";
                        currentOffset = offsetMax - (offsetMax * count) / 100;
                        progressCircle.style.strokeDashoffset = currentOffset;
                        count++;
                    } else {
                        clearInterval(interval);
                    }
                }, 20);

                observer.unobserve(skill); // Animation ek dafa chalne k baad dobara na chale
            }
        });
    }, { threshold: 0.6 }); // 60% section dikhai dene par animation start ho

    skillCircles.forEach(circle => {
        observer.observe(circle);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-box");

    function animateTestimonials() {
        let triggerBottom = window.innerHeight * 0.85;

        testimonials.forEach((box, index) => {
            let boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom && !box.classList.contains("animated")) {
                box.classList.add("animated");

                // Apply animation with unique delays
                setTimeout(() => {
                    box.style.opacity = "1";
                    box.style.transform = "translateY(0) scale(1)";
                }, index * 100);
            }
        });
    }

    // Listen for scrolling
    window.addEventListener("scroll", animateTestimonials);
    animateTestimonials();
});

// Contact Section Animation
document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector(".contact");
    const formElements = document.querySelectorAll(".contact-form input, .contact-form textarea, .contact-form button");
    const infoBoxes = document.querySelectorAll(".info-box");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 🚀 Fast Zoom & Pop for Form Elements
                formElements.forEach((el, index) => {
                    el.style.opacity = "0";
                    el.style.transform = "scale(0.5)";
                    el.style.transition = `opacity 0.4s ease-in ${index * 0.1}s, transform 0.4s ease-in ${index * 0.1}s`;

                    setTimeout(() => {
                        el.style.opacity = "1";
                        el.style.transform = "scale(1.1)";
                        setTimeout(() => el.style.transform = "scale(1)", 100);
                    }, 100);
                });

                // 🌟 Quick Slide-In + Pop for Info Boxes
                infoBoxes.forEach((box, index) => {
                    box.style.opacity = "0";
                    box.style.transform = index % 2 === 0 ? "translateX(-80px) scale(0.8)" : "translateX(80px) scale(0.8)";
                    box.style.transition = `opacity 0.4s ease-out ${index * 0.1}s, transform 0.4s ease-out ${index * 0.1}s`;

                    setTimeout(() => {
                        box.style.opacity = "1";
                        box.style.transform = "translateX(0) scale(1.1)";
                        setTimeout(() => box.style.transform = "scale(1)", 100);
                    }, 100);
                });

                observer.unobserve(contactSection);
            }
        });
    }, { threshold: 0.6 });

    observer.observe(contactSection);
});


