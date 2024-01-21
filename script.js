const sounds = ["Greeting", "Pitch", "Part-ab", "Age", "Stayonline", "Stop"];

sounds.map((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stop();
    document.getElementById(sound).play();
  });
  document.getElementById("button").appendChild(btn);
});

function stop() {
  console.log(this);
  sounds.map((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
