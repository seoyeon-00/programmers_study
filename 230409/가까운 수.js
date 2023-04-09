function solution(array, n) {
    var answer = 0;
    
    let mapArr = [];
    array.map((v) => {
        return mapArr.push(Math.abs(v - n));
    });
    
    const min = Math.min(...mapArr);
    const condition = mapArr.join("").split(min).length - 1;
    const find = mapArr.indexOf(min);
    const findLast = mapArr.lastIndexOf(min);
    
    if(condition > 1){
        return (array[find] > array[findLast]) ? array[findLast] : array[find];    
    } else {
        return array[find];
    }
}