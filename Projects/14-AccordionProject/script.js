const acc = document.querySelectorAll(".accordion");

acc.forEach( (accordion) => {
    accordion.addEventListener('click', (e) => {
        accordion.classList.toggle('active');
    })
} )