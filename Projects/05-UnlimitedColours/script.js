const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

let intervalID;

startChangingColor = function() {
    if(intervalID == null) {
        intervalID = setInterval(changeBG, 1000);
    }
    
    function changeBG() {
        document.body.style.backgroundColor = randomColor();
    }
}

stopChangingColor = function() {
    clearInterval(intervalID);
    intervalID = null;
}


document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);