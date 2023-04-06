function solution(array, height) {
 
    const result = array.filter((v) => {
        return v > height;
    }).length;
        
    return result;
}


//다른 풀이 (참고용)
function solution(array, height) {
    let result = 0;
    array.map((arr) => height < arr && result++);

    return result;
}