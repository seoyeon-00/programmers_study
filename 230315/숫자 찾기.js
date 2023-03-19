function solution(num, k) {
    var answer = 0;
    
    if(String(num).includes(k)){
        answer = String(num).indexOf(k) + 1;
    } else{
        return -1;
    }
    return answer;
}