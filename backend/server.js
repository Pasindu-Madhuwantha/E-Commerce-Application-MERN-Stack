const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv');

//Handle Uncaught exceptions /always put rhis on top otherwise it won't caught the error
process.on('uncaughtException',err =>{
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1)
}) 


//setting up config file
dotenv.config({path:'backend/config/config.env'})

//connecting to database

connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})