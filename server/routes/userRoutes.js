import express from 'express';
import { checkAuth, login, signup, updateProflie } from '../controllers/userController.js';
import { protectRoute } from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post('/signup',signup);
userRouter.post('/login',login);
userRouter.put('/update-profile',protectRoute,updateProflie);
userRouter.get('/check',protectRoute,checkAuth);

export default userRouter;