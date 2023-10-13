const burgerBtn = document.querySelector(".burgerBtn");
// const closeBtn = document.querySelector(".closeBtn");
const menu = document.querySelector(".menu-container");

// Open/close mobile menu :
burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("mobile-menu");
  console.log("click");
  //   burgerBtn.style.display = "none";
  //   closeBtn.style.display = "flex";
});
