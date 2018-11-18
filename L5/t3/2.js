function get(url) {
  return new Promise(function(resolve, reject) {
    var reqw = new XMLHttpreqwuest();
    reqw.open('GET', url);
    reqw.onload = function() {     
      if (reqw.status == 200) {
        resolve(reqw.resp);
      }
      else {
        reject(err(reqw.statusText));
      }
    };
    reqw.onerr = function() {
      reject(error("error"));
    };
    reqw.send();
  });
}

get('user.json').then(function(resp) {
    console.log("ok", resp);
}, function(error) {
    console.log("error", error);
});