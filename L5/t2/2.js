function  setTimeoutP(time){
    return new Promise(function(resolve, reject){
        setTimeout(resolve,time);
    })        
}
 