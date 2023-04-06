function solution(price, money, count) {
    var answer = -1;
    
    var increasePrice = price;
    var totalPrice = 0;
    for(let i = 1; i <= count; i++){
        totalPrice += increasePrice;
        increasePrice = price * (i + 1);
    }
    
    const result = (totalPrice > money) ? (totalPrice - money) : 0;

    return result;
}