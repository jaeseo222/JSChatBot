function check_text() {
    var value = document.getElementById("console").value; // 입력창
    var chat = document.getElementById("text"); // 말풍선

    console.log(value); // 입력내용 콘솔 확인

    switch (value) {
        case "hello":
        case "안녕":
            chat.innerHTML = "애용";
            break;
        case "고영희씨!":
            alert("저의 이름은 비밀입니다. 😼");
            break;
        default:
            chat.innerHTML = "모르겠습니다.";
            break;
    }
}