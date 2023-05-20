// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Humberger
const hamburger = document.querySelector("#humberger");
// Humberger hidde 👇
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  // 👇for hamburger
  hamburger.classList.toggle("hamburger-active");
  // 👇 for hidden
  navMenu.classList.toggle("hidden");
});
