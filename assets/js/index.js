const hamburgerButtonHandler = () => {
  const hamburgerButton = document.querySelector(".navbar-hamburger-menu");
  const nav = document.querySelector(".navbar-nav");
  hamburgerButton.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  hamburgerButtonHandler();
});
