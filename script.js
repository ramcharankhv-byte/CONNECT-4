let boxes = document.querySelectorAll(".box");
let turnR = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("played")) return;

    if (turnR) {
      box.classList.remove("bg-white");
      box.style.backgroundColor = "red";
    } else {
      box.classList.remove("bg-white");
      box.style.backgroundColor = "yellow";
    }

    box.classList.add("played");
    turnR = !turnR;
  });
});
