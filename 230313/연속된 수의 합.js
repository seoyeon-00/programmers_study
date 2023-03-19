/*
#문제 
연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 
두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 
정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

#제한사항
- 1 ≤ num ≤ 100
- 0 ≤ total ≤ 1000
- num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

#입출력 예
num	total	result
3	12	[3, 4, 5]
5	15	[1, 2, 3, 4, 5]
4	14	[2, 3, 4, 5]
5	5	[-1, 0, 1, 2, 3]

*/


/*
풀이

#접근 방법 
정답으로 출력되는 값의 최솟값을 구해서 그 수에서 num 만큼 반복문을 돌려서 연속된 숫자를 출력합니다.

*/

function solution(num, total) {
    var answer = [];
    var minNum = 0;
    
    
    //(total / num)로 중간값을 가져온다.
    // num/2 의 내림값을 가져옵니다.
    // 최솟값의 소수 자리는 올림 해주면 최종적인 배열 최솟값을 구해줍니다.
    minNum = Math.ceil((total / num) - Math.floor(num / 2));     
    
    //반복문을 num만큼 진행  
    for(let i = 0; i < num; i++){ 
        answer.push(minNum);            
        minNum++;

    }

    return answer;
    
}

console.log(solution(3,12));
console.log(solution(5,15));
console.log(solution(4,14));
console.log(solution(5,5));

