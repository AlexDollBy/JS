const fs = require("fs");
const readline = require('readline');


function readLine(readline){

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('line', (input) => {
        if(input!=='exit'){
            fs.appendFile("temp.txt", input+'\n', function(error){ 
             if(error) throw error;
            });
        } else{
            rl.close();
        }
    });
}

readLine(readline);