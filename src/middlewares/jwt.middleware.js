import  jwt from 'jsonwebtoken';
const jwtAuth = (req, res, next)=>{
    // 1. Read the token.
    var token = req.headers['authorization'];
     token = token.substring(7);
    // 2. if no token, return the error.
    if(!token){
        return res.status(401).send('Unauthorized');
    }
    // 3. check if token is valid.
    try{
        const payload = jwt.verify(
            token,
            'qwertyuiopasdfghjklzxcvbnm123456'
        );
    } catch(err){
        // 4. return error.
        console.log(token);
        console.log(err.message);
        return res.status(401).send('Unauthorized');
    }

    // 5. call next middleware.
    next();
};

export default jwtAuth;

// import jwt from 'jsonwebtoken';

// // Use an environment variable for the secret key (replace 'YOUR_SECRET_KEY' with your actual secret key).
// const secretKey = process.env.JWT_SECRET_KEY || 'qwertyuiopasdfghjklzxcvbnm123456';

// const jwtAuth = (req, res, next) => {
//     // 1. Read the token.
//     const token = req.headers['authorization'];

//     // 2. If no token, return an error.
//     if (!token) {
//         return res.status(401).send('Unauthorized');
//     }

//     // 3. Check if the token is valid.
//     try {
//         const payload = jwt.verify(token, secretKey);
//         console.log(payload);
//         next();
//     } catch (err) {
//         // 4. Return an error.
//         console.error(err);
//         return res.status(401).send('Unauthorized');
//     }
// };

// export default jwtAuth;
