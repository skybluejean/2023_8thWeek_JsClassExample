
const fileSystem = require('fs');

fileSystem.readdir('./', function(error,fileList){

    if(error)throw error;
    console.log(fileList);
});