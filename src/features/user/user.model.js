import { getDB } from "../../config/mongodb.js";
import ApplicationError from "../../error-handler/ApplicationError.js";

export default class UserModel{
    constructor(name,email,password,type,id){
        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
        this._id=id;
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
