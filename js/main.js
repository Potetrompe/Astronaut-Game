//* Get ids
var body = document.getElementById("body");
var fullScreen = document.getElementById("fullScreen");
var clear = document.getElementById("clear");
var pTurn = document.getElementById("playerTurn");
var navP = document.getElementById("navP");
var nav = document.getElementById("nav");
var plat1 = document.getElementById("plat1");
var plat2 = document.getElementById("plat2");
var plat3 = document.getElementById("plat3");
var platforms = document.getElementsByClassName("platforms");
var slot = document.getElementsByClassName("slot");

//* Set globals
var playerTurn = "X";

//| Nav remove // fullscreen:

var navShow;
var count = 0;
fullScreen.onclick = function(){
    //nav.classList.add("hidden");  //* this way?

    if(nav.style.display === "none"){
        nav.style.display = "block";
        //nav.appendChild(fullScreen);
    } else {
        nav.style.display = "none";
        //body.insertAdjacentElement("afterbegin", fullScreen);
    }
    
}
clear.onclick = function(){
    for (let i = 0; i < 27; i++) {
        slot[i].innerHTML = "";
        pTurn.innerHTML = "Player X";
        playerTurn = "X";
    }
}

//| Game Start      


//* Game part (place X / O)
//? HUSK:    document.getElementById('hello').classList.add('someClass');


for (let i = 0; i < 27; i++) {
    //console.log(slot[i]);
    //plat1.children[i]
    slot[i].addEventListener("mousedown", function(){        
        //this.classList.toggle("active");
        if(playerTurn == "X" && this.innerHTML == ""){
            this.innerHTML = "X";
            playerTurn = "O";
            pTurn.innerHTML = "Player O";//playerTurn;
        }else if(playerTurn == "O" && this.innerHTML == ""){
            this.innerHTML = "O";
            playerTurn = "X";
            pTurn.innerHTML = "Player X";//playerTurn;
        }
        //console.log("rute: " + i);
    });
}


//| Long checklist for winning

