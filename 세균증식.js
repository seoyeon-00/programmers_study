function solution(n, t) {
    var answer = 0;
    var arr = [];
    var num = n;

    
    for(let i = 1; i <= t; i++){
        
        num = num * 2;
        arr.push(num);
        
    }
    
    return arr[arr.length-1];
}