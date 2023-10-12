const burgerBtn = document.querySelector(".burgerBtn");
const allNavLinks = document.querySelector(".all-nav-links");

const activeElement = document.querySelectorAll(".active");

// Menu mobile :
burgerBtn.addEventListener("click", () => {
  allNavLinks.classList.toggle("mobile-menu");
});

// //** NAVIGATION LINKS **//
