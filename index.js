// first we have require the module - readline

import readline from 'readline';

// creating interface 


const r1 =  readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

// now creating question for user in terminal 

r1.question('enter your name ' , (name) =>{
    console.log(`hello ${name}`)
    r1.close()

})