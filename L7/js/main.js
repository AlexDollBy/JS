let btn = document.getElementById("addBtn");
btn.addEventListener('click',() =>{
    myCompany.addProgrammer();
    deletebtn.disabled = false;
    myCompany.printProgrammer(select);
    alert("За день выполняется: " + myCompany.allColLine());
});

let deletebtn = document.getElementById("deleteBtn");
deletebtn.addEventListener('click',() =>{
    if(document.getElementById('listProgrammistov').options.length === 0)
        btn.disabled = true;
    else{
        myCompany.deleteProgrammer(document.getElementById('listProgrammistov').options.selectedIndex);    
        myCompany.printProgrammer(select);
    }
});

let btnM = document.getElementById("addBtnM");
btnM.addEventListener('click',() =>{
    deletebtnM.disabled = false;
    myCompany.addManager();
    myCompany.printManager(document.getElementById('listOfManagers'));
});

let deletebtnM = document.getElementById("deleteBtnM");
deletebtnM.addEventListener('click',() =>{
    myCompany.deleteManager();
    document.getElementById('listOfManagers').options.length = 0;
});

let start = document.getElementById('startBtn');
start.addEventListener('click',() =>{
   project = new Project();
   document.getElementById("t3").value=project.about;
});

let tick = document.getElementById("tick");
tick.addEventListener('click', () =>{
    myCompany.manager.work();
    t2.value = myCompany.money; 
});
