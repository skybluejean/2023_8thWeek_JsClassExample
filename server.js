import http from 'http';
console.dir(http);
//a에는 request에 관련된것을, b에는 응답에 관련된것을 넣는다.
const server = http.createServer(function(request,response){

    let body = "";
    body = body + "<DOCTYPE html>";
    body = body + "<html>";
    body = body + "<head>";
    body = body + "<title>Node.js</title>";
    body = body + "</head>";
    body = body + "<body>";
    body = body + "<h1>Hello World</h1>";
    body = body + "</body>";
    body = body + "</html>";


    response.statusCode = 200;
    //뒤에.을 확인하면 request가객체라는것을 알수있다.
    response.setHeader('Content-Type','text/plain');
    response.end('Hello World!');
    // console.log(a,b);
});