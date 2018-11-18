var text = document.getElementById("textarea");
var btn1 = document.getElementById("b1");
var btn2 = document.getElementById("b2");

function debounce(callback, delay) {
    var timer;
    return function () {
        var a = arguments;
        if (timer) clearTimeout(timer); 
        timer = setTimeout(function () {
            callback.apply(null, a);
        },delay);        
    }
}
function log() {    
    text.value+=arguments[0] + "\n";
}
var debounced = debounce(log, 500);
var i = 0;
btn1.addEventListener("click",function(){ 
    i++;    
    debounced("v" + i);
})

btn2.addEventListener("click",function(){
    i++;    
    debounced("O" + i);
})