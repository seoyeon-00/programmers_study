function solution(numbers) {
    var answer = 0;  
    var numArr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    

    //case1
    // for(let i = 0; i < numArr.length; i++){

    //     numbers = numbers.split(numArr[i]).join(i); 

    // }


    //case2
    numArr.forEach((v, idx) => {
        numbers = numbers.replaceAll( v , idx);
        
    });
    
    
    numbers = Number(numbers);
    

    return numbers;
}