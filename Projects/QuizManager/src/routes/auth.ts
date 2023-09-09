import express from 'express';
import { registerUser, loginUser, isUserExist } from '../controllers/auth';
import { body } from 'express-validator';

const router = express.Router();
router.post('/', [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({min:4})
        .withMessage("Please enter a valid name"),
    body('email')
        .trim()
        .isEmail()
        .custom(emailId=>{
            return isUserExist(emailId)
                .then((status)=>{
                    if(status){
                        return Promise.reject("User Already Exists");
                    }
                })
                .catch((err)=>{
                    return Promise.reject(err);
                })
        })
        .normalizeEmail()
], registerUser);
router.post('/login',loginUser);
export default router;