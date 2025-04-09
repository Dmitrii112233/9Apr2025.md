// case 2 Prime Number checker
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

const number = parseInt(prompt("Enter a number:"));
alert(`${number} is ${isPrime(number) ? "a prime" : "not a prime"} number`);
