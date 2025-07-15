const names = [
  "Spike",
  "Trey",
  "Priority",
  "Strengthen",
  "TreyCC",
  "LostlnLA",
  "JayyBeWithYou",
  "Cerupt",
  "Harmoney",
  "Zeno",
  "TGTreyPorter",
  "equosim",
  "TreyCreedoCrew",
  "AkeliousR24",
  "San",
  "Akelious"
];

let index = 0;
const nameSpan = document.getElementById("nameCycle");
const byLine = document.getElementById("byLine");
const overlay = document.getElementById("overlay");
const bgm = document.getElementById("bgm");
const sorryText = document.getElementById("sorryText");
const openMessage = document.getElementById("openMessage");

// Build scroll-names with colored "Sanuuly"
const scrollNames = document.getElementById("scrollNames");
const nameList = [
  "Xuyis", "INVATIVITY", "Almighty", "Asus",
  "Sanuuly", "Umi", "Rusk", "Sharn", "Zvmt1", "Bryson", "JuntBusta", "Tav"
];
scrollNames.innerHTML = nameList
  .map(name => {
    if (name === "Sanuuly") {
      return `<span class="sanuuly">${name}</span>`;
    } else {
      return `<span>${name}</span>`;
    }
  })
  .join(" • ");

// Cycle the "- By" names as before
function cycleNames() {
  const name = names[index];
  nameSpan.textContent = name;

  if (name === "TreyCreedoCrew") {
    setTimeout(() => {
      nameSpan.textContent = "";
    }, 1500);
  }

  const delay = name === "Akelious" ? 4000 : 2000;
  index++;

  if (index < names.length) {
    setTimeout(cycleNames, delay);
  } else {
    setTimeout(() => {
      byLine.style.opacity = "0";
    }, delay);
  }
}

setTimeout(cycleNames, 2000);

// After 4:07 (247000 ms), switch text and fade elements
setTimeout(() => {
  // Fade out bottom message and byLine
  byLine.style.opacity = "0";
  openMessage.style.opacity = "0";

  // Change main text smoothly
  sorryText.style.transition = "color 2s ease";
  sorryText.textContent = "Thanks for the memories <3";
}, 247000);

// Play audio after click on overlay, then hide overlay
overlay.addEventListener("click", () => {
  bgm.play();
  overlay.style.display = "none";
});
