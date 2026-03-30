// write a function to check whether the given number is prime or not.

function isprime(x) {
    if (x == 1) { return "not prime number" }

    for (let i = 2; i <= x - 1; i++) {
        if (x % i == 0) {
            return "not prime number"


        }
    }

    return "prime number"
}

console.log(isprime(45))