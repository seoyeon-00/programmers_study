function solution(bin1, bin2) {

    //parseInt : 정수를 반환, 문자열을 특정 진수로 반환
    //parseInt("10",2); => 2
    
    //toString() : 10진수를 특정 진수로 반환
    //10.toString(2); 10진수를 2진수로!

    var answer = parseInt(bin1, 2) + parseInt(bin2, 2);
    
    return answer.toString(2);
}