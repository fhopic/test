gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-text", {
  y: 100,
  opacity: 0,
  duration: 1
});

gsap.from(".work-item", {
  scrollTrigger: ".work",
  y: 100,
  opacity: 0,
  stagger: 0.3
});

document.querySelectorAll("video").forEach(v => {
  v.addEventListener("mouseenter", () => v.play());
  v.addEventListener("mouseleave", () => v.pause());
});
