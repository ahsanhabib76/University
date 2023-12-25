const navLinks = document.getElementById("navLinks");
const bars = document.querySelector("#bar");
const xmark = document.querySelector("#xmark");

bars.addEventListener("click", () => {
  navLinks.style.right = "0";
});

xmark.addEventListener("click", () => {
  navLinks.style.right = "-205px";
});
