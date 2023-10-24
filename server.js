// 1. Import express
import express from 'express';
import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import bodyParser from 'body-parser';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import cartRouter from './src/features/cartItems/cartItems.routes.js';
import swagger from 'swagger-ui-express';
import apiDocs from './swagger.json' assert {type:'json'};
import loggerMiddleWare from './src/middlewares/logger.middleware.js';
// 2. Create Server
const server=express();

server.use(bodyParser.json());

server.use(loggerMiddleWare);

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

//  Error handling middleware
server.use((err,req,res,next)=>{
    console.log(err);
    res.status(503).send('something went wrong plz try later');
});

// 4. Middleware to handle 404 requests.
server.use((req,res)=>{
    res.status(404).send("API not found. please check our docs");
})

// 5. specify port.
server.listen(3200,()=>{
    console.log("server is running at 3200");
});