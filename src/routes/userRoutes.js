const express = require('express');
const controller = require('../controllers/userController');
const createUser = require('../controllers/userPostController');

const router = express.Router();

router.get('/', controller.getUsers);
router.post('/', createUser);
router.put('/:id_user', controller.updateUser);
router.delete('/:id_user', controller.deleteUser);

module.exports = router;