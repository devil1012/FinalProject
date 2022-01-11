var express = require('express');
var router = express.Router();
const controller = require('../controllers/Controller');
/* GET home page. */
router.get('/', controller.getCategories);

module.exports = router;
