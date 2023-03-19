function solution(my_string) {
    var answer = '';
    
    var lowerCase = (my_string.toLowerCase()).split("");
    lowerCase.sort();
    
    return lowerCase.join("");
}