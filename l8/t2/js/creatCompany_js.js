var btn1 = document.getElementById("btnUpdate");
let lvl = document.getElementById("listLvl");
let money;
myCompany={};
btn1.addEventListener("click", () =>{
    switch(lvl.options[lvl.selectedIndex].value) {
        case '1':
          money = 100000000000;
          break;
      
        case '2':
         money = 1000000000;
         break;

        case '3':
         money = 100000;
         break; 
      }

    myCompany = new Company(document.getElementById("name").value, money);
    console.log(myCompany);
      try{
          t1 = document.getElementById("t1");
          t1.value = myCompany.name;
          t2 = document.getElementById("t2");
          t2.value = myCompany.money;          
          select = document.getElementById("listProgrammistov"); 
          myCompany.printProgrammer(select);    
          start.disabled = false; 
          btn.disabled =false;
          btnM.disabled = false;      
      } catch{
  
      }
} )