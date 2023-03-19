function solution(i, j, k) {
    var answer = 0;
    var arr = [];
    
    for(let n = i; n <= j; n++){
        arr.push(n);
    }
    
    for(let m of arr){
        if(String(m).includes(k)){
            const addNum = String(m).split(k).length -1;
            answer += addNum;
        }
    }
    
    
    return answer;
}