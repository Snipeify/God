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
const sorryText = document.getElementById("sorryText");
const openMessage = document.getElementById("openMessage");
const scrollNamesInner = document.getElementById("scrollNamesInner");
const clickOverlay = document.getElementById("clickOverlay");
const mainContent = document.getElementById("mainContent");
const bgm = document.getElementById("bgm");

const nameList = [
  "Xuyis", "INVATIVITY", "Almighty", "Asus",
  "Sanuuly", "Umi", "Rusk", "Sharn", "Zvmt1", "Bryson", "JuntBusta", "Tav"
];

// Build scrolling names with "Sanuuly" yellow and duplicate for seamless scroll
scrollNamesInner.innerHTML = nameList
  .map(name => {
    if (name === "Sanuuly") {
      return `<span class="sanuuly">${name}</span>`;
    } else {
      return `<span>${name}</span>`;
    }
  })
  .join(" • ") + " • ";
scrollNamesInner.innerHTML += scrollNamesInner.innerHTML; // duplicate for infinite scroll

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

function startCycle() {
  setTimeout(cycleNames, 2000);
}

function startFinalSequence() {
  byLine.style.opacity = "0";
  openMessage.style.opacity = "0";

  sorryText.style.transition = "color 2s ease";
  sorryText.textContent = "Thanks for the memories <3";
}

clickOverlay.addEventListener("click", () => {
  clickOverlay.classList.add("fadeOut");
  setTimeout(() => {
    clickOverlay.style.display = "none";
    mainContent.style.display = "block";

    setTimeout(() => {
      mainContent.classList.add("visible");
      bgm.play();
      startCycle();
      setTimeout(startFinalSequence, 247000);
    }, 100);
  }, 1500);
});
