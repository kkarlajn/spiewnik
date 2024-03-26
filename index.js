

let number = 10;

function kochamKarcie() {
    document.querySelector('h3').innerText = number;
    if (number > 0) {
        number = number - 1;
    } else if (number == 0) {
        number = "go!";
        toggleElement(document.querySelector("#cranbutton"), "Cranberries - Zombie");
        let mySound = new Audio('zombie.mp3');
        mySound.play();
    }
}

// document.querySelector("#cranbutton").onclick(function(){setInterval(kochamKarcie, 1000)});