function solution(s1, s2) {
    var answer = 0;
    
    var contain = s1.filter((a) => s2.includes(a));
    answer = contain.length;
    
    return answer;
}