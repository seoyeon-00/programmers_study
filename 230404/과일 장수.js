function solution(k, m, score) {
    var answer = 0;
    var bindSort = [];
    
    var scoreSort = score.sort((a,b) => {
        if(a < b) return 1;
        if(a > b) return -1;
        if(a = b) return 0;
    });
    
    for(let i = 0; i < scoreSort.length; i+=m){
        bindSort.push(scoreSort.slice(i,i+m));
    }
    
    for(let j = 0; j < bindSort.length; j++){
        //최솟값
        if(bindSort[j].length === m){
            const min = Math.min(...bindSort[j]);
            answer += min * m;
        }
    }
    
    return answer;
}