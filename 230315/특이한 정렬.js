function solution(numlist, n) {

    numlist.sort((a,b) => b > a ? 1 : -1);  
    numlist.sort((a,b) => {
        return Math.abs(a - n) - Math.abs(b - n)
    });
    
    return numlist;

}
