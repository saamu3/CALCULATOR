var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var addbtn = document.getElementById("Add");
var subbtn = document.getElementById("Sub");
var mulbtn = document.getElementById("Mult");
var divbtn = document.getElementById("Divide");
var printresult = document.getElementById("result");
function add() {
    var a = parseInt(number1.value);
    var b = parseInt(number2.value);
    var result = a + b;
    printresult.textContent = result.toString();
}
addbtn.addEventListener("click", add);
function sub() {
    var a = parseInt(number1.value);
    var b = parseInt(number2.value);
    var result = a - b;
    printresult.textContent = result.toString();
}
subbtn.addEventListener("click", sub);
function mul() {
    var a = parseInt(number1.value);
    var b = parseInt(number2.value);
    var result = a * b;
    printresult.textContent = result.toString();
}
mulbtn.addEventListener("click", mul);
function div() {
    var a = parseInt(number1.value);
    var b = parseInt(number2.value);
    var result = a / b;
    printresult.innerHTML = result.toString();
}
divbtn.addEventListener("click", div);
