const getLost = document.querySelector("button");
const disappear = document.querySelector(".disappear");
const square = document.querySelector(".square");
const fields = document.querySelectorAll(".field");
const shield = document.querySelector(".shield");
const pWin = document.querySelector('.win');
const newGameButton = document.querySelector('.newGameButton');


let arrO = [];
let arrX = [];
let i = 0;
let oWinI = 0;
let xWinI = 0;

function moveOut() {
    disappear.style.transform = "translateX(-100%)";
    square.style.transform = "translateX(0vw)";
    window.navigator.vibrate(300);
};

function shieldOWin() {
    oWinI++;
    shield.style.bottom = "0vh";
    pWin.innerHTML = `>O WIN< </br> ${oWinI}:${xWinI}`;
    window.navigator.vibrate([100, 100, 110, 100, 300]);
};

function shieldXWin() {
    xWinI++;
    shield.style.bottom = "0vh";
    pWin.innerHTML = `>X WIN< </br> ${xWinI}:${oWinI}`;
    window.navigator.vibrate([100, 110, 100, 100, 300]);
};

function nobodyWin () {
    shield.style.bottom = "0vh";
    pWin.innerHTML = `> draw < </br> X:${xWinI}  O:${oWinI}`;
};

function newGame() {
    i = i - arrO.length - arrX.length + 1;
    shield.style.bottom = "-100vh";

    arrO = [];
    arrX = [];
    let j = 1;

    for (let field of fields) {
        field.style.transition = "0s";
        field.style.fontSize = "0px";
        field.innerText = j++;
    };
};


for (let field of fields) { 

    field.addEventListener("click", function () {

        if (this.innerText !== "O" && this.innerText !== "X" && i % 2 === 0) {

            arrO.push(+this.innerHTML);
            arrO.sort((x, y) => x - y);
            let oJoin = arrO.join('');

            if (/\d*1\d*2\d*3\d*/.test(oJoin) || /\d*4\d*5\d*6\d*/.test(oJoin) || /\d*7\d*8\d*9\d*/.test(oJoin) || /\d*1\d*4\d*7\d*/.test(oJoin) || /\d*2\d*5\d*8\d*/.test(oJoin) || /\d*3\d*6\d*9\d*/.test(oJoin) || /\d*1\d*5\d*9\d*/.test(oJoin) || /\d*3\d*5\d*7\d*/.test(oJoin)) {
                shieldOWin();
            } else if (arrO.length === 5 || arrX.length === 5 ) {
                console.log("9 ruchów")
                nobodyWin();
            };
            this.innerText = "O";
            i++;

        } else if (this.innerText !== "O" && this.innerText !== "X" && i % 2 !== 0) {

            arrX.push(+this.innerHTML);
            arrX.sort((x, y) => x - y);
            let xJoin = arrX.join('');

            if (/\d*1\d*2\d*3\d*/.test(xJoin) || /\d*4\d*5\d*6\d*/.test(xJoin) || /\d*7\d*8\d*9\d*/.test(xJoin) || /\d*1\d*4\d*7\d*/.test(xJoin) || /\d*2\d*5\d*8\d*/.test(xJoin) || /\d*3\d*6\d*9\d*/.test(xJoin) || /\d*1\d*5\d*9\d*/.test(xJoin) || /\d*3\d*5\d*7\d*/.test(xJoin)) {
                shieldXWin();
            } else if (arrO.length === 5 || arrX.length === 5 ) {
                nobodyWin();
            };
            this.innerText = "X";
            i++;
        };
        field.style.transition = "ease-out .3s";
        field.style.color = "#52489C";
        field.style.fontSize = "50px";
    });
};

getLost.addEventListener('click', moveOut);
newGameButton.addEventListener('click', newGame);