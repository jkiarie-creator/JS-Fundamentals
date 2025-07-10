let n = Number.parseInt(process.argv[2], 10);
function factorial(n){
    if(Number.isNaN(n) || n < 0){
        return 'Factorial of a negative number is undefined';
    }
    else if (n === 0 || n === 1 ) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(n));