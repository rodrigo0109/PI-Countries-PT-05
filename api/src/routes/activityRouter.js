const { Router } = require('express');
const { createActivity } = require('../controllers/activity');

const router = Router();

router.use('/', createActivity)

module.exports = router;