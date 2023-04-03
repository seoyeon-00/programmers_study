function solution(food) {
    var answer = '';
    
    for(let i = 1; i < food.length; i++){
        if(food[i] % 2 === 0){
            let insertNum = food[i] / 2;
            answer += String(i).repeat(insertNum);
        } else {
            let insertNum = food[i] / 2;
            answer += String(i).repeat(insertNum);
        }
    }
    
    //answer 리턴한 값
    const reverse = answer.split("").reverse().join("");
    const result = answer + "0" + reverse;
    
    return result;
}