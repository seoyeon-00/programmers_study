function solution(quiz) {
    var answer = [];
    var cal = []; 

    
    for(let i = 0; i < quiz.length; i++){
        
       var arrInner = String(quiz[i]).split(" ");
       let operator = arrInner[1];

       
        for(let k of operator){
           switch(k){
            case "+" :
            cal.push(Number(arrInner[0]) + Number(arrInner[2]));
            break;
                
            case "-" :
            cal.push(Number(arrInner[0]) - Number(arrInner[2]));
            break;
            } 
        }

        
        if(Number(arrInner[4]) === cal[i]){
           answer.push("O");
       } else {
           answer.push("X");
       }
          
    }
    

    return answer;

}