const player1Name = prompt("What's your name?");
const player2Name = prompt(`What's ${player1Name} opponent name?`);

let name1 = document.querySelector('.name1');
name1.textContent = player1Name;

let name2 = document.querySelector('.name2');
name2.textContent = player2Name;


function battleBegin() {
  let player1 = Math.floor((Math.random() * 6) + 1);
  let player2 = Math.floor((Math.random() * 6) + 1)

  let player1Img = document.querySelector(".img1");
  player1Img.setAttribute('src', `images/dice${player1}.png`)

  let player2Img = document.querySelector(".img2");
  player2Img.setAttribute('src', `images/dice${player2}.png`)

  let heading = document.querySelector(".container h1");
  let button = document.querySelector('button');
  if (player1 > player2) {
    heading.textContent = `🚩${player1Name} Wins!`;
    button.textContent = 'Reshake the Dice'
  } else if (player2 > player1) {
    heading.textContent = `${player2Name} Wins!🚩`;
    button.textContent = 'Reshake the Dice'
  } else {
    heading.textContent = "🚩Draw🚩";
    button.textContent = 'Reshake the Dice'
  }
}

const shakeButton = document.querySelector('.shake');
shakeButton.addEventListener('click', battleBegin);