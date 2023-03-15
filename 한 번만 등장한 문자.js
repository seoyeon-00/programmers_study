function solution(s) {
    var answer = '';

    var find = s.split("");
    var set = [...new Set(find)];
    
    for(let i of set){
        if(s.split(i).length - 1 >= 2){
         
        } else {
            answer += i;
        }
    }
    
    answer = answer.split("").sort();
    
    return answer.join("");
}