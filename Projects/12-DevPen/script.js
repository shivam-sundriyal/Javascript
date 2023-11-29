let output = document.getElementById("output");

const areas = document.querySelectorAll(".box");

areas.forEach((area) => {
  area.addEventListener("keyup", () => {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;

    output.contentDocument.body.innerHTML =
      htmlCode + "<style>" + cssCode + "</style>";

    output.contentWindow.eval(jsCode);    
  });
});