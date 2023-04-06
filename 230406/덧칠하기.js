function solution(n, m, section) {    
    //칠 횟수
    var answer = 0;    
    
    //페인트칠 한 마지막 위치
    let paint = 0;
    
    const result = section.map((v) =>{

        //현재 구역이 페인트칠 한 마지막 위치보다 크다면 페인트칠 진행하고 마지막 위치를
        //paint에 업데이트 시킨다.
        if(v > paint){
            paint = v + (m - 1);    
            
            //페인트 횟수 +1 추가
            answer++;
        }
    })
   
    return answer;
}


console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, 	[1, 2, 3, 4]));

