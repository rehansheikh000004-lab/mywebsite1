// Fade-in on scroll using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with class="fade-in"
  const fadeElements = document.querySelectorAll(".fade-in");

  // Create an observer that watches elements when they come into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // If element is visible (intersecting the viewport)
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // add "show" class
        }
      });
    },
    { threshold: 0.2 } // trigger when 20% of element is visible
  );

  // Apply observer to each fade-in element
  fadeElements.forEach((el) => observer.observe(el));
});
