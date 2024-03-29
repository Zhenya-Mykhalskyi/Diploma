import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Footer.scss';

const Footer = props => {
	const location = useLocation();

	React.useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [location]);

	return (
		<div className='footer-section'>
			<div className='footer'>
				<div className='footer-item footer-item-displayd footer-item-refs footer-item-1'>
					{/* <NavLink to='/about'>Про нас</NavLink> */}
					<NavLink to='/'>Головна</NavLink>
					<Link to='/student'>Студенту</Link>
					<NavLink to='/abiturient'>Абітурієнту</NavLink>
				</div>
				<div className='footer-item footer-item-2'>
					<a href='https://www.facebook.com/tktntu/'>
						<img
							src='Images\Section6Footer\Facebook.png'
							alt=''
							width='38px'
							height='38px'
						/>
					</a>
					<a href='https://www.instagram.com/tk_tnty_ternopil/'>
						<img
							src='Images\Section6Footer\Instagram.png'
							alt=''
							width='38px'
							height='38px'
						/>
					</a>
				</div>
				<div className='footer-item footer-item-displayd footer-item-refs footer-item-3'>
					<NavLink to='/abiturient'>Відгуки</NavLink>
					<NavLink to='/contacts'>Контакти</NavLink>
					<NavLink to='/contacts'>Ми на карті</NavLink>
				</div>
				<div className='footer-item footer-item-label footer-item-4'>
					<label for=''>2022 ВСП "ТФК ТНТУ»</label>
				</div>
				<div className='footer-item footer-item-5'>
					<NavLink to='/'>
						<img src='Images\menu\navlogo.png' />
					</NavLink>
				</div>
				<div className='footer-item footer-item-label footer-item-6'>
					<label for=''>© Designed and implemented by Yevhenii Mykhalskyi</label>
				</div>
			</div>
		</div>
	);
};

export default Footer;
