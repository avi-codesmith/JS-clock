"use strict";

const moon = document.querySelector(".moon");
const para = document.querySelector(".parah");
const para2 = document.querySelector(".param");
const para3 = document.querySelector(".paras");
const hrs = document.querySelector(".hrs");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const soundPlay = document.querySelector(".sound");

let clickmoon = false;
let soundTick = new Audio("soundTick.mp3");
let sound = false;

setInterval(() => {
  if (sound === true) {
    soundTick.play();
  }
  const currentTime = new Date();
  hrs.innerHTML = currentTime.getHours().toString().padStart(2, "0");
  min.innerHTML = currentTime.getMinutes().toString().padStart(2, "0");
  sec.innerHTML = currentTime.getSeconds().toString().padStart(2, "0");
}, 100);

moon.addEventListener("click", () => {
  clickmoon = !clickmoon;

  if (clickmoon) {
    document.querySelector(".body").style.backgroundColor = "#ddd";
    document.querySelector(".min").style.color = "#111";
    document.querySelector(".sec").style.color = "#111";
    document.querySelector(".hrs").style.color = "#111";
    document.querySelector(".change").style.color = "#111";
    document.querySelector(".change2").style.color = "#111";
    moon.classList.add("blackc");
    para.style.color = "#111";
    para2.style.color = "#111";
    para3.style.color = "#111";
    soundPlay.classList.add("blackc");
  } else {
    document.querySelector(".body").style.backgroundColor = "#111";
    document.querySelector(".min").style.color = "#fff";
    document.querySelector(".sec").style.color = "#fff";
    document.querySelector(".hrs").style.color = "#fff";
    document.querySelector(".change").style.color = "#fff";
    document.querySelector(".change2").style.color = "#fff";
    moon.classList.remove("blackc");
    para.style.color = "#fff";
    para2.style.color = "#fff";
    para3.style.color = "#fff";
    soundPlay.classList.remove("blackc");
  }
});

soundPlay.addEventListener("click", () => {
  if (soundPlay.src.includes("mute.png")) {
    soundPlay.src = "volume.png";
    sound = true;
  } else if (soundPlay.src.includes("volume.png")) {
    soundPlay.src = "mute.png";
    sound = false;
  }
});
