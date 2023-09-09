import { Request, Response , NextFunction } from "express"
import jwt from 'jsonwebtoken';
const isAuthenticated = (req:Request , res:Response , next: NextFunction)=>{
    try {
        const authHeader=req.get('Authorization');

        if(!authHeader){
            res.status(401).send("not authenticated");
        }
        else{
            const token=authHeader.split(' ')[1];

            let decodedToken:{userId:String, iat:Number, exp:Number};
            try {
                decodedToken=<any>jwt.verify(token, "myverysecretkey");
            } catch (error) {
                throw new Error("not authenticated");
            }

            if(!decodedToken){
                throw new Error("not authenticated");
            }
            req.userId=decodedToken.userId;
            next();
        }

    } catch (error) {
        next(error);
    }
}

export {isAuthenticated};