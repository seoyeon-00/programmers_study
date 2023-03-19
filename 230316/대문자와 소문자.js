function solution(my_string) {
    var answer = '';
   
    for(let k of my_string){
        if(k.toUpperCase() === k){
            answer +=  k.toLowerCase();
        } else {
            answer += k.toUpperCase();
        }
    }
    
    return answer;
}