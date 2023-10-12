const burgerBtn = document.querySelector(".burgerBtn");
const closeBtn = document.querySelector(".closeBtn");
const allNavLinks = document.querySelector(".all-nav-links");

// Open/close mobile menu :
burgerBtn.addEventListener("click", () => {
  allNavLinks.classList.toggle("mobile-menu");
  burgerBtn.style.display = "none";
  closeBtn.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  allNavLinks.classList.toggle("mobile-menu");
  closeBtn.style.display = "none";
  burgerBtn.style.display = "flex";
});
