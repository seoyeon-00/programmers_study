function solution(array) {
    var answer = [];
    
    var max = array.reduce(function(a,b){
        return Math.max(a,b);
    }, [])
    
    var maxIdx = array.indexOf(max);
    
    answer.push(max);
    answer.push(maxIdx);
    
    return answer;
}