export default class UserModel{
    constructor(name,email,password,type){
        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
    }
    static signUp(name,email,password,type){
        const newUser=new UserModel(name,email,password,type);
        users.push(newUser);
        return newUser;
    }
    static signIn(email,password){
        const result=users.find((user)=>user.email==email && user.password==password);
        return result;
    }
    static getAll(){
        return users;
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