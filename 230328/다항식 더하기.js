function solution(polynomial) {
    var answer = '';
    var arrPoly = polynomial.split(" ");
    
    var num = 0;
    
    for(let k of arrPoly){
        if (Number(k)){
            num += Number(k);
        }   
    }
    
    const xArr = arrPoly.filter((v) => 
        v.includes("x")
    ).map(item => {      
        return item === "x" ? "1" : item.slice(0,-1);
    }).reduce((sum, value) => {
        return sum + Number(value);
    }, 0);
    
    
    const number = num > 0 ? " + " + num : "";
    
    if(xArr === 1){
        answer = "x" + number; 
    } 
    else if(xArr === 0){
        answer = String(num);
    }
    else if(num === 0){
        answer = xArr + "x";
    } else {
        answer = xArr + "x" + " + " + num;
    }
    
    
    return answer;
}