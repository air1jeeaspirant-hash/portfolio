// Initialize Lenis Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Helper function to split text into characters for animation
function splitTextChars(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        const text = el.innerText || el.textContent;
        el.innerHTML = '';
        text.split('').forEach(char => {
            const span = document.createElement('span');
            if (char === ' ') {
                span.innerHTML = '&nbsp;';
            } else {
                span.textContent = char;
            }
            span.style.display = 'inline-block';
            el.appendChild(span);
        });
    });
}

// Hero Animations
splitTextChars('.split-hero-line');
gsap.from(".split-hero-line span", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.02,
    ease: "power4.out",
    delay: 0.2
});

gsap.from(".subtitle", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.out",
    delay: 1.5
});

gsap.to(".scroll-indicator", {
    y: 20,
    repeat: -1,
    yoyo: true,
    duration: 1.5,
    ease: "power1.inOut"
});

// Identity Section
splitTextChars('.massive-text');
gsap.from(".massive-text span", {
    scrollTrigger: {
        trigger: ".identity",
        start: "top 80%",
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.05,
    ease: "back.out(1.7)"
});

gsap.from(".role", {
    scrollTrigger: {
        trigger: ".roles-list",
        start: "top 80%",
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out"
});

gsap.from(".manifesto", {
    scrollTrigger: {
        trigger: ".identity",
        start: "center 80%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

// About Section
gsap.from(".poetic-text", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
    },
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
});

// Experience Credits
gsap.from(".credit-item", {
    scrollTrigger: {
        trigger: ".experience",
        start: "top 60%",
    },
    x: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

// Projects
gsap.from(".projects-gallery", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Creative Process
gsap.from(".abstract-text", {
    scrollTrigger: {
        trigger: ".creative-process",
        start: "top 70%",
        scrub: 1
    },
    scale: 1.5,
    opacity: 0.5,
    duration: 2
});

// Technical Section (Terminal typing effect simulated with GSAP)
gsap.from(".typewriter", {
    scrollTrigger: {
        trigger: ".technical",
        start: "top 60%",
    },
    width: 0,
    opacity: 0,
    duration: 1,
    stagger: 1.5,
    ease: "steps(20)",
    overflow: "hidden",
    whiteSpace: "nowrap"
});

gsap.from(".typewriter-response", {
    scrollTrigger: {
        trigger: ".technical",
        start: "top 60%",
    },
    opacity: 0,
    duration: 0.1,
    stagger: 1.5,
    delay: 1
});

// Outro Ending Credits
gsap.from(".ending-text", {
    scrollTrigger: {
        trigger: ".outro",
        start: "top 60%",
    },
    opacity: 0,
    y: 30,
    duration: 2,
    stagger: 1,
    ease: "power2.out"
});

gsap.from(".end-credits-links", {
    scrollTrigger: {
        trigger: ".outro",
        start: "center 70%",
    },
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 2.5
});
