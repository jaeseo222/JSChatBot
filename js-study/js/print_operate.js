function oper_arithmetic() {
    var x = 10, y = 3;
    console.log("산술 연산자 x=10, y=3");
    console.log(" x + y = " + (x + y));
    console.log(" x - y = " + (x - y));
    console.log(" x * y = " + (x * y));
    console.log(" x / y = " + (x / y));
    console.log(" x % y = " + (x % y));
}
function oper_assignment() {
    var x = 10, y = 3;
    console.log("대입 연산자 x=10, y=3");
    console.log(" x += y : " + (x += y));
    console.log(" x -= y : " + (x -= y));
    console.log(" x *= y : " + (x *= y));
    console.log(" x /= y : " + (x /= y));
    console.log(" x %= y : " + (x %= y));
}
function oper_comparison() {
    var x = 10;
    console.log("증감 연산자 x=10");
    x++; // x==10
    console.log(" x ++ : "+ x); // x==11
    x--; //x==11
    console.log(" x -- : "+ x); // x==10

    ++x; // x==11
    console.log(" ++ x : "+ x); // x==11
    --x; // x==10
    console.log(" -- x : "+ x); // x==10
}
function oper_increment() {
    var x = 10, y = 12, str = "10";
    console.log("비교 연산자 x=10, y=12, str=\"10\"");

    console.log(" x == y : " + (x == y));
    console.log(" x != y : " + (x != y));
    console.log(" x >= y : " + (x >= y));
    console.log(" x <= y : " + (x <= y));
    console.log(" x == str : " + (x == str));
    console.log(" x === str : " + (x === str));
    console.log(" x !== str : " + (x !== str));
}
function oper_logical() {
    console.log("논리 연산자");
    logic(true, true);
    logic(true, false);
    logic(false, true);
    logic(false, false);
}
function logic(A, B){
    console.log(" A=" + A + ", B=" + B);
    console.log(" A && B : " + (A&&B));
    console.log(" A || B : " + (A||B));
    console.log(" !A : " + (!A));
}