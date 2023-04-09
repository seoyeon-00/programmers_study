function solution(a, b, n) {
    var answer = 0;
    var count = 0; 
    
    while(true){
        if(n >= a){          
            count += Math.floor(n / a) * b;       
            n = Math.floor(n / a)*b + (n % a);  
        } else {
            break;
        }  
    }
    
    return count;
}