document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    // Intersection Observer for scroll-based fade-in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Adding a class for CSS transition
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is in view

    sections.forEach((section) => {
        section.style.opacity = 0; // Start with opacity 0
        section.style.transition = "opacity 1.5s ease-in-out"; // Smooth opacity transition
        observer.observe(section); // Observe each section
    });
});
