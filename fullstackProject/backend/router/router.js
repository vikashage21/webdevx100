const express = require('express')
const {getUsers} = require('../controller/controller.js')

const router = express.Router()

router.get('/' , getUsers )

module.exports = router;