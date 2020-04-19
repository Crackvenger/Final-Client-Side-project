var url = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true";
var request = new XMLHttpRequest();
request.open("GET", url);
request.onload = function() {
    if(request.status == 200) {
        updateDisplay(request.responseText);
    }
};
request.send();


window.onload = function() {
    var button= document.getElementById("previewButton");
    button.onclick = previewHandler;
  
};

function previewHandler() {
 
    var canvas = document.getElementById("tshirtCanvas");
    var ctx = canvas.getContext("2d");
    fillBackGroundColor(canvas, ctx);

    ctx.canvas.width = canvas.getBoundingClientRect().width;
    ctx.canvas.width = canvas.getBoundingClientRect().height;

    var selectObj = document.getElementById("shape");
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;
    
    if (shape == "squares") {
        for (var squares = 0; squares < 20; squares++) {
            drawSquare(canvas,ctx);
        }
    }

    else if(shape == "circles") {
        for (var circles = 0; circles < 20; circles++) {
            drawCircle(canvas,ctx);
        }
    }

    drawText(canvas,ctx);
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}

function drawSquare(canvas,context) {
    var w = Math.floor(Math.random() * 30);
    var x = Math.floor(Math.random() * canvas.getBoundingClientRect().width);
    var y = Math.floor(Math.random() * canvas.getBoundingClientRect().height);
    console.log("clicked");
    context.fillStyle = "purple";
    context.fillRect(x, y, w, w);
}

function drawCircle(canvas,context) {
    var r = Math.floor(Math.random() * 30);
    var x = Math.floor(Math.random() * canvas.width );
    var y = Math.floor(Math.random() * canvas.height);
    if (x + r > canvas.width) {
        x = canvas.width - 100;
    }
    else if( x - r < 0) {
        x = canvas.width + 100;
    }
    else if(y + r > canvas.height) {
        y = canvas.height - 150;
    }

    else if(y - r < 0) {
        y = canvas.height + 150;
    }

    context.beginPath();
    context.arc(x, y, r, 0, degreesToRadians(360), true);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}

function drawText(canvas,context) {
    var selectObj = document.getElementById("foregroundColor");
    var index = selectObj.selectedIndex;
    var frgColor = selectObj[index].value;
    context.fillStyle = frgColor;
    context.font = "bold 1em sans-serif";
    context.textAlign = "left";
    context.fillText("I went to", 40, 50);

    selectObj = document.getElementById("text");
    index = selectObj.selectedIndex;
    var text = selectObj[index].value;
    context.font = "italic 2em serif";
    context.fillText(text, 80, 100);


    //Get the city name from the free API json
    //Draw the city name
    context.font =  "bold 1em sans-serif";
    context.textAlign = "right";
    context.fillText("And All I got was a shirt", canvas.width - 49, canvas.height - 40);
}

function fillBackGroundColor(canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;    
    var bcgColor = selectObj.options[index].value;
    context.fillStyle = bcgColor;
    context.fillRect(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
}

function updateDisplay(response) {
    var nameSelection = document.getElementById("text");
    var name = JSON.parse(response);
    for (var i = 0; i < name.length; i++) {
        text = name[i];
        var option = document.createElement("option");
        option.text = text.city;
        nameSelection.options.add(option);
    }

    nameSelection.selectedIndex = 0;
}
