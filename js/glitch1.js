"use strict";

const bg = document.getElementById("glitch1");
const count = 50;

const glitchEfect = (_) => {
  for (let i = 0; i < count; i++) {
    let glitchBox = document.createElement("div");
    glitchBox.className = "box";
    bg.appendChild(glitchBox);
  }

  setInterval(() => {
    let glitch = document.getElementsByClassName("box");
    for (let i = 0; i < glitch.length; i++) {
      glitch[i].style.left = Math.floor(Math.random() * 100) + "vw";
      glitch[i].style.top = Math.floor(Math.random() * 100) + "vh";
      glitch[i].style.width = Math.floor(Math.random() * 400) + "px";
      glitch[i].style.height = Math.floor(Math.random() * 100) + "px";
      glitch[i].style.backgroundPosition = Math.floor(Math.random() * 5) + "px";
    }
  }, 100);
};

window.addEventListener("load", glitchEfect);
