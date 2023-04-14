
function solution(X, Y) {
    var answer = '';
    var xArr = X.split("");
    var yArr = Y.split("");
    var comNumber = [];
    
    // Y 배열의 요소를 key로 갖는 Object 생성
    const yObj = yArr.reduce((obj, curr) => {
        obj[curr] = obj[curr] ? obj[curr] + 1 : 1;
        return obj;
    }, {});
    
    for(let num of xArr){   
        // Y 배열에서 num 요소를 가지고 있는 경우
        if(yObj[num]){
            comNumber.push(num);
            yObj[num]--;
            //console.log(yObj);
        }
    }
    
    const result = comNumber.sort((a,b) => b-a).join("");
    
    if(result === ""){ return "-1";}
    
    if(result.replace(/['0']/g, "") === ""){
        return "0";
    } else {
        return result;
    }

    return result;
}