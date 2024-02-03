const { indexController } = require('../controllers/indexController.js');

const express = require('express');
const router = express.Router();


router.route('/')
    .get(indexController.showURLGET)
    .post(indexController.insertURLPOST);

router.route('/delete/:id')
    .get(indexController.deleteURLGET)

router.route('/:id')
.get(indexController.toShortURLGET)

module.exports = router;