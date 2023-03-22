//가장 가까운 같은 글자
//제출시 오류 떠서 오류 잡고 재업로 하겠습니다.

function solution(s) {
    var answer = [];
    let arrS = s.split("");
    
    for(let i in arrS){
        if(!answer.includes(arrS[i])){
            answer.push(arrS[i]);
        } else {
            for(let j = i - 1; j > 0; j--){
                if(arrS[j] === arrS[i]){                
                    answer.push(i-j);
                    break;
                }
            }

        }
    }
    
    answer = answer.join(" ").replace(/[a-z]/g,"-1").split(" ");
    const arrNum = answer.map((v) => {
        return Number(v);
    })
    
    return arrNum;
}
