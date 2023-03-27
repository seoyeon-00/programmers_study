function solution(dots) {
    var answer = 0;
    var resultX = [];
    var resultY = [];
    
    
    for(let i = 0; i < dots.length; i++){
        for(let j = i + 1; j < dots.length; j++){
            if(dots[i][1] === dots[j][1]){
                const xRes = Math.abs(dots[i][0] - dots[j][0]);
                resultX.push(xRes);
                break;
            } else if(dots[i][0] === dots[j][0]){
                const yRes = Math.abs(dots[i][1] - dots[j][1]);
                resultY.push(yRes);
            }     
        }
    }
    
    answer = resultX[0] * resultY[0];
    
    
    return answer;
}