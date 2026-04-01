function upperPatter(n) {
    for (let i = 1; i <= Math.ceil(n / 2); i++) {
        let pattern = ''
        for (let c = 1; c <= i; c++) {
            // console.log(c)
            pattern += '*'

        }
        let x = (n - i) - i;
        for (let s = 1; s <= x; s++) {
            pattern += ' '
        }

        for (let y = 1; y <= i; y++) {
            // console.log(y)
            pattern += '*'
        }
        console.log(pattern)
    }

}

function lowerPatter(n) {
    for (let i = Math.ceil(n / 2) - 1; i >= 1; i--) {
        let pattern = ''


        for (let c = 1; c <= i; c++) {
            // console.log(c)
            pattern += '*'

        }
        let x = (n - i) - i
        for (let s = 1; s <= x; s++) {
            pattern += ' '
        }
        // here printing the star here.. 

        for (let y = 1; y <= i; y++) {
            // console.log(y)
            pattern += '*'
        }
        console.log(pattern)
    }
}

function print(n) {
    upperPatter(n)
    lowerPatter(n)

}

print(7)