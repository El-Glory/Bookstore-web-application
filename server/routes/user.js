import express from 'express';
import Users from '../controllers/user';
import middlewares from '../middlewares';

const USER_URL = '/api/users';

const { signUp, signIn, verifyUser} = Users;
const { userValidator: {signUpValidator, signInValidator}, verifyToken } = middlewares;


const user  = express.Router();

user.post(`${USER_URL}/signup`,  signUpValidator, signUp);// Route for a new user to sign up 
user.post(`${USER_URL}/signin`,  signInValidator, signIn);//Route to sign in a user
user.get(`${USER_URL}`, Users.list); // API route for user to get all books in the database

// Route to verify a user
user.get(`${USER_URL}/verify`, verifyToken, verifyUser);

export default user;