var arr2 = [];
function reverse(arr) {
    for(i=arr.length-1;i>=0;i--){
        arr2.push(arr[i])
        
    }
    
    return arr2;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
