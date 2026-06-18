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
