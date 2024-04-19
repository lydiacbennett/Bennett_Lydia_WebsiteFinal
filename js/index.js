gsap.registerPlugin(ScrollTrigger);

gsap.from ('#image', {
    xPercent: -100,
    duration: 4,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".flex-container",
        start: "top 40%",
        markers: false,
        scrub: true,
    }
});

gsap.from ('#image2', {
    xPercent: 100,
    duration: 4,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".flex-container",
        start: "top 40%",
        markers: false,
        scrub: true,
    }
});

gsap.from ('.scale--anim', {
    scale: 50,
    ease: "power4.out",
    duration: 1,
});

<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script defer src="js/index.js"></script>