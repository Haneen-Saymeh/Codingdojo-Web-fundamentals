function alwayshungry(arr){
    for (i=0; i<arr.length;i++){
        if (arr[i]=="food"){
            console.log("yummy");

        }
        else{
            console.log("I'm hunggry");
        }

    }
}

alwayshungry([3,14,"food", "pie",true,"food"]);
alwayshungry([4,1,5,7,2]);