"use strict"

const router = require('express').Router()

const { list, create, read, update, deletee} = require('../controllers/user')

router.route('/').get(list).post(create);

router.route('/:id').get(read).put(update).patch(update).delete(deletee);

module.exports = router;