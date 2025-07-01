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

app.use(require('./src/middlewares/authentication'));

app.use(require('./src/middlewares/queryHandler'));




app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to StockApiMERN',
        documents: {
            swagger: '/documents/swagger',
            redoc: '/documents/redoc',
            json: '/documents/json',
        },
        user: req.user
    })
});

app.use(require('./src/routes'));




app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`))

// require('./src/helpers/sync')() // !!! It clear database.