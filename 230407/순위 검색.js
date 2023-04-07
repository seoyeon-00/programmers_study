//미완성
function solution(info, query) {
    var answer = [];
      
    //사용하기 쉽게 이차원 배열로 저장
    //[["java","backend","junior","pizza","150"],["python","frontend","senior","chicken","210"]]
    var reInfo = [];
    const reviseInfo = info.forEach((val, idx) => {
        reInfo.push(val.split(" "));
    });
    
    //[["java","backend","junior","pizza","100"],["-","backend","senior","-","150"]]
    var reQuery = [];
    const reviseQuery = query.forEach((val, idx) => {
        reQuery.push(val.replace(/ and/g, "").split(" "));
    })
      
    //"-"가 포함된 자리 index 구하기
    //[1],[0,3],[0,1,2],[0,1,2,3]
    let calIdx = [];
    for(let i = 0; i < reQuery.length; i++){
        const cal = reQuery[i].map((value, index) =>{       
            return (value === "-")? index : -1;
        }).filter((v) => {
            return v !== -1 //-1 제거하기
        });      
        calIdx.push(cal);
    }
    
    //빈배열 제거하기
    calIdx = calIdx.filter( v => v.length !== 0);
    

    //"-"가 포함되지 않은 index 구하기 (- 포함하지 않은 index 끼리 조건이 일치하게 하도록)
    var reverseCalIdx = new Array(calIdx.length);
    
    for(let i = 0; i < calIdx.length; i++){
        var arr = [];     
        for(let k = 0; k <= 3; k++){
            if(!String(calIdx[i]).includes(String(k))){
               arr.push(k);
            }
            reverseCalIdx[i] = arr;              
        }
    }
    reverseCalIdx = reverseCalIdx.filter( v => v.length !== 0);
    //[[0,2,3],[1,2],[3]]
    
    //-는 해당 조건을 고려하지 않기 때문에 -가 없는 자리의 index 번호만을 비교해서 포함된 사람 추가
    //[[0,2,3],[1,2],[3]]
  
    for(let query of reQuery){
        let count = 0;
        
        for(let info of reInfo){
            if(query[0] === info[0] && query[1] === info[1] && query[2] === info[2] && query[3] === info[3] && info[4] >= query[4]){
                count++;
            }
   
            else {
                for(let k = 0; k < reverseCalIdx.length; k++){
                    var a = [];
                    for(let j of reverseCalIdx){
                       if(query[reverseCalIdx[j]] === info[reverseCalIdx[j]] && info[4] >= query[4]){
                            a.push(1)
                        } else {
                            a.push(0)
                        }
                    }
                }  
                
                if(!a.join(",").includes(0)){
                     count++;
                }
            }  
        }
              
        answer.push(count);
                 
    }
    
    
    return reverseCalIdx;
  
}