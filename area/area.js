const sides = document.querySelectorAll(".sides");
const submitBtn = document.querySelector("#btn-submit-quiz");
const outputEl = document.querySelector("#output");

outputEl.style.display = "none";
function calculateArea() {
  const area = (1 / 2) * (Number(sides[0].value) * Number(sides[1].value));

  outputEl.style.display = "block";

  outputEl.innerText = "Area of Triangle is " + area.toFixed(2);
}

submitBtn.addEventListener("click", calculateArea);
