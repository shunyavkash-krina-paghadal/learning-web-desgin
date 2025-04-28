new Splide(".logo-slider", {
  type: "loop",
  autoWidth: true,
  gap: "66px",
  pagination: false,
  arrows: false,
  autoScroll: {
    speed: 0.7,
  },
}).mount(window.splide.Extensions);

document.addEventListener("DOMContentLoaded", function () {
  const counterSpan = document.querySelector(".about-items-col span");
  let started = false; // to make sure it only runs once
  let count = 0;
  const target = parseInt(counterSpan.innerText);
  const speed = 50; // smaller = faster

  function updateCounter() {
    if (count < target) {
      count++;
      counterSpan.innerText = count;
      setTimeout(updateCounter, speed);
    } else {
      counterSpan.innerText = target;
    }
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function onScroll() {
    if (!started && isInViewport(counterSpan)) {
      started = true;
      updateCounter();
      window.removeEventListener("scroll", onScroll); // optional: remove listener after starting
    }
  }

  window.addEventListener("scroll", onScroll);
});
