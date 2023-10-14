const burgerBtn = document.querySelector(".burgerBtn");
// const closeBtn = document.querySelector(".closeBtn");
const menu = document.querySelector(".menu-container");

// const header = document.querySelector(".header");

// Open/close mobile menu :
burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("mobile-menu");
  console.log("click");
  //   burgerBtn.style.display = "none";
  //   closeBtn.style.display = "flex";
});

// Evénément au scroll : la hauteur dse la nav se reduit
window.addEventListener("scroll", () => {
  if (window.scrollY > 2) {
    // console.log(window.scrollY);
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
