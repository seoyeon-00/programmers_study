
/*
#문제 
등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 
마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

#제한사항
- 2 < common의 길이 < 1,000
- -1,000 < common의 원소 < 2,000
- common의 원소는 모두 정수입니다.
- 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
- 등비수열인 경우 공비는 0이 아닌 정수입니다.

#입출력 예
common	result
[1, 2, 3, 4]	5
[2, 4, 8]	16

*/


/*
풀이

#접근 방법
배열이 등차수열인지 등비수열인지 구별해서 
배열 마지막 원소에 등차/등비에 대한 값을 넣어 결과값을 낸다.

#문제점
if문을 등비에 대한 조건문을 세워서 진행했을 때 체점에 대한 오류가 발생.

진행방식
if((common[1] % common[0]) === 0)

배열이 
[3 6 9] 등차가 3인 등차수열  => 등차수열이지만 (6 % 3) === 0이기 때문에 등비수열 조건문으로 들어가게 된다.

※ 그렇기 때문에 정확한 조건문을 갖기 위해서 
등차수열의 0번째,1번째 원소의 차와 2번째,1번째 원소 차를 이용해서 해결한다.

*/


function solution(common) {
    var answer = 0;
    let lastIdx = common.length -1;
    
    
    if(common[1] - common[0] === common[2] - common[1]){
        let ratio = common[lastIdx] - common[lastIdx-1];
        answer = common[lastIdx] + ratio;
        
    } else {

        
        let ratio2 = common[lastIdx]/common[lastIdx-1];
        answer = common[lastIdx] * ratio2;
    }
    

    return answer;
}

