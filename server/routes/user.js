import express from 'express';
import Users from '../controllers/user';
import middlewares from '../middlewares';

const USER_URL = '/api/users';

const { signUp, signIn, verifyUser} = Users;
const { userValidator: {signUpValidator, signInValidator}, verifyToken } = middlewares;


const user  = express.Router();

user.post(`${USER_URL}/signup`,  signUpValidator, signUp);
user.post(`${USER_URL}/signin`,  signInValidator, signIn);

// Route to verify a user
user.get(`${USER_URL}/verify`, verifyToken, verifyUser);

export default user;