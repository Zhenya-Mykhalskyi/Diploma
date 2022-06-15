import * as yup from 'yup';

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const UserValidationSchema = yup.object({
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	name: yup
		.string('Enter your Name')
		.min(3, 'Name should be of minimum 3 characters length')
		.required('Name is required'),
	phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});

export default UserValidationSchema;
