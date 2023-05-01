var div = document.createElement("div");
div.classList.add("class", "container");
div.setAttribute("class", "pad");
div.style.textAlign = "center";
div.style.marginTop = "150px";

var ic= document.createElement("i");
ic.classList.add("fa","fa-calculator");
ic.setAttribute("aria-hidden","true");



var span = document.createElement("span");
span.setAttribute("class", "text-right");
span.setAttribute("id", "span");

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "input");

var title = document.createElement("h4");
title.innerHTML = "PERSONAL CALCULATOR  ";
title.style.marginBottom = "20px";
title.appendChild(ic);

function buttoncreate(attvalue, idvalue, classvalue, content) {
    var button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("value", attvalue);
    button.setAttribute("id", idvalue);
    button.setAttribute("class", classvalue);
    button.style.margin = "10px";
    button.innerHTML = content;
    return button;

}
function linebreakers(tagname) {
    var ele = document.createElement(tagname);
    return ele;
}


var seven1 = buttoncreate("7", "seven", "btn btn-light", 7);
var eight1 = buttoncreate("8", "eight", "btn btn-light", "8");
var nine1 = buttoncreate("9", "nine", "btn btn-light", "9");
var add1 = buttoncreate("+", "add", "btn btn-warning", "+");
var br1 = linebreakers("br");
var four1 = buttoncreate("4", "four", "btn btn-light", "4");
var five1 = buttoncreate("5", "five", "btn btn-light", "5");
var six1 = buttoncreate("6", "six", "btn btn-light", "6");
var sub1 = buttoncreate("-", "sub", "btn btn-warning", "-");
var br2 = linebreakers("br");
var one1 = buttoncreate("1", "one", "btn btn-light", "1");
var two1 = buttoncreate("2", "two", "btn btn-light", "2");
var three1 = buttoncreate("3", "three", "btn btn-light", "3");
var mul1 = buttoncreate("*", "multi", "btn btn-warning", "*");
var br3 = linebreakers("br");
var clr1 = buttoncreate("", "clr", "btn btn-danger", "C");
var zero1 = buttoncreate("0", "zero", "btn btn-light", "0");
var equal1 = buttoncreate("", "equal", "btn btn-success", "=");
var divi1 = buttoncreate("/", "divi", "btn btn-warning", "/");
var br4 = linebreakers("br");
var br5 = linebreakers("br");



div.append(title, br1, span,br5, input,br4, seven1, eight1, nine1, add1, br1, four1, five1, six1, sub1, br2, one1, two1, three1, mul1, br3, clr1, zero1, equal1, divi1);
document.body.append(div);

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("multi");
let division = document.getElementById("divi");
let clear1 = document.getElementById("clr");
let pad1 = document.querySelector(".pad");
let equal2 = document.getElementById("equal");

pad1.addEventListener("click", display);
clear1.addEventListener("click", cleardata);
equal2.addEventListener("click", result);


let input1 = document.querySelector(".pad")
let finalResult = document.querySelector("input")
result.finalResult = "";

document.body.addEventListener("keydown", keypress)


function display(e) {
    let span1 = document.querySelector("span")
    if (e.target.value === undefined) {
        span1.innerHTML = span1.innerHTML + ""
    } else {
        span1.innerHTML = span1.innerHTML + e.target.value;
    }

}

function cleardata() {
    let span = document.querySelector("span")
    let finalResult = document.querySelector("input")
    span.innerHTML = "";
    finalResult.value = "0";
}


function result() {
    let span = document.querySelector("span");
    let finalResult = document.querySelector("input")
    finalResult.value = eval(span.innerText);
    span = "";
}

function calculation(num1, operator, num2) {
    if (operator === "+") {
        return [num1 + num2];
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    }
}

function keypress(e) {
    let span1 = document.querySelector("span");
    if ((e.key < 10 && e.key >= 0) || e.key === "*" || e.key === "-" || e.key === "+" || e.key === "/") {
        span1.innerText += e.key;
    } else if (e.key === "Enter") {
        result();
    } else if (e.key === 'Backspace') {
        cleardata();
    }
}

