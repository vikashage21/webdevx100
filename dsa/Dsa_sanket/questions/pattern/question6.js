function print(n) {
    // row loops 
    for (let i = 1; i <= n; i++) {
        let pattern = '';
        // adding the space here.

        let space = n - i;
        for (let s = 1; s <= space; s++) {
            pattern += ' '
        }
        // adding start 
        let start = 2 * i - 1
        for (let c = 1; c <= start; c++) {
            pattern += '*'
        }
        console.log(pattern) 
    }
    // other row loop

    for (let i = 1; i <= n; i++) {
        // space printing ...
        let space = i * 2 - i;
        let pattern = ''
        for (let j = 1; j <= space; j++) {
            pattern += ' '
        }
        // adding star 
        let star = 2 * (n - i) - 1;

        for (let c = 1; c <= star; c++) {
            pattern += '*'
        }
        console.log(pattern)

    }
}

print(3)


// pattern

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
     