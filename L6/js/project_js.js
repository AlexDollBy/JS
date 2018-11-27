function Project (name, cost, colLinesOfcode) {
    this.name = name;
    this.cost = cost;
    this.colLinesOfcode = colLinesOfcode;
    this.done = 0;
    this.howMuchDone = 0;
}

var names = ['Game','Web','App','Soft']
Project.prototype.creat = function(){   
  return new Project(names[getRandomInt(0,names.length)],getRandomInt(1000,1000000),getRandomInt(10000,100000));
}

Project.prototype.ToString = function(){
    return this.name + " Цена: " + this.cost +" Количество строк "+ this.colLinesOfcode;
}

Project.prototype.dayWork = function (work) {
    this.done+=work;
    this.howMuchDone = (100*this.done)/this.colLinesOfcode;
    myCompany.money -= myCompany.allSalaryDay();
    if(this.howMuchDone>=100){        
        myCompany.money+= this.cost;
        project = "";
        myCompany.manager.exp *=1.3;

        document.getElementById("t3").value = project;
        document.getElementById("progress").value = 0;
        return "Проект успешно завершен, возьмите новый";
    }
    else{
        document.getElementById("progress").value = this.howMuchDone;
        return "Завершен на " + this.howMuchDone.toFixed(1); 
    } 
}