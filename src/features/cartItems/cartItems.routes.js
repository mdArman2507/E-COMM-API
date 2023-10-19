// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import CartItemController from './cartsItems.controller.js';

// 2. Initialize Express router.
const cartRouter = express.Router();
const cartController = new CartItemController();

// All the paths to the controller methods.
// localhost/api/products 
cartRouter.post('/',cartController.add);
cartRouter.get('/',cartController.get);


export default cartRouter;