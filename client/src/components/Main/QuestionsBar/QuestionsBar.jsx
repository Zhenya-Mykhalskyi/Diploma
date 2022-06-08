import React from 'react';
import { QuestionsConstants } from '../../../constants';
import QuestionItem from '../../QuestionItem/QuestionItem';
import './QuestionsBar.scss';

const QuestionsBar = () => {
	return (
		<section className='questions-bar-section'>
			<div className='question-bar wow fadeInUp' data-wow-duration='2s'>
				<div className='question-bar-title'>Найпоширеніші запитання:</div>
				{QuestionsConstants.map(({ answer, title }) => (
					<QuestionItem key={title.split(' ')} answer={answer} title={title} />
				))}
			</div>
		</section>
	);
};

export default QuestionsBar;
