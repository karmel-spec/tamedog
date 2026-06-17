const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
const videoFrame = document.querySelector(".video-frame");
const lightbox = document.querySelector(".lightbox");
const lightboxArt = document.querySelector(".lightbox-art");
const lightboxCaption = document.querySelector(".lightbox-caption");
const closeLightbox = document.querySelector(".close-lightbox");
const filterButtons = document.querySelectorAll(".filter-button");

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

document.querySelectorAll(".photo-tile").forEach((tile, index) => {
  tile.addEventListener("click", () => {
    const caption = tile.dataset.caption || tile.textContent || "Tame Dog show photo";
    lightboxCaption.textContent = caption;
    lightboxArt.style.background = getComputedStyle(tile).background;
    lightboxArt.style.filter = `hue-rotate(${index * 14}deg)`;
    lightbox.showModal();
    document.body.classList.add("no-scroll");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));

    document.querySelectorAll(".photo-tile").forEach((tile) => {
      const category = tile.dataset.category || "all";
      tile.classList.toggle("hidden", filter !== "all" && category !== filter);
    });
  });
});

closeLightbox?.addEventListener("click", () => {
  lightbox.close();
});

lightbox?.addEventListener("close", () => {
  document.body.classList.remove("no-scroll");
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
