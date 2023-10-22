// 1. Import express
import express from 'express';
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import bodyParser from 'body-parser';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import cartRouter from './src/features/cartItems/cartItems.routes.js';
import swagger from 'swagger-ui-express';
import apiDocs from './swagger.json' assert {type:'json'};
// 2. Create Server
const server=express();

server.use(bodyParser.json());

// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use("/api/docs",swagger.serve,swagger.setup(apiDocs));
server.use("/api/products",jwtAuth, productRouter);
server.use("/api/cartItems",jwtAuth,cartRouter);
server.use("/api/users",userRouter);


// 3. Default request handler
server.get('/',(req,res)=>{
    res.send("Welcome to Ecommerce APIs");
});

// 4. specify port.
server.listen(3200,()=>{
    console.log("server is running at 3200");
});