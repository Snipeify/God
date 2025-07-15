const names = [
  "Spike", "Trey", "Priority", "Strengthen", "TreyCC", "LostlnLA",
  "JayyBeWithYou", "Cerupt", "Harmoney", "Zeno", "TGTreyPorter",
  "equosim", "TreyCreedoCrew", "AkeliousR24", "San", "Akelious"
];

let index = 0;
let nameSpan = document.getElementById("nameCycle");
let byLine = document.getElementById("byLine");

function cycleNames() {
  const name = names[index];
  nameSpan.textContent = name;

  if (name === "TreyCreedoCrew") {
    setTimeout(() => { nameSpan.textContent = ""; }, 1500);
  }

  const delay = (name === "Akelious") ? 4000 : 2000;

  index++;
  if (index < names.length) {
    setTimeout(cycleNames, delay);
  } else {
    setTimeout(() => {
      byLine.style.display = "none";
    }, delay);
  }
}

setTimeout(cycleNames, 2000);

// Final fadeout after 4:07 (247000 ms)
setTimeout(() => {
  document.querySelector(".fade-in").style.display = "none";
  document.getElementById("finalMessage").style.display = "block";
}, 247000);

// Try to play audio once page is interacted
const bgm = document.getElementById("bgm");
document.body.addEventListener("click", () => {
  bgm.play().catch(() => {});
});
