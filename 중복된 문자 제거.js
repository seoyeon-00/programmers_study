function solution(my_string) {
    var answer = '';
    
    var arr = my_string.split("");
    var result = [];
    
    for(let o of arr){
        if(!result.includes(o)){
            result.push(o);
        }
    }
    
    
    return result.join("");
}