window.onload = function (){   
    text = document.getElementById("18");    
    textarea = document.getElementById("textarea");
    var k = document.getElementsByTagName("input");
    var doit=0;
    var clear = false;
    a="0";
    b="";

    function doItNow(fn,symbol){
        if(b!==""){
            textarea.value += `${a}+${b}=`;
            a = doit(a,b);
            textarea.value +=a + "\n";
            b="";
            doit = fn;
            text.value=a+symbol;
             
            return a;
        }
    }
    
    function summ(a,b){
        return parseFloat(a)+parseFloat(b);
    }

    function differ(a,b){
        return parseFloat(a)-parseFloat(b);
    }

    function multiply(a,b){
        return parseFloat(a)*parseFloat(b);
    }

    function divide(a,b){
        return parseFloat(a)/parseFloat(b);
    }

    for(var i = 0; i < k.length; i++){
        k[i].onclick = function (){
            if(clear){
                text.value =a;
                clear = false;
            }
            if(isNaN(text.value[text.value.length-1]) && isNaN(this.value) ) {
                text.value = text.value.replaceAt(text.value.length-1,this.value);
            }
            else this.value!=="CE"?text.value+=this.value:false;
            switch (this.value) {
                case '+':{
                    doItNow(summ,this.value);
                    doit = summ;
                    break;
                }
                case '-':{
                    doItNow(differ,this.value);
                    doit = differ;
                    break;
                }

                case '*':{
                    doItNow(multiply,this.value);
                    doit = multiply;
                    break;
                }
                case '/':{
                    doItNow(divide,this.value);
                    doit = divide;  
                    break;                
                }
                case '=':{        
                    clear = true;           
                    var ansver = doit(a,b);
                    text.value+=ansver;                    
                    textarea.value += text.value +"\n";
                    a=ansver;
                    b="";
                    doit = 0;
                    break;     
                }
                case 'C':{             
                    a="0";
                    b="";
                    doit = 0;
                    text.value="";
                    break;     
                }
                case 'CE':{ 
                    textarea.value="";
                    break;     
                }
                default:{
                    if(doit===0){
                        a+=this.value;
                    }else{
                        if(!isNaN(this.value))
                        b+=this.value;
                    }
                }
                
            }
                   
        }
    }
}
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}