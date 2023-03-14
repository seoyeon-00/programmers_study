function solution(A, B) {
    var answer = 0;
    var result ="";
 
    let arrayA = A.split("");
    let arrayB = B.split("");
    const arrLength = arrayA.length;

     
    if(A === B) return 0;
    
    for(let i = 1; i < arrLength; i++){
        
        arrayA.unshift(arrayA.pop());
        
        if(arrayA.join("") === B){
            return i;
        }         
 
    } return -1;

    //return answer;

}