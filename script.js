gsap.registerPlugin(ScrollTrigger);

// HERO TEXT ENTRY
gsap.from(".hero-text", {
  y: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

// WORK REVEAL (SCROLL STORY)
gsap.utils.toArray(".work-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 80%"
    },
    y: 120,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});

// ABOUT FADE
gsap.from(".about", {
  scrollTrigger: ".about",
  y: 100,
  opacity: 0,
  duration: 1
});

// VIDEO HOVER PLAY
document.querySelectorAll("video").forEach(v => {
  v.addEventListener("mouseenter", () => v.play());
  v.addEventListener("mouseleave", () => v.pause());
});
