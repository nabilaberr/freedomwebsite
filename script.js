/* =========================================
   Freedom Recycling - Main JavaScript
========================================= */

/* Mobile navigation */
function toggleMenu() {
  const nav = document.getElementById("mainNav");

  if (nav) {
    nav.classList.toggle("open");
  }
}

/* Language dropdown */
function toggleLangMenu() {
  const menu = document.getElementById("langMenu");

  if (menu) {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
}

/* Close language dropdown and mobile menu when clicking outside */
window.addEventListener("click", function (event) {
  const languageMenu = document.getElementById("langMenu");
  const languageButton = document.querySelector(".lang-btn");
  const navigation = document.getElementById("mainNav");
  const menuButton = document.querySelector(".menu-toggle");

  if (
    languageMenu &&
    languageButton &&
    !languageButton.contains(event.target) &&
    !languageMenu.contains(event.target)
  ) {
    languageMenu.style.display = "none";
  }

  if (
    navigation &&
    menuButton &&
    navigation.classList.contains("open") &&
    !navigation.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    navigation.classList.remove("open");
  }
});

/* Close mobile menu after selecting a navigation link */
document.addEventListener("DOMContentLoaded", function () {
  const navigationLinks = document.querySelectorAll("#mainNav a");

  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const navigation = document.getElementById("mainNav");

      if (navigation) {
        navigation.classList.remove("open");
      }
    });
  });
});

/* Animated statistics counters */
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  function animateCounter(counter) {
    const target = Number(counter.getAttribute("data-target"));
    const duration = 1800;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);

      counter.textContent = value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(updateCounter);
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  } else {
    counters.forEach(function (counter) {
      animateCounter(counter);
    });
  }
});

/* Hide animated loader after all page files are ready */
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  if (!loader) return;

  loader.classList.add("hide");

  setTimeout(function () {
    loader.style.display = "none";
  }, 500);
});
