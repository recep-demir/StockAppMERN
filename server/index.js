"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const express = require('express');
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config();

// DÜZELTME: Canlı ortamda (Render) HOST tanımlanmamalıdır veya 0.0.0.0 olmalıdır.
const PORT = process.env.PORT || 8000;

app.set("query parser", "extended");
/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection');
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:
const cors = require('cors');
app.use(cors()); 

// Accept JSON:
app.use(express.json());

// Check Authentication:
app.use(require('./src/middlewares/authentication'));

// Run Logger:
app.use(require('./src/middlewares/logger'));

// Query Handler:
app.use(require('./src/middlewares/queryHandler'));

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to Stock Management API',
        documents: {
            swagger: '/documents/swagger',
            redoc: '/documents/redoc',
            json: '/documents/json',
        },
        user: req.user
    })
});

// Static Route:
app.use('/upload', express.static('./upload'));

// Routes:
app.use(require('./src/routes'));

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

/* ------------------------------------------------------- */
// RUN SERVER:

// DÜZELTME: HOST parametresini sildik. 
// Bu sayede sunucu hem lokalde hem Render'da tüm ağ arayüzlerini dinleyebilir.
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()