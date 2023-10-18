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
                'qwertyuiopasdfghjklzxcvbnm123456',
                {
                    expiresIn:'1h',
                }

            );
            // 2. send token
            return res.status(200).send(token)
        }

    }
}
