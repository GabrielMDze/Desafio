function solution(str) {
    return str.split('').reverse().join('');
}
console.log(solution('Matheus')); 


//

function reverseString(str) {
    var reverse = "";
    for (var i = str.length - i; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}