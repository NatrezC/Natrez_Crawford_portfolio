myID = document.getElementById('myID');

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myID.className = 'toTheTop show'
    } else {
        myID.className = 'toTheTop hide'
    }
};

window.addEventListener('scroll', myScrollFunc)