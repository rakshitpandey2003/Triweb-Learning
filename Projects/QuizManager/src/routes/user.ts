import express from 'express';
import {getUser, updateUser} from '../controllers/user';
import {isAuthenticated} from "../middlewares/isAuth";
const router = express.Router();
router.post('/:userId' ,isAuthenticated, getUser);
router.put('/',isAuthenticated ,updateUser);
export default router;