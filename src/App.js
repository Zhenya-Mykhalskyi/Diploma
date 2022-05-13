import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar, Main, Student } from './components';
import './App.css';

const App = () => {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/main' element={<Main />} />
				<Route path='/student' element={<Student />} />
			</Routes>

			<Footer />
		</div>
	);
};

export default App;
