function solution(n) {
    var answer = 0;
    var res = [];
    
    for(let i = 0; i <= n; i++){
        if(n % i === 1){
            res.push(i);
        }
    }
    
    answer = Math.min(...res)
    
    return answer;
}