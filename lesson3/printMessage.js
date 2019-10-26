//ローカルモジュールのmessage.jsを要求する
const messageModule =require("./message");
//その配列を,messageModule.messageとして参照する
messageModule.messages.forEach(m => console.log(m));
