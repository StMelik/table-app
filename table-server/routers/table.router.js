const router = require('express').Router()
const tableController = require('../controllers/table.controller')

router.get('/', tableController.getList)

module.exports = router
