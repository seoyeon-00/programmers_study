function solution(spell, dic) {
    var answer = 0;
 
    return dic.filter( v => 
        spell.every( item => v.includes(item))    
    ).length >= 1? 1 : 2;
    
}