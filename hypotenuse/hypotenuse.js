const sides = document.querySelectorAll(".side-input");
// queryselectorAll gives us the array of elements
const hypotenuseBtn = document.querySelector("#btn-submit-quiz");
const outputEl = document.querySelector("#output");

outputEl.style.display = "none";
function calculateSumOfSquares(a, b) {
  // notation for power eg : a**2 --- means a*2 or a square
  return a ** 2 + b ** 2;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );

  outputEl.style.display = "block";

  // to fix decimal size upto 2 digits
  const lengthOfH = Math.sqrt(sumOfSquares).toFixed(2);
  console.log(lengthOfH);
  outputEl.innerText = `Length of hypotenuse is ${lengthOfH}`;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
