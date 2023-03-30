function solution(a, b) {
    var answer;
    let result = [];    
    var loopNum = a.length;
    
    for(let i = 0; i < loopNum; i++){
        result.push(a[i] * b[i]);
    }
    
    answer = result.reduce((sum, value) => {
       return sum + value; 
    },0)
    
    return answer;
}