// document.querySelector("button").addEventListener("click", () => {
//   alert("Button clicked");
// });

document.querySelectorAll("button").forEach((element, index) => {
  element.addEventListener("click", () => {
    const key = element.innerHTML;
    makeSound(key);
    buttonAnimation(key);
  });
});

document.addEventListener("keydown", event => {
  const key = event.key;
  makeSound(key);
  buttonAnimation(key);
});

function makeSound(key) {
  const audio = new Audio("sounds/" + key + ".mp3");
  audio.play();
}

function buttonAnimation(key) {
  const button = document.querySelector("." + key);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}
