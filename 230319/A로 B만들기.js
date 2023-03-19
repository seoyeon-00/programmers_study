function solution(before, after) {
    var answer = 0;
    
    var beforeArr = before.split("").sort().join("");
    var afterArr = after.split("").sort().join("");
    
    if(beforeArr === afterArr){
        return 1;
    } return 0;

}