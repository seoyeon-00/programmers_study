function solution(survey, choices) {
    var answer = [];
    const score = [3,2,1,0,1,2,3];
    var type = {
        R:0,
        T:0,
        C:0,
        F:0,
        J:0,
        M:0,
        A:0,
        N:0,
    }
       
    for(let i in survey){
        if(choices[i] >= 5){
            var arr = survey[i].split("");
            var valNum = score[choices[i]-1];
            type[arr[1]] += valNum;
        } else if (choices[i] <= 3){
            var arr2 = survey[i].split("");
            var valNum2 = score[choices[i]-1];
            type[arr2[0]] += valNum2;
        }
    }
      
    
    type.R >= type.T? answer.push("R") : answer.push("T");
    type.C >= type.F? answer.push("C") : answer.push("F");
    type.J >= type.M? answer.push("J") : answer.push("M");
    type.A >= type.N? answer.push("A") : answer.push("N");
    
    
    
    
    return answer.join("");
}