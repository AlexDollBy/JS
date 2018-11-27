function Company(name,money){
    this.money = money;
    this.name =name;
    this.sotrudiki = [];
    this.manager;
}

Company.prototype.allSalaryDay = function (){
    var allSalary = 0;
    this.sotrudiki.forEach(element => {
        allSalary+=element.salary;
    });
    allSalary+=this.manager.salary;
    return allSalary;
}

Company.prototype.printProgrammer = function (select){
    var n = 0;
    select.options.length = 0;
    this.sotrudiki.forEach(element => {
        var newOption = new Option(element.toString(), n);
        n++;
        select.appendChild(newOption);
    });
}

Company.prototype.addProgrammer = function (){
    var why = prompt("Введите должность:\n 1-Junior\n 2-Middle\n 3-Senior", 1);
    var name = prompt("Введите имя");
    var surname = prompt("Введите фамилию");
    var newS;
    switch(why){
        case '2':{
            newS = new Middle(name,surname);
            break;
        }
        case '3':{
            newS = new Senior(name,surname);
            break;
        }
        default:{
            newS = new Junior(name,surname);
            break;
        }
    }
    console.log(newS);
    this.sotrudiki.push(newS);
}

Company.prototype.deleteProgrammer = function (select){
    this.sotrudiki.splice(select, 1);
}

Company.prototype.addManager = function(){
    var name = prompt("Введите имя");
    var surname = prompt("Введите фамилию");
    var exp = Math.random() * (2 - 0) + 1;
    this.manager = new Manager(name,surname,exp);
    console.log(this.manager);
}

Company.prototype.printManager = function (s) {
    var n = 0;
    s.options.length = 0;
    var newOption = new Option(this.manager.toString(), n);
    s.appendChild(newOption);
}

Company.prototype.deleteManager = function () {
    this.manager = null;
}

Company.prototype.allColLine = function (){
    var line = 0;
    this.sotrudiki.forEach(element => {
        line+=element.colLines;
    });
    return line;
}
