function toggleMenu() {
  const nav = document.getElementById("mainNav");

  if (nav) {
    nav.classList.toggle("open");
  }
}

function toggleLangMenu() {
  const menu = document.getElementById("langMenu");

  if (menu) {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
}

window.addEventListener("click", function (event) {
  const menu = document.getElementById("langMenu");
  const button = document.querySelector(".lang-btn");

  if (menu && button && !button.contains(event.target) && !menu.contains(event.target)) {
    menu.style.display = "none";
  }
});

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.display = "none";
  }
});

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
