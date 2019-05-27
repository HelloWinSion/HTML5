onmessage = function(e){
 console.log("接收ui数据"+e.data);
 var num = parseInt(e.data);
 num++;
 postMessage("456");
}
//通过功能：当前执行3s
//1.创建时间对象
var start = new Date().getTime();
//2.创建对象
do{
//3.创建时间对象
var end = new Date().getTime();
//4.后创建时间对象-前时间对象  < 3000
}while(end - start <3000);
console.log("3s执行完毕")