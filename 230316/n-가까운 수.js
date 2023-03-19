function solution(array, n) {
    var answer = 0;
  
    const arrSort = array.map((v,idx) => {     
        return Math.abs(v-n);   
    })
    
    
    
    for(let i = 0; i < arrSort.length; i++){            
        if(arrSort[i] === arrSort[i+1]){
            const min = arrSort[i];
            answer = min;
        } 
    }
    

    const minValue = Math.min.apply(null, arrSort);
    var minIdx = arrSort.indexOf(minValue);      
    
    answer = array[minIdx];
    
    return answer;
}

console.log(solution([3,10,12],11));