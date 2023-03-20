function solution(numbers, k) {
    var answer = 0;
    var numLen = numbers.length;

    answer = Number(numbers[(k * 2 -2) % numLen]);
   
    return answer;
}