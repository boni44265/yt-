const cards = Array.from(document.querySelectorAll("[data-cta-card]"));
const HOLD = 5000;   // how long each card stays visible
const GAP  = 600;    // brief pause between cards (fade-out → fade-in)
let active = 0;

function show(index) {
  cards.forEach((card, i) => {
    const fill = card.querySelector(".progress-fill");
    if (i === index) {
      card.classList.add("active");
      if (fill) {
        fill.style.transition = "none";
        fill.style.width = "0";
        void fill.offsetWidth;               // reflow so the reset takes
        fill.style.transition = "";
        fill.style.width = "100%";
      }
    } else {
      card.classList.remove("active");
      if (fill) {
        fill.style.transition = "none";
        fill.style.width = "0";
      }
    }
  });
}

function cycle() {
  // fade the current card out
  cards[active].classList.remove("active");

  // wait for the gap, then show the next card
  window.setTimeout(() => {
    active = (active + 1) % cards.length;
    show(active);
  }, GAP);
}

if (cards.length > 0) {
  show(active);
  window.setInterval(cycle, HOLD);
}