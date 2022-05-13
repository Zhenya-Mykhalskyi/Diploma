import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavMenuLink.scss';

const NavMenuLink = ({ link: { link, linkName }, isActive }) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/${link}`);
	};

	const activeStyle = isActive ? 'active_nav_link' : null;

	return (
		<div className={`nav_menu_link ${activeStyle}`} onClick={handleNavigate}>
			{linkName}
		</div>
	);
};

export default NavMenuLink;
