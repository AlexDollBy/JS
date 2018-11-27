var btn = document.getElementById("btnUpdate");
var lvl = document.getElementById("listLvl");
var money;
myCompany={};
btn.addEventListener("click", function(){
    switch(lvl.options[lvl.selectedIndex].value) {
        case '1':
          money = 10000000000000;
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
      } catch{
  
      }
} )