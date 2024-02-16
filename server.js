require('dotenv').config()
const server = require('./express')()
const { port = 3000 } = require('./config')


server.listen (port, async()=>{
    console.log(`server is running at port http://localhost/${port}`);
})

