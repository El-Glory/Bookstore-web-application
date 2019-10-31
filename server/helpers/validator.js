import {check, param} from 'express-validator';

const isValidEmail = (field ='email') => check(field)
	.trim()
	.normalizeEmail()
	.isEmail()
	.withMessage('The Email you supplied is invalid')
	.not()
	.isEmpty()
	.withMessage('email is a required field');

const isValidName = field => check(field)
	.trim()
	.custom((value) => {
		if (!/^[a-z]{1,}[\s]{0,1}[-']{0,1}[a-z]+$/i.test(value)) {
			return false;
		}
		return true;
	})

	.escape()
	.withMessage(`the ${field} can only contain alphabets, a space, an apostrophe(') and a dash(-)`)
	.not()
	.isEmpty()
	.withMessage(`${field} is a required field`);

const isValidUsername = field => check(field)
	.trim()
	.custom((value) => {
		if (!/^[a-z]{1,}[\s]{0,1}[-']{0,1}[a-z]+$/i.test(value)) {
			return false;
		}
		return true;
	})

	.escape()
	.withMessage(`the ${field} can only contain alphabets, a space, an apostrophe(') and a dash(-)`)
	.not()
	.isEmpty()
	.withMessage(`${field} is a required field`);

const isValidPassword = (field = 'password') => check(field).isLength({min: 8, max: 20})
	.withMessage(`${field} mustbe at least 8 characters long`)
	.not()
	.isEmpty()
	.withMessage(`${field} is a required field`)
	.isAlphanumeric()
	.withMessage(`${field} should contain only numbers and alphabets`)

const checkTitle = (field = 'title') => check(field)
	.exists()
	.withMessage(`${field} is a required field`)
	.trim()
	.isLength({min: 2, max: 50})
	.withMessage(`${field} must be at least 2 characters, maximum 50`)
	.not()
	.matches(/^[0-9]+([,.][0-9]+)?$/, 'g')
	.withMessage(`${field} must contain alphabets`)
	.not()
	.matches(/^[^a-zA-Z0-9]+$/, 'g')
	.withMessage(`${field} must contain alphabets`)

const checkDescription = (field = 'description') => check(field)
	.optional()
	.isLength({min: 10})
	.withMessage(`${field} must contain at least 10 characters`)
	.not()
    .matches(/^[0-9]+([,.][0-9]+)?$/, 'g')
    .withMessage(`${field} must contain alphabets`)
    .not()
    .matches(/^[^a-zA-Z0-9]+$/, 'g')
    .withMessage(`${field} must contain alphabets`)

const checkAuthor = (field = 'author') => check(field)
	.exists()
	.withMessage(`${field} is a required field`)
	.trim()
	.isLength({min: 2, max: 50})
	.withMessage(`${field} must be at least 2 characters, maximum 50`)
	.not()
	.matches(/^[0-9]+([,.][0-9]+)?$/, 'g')
    .withMessage(`${field} must contain alphabets`)
    .not()
    .matches(/^[^a-zA-Z0-9]+$/, 'g')
    .withMessage(`${field} must contain alphabets`)

const checkQuantity = (field = 'quantity') => check(field)
	.exists()
	.withMessage(`${field} is a required field`)
	.trim()
	.not()
	.isEmpty()
	.withMessage(`${field} cannot be empty`)
	.isInt()
	.withMessage(`${field} must be an integer`)

export default{
	isValidName,
	isValidEmail,
	isValidUsername,
	isValidPassword,
	checkTitle,
	checkDescription,
	checkAuthor,
	checkQuantity
}
