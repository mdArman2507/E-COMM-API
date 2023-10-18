import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController{
    signup(req,res){
        const {name,email,password,type}=req.body;
        const user=UserModel.signUp(name,email,password,type);
        res.status(201).send(user);
    }
    signin(req,res)
    {
        const result=UserModel.signIn(req.body.email,req.body.password);
        if(!result)
        {
            return res.status(400).send('Incorrect credentials');
        }
        else
        {
            // 1 Create Token
            const token=jwt.sign(
                {
                    userID:result.id,
                    email:result.email,
                },
                'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NzYwOTA3NCwiaWF0IjoxNjk3NjA5MDc0fQ.GMRrKVYcUjE_ObxtUoEu4X6ZErRxfNKJA1kvXVs9iuo'
                ,
                {
                    expiresIn:'1h',
                }

            );
            return res.status(200).send(token)
        }

    }
}
