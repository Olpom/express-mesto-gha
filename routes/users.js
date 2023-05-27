const express = require('express');
const {
  getUsers,
  createUser,
  getUserById,
  updateUserAvatar,
  updateUserProfile,
} = require('../controllers/users');

const usersRouter = express.Router();

usersRouter.get('/users', getUsers);
usersRouter.post('/users', createUser);
usersRouter.get('/users/:userId', getUserById);
usersRouter.patch('/users/me/avatar', updateUserAvatar);
usersRouter.patch('/users/me', updateUserProfile);

module.exports = usersRouter;
