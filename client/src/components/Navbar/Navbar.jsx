import React from 'react';
import Menu from './Menu/Menu';
import './Navbar.scss';

const Navbar = () => {
	return (
		<section className='nav-section'>
			<nav className='nav'>
				<div className='nav-logo'>
					<a href='index.html'>
						<img src='Images\menu\navlogo.png' alt='' srcset='' />
					</a>
				</div>
				<div className='nav-lang'>
					{/* <div class='ukr'>UK</div>
					<div class='eng'>ENG</div> */}
				</div>
				<div className='nav-contacts'>
					<img
						src='Images\menu\call1.png'
						alt=''
						srcset=''
						width='15px'
						height='12.5px'
					/>
					<div className='contact-number'>+38 0352 28 19 66</div>
				</div>
				<div className='nav-menu'>
					<Menu />
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
