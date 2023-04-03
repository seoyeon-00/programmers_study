function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var arr1 = [denom1, denom2];
    var arr2 = [numer1, numer2];
    
    const buttomNum = denom2 * denom1;
    const topNum = (arr2[0] * arr1[1]) + (arr2[1] * arr1[0]);
    

    //최대공약수
    let num = buttomNum > topNum? buttomNum: topNum;
    let gcd = 0;
    
    for(let i = 1; i <= num; i++){
        if(buttomNum % i === 0 && topNum % i === 0){
            gcd = i;
        }
    }
    
 
    answer.push(topNum / gcd);
    answer.push(buttomNum / gcd);
           
        
    return answer;
}