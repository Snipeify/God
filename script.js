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
const scrollNames = document.getElementById("scrollNames");
const clickOverlay = document.getElementById("clickOverlay");
const mainContent = document.getElementById("mainContent");
const bgm = document.getElementById("bgm");

// Build scroll-names with colored "Sanuuly"
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
  .join(" • ") + " • "; // add trailing separator for smooth scroll

// Function to cycle "- By" names
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

// Start cycling names with delay once main content is visible
function startCycle() {
  setTimeout(cycleNames, 2000);
}

// At 4:07 (247000ms) change text and fade elements
function startFinalSequence() {
  byLine.style.opacity = "0";
  openMessage.style.opacity = "0";

  sorryText.style.transition = "color 2s ease";
  sorryText.textContent = "Thanks for the memories <3";
}

// On clicking the initial Click text overlay
clickOverlay.addEventListener("click", () => {
  // Fade out the click overlay
  clickOverlay.classList.add("fadeOut");
  // After fade out, hide overlay and show main content
  setTimeout(() => {
    clickOverlay.style.display = "none";
    mainContent.style.display = "block";

    // Fade in main content
    setTimeout(() => {
      mainContent.classList.add("visible");
      // Play audio
      bgm.play();
      // Start the cycle of names
      startCycle();

      // Schedule the final sequence at 4:07
      setTimeout(startFinalSequence, 247000);
    }, 100); // slight delay for opacity transition
  }, 1500); // matches CSS fadeOut transition
});
