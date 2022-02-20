function callInfo(){
    document.getElementById("name").innerHTML = "😺 고영희";
    document.getElementById("number").innerHTML = "010-xxxx-xxxx";
}
function click_call(){
    setTimeout(callInfo, 2000); // 2초 뒤 실행
}
document.getElementById("btn_call").addEventListener('click',click_call); // click_call 이벤트함수 연결 