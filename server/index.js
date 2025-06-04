"use strict"

const express = require ('express') 
const app = express() 

require ('dotenv').config();
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

app.set("query parser", "extended");

const {dbConnection} = require('./src/configs/dbConnection')
dbConnection();

app.use(express.json());

app.use(require('./src/middlewares/queryHandler'));





app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`))

// require('./src/helpers/sync')() // !!! It clear database.