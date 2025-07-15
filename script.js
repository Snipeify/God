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

  // Fix: Make sure scroll area is filled
  if (scrollNamesInner) {
    scrollNamesInner.innerHTML = nameList.map(name =>
      `<span class="${name === "Sanuuly" ? "sanuuly" : ""}">${name}</span>`
    ).join(" ") + scrollNamesInner.innerHTML;
  }

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

  function finalTransition() {
    byLine.style.opacity = "0";
    openMessage.style.opacity = "0";
    sorryText.textContent = "Thanks for the memories <3";
    sorryText.classList.remove("glow");
  }

  clickOverlay.addEventListener("click", () => {
    clickOverlay.classList.add("fadeOut");

    setTimeout(() => {
      clickOverlay.style.display = "none";
      mainContent.style.display = "block";

      document.querySelectorAll(".fade-in").forEach(el => {
        el.classList.add("visible");
      });

      // Play audio after click
      bgm.volume = 1.0;
      const tryPlay = bgm.play();
      if (tryPlay && tryPlay.catch) {
        tryPlay.catch(() => {
          alert("Autoplay blocked. Click the page again.");
        });
      }

      rotateByNames();
      setTimeout(finalTransition, 247000); // 4:07
    }, 1000);
  });
});
