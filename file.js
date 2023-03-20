import fs from 'fs';

let name = "jin";
// let date = new Date();
// let file_name = date.getSeconds() + name;
let year = "2023";
let month = "03";
let day = "20";
let file_name = year + month + day + "-" + name;

//파일이름 자동생성기(?)를 사용하여 파일을 생성하거나 만들수 있다.
 fs.writeFileSync("./" + file_name + ".txt" , name);