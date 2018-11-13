temp="0";
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function getEl(){
    text = document.getElementById("18");
    textarea = document.getElementById("textarea");
}
function num(btn){
  return !isNaN(btn);
}

function clearDisplay(){
   text.value="0"; 
   temp="0";   
}

function clearHistory(){
    textarea.value = "";
    clearDisplay();
}

function display(symble){   
    if(!num(symble) && !num(temp[temp.length-1])) {
        temp = temp.replaceAt(temp.length-1,symble);
    }
    else temp+=symble;
    text.value = temp;
}

function calculate(){
    var result = eval(text.value);
    text.value += "=" + result;
    textarea.value += text.value +"\n";
    temp = "" + result; 
}