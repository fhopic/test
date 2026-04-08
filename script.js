// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// GSAP ANIMATION
gsap.to(".animate", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.2
});

// VIDEO HOVER PLAY
document.querySelectorAll(".card video").forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
});