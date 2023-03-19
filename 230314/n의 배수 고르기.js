function solution(n, numlist) {
    var answer = [];
    
    for(let k of numlist){
        if(k % n === 0){
            answer.push(k);
        }    
    }
    
    
    return answer;
}