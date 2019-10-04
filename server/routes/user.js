import express from 'express';
import Users from '../controllers/user';

const USER_URL = '/api/users';


const user  = express.Router();

user.post(`${USER_URL}`, Users.signUp); // API route for user to signUp

export default user;