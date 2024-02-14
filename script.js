window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
});
window.addEventListener("click", (e) => {
    // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // if (!audio) return;
    // console.log(audio);
    // audio.currentTime = 0;
    // audio.play();
    // key.classList.add("playing");
    console.log(e);
});
function removeTransition(e) {
    if (e.propertyName != "transform") return;
    console.log(e.propertyName);
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
console.log(keys);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
