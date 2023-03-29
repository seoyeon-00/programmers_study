//실행결과 통과, 채점이 틀림 수정 후 재업로드
function solution(array) {
    var answer = 0;
    var result = new Object();
    var finishNum = [];
    
    for(let i of array){
        let arrNum = array.join("").split(i).length - 1;
        result[i] = arrNum;
    }
    
    let arrValue = Object.values(result);
    let max = Math.max(...arrValue);
    
    for(let j in result){
        if(result[j] === max){
            finishNum.push(j);
        }
    }
    
    answer = finishNum.length >= 2? -1 : Number(finishNum[0]);

    return answer;
}