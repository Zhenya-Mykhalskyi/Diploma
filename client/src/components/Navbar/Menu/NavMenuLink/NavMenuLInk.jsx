import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavMenuLink.scss';

const NavMenuLink = ({ link: { link, linkName }, isActive ,setDropDownOpen}) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/${link}`);
	};

	const activeStyle = isActive ? 'active_nav_link' : null;

	return (
		<div onClick={()=>{handleNavigate();setDropDownOpen(false)}} className={`nav_menu_link ${activeStyle}`}>
			{linkName}
		</div>
	);
};

export default NavMenuLink;
