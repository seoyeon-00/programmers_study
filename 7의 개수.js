function solution(array) {
    var answer = 0;
    var arrNum = array.length;
    
    for(let i = 0; i < arrNum; i++){
        var res = String(array[i]).split("7").length - 1;
        answer += res;
    }
    
    return answer;
}