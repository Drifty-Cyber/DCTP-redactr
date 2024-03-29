const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav__items");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navLinks.style.display = "flex";
  links.forEach((link) => {
    link.classList.toggle("fade");
    link.addEventListener("click", () => {
      navLinks.style.display = "none";
    });
  });
  hamburger.classList.toggle("toggle");
});

const date = new Date();
document.getElementById("year").innerHTML = date.getFullYear();
