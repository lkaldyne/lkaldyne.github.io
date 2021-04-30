particlesJS.load('particles-div', 'particlesjs-config.json');
gsap.to('#logosvg', { delay: 0.2, marginBottom: 0, opacity: 1, duration: 0.5, ease: 'Power4.out' });
gsap.to('#logo-firstline', { delay: 0.7, width: 165, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });
gsap.to('#logo-secondline', { delay: 0.8, width: 125, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });
gsap.to('#logo-thirdline', { delay: 0.9, width: 95, duration: 0.5, ease: 'Power4.out', stagger: 0.1 });

// gsap.from('.nav', { delay: 1.5, opacity: 0, duration: 1 })
// gsap.from('#particles-div', { delay: 1.5, opacity: 0, duration: 1 })
gsap.to('.intrologocontainer', { delay: 1.5, opacity: 0, zIndex: 0, duration: 1 })