function solution(t, p) {

    let pL = p.length;
    var resultArr = [];
    
    for(let i in t){
        if( i <= t.length - pL){
             var pullNum = Number(t.substr(i, pL));
             resultArr.push(pullNum);
        }   
    }
    
    const resArr = resultArr.filter( item => item <= p);

       
    return resArr.length;
}

console.log(solution("3141592","271"));
console.log(solution("500220839878","7"));
console.log(solution("10203","15"));