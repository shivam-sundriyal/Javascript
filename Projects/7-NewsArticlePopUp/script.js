const btn = document.querySelector(".button");

btn.addEventListener("click", function (e) {
  let newsLetter = document.getElementById("newsLetter");
  newsLetter.classList.toggle("active");
});

const close = document.querySelector(".close");

close.addEventListener('click', function(e) {
    let newsLetter = document.getElementById("newsLetter");
    newsLetter.classList.toggle("active");
})