import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import Fetch from '../../../Utils/FetchService';
import UserValidationSchema from '../../../Utils/UserValidationSchema';
import './FormSection.scss';


const FormSection = props => {
	const formik = useFormik({
		initialValues: {
			email: '',
			name: '',
			phone: '',
		},
		validationSchema: UserValidationSchema,
	});

	const handleSubmit = async values => {
		console.log('SUBMIT --> ', values);
		const { data, status, errMessage } = await Fetch('/create', 'POST', values);
		console.log(data);
		if (!status) {
			alert(errMessage);
		}
		formik.resetForm();
	};

	return (
		<section className='form-section'>
			<div className='container'>
				<div className='formtitle '>
					<p className='form-intro'>
						Для отримання повідомлення про день відкритих дверей введіть, будь ласка,
						дані.
					</p>
				</div>

				<div className='formWrapper'>
					<form className='form' onSubmit={formik.handleSubmit}>
						<input
							className='input'
							type='text'
							placeholder='ПІБ'
							required
							name='name'
							id='name'
							onChange={formik.handleChange}
							value={formik.values.name}
						/>
						<input
							className='input'
							type='email'
							placeholder='E-mail'
							required
							name='email'
							id='email'
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
						<input
							className='input'
							type='tel'
							placeholder='Телефон'
							required
							name='phone'
							id='phone'
							onChange={formik.handleChange}
							value={formik.values.phone}
						/>
						<div className='cheackbox-div'>
							<input type='checkbox' className='checkbox' required />
							<label className='checkbox-label'>
								Я погоджуюсь з умовами{' '}
								<NavLink to='/privacypolicy' target='_blank'>
									політики конфіденційності.
								</NavLink>
							</label>
						</div>
						<button
							type='submit'
							className='form-button'
							onClick={() => handleSubmit(formik.values)}>
							Відправити
						</button>
					</form>

					<div className='address-contacts'>
						<div className='form-address '>
							<h3 className='contact-title'>Наша адреса:</h3>
							<p className='contact-intro'>
								Вулиця Леся Курбаса, 13, Тернопіль, Тернопільська область, 46016
							</p>
						</div>

						<div className='form-contacts'>
							<h3 className='contact-title'>Контакти:</h3>
							<div className='contact'>
								<p className=' contacttext'>
									{' '}
									<img
										src='Images/Section5/whitephone.png'
										alt='phone'
										className='form-img'
									/>
									+38 0352 28 19 66
								</p>
							</div>
							<div className='contact'>
								<p className='contacttext'>
									<img
										src='Images/Section5/whitephone.png'
										alt='phone'
										className='form-img'
									/>
									0352 281 811
								</p>
							</div>
							<div className='contact'>
								<p className='contacttext'>
									<img
										src='Images/Section5/mail.png'
										alt='phone'
										className='form-img mail-img'
									/>
									cs@tk.te.ua
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FormSection;
