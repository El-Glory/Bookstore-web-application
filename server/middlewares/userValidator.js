import helpers from '../helpers';
import errorHandler from './errorHandler';


const {	validators, emptyBody} = helpers;

const {isValidEmail, isValidName, isValidUsername, isValidPassword} = validators;

const { validatorError} = errorHandler;

const userValidator = {
	signUpValidator: [
		isValidEmail(),
		isValidName('name'),
		isValidUsername('username'),
		isValidPassword(),
		validatorError
	],

	signInValidator: [
		isValidEmail(),
		isValidPassword(),
		validatorError
	]
}

export default userValidator;