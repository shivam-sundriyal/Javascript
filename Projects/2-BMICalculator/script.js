const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height <= 0 || isNaN(height)) {
    result.innerHTML = "Please provide a valid height";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    result.innerHTML = "Please provide a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let guide = "";
    if(bmi < 18.6) {
        guide = "Underweight";
        result.style.color = "red";
    } else if(bmi >= 18.6 && bmi <= 24.9) {
        guide = "Normal Weight";
        result.style.color = "green";
    } else {
        guide = "Overweight";
        result.style.color = "red";
    }
    result.innerHTML = `<span>${bmi}</span> <br> <span>${guide}</span>`;
    // result.innerHTML = ``;
  }
});
