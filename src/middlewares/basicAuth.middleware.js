// import UserModel from "../features/user/user.model.js;

// const basicAuthorizer=(req,res,next)=>{

//     // 1. Check if authorization header is empty
//     const authHeader=req.headers["authorization"];
//     if(!authHeader)
//     {
//         return res.status(401).send("NO authorization details found");
//     }
//     console.log(authHeader);
//     // 2. extract credentials.
//     const base64Crentials=authHeader.replace('Basic','');
//     console.log(base64Crentials);

//     // 3. decode credentials.
//     const decodedCreds=Buffer.from(base64Crentials,'base64').toString('utf8');
//     console.log(decodedCreds);
//     const creds=decodedCreds.split(':');
    
//     const user=UserModel.getAll().find((u)=>u.email==creds[0] && u.password==creds[1]);
//     if(user)
//     {
//         next();
//     }
//     else{
//         return res.status(401).send("Incorrect Credentials");
//     }
// }

// export default basicAuthorizer;