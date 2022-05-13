import React from 'react';
import Menu from './Menu/Menu';
import './Navbar.scss';

const Navbar = props => {
	return (
		<section class='nav-section'>
			<nav class='nav'>
				<div class='nav-logo'>
					<a href='index.html'>
						<img src='Images\menu\navlogo.png' alt='' srcset='' />
					</a>
				</div>
				<div class='nav-lang'>
					<div class='ukr'>UK</div>
					<div class='eng'>ENG</div>
				</div>
				<div class='nav-contacts'>
					<img
						src='Images\menu\call1.png'
						alt=''
						srcset=''
						width='15px'
						height='12.5px'
					/>
					<div class='contact-number'>+38 0352 28 19 66</div>
				</div>

				<Menu />
			</nav>
		</section>
	);
};

export default Navbar;
