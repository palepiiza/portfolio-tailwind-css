// navbar fixed and hidden
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  // 👇 tombol back to top
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    // 👇 tombol back to top
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    // 👇 tombol back to top
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Humberger
const hamburger = document.querySelector("#humberger");
// Humberger hidden 👇
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  // 👇for hamburger
  hamburger.classList.toggle("hamburger-active");
  // 👇 for hidden
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// ubah posisi dark mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
