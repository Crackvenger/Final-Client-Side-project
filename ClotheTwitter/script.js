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
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180;
}

function drawSquare(canvas,context) {
    var w = Math.floor(Math.random() * 100);
    var x = Math.floor(Math.random() * canvas.getBoundingClientRect().width);
    var y = Math.floor(Math.random() * canvas.getBoundingClientRect().height);
    console.log("clicked");
    context.fillStyle = "lightblue";
    context.fillRect(x, y, w, w);
}

function drawCircle(canvas,context) {
    var r = Math.floor(Math.random() * 40);
    var x = Math.floor(Math.random() * canvas.getBoundingClientRect().width);
    var y = Math.floor(Math.random() * canvas.getBoundingClientRect().height);

    context.beginPath();
    context.arc(x, y, r, 0, degreesToRadians(360), true);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
}

function fillBackGroundColor(canvas, context) {
    var selectObj = document.getElementById("backgroundColor");
    var index = selectObj.selectedIndex;
    var bcgColor = selectObj.options[index].value;
    context.fillStyle = bcgColor;
    context.fillRect(0, 0, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
}

function updateTweets(tweets) {
    var tweetsSelection = document.getElementById("tweets");
    for (var i = 0; i < tweet.length; i++) {
        tweet = tweets[i];
        document.createElement("option");
        option.text = tweet.text;
        option.value = tweet.text.replace("\"", "'");
        tweetsSelection.option.add("option");
    }

    tweetsSelection.selectedIndex = 0;
}
