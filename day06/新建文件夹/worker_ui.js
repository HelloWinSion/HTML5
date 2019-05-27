onmessage = function(e){
    //接收用户输入的值
    var num = e.data;
    //做0从一开始的累加计算到接收的值 1+2+3。。。+num
    //定义计算的初始值为1
    var bNum = 1;
    //定义一个容器存储计算结果
    var sum = 0;
    //循环计算 用for的初始循环次数变量i 作为每次计算累加值
    for(var i=1;i<=num;i++){
        //进行累加计算
        sum+=bNum;
        //初始值自增
        bNum++;
    }
    postMessage(sum);
}