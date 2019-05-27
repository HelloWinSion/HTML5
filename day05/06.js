onmessage = function(e){
    var nn = e.data;    
    console.log("接收的值："+nn);
    var b = 1;
    var sum = 0;
    for(var i=1;i<=nn;i++){
        sum+=b;
        b++;
    }
    postMessage(sum);
}