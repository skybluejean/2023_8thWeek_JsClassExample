
function one (){
    return 1;
}

function two_return_string(){
    return "1";
}

// two() === "1"; //true


//이름앞에 is가 붙어있으면 리턴값이 boolean타입일 확률이 크다.
function is_three(){
    return true;
}


//객체는 객체일뿐, 값이 객체라는것만 알아두면 그만이다. 즉 리턴만 알아내면 함수를 쓸수 있다.
function four(){
    return{
        a : 1,
        b : "2",
        c : true
    }
}


//리턴없이 실행만 동작하는 함수가 존재하며 이를 실행함수라고 일컫는다. C언어에서는 이를 리턴void라고 말하기도 한다. 
function five(){
    let a = 1 + 1;

}



