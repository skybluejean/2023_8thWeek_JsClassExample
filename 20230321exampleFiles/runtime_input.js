console.log('쓰고싶은 문자를 입력하세요');
process.stdin.on('data',function(data){
    process.stdin.write(data);
    process.exit();
});