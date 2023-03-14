function solution(my_str, n) {
    var answer = [];
    var textNum = my_str.length / n;
    
    for(let i = 0; i < textNum; i++){
        let str = my_str.slice(0,n);  
        answer.push(str);
        my_str = my_str.replace(str,"");
    }

    
    return answer;
}