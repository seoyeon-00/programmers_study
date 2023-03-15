
function solution(dots) {
     var answer = 0;
     
//     var result1 = 0;
//     var result2 = 0;
//     var slope = [];
    
//     for(let i = 0; i < dots.length; i++){
//         for(let k = i + 1; k < dots.length; k++){
//             result1 = dots[i][0] - dots[k][0];
//             result2 = dots[i][1] - dots[k][1];
            
//             slope.push(result2/result1);
//         }
//     }
    
//      const result = slope.filter((x,y) => slope.indexOf(x) === y);
    
//     if(JSON.stringify(result) === JSON.stringify(slope)){
//         return 0;
//     } else {
//         return 1;
//     }


    
    /*문제점 
    초기 : a-b, a-c, a-d, b-c, b-d, c-d => 6가지 비교해서 생각했었음
    '주어진 네 개의 점을 두 개씩 이었을 때'
    이 경우 3가지 경우의 수 만을 의미했던것!

    [a-b, c-d],[a-c, b-d],[a-d, b-c]
    
    */


    //코드 단축
    function cal(a, b, c, d){

        let case1 = (dots[a][1] - dots[b][1]) / (dots[a][0] - dots[b][0]);
        let case2 = (dots[c][1] - dots[d][1]) / (dots[c][0] - dots[d][0]);

        if(case1 === case2){
            answer += 1;
        }
    }
       
    cal(0,1,2,3);
    cal(0,2,1,3);
    cal(0,3,1,2);
    
    return answer >= 1? 1 : 0;


    


}