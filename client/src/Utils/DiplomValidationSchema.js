import * as yup from 'yup';

const DiplomValidationSchema = yup.object({
	name: yup
		.string('Enter your Name')
		.min(3, 'Name should be of minimum 3 characters length')
		.required('Name is required'),
	year: yup
		.string('Enter year of protection')
		.required('Year is required'),
	theme: yup.string('Enter theme of diplom').required('Theme is required'),
	leader: yup.string('Enter leader').required('Leader is required'),
});

export default DiplomValidationSchema;
