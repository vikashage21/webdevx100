// given a value n (postive integer) , print the following pattern on the screen

function print(num) {

    for (let i = 1; i <= num; i++) {
        // row
        let row = ' ';
        for (let i = 1; i <= num; i++) {
            // colmun
            row += ' *'
        }
        console.log(row)
    }

}

print(10)

// pattern


//   * * * * * * * * * *
//   * * * * * * * * * *
//   * * * * * * * * * *
//   * * * * * * * * * *
//   * * * * * * * * * *
//   * * * * * * * * * *
//   * * * * * * * * * *
//   * * * * * * * * * *
//   * * * * * * * * * *
//   * * * * * * * * * *