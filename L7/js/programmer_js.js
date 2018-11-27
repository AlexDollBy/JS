class Programmer{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;
        this.colLines = 10;
        this.salary = parseFloat(this.colLines)*0.7
        this.employment = false;
    }

    get about(){
        return this.name + " " + this.surname + " " + this.colLines + " " + this.salary; 
    }
}

class Junior extends Programmer{
    constructor(name,surname){
        super(name,surname);
        this.colLines = 100;   
        this.salary = parseFloat(this.colLines)*0.7;
    }
}

class Middle extends Programmer{
    constructor(name,surname){
        super(name,surname); 
        this.colLines = 200;   
        this.salary = parseFloat(this.colLines)*0.8;
    }
}

class Senior extends Programmer{
    constructor(name,surname){
        super(name,surname); 
        this.colLines = 300;  
        this.salary = parseFloat(this.colLines)*1;
    }
}
