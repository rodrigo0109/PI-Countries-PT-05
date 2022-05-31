const { Router } = require('express');
const  {getAllCountries, getCountryById}  = require('../controllers/country')

const router = Router();

router.use('/:id', getCountryById)
router.use('/', getAllCountries)

module.exports = router;