export default class UserModel{
    constructor(name,email,password,type){
        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
    }
    static SignUp(name,email,password,type){
        const newUser=new UserModel(name,email,password,type);
        users.push(newUser);
        return newUser;
    }
    static SignIn(email,password){
        const result=users.find((user)=>user.email==email && user.password==password);
        return result;
    }
}
var users=[
    {
        name:'Seller User',
        email:'mdarman@gmail.com',
        password:'password1',
        type:'seller',
    },
];