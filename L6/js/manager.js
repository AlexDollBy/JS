function Manager(name,surname,exp){
    this.name = name;
    this.surname = surname;
    this.exp = exp;
    this.salary = exp*1000;
}

Manager.prototype.toString = function (){
    return this.name + " " + this.surname + " " + this.exp + " " + this.salary; 
}

Manager.prototype.work = function(){
    var lineDay = myCompany.allColLine();
    var o = project.dayWork(lineDay*this.exp);
    alert(o);
}