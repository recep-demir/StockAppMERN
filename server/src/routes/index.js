"use strict"

const router = require('express').Router()


router.use('/documents', require('./document'))

module.exports = router