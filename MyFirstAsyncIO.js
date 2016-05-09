var fs = require('fs');

fs.readFile("test.txt",function callback(err,data){
  console.log(data.toString().split('\n').length-1);
});
