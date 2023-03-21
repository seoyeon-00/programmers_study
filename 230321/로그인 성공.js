function solution(id_pw, db) {
    var answer = '';
    var result = [];
        
    for(let i = 0; i < db.length; i++){        
        if(id_pw[0] === db[i][0]){
            if(id_pw[1] === db[i][1]){
               result.push("login") 
            } else {
                result.push("wrong pw") 
            }
        } else {
            result.push("fail")
        }
    }
    
    if(result.includes("login")){
        return "login";
    } else if (result.includes("wrong pw")){
        return "wrong pw";
    } else {
        return "fail"
    }
    
}