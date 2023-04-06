function solution(number, limit, power) {

    for(let i = 1; i <= number; i++){
        let divisor = 0;
        
        //약수는 본래의 값의 절반 보다 클 수 없기 때문에 2를 나눈다.
        for(let j = 1; j <= i/2; j++){
            //j로 나누어 나머지가 0이면 1을 더한다.
            if(i % j === 0){
                divisor += 1;         
            }            
        }    
        //본래의 값을 추가해야함 그래서 +1
        arr.push(divisor + 1);
    }
      
    const result = arr.map((n) => {
        return n > limit ? power : n;
    }).reduce((acc, cur) => acc + cur ,0);
    
    return result;
}



function solution(number, limit, power) {
    const array = [];

    for(let i = 1; i<=number; i += 1) {
        let count = 0;
        for(let j = 1; j<= Math.sqrt(i); j += 1) {
            if(j === Math.sqrt(i)) count += 1;
            else if(i % j === 0) count += 2;
        }
        count = count > limit ? power : count;
        array.push(count);
    }
    return array.reduce((acc,cur) => acc += cur);
}