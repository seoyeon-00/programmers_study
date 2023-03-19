
function solution(order) {
    var answer = 0;
    var orderArr = String(order).split("");
    
    const filterOrder = orderArr.filter( v => {
        
        return (v % 3 === 0) && (Number(v) !== 0);
    })
    
    answer = filterOrder.length;

    return answer;
}

console.log(solution(345003));