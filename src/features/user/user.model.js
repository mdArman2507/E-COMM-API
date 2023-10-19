export default class UserModel{
    constructor(name,email,password,type,id){
        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
        this.id=id;
    }
    static signUp(name,email,password,type){
        const newUser=new UserModel(name,email,password,type);
        newUser.id=users.length+1;
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
        id:1,
        name:'Seller User',
        email:'mdarman@gmail.com',
        password:'password1',
        type:'seller',
    },
    {
        id:2,
        name:'customer User',
        email:'md@gmail.com',
        password:'password1',
        type:'customer',
    },
];