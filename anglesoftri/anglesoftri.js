const inputs = document.querySelectorAll(".angle-input-val");
const output = document.querySelector("#output");
const submitBtn = document.querySelector("#btn-submit");

console.log(inputs);

output.style.display = "none";
function calculateSumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

function checkTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  output.style.display = "block";
  if (sumOfAngles === 180) {
    output.innerText = "Yay! these angles make a triangle 🏆🏆";
  } else {
    output.innerText = "Oops! these angles doesnot make a triangle";
  }
}

submitBtn.addEventListener("click", checkTriangle);
