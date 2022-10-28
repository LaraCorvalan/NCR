const { Router } = require('express');
const data = require('./data')


const router = Router();

router.use('/', data);


module.exports = router;
