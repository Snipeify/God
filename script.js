document.addEventListener("DOMContentLoaded", () => {
  const nameList = [
    "Xuyis", "INVATIVITY", "Almighty", "Asus", "Sanuuly", "Umi", "Rusk",
    "Sharn", "Zvmt1", "Bryson", "JuntBusta", "Tav"
  ];

  const cycleNames = [
    "Spike", "Trey", "Priority", "Strengthen", "TreyCC", "LostlnLA",
    "JayyBeWithYou", "Cerupt", "Harmoney", "Zeno", "TGTreyPorter",
    "equosim", "TreyCreedoCrew", "AkeliousR24", "San", "Akelious"
  ];

  const clickOverlay = document.getElementById("clickOverlay");
  const mainContent = document.getElementById("mainContent");
  const scrollNamesInner = document.getElementById("scrollNamesInner");
  const nameCycle = document.getElementById("nameCycle");
  const byLine = document.getElementById("byLine");
  const sorryText = document.getElementById("sorryText");
  const openMessage = document.getElementById("openMessage");
  const bgm = document.getElementById("bgm");

  // Fill top scroller with names
  scrollNamesInner.innerHTML =
    nameList.map(name =>
      `<span class="${name === "Sanuuly" ? "sanuuly" : ""}">${name}</span>`
    ).join(" ") + scrollNamesInner.innerHTML;

  // Cycle -By names
  function rotateByNames(index = 0) {
    if (index >= cycleNames.length) {
      byLine.style.opacity = "0";
      return;
    }

    const name = cycleNames[index];
    nameCycle.textContent = name;

    if (name === "TreyCreedoCrew") {
      setTimeout(() => {
        nameCycle.textContent = "";
      }, 1500);
    }

    const delay = (name === "Akelious") ? 4000 : 2000;
    setTimeout(() => rotateByNames(index + 1), delay);
  }

  // Final transition after 4:07
  function
