document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".close-button");
  button.addEventListener("click", function () {
    function random(max) {
      return Math.floor(Math.random() * max);
    }
    function getRandomColour() {
      const letters = "0123456789ABCDEF";
      let colour = "#";
      for (let i = 0; i < 6; i++) {
        colour += letters[random(16)];
      }
      return colour;
    }
    const rect = button.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    let c = document.createDocumentFragment();
    for (let i = 0; i < 100; i++) {
      let styles = `transform: translate3d(${random(500) - 250}px, ${
        random(200) - 150
      }px, 0) rotate(${random(360)}deg);
                    background: ${getRandomColour()};
                    animation: bang 700ms ease-out forwards;
                    opacity: 0;
                    left: ${buttonCenterX}px;
                    top: ${buttonCenterY}px;`;
      let confettiPiece = document.createElement("div");
      confettiPiece.className = "confetti-piece";
      confettiPiece.style.cssText = styles;
      c.appendChild(confettiPiece);
    }
    document.body.appendChild(c);
    const confettiPieces = document.querySelectorAll(".confetti-piece");
    confettiPieces.forEach((piece) => {
      piece.addEventListener("animationend", () => {
        piece.remove();
      });
    });
  });
});
