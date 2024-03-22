document.querySelector(".bars__menu").addEventListener('click', animateBars);

var linea1__bars = document.querySelector(".lines1__bars-menu");
var linea2__bars = document.querySelector(".lines2__bars-menu");
var linea3__bars = document.querySelector(".lines3__bars-menu");

function animateBars() {
    linea1__bars.classList.toggle("activelines1__bars-menu");
}