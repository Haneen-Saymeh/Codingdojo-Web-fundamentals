
var x = document.querySelector(".cookie");

function acceptcookie(ele){
    x.remove();

}

//var temp11 = document.querySelector(".temp1");
//var temp22 = document.querySelector(".temp2");
//var temp33 = document.querySelector(".temp3");
//var temp44 = document.querySelector(".temp4");
//var temp55 = document.querySelector(".temp5");
//var temp66 = document.querySelector(".temp6");
//var temp77 = document.querySelector(".temp7");
//var temp88 = document.querySelector(".temp8");



//var select = document.querySelector('select');

//function choosetemp(ele){
    //if (select.value =="fahrenheit"){
    //     temp11.innerText = 75;
    //     temp22.innerText = 65;
    //     temp33.innerText = 80;
    //     temp44.innerText = 66;
    //     temp55.innerText = 69;
    //     temp66.innerText = 61;
    //     temp77.innerText = 78;
    //     temp88.innerText = 70;
    // //}

    // //if (select.value =="celsius"){
    //     temp11.innerText = 24;
    //     temp22.innerText = 18;
    //     temp33.innerText = 27;
    //     temp44.innerText = 19;
    //     temp55.innerText = 21;
    //     temp66.innerText = 16;
    //     temp77.innerText = 26;
    //     temp88.innerText = 21;
    // //}

    
    
    

//}//

var select = document.querySelector('select');
var temprr = document.querySelectorAll(".tempr");
var tempbb = document.querySelectorAll(".tempb");
var span8 = document.querySelector(".span8")    //not best name//


function choosetemp(ele){
    for(i=0; i<temprr.length;i++){
        if (select.value =="fahrenheit"){
            console.log(temprr[i].innerText);
            temprr[i].innerText=Math.floor(((parseInt(temprr[i].innerText)*9/5)+32));
            tempbb[i].innerText=Math.round(((parseInt(tempbb[i].innerText)*9/5)+32));  //to reduce code time and size because temprr and tempbb same length//
        }
        else{
            console.log(temprr[i].innerText);
            temprr[i].innerText=Math.round(((parseInt(temprr[i].innerText)-32)*5/9));
            tempbb[i].innerText=Math.round(((parseInt(tempbb[i].innerText)-32)*5/9));
        }
    

        


    }
}

    // for(i=0; i<tempbb.length;i++){
    //     if (select.value =="fahrenheit"){
    //         console.log(tempbb[i].innerText);
    //         tempbb[i].innerText=Math.round(((parseInt(tempbb[i].innerText)*9/5)+32));
    //     }
    //     else{
    //         console.log(tempbb[i].innerText);
    //         tempbb[i].innerText=Math.round(((parseInt(tempbb[i].innerText)-32)*5/9));   //too much coding we can reduce//
    //     }
    

        


    



