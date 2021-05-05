gsap.registerPlugin(TextPlugin, ScrollTrigger);

gsap.to('.info',.2,{
    scrollTrigger:'.info',
    opacity: 1,
    ease: "none",
})
