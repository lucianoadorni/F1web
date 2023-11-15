// Slideshow
var currentIndex = 0;
var contents = document.querySelectorAll('.slider-content');
var maxIndex = contents.length - 1;

function nextImage() {
  currentIndex++;

  if (currentIndex > maxIndex) {
    currentIndex = 0;
  }

  contents.forEach(function(content) {
    content.classList.remove('active');
  });

  contents[currentIndex].classList.add('active');
}

setInterval(nextImage, 5000);

// Hamburger Menu

function animar() {
  "use strict";
  document.getElementById("icono").classList.toggle("cambiar");
}

function openMenu() {
  "use strict";
  animar();
  document.getElementById("menu").style.display = "block";
}

function closeMenu() {
  "use strict";
  animar();
  document.getElementById("menu").style.display = "none";
}

function menu() {
  "use strict";
  if (document.getElementById("menu").style.display === "block") {
      closeMenu();
  } else {
      openMenu();
  }
}

// Cookies menu

const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");
const executeCodes = () => {
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
    });
  });
};

window.addEventListener("load", executeCodes);