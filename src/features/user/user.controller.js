import UserModel from "./user.model.js";


export default class UserController{
    signup(req,res){
        const {name,email,password,type}=req.body;
        const user=UserModel.SignUp(name,email,password,type);
        res.status(201).send(user);
    }
    signin(req,res)
    {
        const result=UserModel.SignIn(req.body.email,req.body.password);
        if(!result)
        {
            return res.status(400).send('Incorrect credentials');
        }
        else
        {
            return res.status(200).send('login successfully')
        }

    }
}
