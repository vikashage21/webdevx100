// function findGcd(a, b) {
//     let r = a % b
//     if (a % b !== 0) {
//         return findGcd(b, r)
//     } else {
//         console.log(b)

//     }
// }

// findGcd(7, 11)
function findGcd(a, b) {
    let ans = 1;
    for (let i = 2; i <= Math.min(a, b); i++) {
        if (a % i == 0 && b % i == 0) {
            ans = i
        }

    }

    return ans
}
console.log(findGcd(28, 24))