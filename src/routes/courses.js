const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/courseController');

router.get('/create', courseController.create);

router.post('/store', courseController.store);

router.get('/:slug', courseController.show);

router.get('/:id/edit', courseController.edit);

router.put('/:id', courseController.update);

router.delete('/:id', courseController.destroy);

router.delete('/:id/force', courseController.forceDestroy);

router.patch('/:id/restore', courseController.restore);

module.exports = router;
