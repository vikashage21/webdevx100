
function print(n) {

    for (let i = 1; i <= n; i++) {
        // variable
        let pattern = ''
        // this is for adding spaces
        for (let s = n - i; s >= 0; s--) {
            pattern += " "
        }
        // this for adding star
        for (let c = 1; c <= i; c++) {
            pattern += "*"
        }
        console.log(pattern)
    }

}

print(5)