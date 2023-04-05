function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j]);
        }
    }
    
    //중복 제거하기
    const set = new Set(answer);
    const arr = Array.from(set);
    const arrSort = arr.sort((a,b) => a-b);
    
    return arrSort;
}