const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#btn-submit-quiz");
const outputEl = document.querySelector("#output");
const queDiv = document.querySelectorAll(".question-container");

const correctAnswers = ["89°", "right angled", "yes", "isosceles", "5cm", "30"];

outputEl.style.display = "none";
function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);

  for (let value of formResults.values()) {
    // for (let value of formResults) {
    if (value === correctAnswers[index]) {
      score = score + 1;
      // queDiv[index].style.backgroundColor = "#3257a8";
    }
    //  else {
    // queDiv[index].style.backgroundColor = "#a82352";
    // }
    index = index + 1;
  }

  submitAnswerBtn.style.display = "none";
  outputEl.style.display = "block";
  outputEl.innerHTML = `Your score is:  ${score}`;
}

submitAnswerBtn.addEventListener("click", calculateScore);
