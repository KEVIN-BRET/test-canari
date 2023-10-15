const toggleBtn = document.querySelector(".toggle-btn");
// const closeBtn = document.querySelector(".closeBtn");
const menu = document.querySelector(".menu-container");

// Open/close mobile menu :
toggleBtn.addEventListener("click", () => {
  // chagement de forme du bouton :
  toggleBtn.classList.toggle("active");
  // Affichage du menu :
  menu.classList.toggle("mobile-menu");
  console.log("click");
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
