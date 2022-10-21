
var x = document.querySelector("#label1");
var y = document.querySelector("#label2");
var z = document.querySelector("#label3");

var count1= 9;
var count2=12;
var count3=12;

function countlikes1(){
    count1 ++;

    x.innerText= count1 + "likes";

}

function countlikes2(){
    count2 ++;

    y.innerText= count2 + "likes";

}

function countlikes3(){
    count3 ++;

    z.innerText= count3 + "likes";

}