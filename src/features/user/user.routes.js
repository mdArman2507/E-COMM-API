// Manage routes/paths to userController

// 1. Import express.
import express from 'express';
import UserController from './user.controller.js';

// 2. Initialize Express router.
const userRouter = express.Router();
const userController = new UserController();

// All the paths to the controller methods.
// localhost/api/products 

userRouter.post('/signup',userController.signup);
userRouter.post('/signin',userController.signin);


export default userRouter;