
var x = document.querySelector(".request1");
var z = document.querySelector(".button1");
var count =2;
function removereq(ele){
    x.remove();
    count --;
    z.innerText = count;

}


var y = document.querySelector(".request2");
var z = document.querySelector(".button1");
var count=2;

function removereq1(elem){
    y.remove();
    count --;
    z.innerText = count;
}


var fre = document.querySelector(".button2");
countadd = 418;
function add(ele){
    countadd++;
    fre.innerText = countadd;
    x.remove();
    count --;
    z.innerText = count;

}

var fre = document.querySelector(".button2");
countadd = 418;
function add1(ele){
    countadd++;
    fre.innerText = countadd;
    y.remove();
    count --;
    z.innerText = count;

}

var user = document.querySelector(".username");

function changename(ele){
    
    user.innerText = "Haninz";
}





