const sigil = document.querySelector(".sigil");
const words = ["∴", "∵", "⌁", "✶", "◌", "░"];

if (sigil) {
  let i = 0;
  setInterval(() => {
    i = (i + 1) % words.length;
    sigil.textContent = words[i];
  }, 1800);
}

document.addEventListener("pointermove", (event) => {
  const x = Math.round((event.clientX / window.innerWidth) * 100);
  const y = Math.round((event.clientY / window.innerHeight) * 100);
  document.documentElement.style.setProperty("--mouse-x", x + "%");
  document.documentElement.style.setProperty("--mouse-y", y + "%");
});
