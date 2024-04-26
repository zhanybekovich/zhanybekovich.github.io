const menuOpen = document.querySelector("#menu-open");
const mobileMenu = document.querySelector(".mobile-menu-wrapper");
const menuClose = document.querySelector("#menu-close");

function toggleMenu() {
  mobileMenu.classList.toggle("active");
}

function closeMenu() {
  mobileMenu.classList.remove("active");
}

menuOpen.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", closeMenu);
