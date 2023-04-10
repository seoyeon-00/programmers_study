function solution(k, score) {
    var answer = [];
    var result = [];
    
    for(let j of score){        
        answer.push(j);
        answer.sort((a,b) => b - a);  
        
        if(answer.length > k){
            answer.pop();
        }
        
        let idx = answer.length - 1;
        result.push(answer[idx]);
            
    }
        
    return result;
}