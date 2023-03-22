function solution(sides) {
    var answer = 0;
    var sidesSort = sides.sort((a,b) => {return a-b});
    var result = [];

    for(let i = 0; i <= sidesSort[1]; i++){
        if(sidesSort[0] + i > sidesSort[1]){
            result.push(i);
        }
    }


    for(let j = 0; j < sidesSort[0] + sidesSort[1]; j++){
        if(sidesSort[0] + sidesSort[1] > j && j > sidesSort[1]){
            result.push(j);
        }
    }
    
    answer = result.length;
    
    return answer;
}