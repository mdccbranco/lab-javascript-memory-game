const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

window.addEventListener("load", event => {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("turned");
      card.classList.add("picked");
      memoryGame.pickedCards.push(card.dataset.cardName);
      if (memoryGame.pickedCards.length === 2) {
        if (
          memoryGame.checkIfPair(
            memoryGame.pickedCards[0],
            memoryGame.pickedCards[1]
          )
        ) {
          memoryGame.pickedCards.splice(0);
          document.querySelectorAll(".card.picked").forEach(cardPicked => {
            cardPicked.classList.remove("picked");
            cardPicked.classList.add("guessed");
          });
        } else {
          memoryGame.pickedCards.splice(0);
          setTimeout(
            () =>
              document.querySelectorAll(".card.picked").forEach(cardPicked => {
                cardPicked.classList.remove("picked");
                cardPicked.classList.remove("turned");
              }),
            1000
          );
        }
      }
      if (true) {
        html = `<div style="display: block; margin: 0 auto; margin-top:250px">`;
        html += `<h1>You Won!!!</h1>`;
        html += `</div>`;
        document.querySelector("#memory-board").innerHTML = html;
      }

      document.getElementById("pairs-clicked").innerHTML =
        memoryGame.pairsClicked;
      document.getElementById("pairs-guessed").innerHTML =
        memoryGame.pairsGuessed;
    });
  });
});
