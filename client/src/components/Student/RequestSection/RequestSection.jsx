import React, { useState, useEffect } from 'react';
import Fetch from '../../../Utils/FetchService';
import './RequestSection.scss';

const RequestSection = props => {
	const [show, setShow] = useState(false);
	const [themes, setThemes] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		const fetchThemes = async () => {
			const { data } = await Fetch('/works');
			console.log('WORKS ---> ', data);
			setThemes(data.rows);
			setCount(data.count);
		};
		fetchThemes();
	}, [show]);

	console.log('THEMES --> ', themes);
	console.log('COUNT --> ', count);

	return (
		<section className='request-topics-section'>
			<div className='form'>
				<div className='this-title'>
					Щоб отримати список тем дипломних натисніть кнопку нижче
				</div>
				<input
					type='submit'
					value='Отримати'
					className='submit-btn'
					onClick={() => setShow(prev => !prev)}
				/>
			</div>

			{show ? (
				<div className='diploma-themes'>
					<div>Кількість тем ---- {count}</div>
					<div>
						{themes.map(theme => (
							<div className='diploma-themes-item' key={theme.name}>
								<div>
									ПІБ:  {theme.name}
								</div>
								<div>	
									Рік захисту: {theme.year}
								</div>
								<div>
									Тема:  {theme.theme}
								</div>
								    
							</div>
						))}
					</div>
				</div>
			) : null}
		</section>
	);
};

export default RequestSection;
