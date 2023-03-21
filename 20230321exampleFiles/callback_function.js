function exampleOneInnerFunc(message){
    console.log(message);
}
function exampleOne(message){
    exampleOneInnerFunc(message);
}
exampleOne("첫번째 함수 예제입니다.");

function exampleTwo(message,callback){
    callback(message);
}
exampleTwo("두번째 함수 예제입니다.", function(message){
    console.log(message);
});