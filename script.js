const btn = document.getElementById("menu-btn");
const hmbrgr = document.getElementById("hmbrgr");
const menu = document.getElementById("menu");
btn.addEventListener("click", () => {
  hmbrgr.getAttribute("src") == "./images/icon-close.svg"
    ? hmbrgr.setAttribute("src", "./images/icon-hamburger.svg")
    : hmbrgr.setAttribute("src", "./images/icon-close.svg");
  menu.classList.toggle("hidden");
});
