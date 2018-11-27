var btn = document.getElementById("addBtn");
btn.addEventListener('click',function(){
    myCompany.addProgrammer();
    myCompany.printProgrammer(select);
    alert("За день выполняется: " + myCompany.allColLine());
});

var deletebtn = document.getElementById("deleteBtn");
deletebtn.addEventListener('click',function(){
    myCompany.deleteProgrammer(document.getElementById('listProgrammistov').options.selectedIndex);    
    myCompany.printProgrammer(select);
});

var btnM = document.getElementById("addBtnM");
btnM.addEventListener('click',function(){
    myCompany.addManager();
    myCompany.printManager(document.getElementById('listOfManagers'));
});

var deletebtnM = document.getElementById("deleteBtnM");
deletebtnM.addEventListener('click',function(){
    myCompany.deleteManager();    
    myCompany.printManager(document.getElementById('listOfManagers'));
});

var start = document.getElementById('startBtn');
start.addEventListener('click',function(){
   project = (new Project()).creat();
   document.getElementById("t3").value=project.ToString();
});

var tick = document.getElementById("tick");
tick.addEventListener('click', function(){
    myCompany.manager.work();
    t2.value = myCompany.money; 
});
