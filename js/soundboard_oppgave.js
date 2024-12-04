const header = document.createElement("header");

header.className = "main-header";

const title = document.createElement("h2");
title.textContent = "Velkommen til mitt Soundboard!";

const subtitle = document.createElement("p");
subtitle.textContent =
  "Trykk på knappene eller tastaturet for å spille av lydene.";

header.appendChild(title);
header.appendChild(subtitle);

document.body.prepend(header);

import sounds from "../data/soundsJSexample.js";

const drumkit = document.getElementById("drumkit");

if (!drumkit) {
  console.error("Elementet med ID 'drumkit' finnes ikke.");
} else {
  console.log(sounds);

  function createSoundButton(sound) {
    const button = document.createElement("button");
    button.textContent = `(${sound.key})`;

    button.style.backgroundImage = `url('./data/images/${sound.name.toLowerCase()}.webp')`;
    // button.style.backgroundSize = "cover";
    // button.style.backgroundPosition = "center";
    // button.style.width = "150px";
    // button.style.height = "150px";
    // button.style.border = "none";
    // button.style.color = "white";
    // button.style.fontWeight = "bold";
    // button.style.fontSize = "20px";
    // button.style.cursor = "pointer";
    // button.style.borderRadius = "100px";
    // button.style.margin = "10px";
    // button.style.display = "flex";
    // button.style.justifyContent = "center";
    // button.style.alignItems = "end";
    // button.style.textShadow = "2px 2px 4px #869887";

    const audio = document.createElement("audio");
    audio.src = `./data/${sound.file}`;
    audio.id = sound.name;

    window.addEventListener("keydown", function (event) {
      if (event.key === sound.key) {
        const allAudios = document.querySelectorAll("audio");
        allAudios.forEach((a) => {
          if (!a.paused) {
            a.pause();
            a.currentTime = 0;
          }
        });
        audio.play();
      }
    });

    window.addEventListener("keyup", function (event) {
      if (event.key === sound.key) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    button.addEventListener("click", function () {
      const allAudios = document.querySelectorAll("audio");
      allAudios.forEach((a) => {
        if (!a.paused) {
          a.pause();
          a.currentTime = 0;
        }
      });
      audio.play();
    });

    drumkit.appendChild(button);
    drumkit.appendChild(audio);
  }

  function createSoundButtons() {
    sounds.forEach((sound) => createSoundButton(sound));
  }

  createSoundButtons();
}
