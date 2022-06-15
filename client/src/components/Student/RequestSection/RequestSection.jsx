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
			<div>
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
				<div>
					<div>Count ---- {count}</div>
					<div>
						{themes.map(theme => (
							<div key={theme.name} style={{ margin: '20px', border: '1px solid red' }}>
								{theme.name} {theme.year}
							</div>
						))}
					</div>
				</div>
			) : null}
		</section>
	);
};

export default RequestSection;
