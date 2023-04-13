function solution(my_string) {
    var answer = 0;
    const found = my_string.match(/\d+/g);
    
    const result = found? found.map((v)=> Number(v))
    .reduce((acc, cur) => {
        return acc + cur;
    }, 0): 0;

    return result;
}