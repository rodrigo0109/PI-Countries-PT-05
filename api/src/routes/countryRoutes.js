const { Router } = require('express');
const  getAllCountries  = require('../controllers/country')

const router = Router();

router.use('/', getAllCountries)

module.exports = router;