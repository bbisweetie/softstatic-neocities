(() => {
  "use strict";
  const copy = {
    dawn: {
      text: "a sky the color of unwritten letters. the room is not asking you to begin yet.",
      alt: "original css illustration of a window at dawn with pale sun and quiet blue horizon"
    },
    rain: {
      text: "the rain is only a drawing. still, there is something restful about a window that asks for nothing.",
      alt: "original css illustration of soft rain over a blue-grey sky behind a curtained window"
    },
    dusk: {
      text: "the last light can stay a little longer. nothing in this room needs to be finished before dark.",
      alt: "original css illustration of an evening sky, a low warm moon, and purple hills behind a curtained window"
    }
  };
  const windowScene = document.querySelector(".sh-window-scene");
  const label = document.querySelector(".sh-weather-index");
  const description = document.getElementById("sh-weather-description");
  const buttons = [...document.querySelectorAll("[data-weather-choice]")];
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const choice = button.dataset.weatherChoice;
      if (!copy[choice] || !windowScene || !description || !label) return;
      windowScene.dataset.weather = choice;
      windowScene.setAttribute("aria-label", copy[choice].alt);
      label.textContent = "weather / " + choice;
      description.textContent = copy[choice].text;
      buttons.forEach(item => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
    });
  });
})();