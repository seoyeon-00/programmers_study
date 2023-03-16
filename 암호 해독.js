function solution(cipher, code) {
    var answer = '';
    var cipArr = cipher.split("");
    
    const cipherFilter = cipArr.filter((item, idx) => {
        return (idx + 1) % code === 0
    })
 
    return cipherFilter.join("");
}