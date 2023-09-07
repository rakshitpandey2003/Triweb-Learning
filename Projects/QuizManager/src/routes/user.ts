import express from 'express';
import { registerUser, getUser } from '../controllers/user';

const router = express.Router();
router.post('/',registerUser);
router.post('/:userId' , getUser);
export default router;