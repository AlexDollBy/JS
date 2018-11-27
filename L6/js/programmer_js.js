function Programmer(name,surname){
    this.name=name;
    this.surname=surname;
    this.colLines = 10;
    this.salary = parseFloat(this.colLines)*0.7
    this.employment = false;
}

Junior.prototype = Object.create(Programmer.prototype);
Junior.prototype.constructor = Junior; 
Middle.prototype = Object.create(Programmer.prototype);
Middle.prototype.constructor = Middle;
Senior.prototype = Object.create(Programmer.prototype);
Senior.prototype.constructor = Senior;

function Junior(name,surname){
    Programmer.apply(this,arguments);
    this.colLines = 100;   
    this.salary = parseFloat(this.colLines)*0.7
}

function Middle(name,surname){
    Programmer.apply(this,arguments); 
    this.colLines = 200;   
    this.salary = parseFloat(this.colLines)*0.8
}

function Senior(name,surname){
    Programmer.apply(this,arguments); 
    this.colLines = 300;  
    this.salary = parseFloat(this.colLines)*1
}

Programmer.prototype.toString = function (){
    return this.name + " " + this.surname + " " + this.colLines + " " + this.salary; 
}
