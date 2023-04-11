function solution(name, yearning, photo) {
    var answer = [];
    
    for(let i in photo){
        var count = 0;
        name.map((v, idx) => {
            photo[i].includes(v) ? count += yearning[idx] : count += 0;
        })     
        answer.push(count);
    }
    
    return answer;
}