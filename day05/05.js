onmessage = function(e){
 console.log("����ui����"+e.data);
 var num = parseInt(e.data);
 num++;
 postMessage("456");
}
//ͨ�����ܣ���ǰִ��3s
//1.����ʱ�����
var start = new Date().getTime();
//2.��������
do{
//3.����ʱ�����
var end = new Date().getTime();
//4.�󴴽�ʱ�����-ǰʱ�����  < 3000
}while(end - start <3000);
console.log("3sִ�����")