// Custom cursor
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");
const cursorBorder = document.querySelector(".cursor-border");

const updateCursor = (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  cursorDot.style.left = `${x}px`;
  cursorDot.style.top = `${y}px`;

  cursorBorder.style.left = `${x}px`;
  cursorBorder.style.top = `${y}px`;
};

document.addEventListener("mousemove", updateCursor);

// Enhanced cursor interactions
const interactiveElements = document.querySelectorAll(
  "a, button, .card, input, .social-links a"
);

interactiveElements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
    cursorBorder.classList.add("cursor-hover");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
    cursorBorder.classList.remove("cursor-hover");
  });
});

// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

// Animate statistics
const animateStats = () => {
  const statNumbers = document.querySelectorAll(".stat-number");

  statNumbers.forEach((stat) => {
    const target = parseFloat(stat.getAttribute("data-target"));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const updateStat = () => {
      current += step;
      if (current < target) {
        stat.textContent = current.toFixed(1);
        requestAnimationFrame(updateStat);
      } else {
        stat.textContent = target;
      }
    };

    updateStat();
  });
};

// Trigger animation when the statistics section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const statsSection = document.querySelector(".statistics");
observer.observe(statsSection);

// Splash screen
window.addEventListener("load", () => {
  const splashScreen = document.querySelector(".splash-screen");
  setTimeout(() => {
    splashScreen.classList.add("fade-out");
    setTimeout(() => {
      splashScreen.style.display = "none";
    }, 500);
  }, 3000);
});

