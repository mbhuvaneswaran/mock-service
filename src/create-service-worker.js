var fs = require('fs');
var path = require('path');
module.exports = function(apiFile,destinationFile){
  var serviceWorkerFile = path.join(__dirname,'worker.base.js');
  if(apiFile && destinationFile){
    fs.readFile(apiFile,'utf8',function(error,apiData){
      return error ? console.log(error) : fs.readFile(serviceWorkerFile,'utf8',function(error,serviceWorkerContent){
        return error ? console.log(error) : fs.writeFile(destinationFile,serviceWorkerContent.replace('{{APIS}}',JSON.parse(JSON.stringify(apiData).replace(/\\n/g,''))));
      })
    })
  }
}
