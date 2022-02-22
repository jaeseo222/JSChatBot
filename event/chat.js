var input; // 입력창 전역변수

function check_text() {
    input = document.getElementById("console").value; // 입력창
    console.log(input); // 입력내용 콘솔 확인
    eventChat(); // 반응 실행
}
/* 입력한 내용에 str이 포함되어 있는지 비교 */
function ins(str){
    return input.includes(str);
}
function eventChat(){
    var chat = document.getElementById("text"); // 말풍선
    var page = document.getElementById("page"); // 창
    var lampe = document.getElementById("img_lampe"); // 전구

    /* 불 색상 */
    var pageColor={off: ["#272727","#272727"], on: ["#dfc13b","#272727"]};

    if(ins("안녕")||ins("hello"))
        chat.innerHTML = "애용";
    
    if(ins("고영희"))
        alert("저의 이름은 비밀입니다. 😼");

    if(ins("불")){
        if(ins("꺼")){
            chat.innerHTML = "껐습니다.";
            page.style.backgroundImage=gradation(pageColor.off);
            lampe.style.visibility="hidden";
        }
        else if(ins("켜")){
            chat.innerHTML = "켰습니다.";
            page.style.backgroundImage=gradation(pageColor.on);
            lampe.style.visibility="visible";
        }
        else
            chat.innerHTML = "불이야!!!🔥🔥";
    }
    else
        chat.innerHTML = "모르겠습니다.";
}
function gradation(col){
    return "linear-gradient("+col[0]+","+col[1]+"), linear-gradient(to right, rgb(69, 138, 165), rgb(33, 129, 93)";
}
function comparePage(page, color){
    return page.style.backgroundImage=="background-image: "+color? true:false;
}