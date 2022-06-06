import React from 'react';
import Header from './Header/Header';
import News from './News/News';
import WhyCs from './WhyCs/WhyCs';
import UrFuture from './UrFuture/UrFuture';
import Capabilities from './Capabilities/Capabilities';
import QuestionsBar from './QuestionsBar/QuestionsBar';
import FormSection from './FormSection/FormSection';

const Main = props => {
	return (
		<div>
			<Header />
			<News />
			<WhyCs />
			<UrFuture />
			<Capabilities />
			<QuestionsBar />
			<FormSection />
		</div>
	);
};

export default Main;
