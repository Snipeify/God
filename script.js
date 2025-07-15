const names = [
  "Spike", "Trey", "Priority", "Strengthen", "TreyCC", "LostlnLA",
  "JayyBeWithYou", "Cerupt", "Harmoney", "Zeno", "TGTreyPorter",
  "equosim", "TreyCreedoCrew", "AkeliousR24", "San", "Akelious"
];

let index = 0;
let nameSpan = document.getElementById("nameCycle");
let byLine = document.getElementById("byLine");

function cycleNames() {
  let name = names[index];

  nameSpan.textContent = name;

  // Special fade for "TreyCreedoCrew"
  if (name === "TreyCreedoCrew") {
    setTimeout(() => {
      nameSpan.textContent = "";
    }, 1500);
  }

  // Pause longer on "Akelious"
  let delay = (name === "Akelious") ? 4000 : 2000;

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
