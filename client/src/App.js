import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	Footer,
	Navbar,
	Main,
	Student,
	Applicant,
	AboutUs,
	Contacts,
} from './components';
import './App.css';

const App = () => {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/main' element={<Main />} />
				<Route path='/student' element={<Student />} />
				<Route path='/abiturient' element={<Applicant />} />
				<Route path='/about' element={<AboutUs />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
			
			<Footer />
		</div>
	);
};

export default App;
