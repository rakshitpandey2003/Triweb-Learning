import express from 'express';
import { registerUser, getUser, updateUser, loginUser } from '../controllers/user';

const router = express.Router();
router.post('/',registerUser);
router.post('/login',loginUser);
router.post('/:userId' , getUser);
router.put('/',updateUser);
export default router;