var input; // 입력창 전역변수
var state_follow = 0; // 따라하기 상태
var question = ""; //사용자의 질문을 임시 저장할 변수
var answer = ""; //사용자의 대답을 임시 저장할 변수
var key = 0; // 키 값을 이용하여 말을 배우는 상황인지 아닌지 판별
var json = 
[
	{
		"question" : "안녕",
		"answer" : "애용"
	},
	{
		"question" : "나이",
		"answer" : "비밀이다!"
	},
	{
		"question" : "이름",
		"answer" : "코묘!"
	},
    {
        "question" : "따라해",
        "answer" : "지금부터 따라하겠다! 😸"
    },
    {
        "question" : "그만",
        "answer" : "안 따라하고 있었습니다?! 🙀"
    },
    {
        "question" : "불켜",
        "answer" : "켰습니다. 😺"
    },
    {
        "question" : "불꺼",
        "answer" : "껐습니다. 😺"
    },
    {
        "question" : "불",
        "answer" : "불이야!!! 🔥🔥"
    }
]

function check_text() {
    input = document.getElementById("console").value; // 입력창
    var chat = document.getElementById("text"); // 말풍선
    console.log(input); // 입력내용 콘솔 확인

    if(state_follow){
        if(ins("그만")){
            state_follow = 0;
            chat.innerHTML = "알겠습니다! 🙀";
        }
        else
            chat_follow(chat);
    }
    else{
        eventChat(); // 반응 실행
        text_check(chat); // 말풍선 실행
    }
}
/* 입력한 내용에 str이 포함되어 있는지 비교 */
function ins(str){
    return input.includes(str);
}
function eventChat() {
    var page = document.getElementById("page"); // 창

    if (ins("고영희")) 
        alert("저의 이름은 비밀입니다. 😼");
    else if (ins("불")) 
        chat_fire(page);
    else if (ins("따라해"))
        state_follow = 1;
}
function text_check(chat) {
    if(key==1||key==2)
        chat_learn(chat);

    else {
        let i = 0;
        for (; i < json.length; i++) 
            if (ins(json[i].question)) { // 입력한 내용에 포함되어 있으면
                chat.innerHTML = json[i].answer; // 대답
                return;
            }
        chat_dontKnow(chat);
        question = input; //사용자의 질문을 미리 저장
        key = 1; //조건문으로 진입하게 만들 키 값 변경
    }
}
/* 배우기 */
function chat_learn(chat) {
    if (key == 1) {
        if (input == "네") {
            chat.innerHTML = "대답을 입력해주세요! 😸";
            key = 2;
        }
        else if(input == "아니요"){
            chat.innerHTML = "다음에 알려주세요! 😿";
            key = 0;
        }
        else{
            chat.innerHTML = "말을 가르쳐 주세요! 😿<br><br>💬 네/아니요"; // 모를 때 
            key = 1; // 네/아니요로 대답할 때까지
        }
        return;
    }
	if(key == 2){
		answer = input; //전역변수 ans값에 사용자의 입력을 저장
		push_json(chat); //json 데이터에 값을 추가하는 함수
	}
}
function push_json(chat) {
    json.push({question: `${question}`, answer: `${answer}`}); //json이라는 데이터에 값을 추가하는 push함수
    chat.innerHTML = "말을 배웠습니다! 😸";
    key = 0; //키 값 0으로 초기화
}
function gradation(col){
    return "linear-gradient("+col[0]+","+col[1]+"), linear-gradient(to right, rgb(69, 138, 165), rgb(33, 129, 93)";
}
function randomNum(){
    return Math.random();
}
/* 불 끄고 키기 */
function chat_fire(page){
    var lampe = document.getElementById("img_lampe"); // 전구
    var fire= document.getElementById("img_fire"); // 불
    /* 불 색상 */
    var pageColor={off: ["#272727","#272727"], on: ["#dfc13b","#272727"]};

    if (ins("꺼")){
        if (fire.style.visibility == "hidden") {
            page.style.backgroundImage = gradation(pageColor.off);
            lampe.style.visibility = "hidden";
        }
    }
    else if (ins("켜"))
        if(lampe.style.visibility == "hidden" || lampe.style.visibility ==""){
            if (fire.style.visibility == "hidden"|| fire.style.visibility =="") {
                var state_fire = randomNum();
                if (state_fire <= 0.4) // 40% 확률로 말 안 들어주는 봇
                    fire.style.visibility = "visible";
                else { // 60% 확률로 불 켜주는 봇
                    page.style.backgroundImage = gradation(pageColor.on);
                    lampe.style.visibility = "visible";
                    fire.style.visibility = "hidden";
                }
            } 
            else if(fire.style.visibility == "visible") { // 말 안 들은 후엔 100% 불 켜줌
                page.style.backgroundImage = gradation(pageColor.on);
                lampe.style.visibility = "visible";
                fire.style.visibility = "hidden";
            }
        }
}
/* 따라하기 */
function chat_follow(chat){
    chat.innerHTML = input+" 냥^^";
}
/* 모르는 내용 */
function chat_dontKnow(chat) {
    chat.innerHTML = "모르겠습니다.<br>말을 가르쳐 주실래요?<br><br>💬 네/아니요"; // 모를 때    
    var app = document.getElementById('app');
    var typewriter = new Typewriter(app, {loop: false});
    typewriter
        .typeString("코묘가 알아듣지 못한 것 같습니다.")
        .pauseFor(20)
        .deleteAll()
        .typeString("말을 가르쳐 주세요!")
        .pauseFor(20)
        .deleteAll()
        .start();
}