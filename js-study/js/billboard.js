var i = 0;
var myIdText="jaeserrr";

function billboard() {
    var myID = document.getElementById("myID");
    myID.innerHTML+=myIdText[i++]; // 내 아이디 붙이기
    if(i > myIdText.length){
        i=0;
        myID.innerHTML="";
    }

    myID.style.color = randomColor(); // 색 변경

    console.log(myID); //콘솔 확인
}
function randomColor() { // 랜덤 색 추출
    return "#" + Math.round(Math.random() * 0xffffff).toString(16);
}