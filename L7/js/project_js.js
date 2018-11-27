let names = ['Game','Web','App','Soft'];

class Project {
    constructor() {
        this.name = names[getRandomInt(0,names.length)];
        this.cost = getRandomInt(1000,1000000);
        this.colLinesOfcode = getRandomInt(10000,100000);
        this.done = 0;
        this.howMuchDone = 0;
        tick.disabled = false;  
    }

    set creat(arg) {
        [this.name, this.cost,this.colLinesOfcode] = arg.split(' ');
    }
    
    get about(){
        return `${this.name} Цена: ${this.cost} Количество строк: ${this.colLinesOfcode}`;
    }

    dayWork(work) {
        this.done+=work;
        this.howMuchDone = (100*this.done)/this.colLinesOfcode;
        myCompany.money -= myCompany.allSalaryDay();
        if(this.howMuchDone>=100){        
            myCompany.money+= this.cost;
            project = "";
            myCompany.manager.exp *=1.3;
            tick.disabled = true;    
            document.getElementById("t3").value = project;
            document.getElementById("progress").value = 0;
            return "Проект успешно завершен, возьмите новый";
        }
        else{
            document.getElementById("progress").value = this.howMuchDone;
            return "Завершен на " + this.howMuchDone.toFixed(1); 
        } 
    }


}
