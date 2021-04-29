particlesJS.load('particles-div', 'particlesjs-config.json');
gsap.from('#logosvg', { delay: 0.2, y: -100, opacity: 0, duration: 0.5, ease: 'Power4.out' });
gsap.from('.logo-uline', { delay: 0.7, width: 0, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });

// gsap.from('.nav', { delay: 1.5, opacity: 0, duration: 1 })
// gsap.from('#particles-div', { delay: 1.5, opacity: 0, duration: 1 })
gsap.to('.intrologocontainer', { delay: 1.5, opacity: 0, zIndex: 0, duration: 1 })