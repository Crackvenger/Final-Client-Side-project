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


function insertCards() {
   
    ctx.drawImage(
        Cards.pic, 
        Cards.x, 
        Cards.y, 
        Cards.w, 
        Cards.h);
};

function getMousePosition(object, event) { 
    let rect = object.getBoundingClientRect(); 
    let x = event.clientX - rect.left; 
    let y = event.clientY - rect.top; 
    console.log("Coordinate x: " + x,  
                "Coordinate y: " + y); 
    if(x == Cards.x + Cards.w && y == Cards.y + Cards.h) {
        console.log("Hit");
    }
} 

function moveCards(){
    Cards.y = 100;
};

function update() {
     moveCards();0

     insertCards();

     console.log("check");
};


canvas.addEventListener("mousedown", function(e) {
    getMousePosition(canvas, e);
});

insertCards();