import sendgridMail from '@sendgrid/mail';

const sendMail = (senderMail, receiverMail, message) => {
	sendgridMail.sendApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: receiverMail,
		from: senderMail,
		subject: 'Welcome to our insightful bookstore',
		text: 'BOOKSTORE',
		...message
	};

	return sendgridMail.send(msg);
};

export default sendMail;
