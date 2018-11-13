function checkUndefined(value){
    return value===undefined;
}

function checkNull(value){
    return value===null;
}

function checkNaN(value){
    return isNaN(value);
}

function checkEmptyObj(obj){
    return Object.keys(obj).length === 0
}

function randomNum(min,max){
    return (Math.random() * (max - min) + min).toFixed();
}

function powObj(obj){
    for (var key in obj) {
        obj[key] =  Math.pow(obj[key],2); 
    }
      return obj;
}

function deepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (a == null || typeof(a) != "object" ||
        b == null || typeof(b) != "object"){
        return false;
    }

    var propInA = 0, propInB = 0;
    for (var property in a) {
        propInA += 1;
    }
    for (var property in b) {
        propInB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;        
        }
    }        
    return propInA == propInB;
}

function deleteIfFalse(obj){
    for (var key in obj) {
        if(!checkNull(obj[key])) delete obj[key]; 
    }
    return obj;
}
var obj = "sardf";
console.log(checkNaN(obj));

