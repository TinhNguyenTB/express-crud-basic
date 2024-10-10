const express = require('express');
const router = express.Router();

const userController = require("../controller/users.controller");

/* GET users listing. */
router.get('/', userController.findAll);
// Create new user
router.post('/', userController.create);
// Update a user
router.put('/', userController.update);
// Delete a user
router.delete('/:id', userController.deleteById);

module.exports = router;
