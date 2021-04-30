const burger = document.getElementsByClassName("burger")[0];
const nav = document.getElementsByClassName("nav-links")[0];

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("toogle");
});
