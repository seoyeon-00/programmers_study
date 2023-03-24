function solution(new_id) {
    var answer = '';
        
    answer = new_id
            .toLowerCase()//1단계- 소문자
            .replace(/[^0-9a-z-_.]/g,"")//2단계 특정문자 제외 모두 빼기
            .replace(/[.]{2,}/g,".");//3단계 .가 2번 이상부터 마침표 하나로 {n,} : n개 이상
     
            
    //4단계 뒤에서도 한번 더 
    function frontback(){
        if(answer[0] === "."){
            answer = answer.substring(1);
        } else if(answer[answer.length-1] === "."){
            answer = answer.slice(0,-1);
        }
    }
    
    //4단계
    frontback(answer);
    
    //5단계 - 빈문자열이면 a
    if(answer === ""){
        answer = "a";
    }
    
    //6단계 - 16자 이상이면 15개의 문자로
    if(answer.length >= 16){
        answer = answer.slice(0,15);
    }
    
    //4단계
    frontback(answer);
    
    //7단계 - 2글자 이하
    if(answer.length <= 2){
        let answerArr = answer.split("");
        for(let i = 0; i < 3 - answer.length; i++){
            answerArr.push(answerArr[answerArr.length-1]);
        }     
        return answerArr.join("");
    }
    
    
    return answer;
}