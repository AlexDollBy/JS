function numberLine(num){ 
 console.log(0);
 for(var i=1;i<=Math.abs(num);i++){
  if(num<0) console.log(i*-1);
  else console.log(i);
 }
}
numberLine(-5);