const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/err', () => {throw "err"});
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
