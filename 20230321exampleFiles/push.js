function elementMakerOne(content, tagName){
    if(typeof(content) === 'string' && typeof(tagName) === 'string'){
        return `<${tagname}>content</${tagname}>`;
    }else{
        new Error("매개변수 두개 모두 문자열이어야 합니다.");
    }
}

const paperOrderOne = [];
const countOne = 10;

for(let i = 0; i < countOne; i++){
    let result = elementMakerOne(`example-${i+1}`,'div');
    paperOrderOne.push(result);
}

console.log(paperOrderOne);