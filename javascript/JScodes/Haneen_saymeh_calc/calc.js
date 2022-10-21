var number1;
var number2;
var operator;
var currentNumber= " ";
//var dis= document.querySelector("#display");

function dis(){
    return document.querySelector("#display");

 }

function press(number){
    currentNumber  += parseFloat(number);
    number1= parseFloat(currentNumber);
    console.log(number1);
    if(operator){
        number2=parseFloat(currentNumber);
        dis().innerText=number2;
        
    }
    else{
        number1=parseFloat(currentNumber);
        dis().innerText=number1;
    }
}


function setOP(op){
    operator=op;
    currentNumber= "";
    dis().innerText="0";
}

function clr(){
    currentNumber= "";
    dis().innerText="0";
}

function calculate(){
    var result;
    if (operator === "+"){
        result = number1+number2;
    }
    else if (operator === "-"){
        result = number1 - number2;
    }
    else if (operator === "*"){
        result = number1*number2;
    }
    else if (operator === "/"){
        result = number1/number2;
    }

console.log(number1, number2);

dis().innerText=result;

}



