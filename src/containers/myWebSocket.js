/**
 * Created by TANDONG on 2017/1/15.
 */
let websocket = null;

//判断当前浏览器是否支持WebSocket
if('WebSocket' in window){
    console.log("握手");
    websocket = new WebSocket("ws://10.2.54.86:8080/wc");
}
else{
    alert('Not support websocket')
}

//连接发生错误的回调方法
websocket.onerror = function(){
    console.log("error");
};

//连接成功建立的回调方法
websocket.onopen = function(event){
    console.log("成功");
};

//连接关闭的回调方法
websocket.onclose = function(){
    console.log("close");
};
window.onunload=function () {
    websocket.close()
}
//发送消息
export function send(message){
    console.log("webSocket"+message);
    websocket.send(message);
    console.log("end "+message);
}
export default websocket