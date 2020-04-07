var canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext('2d');
var image = document.getElementById('cards');


const Cards = {
    pic: image,
    x: 100,
    y: 600,
    w: 720,
    h: 300
};

dist()


function insertCards() {
   
    ctx.drawImage(
        Cards.pic, 
        Cards.x, 
        Cards.y, 
        Cards.w, 
        Cards.h);
};

insertCards();

function moveCards(){
    Cards.y = 100;
};

function update() {
     moveCards();

     insertCards();

     console.log("Is this shit even working?");
};


image.onmouseclick() = update;
