document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btnNavidad");
  if (button) {
    button.addEventListener("click", () => {
      const img = document.getElementById("santa-img");
      if (!img) return;
      if (img.style.width === "15rem") {
        img.style.width = "17rem";
      } else {
        img.style.width = "15rem";
      }
    });
  }
  const tittle = document.getElementById("title");
  if (tittle) {
    const pColor = window.getComputedStyle(tittle).color;
    const fSize = window.getComputedStyle(tittle).fontSize;
    tittle.addEventListener("mouseover", () => {
      tittle.style.color = "orange";
      tittle.style.fontSize = "2.3rem";
    });
    tittle.addEventListener("mouseout", () => {
      tittle.style.color = pColor || "";
      tittle.style.fontSize = fSize;

    });
  }
});
