// Scroll-triggered reveal for project sections and build cards
const revealTargets = document.querySelectorAll('.project, .build');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealTargets.forEach((el) => observer.observe(el));
