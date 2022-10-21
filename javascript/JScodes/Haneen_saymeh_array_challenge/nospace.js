
// remove white space and comma and dots from a sentence

sent2 = "  ";
function nospace(sent){
    for (i = 0; i < sent.length; i++){
        if (sent[i] !== " " && sent[i] !=="," && sent[i]!== "."){
            sent2 +=sent[i];
        
       
    
    }
    
}
return sent2;
}

console.log(nospace("play that, funky music."));