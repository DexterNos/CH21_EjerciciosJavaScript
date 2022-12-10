let max = [3, 5, 7, 1, 6];
document.getElementById("Max").innerHTML = max;
function MaxNum() {
    return document.getElementById("Max").innerHTML = Math.max(...max);
    //console.log(Math.max(...num));
}

let min =  [-1, 3, 4, 2, 6];
document.getElementById("Min").innerHTML = min;

function MinNum() {
    return document.getElementById("Min").innerHTML = Math.min(...min);
    //console.log(Math.min(...num));
}


let repnum = [1, 22, 5, 17, 10, 5, 40, 5];
let repnum2 = [7, 41, 5, 7, 10, 13, 2];
let repnum3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];
function RepeatNum(num){
 
    for (i = 0; i < num.length - 1; i++) {
        if (num.indexOf(num[i], i + 1) > -1) {
        console.log("value: ", num[i]);
        break;
    }
  }
}

let numb = [1, 2, 5, 14, 24, 31, 50, 105];
document.getElementById("Random").innerHTML = numb;  

function RandomOrd() {
  numb.sort(function(){return 0.5 - Math.random()});
  document.getElementById("Random").innerHTML = numb;
}