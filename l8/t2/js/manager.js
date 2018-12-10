class Manager{
    constructor(name,surname,exp){
        this.name = name;
        this.surname = surname;
        this.exp = exp;
        this.salary = exp*1000;
    }

    toString(){
        return `${this.name} ${this.surname} ${this.exp} ${this.salary}`; 
    }

    work(){
        let lineDay = myCompany.allColLine();
        let o = project.dayWork(lineDay*this.exp);
        alert(o);
    }

}