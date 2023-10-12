const burgerBtn = document.querySelector(".burgerBtn");
const allNavLinks = document.querySelector(".all-nav-links");

// Open/close mobile menu :
burgerBtn.addEventListener("click", () => {
  allNavLinks.classList.toggle("mobile-menu");
});
