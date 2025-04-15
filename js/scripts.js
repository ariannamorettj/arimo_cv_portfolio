// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.animate-top, .animate-bottom').forEach(el => {
    observer.observe(el);
  });
});