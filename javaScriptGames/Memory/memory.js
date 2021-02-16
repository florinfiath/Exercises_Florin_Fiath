
   document.addEventListener("DOMContentLoaded", () => {

    const cardArray = [
      {
        name: "horse",
        img: "/javaScriptGames/Memory/Photos/horse.jpg",
      },
      {
        name: "horse",
        img: "/javaScriptGames/Memory/Photos/horse.jpg",
      },
      {
        name: "deer",
        img: "/javaScriptGames/Memory/Photos/deer.jpg",
      },
      {
        name: "deer",
        img: "/javaScriptGames/Memory/Photos/deer.jpg",
      },
      {
        name: "lion",
        img: "/javaScriptGames/Memory/Photos/lion.jpg",
      },
      {
        name: "lion",
        img: "/javaScriptGames/Memory/Photos/lion.jpg",
      },
      {
        name: "swan",
        img: "/javaScriptGames/Memory/Photos/swan.jpg",
      },
      {
        name: "swan",
        img: "/javaScriptGames/Memory/Photos/swan.jpg",
      },
      {
        name: "cat",
        img: "/javaScriptGames/Memory/Photos/cat.jpg",
      },
      {
        name: "cat",
        img: "/javaScriptGames/Memory/Photos/cat.jpg",
      },
      ,
      {
        name: "rabbit",
        img: "/javaScriptGames/Memory/Photos/rabbit.jpg",
      },
      {
        name: "rabbit",
        img: "/javaScriptGames/Memory/Photos/rabbit.jpg",
      },
    ];

  //  create game Board 


    cardArray.sort(() => 0.5 - Math.random())

     const grid = document.querySelector('.grid')
     const resultDisplay = document.querySelector('#result')
     var cardsChosen = [];
     var cardsChosenId = [];
     var cardsWon = [];



     function createBoard(){

        for (let i = 0; i < cardArray.length; i++){
          var card = document.createElement('img');
          card.setAttribute("src", "/javaScriptGames/Memory/Photos/dark.png");
          card.setAttribute('data-id', i);
          card.addEventListener('click', flipCard);
          grid.appendChild(card);
         
     } 
    }

     //check for matches
      function checkForMatch(){
         var cards = document.querySelectorAll('img')
         const optionOneId = cardsChosenId[0];
         const optionTwoId = cardsChosenId[1];
         if (optionOneId[0] === optionTwoId[1]) {
           alert("You found a match");
           cards[optionOneId].setAttribute(
             "src",
             "/javaScriptGames/Memory/Photos/white.png"
           );
           cards[optionTwoId].setAttribute(
             "src",
             "/javaScriptGames/Memory/Photos/white.png"
           );
           alert('You have clicked the same image')
          
         } else if (cardsChosen[0] === cardsChosen[1]{
           cards[optionOneId].setAttribute(
             "src",
             "/javaScriptGames/Memory/Photos/black.png"
           );
           cards[optionTwoId].setAttribute(
             "src",
             "/javaScriptGames/Memory/Photos/black.png"
           );
           alert("Sorry , try again");
         }

         cardsChosen = [];
         cardsChosenId = [];

        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
          resultDisplay.textContent = 'Congratulations! ,You found them all!'
        }
      }

     //flip your card 
    function flipCard(){
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if(cardsChosen.length === 2){
         setTimeout(checkForMatch, 500)

      }

    }




})


// const cards = document.querySelectorAll(".grid");

// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;

// function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;

//   this.classList.add("flip");

//   if (!hasFlippedCard) {
//     // first click
//     hasFlippedCard = true;
//     firstCard = this;

//     return;
//   }

//   // second click
//   secondCard = this;

//   checkForMatch();
// }

// function checkForMatch() {
//   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

//   isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//   firstCard.removeEventListener("click", flipCard);
//   secondCard.removeEventListener("click", flipCard);

//   resetBoard();
// }

// function unflipCards() {
//   lockBoard = true;

//   setTimeout(() => {
//     firstCard.classList.remove("flip");
//     secondCard.classList.remove("flip");

//     resetBoard();
//   }, 1500);
// }

// function resetBoard() {
//   [hasFlippedCard, lockBoard] = [false, false];
//   [firstCard, secondCard] = [null, null];
// }

// (function shuffle() {
//   cards.forEach((card) => {
//     let randomPos = Math.floor(Math.random() * 12);
//     card.style.order = randomPos;
//   });
// })();

// cards.forEach((card) => card.addEventListener("click", flipCard));