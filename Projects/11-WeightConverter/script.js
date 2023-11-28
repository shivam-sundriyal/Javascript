const form = document.querySelector("form");
const select = document.getElementById("weight-converter");
const output = document.querySelector("#converted-weight");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("input");
  const val = parseFloat(input.value);    

  if (isNaN(val) || val <= 0) {
    output.classList.add("error");
    output.innerHTML = "<p>Enter a Valid Weight</p>";

    setTimeout(() => {
      output.innerHTML = "";
      output.classList.remove("error");
    }, 2500);
  } else {
    const selectedOption = select.options[select.selectedIndex];

    if (selectedOption.classList.contains("kg-to-lbs")) {        
      const convertedValue = (val * 2.20462).toFixed(2);
      output.innerHTML = `<p>${convertedValue} LBS</p>`;
    } else if (selectedOption.classList.contains("lbs-to-kg")) {        
      const convertedValue = (val * 0.453592).toFixed(2);
      output.innerHTML = `<p>${convertedValue} KG</p>`;
    }
  }
});