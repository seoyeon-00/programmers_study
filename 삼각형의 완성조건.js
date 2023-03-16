function solution(sides) {
    var answer = 0;
    
    const arr = sides.sort((a,b) => a - b);
    const result = arr[0] + arr[1] > arr[2]? 1 : 2;
    
    
    return result;
}