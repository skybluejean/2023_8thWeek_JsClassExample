const stringExample = '참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈 피클 양파까지';

function splitString(stringParams){
    let result = stringParams.split(' ');
    return result;
}

function appendString(stringArray,callback){
    let body = "";
    stringArray.forEach(function(element){
        body = body + element;
    });
    callback(body);
};

let bodyTemplate = '';
let resultCase = appendString(splitString(stringExample), function(body){
    console.log(body);
    bodyTemplate += body.substring(0,indexOf('티')+1);
    console.log(bodyTemplate);
});
function elementMaker(string){
    return `<div>${string}</div>`;
}

console.log(elementMaker(bodyTemplate));