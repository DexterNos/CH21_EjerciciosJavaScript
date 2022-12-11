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

function Multiplo3(){
    let num;
    num = document.getElementById("numero3").value;
    if ((num%3)==0) {
        return document.getElementById("Multiplo3").innerHTML = "El numero es multiplo de 3";
    }else{
        return document.getElementById("Multiplo3").innerHTML = "El numero no es multiplo de 3";
    }

}