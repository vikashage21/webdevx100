function print(n){
    for(let i =1 ; i <=n ; i++){
        let pattern = '';
        for(let c=n; c>=i; c--  ){
            pattern += '*'
        }
        console.log(pattern)
    }
}

print(10)


// pattern


// *****
// ****
// ***
// **
// *