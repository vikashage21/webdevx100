function print(n) {
    for (let row = 1; row <= n; row++) {
        let pattern = ''
        for (let col = 1; col <= row; col++) {
            pattern += '*'
        }
        console.log(pattern)
    }
}

print(5)

// pattern 

// *
// **
// ***
// ****
// *****
