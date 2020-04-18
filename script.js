var canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext('2d');
var image = document.getElementById('cards');


function cards(image, x, y, width, height) {
    this.pic= image;
    this.x= 100;
    this.y= 450;
    this.width= 720;
    this.height= 200;
};

x: 100;
y: 450;
width: 720;
height: 200;


function insertCards() {
    ctx.drawImage(
        Cards.pic, 
        Cards.x, 
        Cards.y, 
        Cards.width, 
        Cards.height);
};


function getMousePosition(object, event) { 
    let rect = object.getBoundingClientRect(); 
    let x = event.clientX - rect.left; 
    let y = event.clientY - rect.top; 
    return{
        x,y
    }
} 

function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y;
}

function moveCards(){
    Cards.y = 600;
};

function update() {
    ctx.clearRect(
        Cards.x,
        Cards.y,
        Cards.width,
        Cards.height
        )

     moveCards(); 

     insertCards();

     console.log("check");
};

insertCards();

canvas.addEventListener("mousedown", function(e) {
    var pos = getMousePosition(canvas, e);

    if(isInside(pos,Cards)) {
        update();
    }
    else {
        console.log("not hit");
    }
}, false);

