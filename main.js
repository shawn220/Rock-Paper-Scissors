const rockChoice = document.querySelector('#rock');
const paperChoice = document.querySelector('#paper');
const scissorsChoice = document.querySelector('#scissors');
const winsText = document.querySelector('#wins');
const losesText = document.querySelector('#loses');
const tiesText = document.querySelector('#ties');
const resetButton = document.querySelector('#reset');

const choices = ['r', 'p', 's'];

let wins = 0;
let loses = 0;
let ties = 0;

const checkAnswerRock = (choice, random) => {
  if (random === 'p') loses++;
  if (random === 's') wins++;
  if (random === choice) ties++;
};

const checkAnswerPaper = (choice, random) => {
  if (random === 's') loses++;
  if (random === 'r') wins++;
  if (random === choice) ties++;
};
const checkAnswerScissors = (choice, random) => {
  if (random === 'r') loses++;
  if (random === 'p') wins++;
  if (random === choice) ties++;
};

const updateScore = () => {
  winsText.innerHTML = wins;
  losesText.innerHTML = loses;
  tiesText.innerHTML = ties;
};

rockChoice.addEventListener('click', (e) => {
  checkAnswerRock(
    e.target.value,
    choices[Math.floor(Math.random() * choices.length)]
  );
  updateScore();
});

paperChoice.addEventListener('click', (e) => {
  checkAnswerPaper(
    e.target.value,
    choices[Math.floor(Math.random() * choices.length)]
  );
  updateScore();
});

scissorsChoice.addEventListener('click', (e) => {
  checkAnswerScissors(
    e.target.value,
    choices[Math.floor(Math.random() * choices.length)]
  );
  updateScore();
});

resetButton.addEventListener(`click`, () => {
  wins = 0;
  loses = 0;
  ties = 0;
  updateScore();
});

updateScore();
