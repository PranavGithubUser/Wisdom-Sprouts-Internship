// JavaScript program to find factorial of given number

// Method to find factorial of the given number
function factorial(n)
{
    let res = 1;
    for (let i = 2; i <= n; i++)
        res *= i;
    return res;
}

// Driver method
let num = 5;
console.log("Factorial of " + num + " is " + factorial(5));