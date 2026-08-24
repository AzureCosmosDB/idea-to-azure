// Scroll-reveal animation + gentle nav shadow
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(
    ".section-head, .card, .journey li, .who-grid > div, .next-card, .hero-visual"
  );
  targets.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("in"), i * 60);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => io.observe(el));

  // Disabled CTA guard
  document.querySelectorAll(".is-disabled").forEach((el) => {
    el.addEventListener("click", (ev) => ev.preventDefault());
  });
});
