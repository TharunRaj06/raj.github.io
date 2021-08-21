let nav = document.getElementById("side-nav");

let close = document.getElementById("close");

document.getElementById("menu").addEventListener("click", function () {
  nav.style.marginLeft = 0;
});

close.addEventListener("click", function () {
  nav.style.marginLeft = "-450px";
});
