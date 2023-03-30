function solution(phone_number) {
    var answer = '';
    var backNum = phone_number.slice(-4);
    var frontNum = phone_number.slice(0, -4);
    
    answer = frontNum.replace(/[0-9]/g, "*") + backNum;
    
    return answer;
}