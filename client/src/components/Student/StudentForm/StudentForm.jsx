import React from 'react';
import './StudentForm.scss';
import { NavLink } from 'react-router-dom';

import Fetch from '../../../Utils/FetchService';
import { useFormik } from 'formik';
import DiplomValidationSchema from '../../../Utils/DiplomValidationSchema';

const StudentForm = props => {
	const formik = useFormik({
		initialValues: {
			name: '',
			year: '',
			theme: '',
			leader: '',
		},
		validationSchema: DiplomValidationSchema,
	});

	const handleSubmit = async values => {
		console.log('SUBMIT --> ', values);
		const { data, status, errMessage } = await Fetch('/work', 'POST', values);
		console.log(data);
		if (!status) {
			alert(errMessage);
		}
		formik.resetForm();
	};

	return (
		<section className='student-form-section'>
			<div className='form-of-diploma-works'>
				<div className='form-title'>База тем дипломних робіт</div>
				<form className='forma' onSubmit={formik.handleSubmit}>
					<input
						type='text'
						className='form-input'
						placeholder='ПІБ'
						required
						name='name'
						id='name'
						onChange={formik.handleChange}
						value={formik.values.name}
					/>
					<input
						type='number'
						className='form-input'
						placeholder='Рік захисту'
						required
						name='year'
						id='year'
						onChange={formik.handleChange}
						value={formik.values.year}
					/>
					<input
						type='text'
						className='form-input'
						placeholder='Тема диплому'
						required
						name='theme'
						id='theme'
						onChange={formik.handleChange}
						value={formik.values.theme}
					/>
					<input
						type='text'
						className='form-input'
						placeholder='Керівник диплому'
						required
						name='leader'
						id='leader'
						onChange={formik.handleChange}
						value={formik.values.leader}
					/>
					<div className='check-the-policy'>
						<input type='checkbox' name='' id='' className='' required />
						<div>
							Я погоджуюсь з умовами
							<NavLink to='/privacypolicy' target='_blank'>
								політики конфіденційності.
							</NavLink>
						</div>
					</div>
					<input
						type='submit'
						value='Відправити'
						className='submit-button'
						onClick={() => handleSubmit(formik.values)}></input>
				</form>
				<div className='our-contacts'>
					<div className='our-contacts-title'>Контакти:</div>
					<div className='our-contacts-text'>
						<div className='contacts-text-item'>
							<img src='Images\Student_img\call1.png' alt='' width='23px' height='18px' />
							<div>+38 0352 28 19 66</div>
						</div>
						<div className='contacts-text-item'>
							<img src='Images\Student_img\call1.png' alt='' width='23px' height='18px' />
							<div>0352 281 811</div>
						</div>
						<div className='contacts-text-item'>
							<img
								src='Images\Student_img\email1.png'
								alt=''
								width='23px'
								height='18px'
							/>
							<div>cs@tk.te.ua</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StudentForm;
