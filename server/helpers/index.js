import emptyBody from './emptyBody';
import responseMessage from './responseMessage';
import validators from './validator';
import sendMail from './sendMail';
import findUser from './findUser';
import * as message from './message';
import createToken from './createToken';


const { signupMessage } = message;

export default {
	emptyBody,
    responseMessage,
    validators,
    sendMail,
    createToken,
    signupMessage,
    findUser
}