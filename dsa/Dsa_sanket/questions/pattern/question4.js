function print(n) {
    for (let row = 1; row <= n; row++) {
        let pattern = '';
        let space = n - row;
        // adding space here
        for (let s = 1; s <= space; s++) {
            pattern += ' '
        }
        // adding here star

        let star = 2 * row - 1
        for (let c = 1; c <= star; c++) {

            pattern += '*'

        }

        console.log(pattern)

    }
}


print(5)



// pattern

//     *
//    ***
//   *****
//  *******
// *********