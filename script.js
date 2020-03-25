var canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext('2d');
var img = document.getElementById('cards');


const Cards = {
    pic: img,
    x: 100,
    y: 600,
    w: 720,
    h: 300
};


function insertCards() {
    ctx.drawImage(
        Cards.pic, 
        Cards.x, 
        Cards.y, 
        Cards.w, 
        Cards.h);
};

addEventListener.Cards.onClick

insertCards();