//가장 가까운 같은 글자

function solution(s) {
    var answer = [];
    var arr = [];
    let arrS = s.split("");
    
    for(let i in arrS){
        if(!arr.includes(arrS[i])){
            arr.push(arrS[i]);
            answer.push(-1);
   
        } else {
            answer.push(i - arr.lastIndexOf(arrS[i]));
            arr.push(arrS[i]);
        }
    }
    

    return answer;
}
