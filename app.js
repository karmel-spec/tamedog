const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
const videoFrame = document.querySelector(".video-frame");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

if (videoFrame) {
  const videoId = videoFrame.dataset.videoId;
  const hasRealVideo = videoId && !videoId.includes("REPLACE_WITH");
  videoFrame.dataset.ready = String(hasRealVideo);
}

const flyingStage = document.querySelector(".flying-shirt-stage");
const flyingShirt = document.querySelector(".flying-shirt");

if (flyingStage && flyingShirt && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const speed = 4.6;
  let x = Math.random() * Math.max(flyingStage.clientWidth - flyingShirt.offsetWidth, 0);
  let y = Math.random() * Math.max(flyingStage.clientHeight - flyingShirt.offsetHeight, 0);
  let vx = Math.random() < 0.5 ? -speed : speed;
  let vy = Math.random() < 0.5 ? -speed : speed;

  const step = () => {
    const maxX = Math.max(flyingStage.clientWidth - flyingShirt.offsetWidth, 0);
    const maxY = Math.max(flyingStage.clientHeight - flyingShirt.offsetHeight, 0);

    x += vx;
    y += vy;

    if (x <= 0) {
      x = 0;
      vx = Math.abs(vx);
    } else if (x >= maxX) {
      x = maxX;
      vx = -Math.abs(vx);
    }

    if (y <= 0) {
      y = 0;
      vy = Math.abs(vy);
    } else if (y >= maxY) {
      y = maxY;
      vy = -Math.abs(vy);
    }

    flyingShirt.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

const missPopup = document.querySelector(".miss-popup");

if (flyingStage && missPopup) {
  let hideTimer = null;

  flyingStage.addEventListener("click", (event) => {
    if (event.target.closest(".flying-shirt")) return;

    const rect = flyingStage.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;

    missPopup.style.left = `${px}px`;
    missPopup.style.top = `${py}px`;

    missPopup.classList.remove("show");
    void missPopup.offsetWidth;
    missPopup.classList.add("show");

    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      missPopup.classList.remove("show");
    }, 260);
  });
}
