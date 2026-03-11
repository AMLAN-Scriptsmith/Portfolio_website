// Animate icons on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(card => {
    observer.observe(card);
  });
});
