var hour=sec=min=time=0;

function fillZero(t){ // 0으로 채우기
    t+="";
    return t.length>=2?t:new Array(2-t.length+1).join('0')+t;
}
function timer(){ // 화면 출력
    sec = fillZero(time%60); // 초
    min = fillZero(parseInt(time/60)%60); // 분
    hour= fillZero(parseInt(time/3600)%60); // 시간
    document.getElementById("result").innerHTML = hour + " : " + min + " : " + sec;
}
function start() { // 시작
    timer();
    time++;
    console.log(time); // console 확인
    timerS = setTimeout(start, 1000); // 1초 증가
}
function stop() { // 멈춤
    clearTimeout(timerS);
    timer();
}
function init() { // 초기화
    time=0;
    clearTimeout(timerS);
    timer();
}