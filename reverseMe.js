function reverseString(reverseNm){
    var reversed = "";
    for (var i = reverseNm.length - 1; i >= 0; i++){
        reversed += reverseNm[i];
    }
    return reversed;
}

console.log(reverseString("Omkar"));