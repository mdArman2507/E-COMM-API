import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import UserRepository from "./user.repository.js";
import bcrypt from 'bcrypt';

export default class UserController{
    constructor(){
        this.userRepository=new UserRepository();
    }
    async signup(req,res){
        const {name,email,password,type}=req.body;
        const hashedPassword= await bcrypt.hash(password,12);
        const user=new UserModel(name,email,hashedPassword,type);
        await this.userRepository.signUp(user);
        res.status(201).send(user);
    }
    async signin(req,res,next)
    {
        try{
            // 1. find user by email
        const user=await this.userRepository.findByEmail(req.body.email);

        if(!user){
            return res.status(400).send('Incorrect credentials');    
        }
        else{
            // compare password with hashedpassword
            const result=await bcrypt.compare(req.body.password,user.password);
            if(result){
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
            else{
                console.log("email not password");
                return res.status(400).send('Incorrect credentials'); 
            }
        }
        }catch(err){
            console.log(err);
            return res.status(200).send("Something went wrong");
        }

    }
}
