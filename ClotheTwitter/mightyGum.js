window.onload = function () {
    var url = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true";
    var request = new this.XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
    if (request.status == 200) {
    displayText(request.responseText);
        }
    };
    request.send(null);
    }
    function displayText(response) {
    var result = document.getElementById("sales");
    var name = JSON.parse(response);
    for(var i = 0; i < name.length; ++i){
        var names = name[i];
        var nDiv = document.createElement("div");
        nDiv.setAttribute("class", "nameItem");
        nDiv.innerHTML = "Hello my name is " + names.fname + " " + names.lname;
        result.appendChild(nDiv);
        
    }
    }