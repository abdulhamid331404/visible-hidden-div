myID = document.getElementById("myID");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 1000) {
        myID.className = "bottomMenu show"
    } else {
        myID.className = "bottomMenu hide"
    }
};

window.addEventListener("scroll", myScrollFunc);