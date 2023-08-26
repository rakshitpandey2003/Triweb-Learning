const express = require('express');
const calculatorController = require('../controllers/calculator');
const router = express.Router();

router.post('/add' ,calculatorController.add);
router.post('/sub' ,calculatorController.sub);
router.post('/mul' ,calculatorController.mul);
router.post('/div' ,calculatorController.div);

module.exports = router;