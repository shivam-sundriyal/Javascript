const textarea = document.querySelector("textarea");
const counter = document.querySelector(".counter");

textarea.addEventListener('keyup', (e) => {
    const textLength = textarea.value.length;
    console.log(textLength);

    counter.innerText = `${textLength}`;
})