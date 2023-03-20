function six(number,append){
    if(typeof(number) === "number" && typeof(append) === "number"){
        return number + append;
    }else{
        console.error('매개변수는 숫자여야한다.');
    }
}


function six(number,append){
        return number + append;
}


//정적함수
function seven(number,append){
    return number - append;
}


// const a = six(1,2); //데이터가 변한다(변태)
// console.log(a);


// function eight(number,append,callback){
//     //파라미터(인자)를 전달받았다.
//     return callback(number,append);
// }


/*function eight(number,append,callback){
    //파라미터(인자)를 전달받았다.
    return callback(number,append);
}*/



function eight(number,append,callback){
    let a = number + 1;
    let b = append + 1;
    return callback(a,b);
    //return callback(number,append);
}


console.log(eight(1,2,function(a,b){
    return a + b;
}))

console.log(eight(3,seven))