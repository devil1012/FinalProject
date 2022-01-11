var express = require('express');
var router = express.Router();
const api = require('../controllers/api');
/* GET home page. */
router.get('/categories', api.getCategories);

module.exports = router;