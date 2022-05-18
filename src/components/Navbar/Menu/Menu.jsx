import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavMenuLink from './NavMenuLink/NavMenuLInk';
import './Menu.scss';

const menuLinks = [
	{ link: 'main', linkName: 'Головна' },
	{ link: 'student', linkName: 'Студенту' },
	{ link: 'abiturient', linkName: 'Абітуріенту' },
	{ link: 'about', linkName: 'Про нас' },
	{ link: 'contacts', linkName: 'Контакти' },
];

const menu_img = process.env.PUBLIC_URL + '/Images/menu/menu.png';

const Menu = () => {
	const [currentRoute, setCurrentRoute] = useState('');
	const location = useLocation();

	const checkActiveRoute = () => {
		if (location.pathname === '/') {
			setCurrentRoute('main');
		} else {
			const thisRoute = location.pathname.slice(1);
			setCurrentRoute(thisRoute);
		}
	};

	useEffect(() => {
		checkActiveRoute();
	}, [location]);

	return (
		<div className='menu'>
			<div className='navigation_menu'>
				<div className='nav_menu_trigger'>
					<div>
						<img src={menu_img} alt='' className='menu_image' />
					</div>
					<div class='menu_list'>
						{menuLinks.map(link => (
							<NavMenuLink
								key={link.link}
								isActive={currentRoute === link.link ? true : false}
								link={link}
							/>
						))}
					</div>
				</div>
			</div>
		</div>

	);
};

export default Menu;
