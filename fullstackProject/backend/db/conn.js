const mongoose = require('mongoose') ;

// creating function for calling databse


const connectDB = async () =>{
    try{


     const conn = await   mongoose.connect(process.env.DATABASE_CONN);
     if(conn) {
        console.log('mongoose connect ' + process.env.DATABASE_CONN)
     }
    }
    catch(error) {
        console.log('data connection has been failed')
        console.log(error.message)
    }
}

module.exports = connectDB;