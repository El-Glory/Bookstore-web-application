import model from '../models';
import helpers from '../helpers';
const { User } = model;
const {	createToken, signupMessage, sendMail} = helpers;

class Users {
	static async signUp(req, res) {
        try {
            const {name, username, email, password } =  req.body
            const findUser = await User.findOne({where:{email}});
            if(findUser){
                return res.status(409).json({
                    message: "Mail exists"
                });
            }         
            const newUser = await User.create({ name, username, email, password });
            const { id } = newUser;
            const token = createToken({ id }, '24h');
            const message = signupMessage(name, token);
            await sendMail(process.env.ADMIN_MAIL, email, message);
            return res.status(201).json({
                success: true,
                message: 'User successfully created',
                data: newUser
            });
        }
        catch (error) {
            return res.status(500).json({ status: 500, message: error.message });
        }
    }


	static async signIn(req, res){
		try {
			const {email, password} = req.body
			const findUser = await User.findOne({where:{email}});
			if(findUser){
				return res.status(200).json({
					success: true,
					message: 'User successfully logged in',
					data: findUser
				})
			} return res.status(400).json({
				message: 'wrong email address' 
			})
		}
		catch (error){
			return res.status(500).json({
				status: 500,
				message: error.message
			});
		}
	}


	static async verifyUser(req, res){
		const {verified, email } = request.userData;
		try{
			if (verified) {
				return res.status(409).json({message: 'user has already been verified'})
			}
			await User.update({ verified: true}, {where: {email}});
		}
		catch(error){
			return res.status(500).json({ message: error.message})
		}
	};


	static list(req, res) {
		return User
		.findAll()
		.then(users => res.status(200)
		.send(users));
	}


}

export default Users;