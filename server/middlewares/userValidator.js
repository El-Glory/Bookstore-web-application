import helpers from '../helpers';
import errorHandler from './errorHandler';


const {	validators, emptyBody} = helpers;

const {isValidEmail, isValidName, isValidUsername, isValidPassword} = validators;

const { validateError} = errorHandler;

const userValidator = {
	signUpValidator: [
		isValidEmail(),
		isValidName('name'),
		isValidUsername('username'),
		isValidPassword(),
		validateError
	];

	signInValidator: [
		isValidEmail(),
		isValidPassword(),
		validateError
	]
}

export default userValidator;