"use strict";
const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");

//request responseのパラメータをセットしてサーバーを作成

var app = http.createServer((request,response) => {
//リクエスト受信しました！
console.log("received an incoming request!");
//レスポンス送信
response.writeHead(httpStatus.OK,{"Content-type": "text/html"});
let responseMessage = "<h1>Hello,Universe!</h1>";
response.write(responseMessage);
response.end();
//レスポンスの送信完了
console.log(`Sent a response: ${responseMessage}`);
});
//アプリケーションのサーバーにポート3000を監視させる
app.listen(port);
console.log(`The server has started and is litening on port number: ${port}`);



//memo 
//httpStatus.OKはレスポンスコード200を返す
//レスポンスコードは下に示すとおり
console.log(`"レスポンスコード一覧：${http.STATUS_CODES}`);


