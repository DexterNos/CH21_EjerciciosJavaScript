let form = document.getElementsByTagName('form');
let numform = form[0];

function MaxNum(){
    let num = [];
    num[0] = document.getElementById("num1").value;
    num[1] = document.getElementById("num2").value;
    num[2] = document.getElementById("num3").value;
    return document.getElementById("result").innerHTML = Math.max(...num);
}

function MinNum(){
    let num = [];
    num[0] = document.getElementById("minnum1").value;
    num[1] = document.getElementById("minnum2").value;
    num[2] = document.getElementById("minnum3").value;
    return document.getElementById("resultmin").innerHTML = Math.min(...num);
}