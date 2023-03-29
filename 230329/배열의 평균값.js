function solution(numbers) {
    var answer = 0;
    
    answer = numbers.reduce((sum, value) => {
       return sum + value; 
    },0)
    
    return answer/numbers.length;
}