import React from 'react';
import { QuestionsConstants } from '../../../constants';
import QuestionItem from '../../QuestionItem/QuestionItem';
import './QuestionsBar.scss';

const QuestionsBar = () => {
	return (
		<section class='questions-bar-section'>
			<div class='question-bar wow fadeInUp' data-wow-duration='2s'>
				<div class='question-bar-title'>Найпоширеніші запитання:</div>
				{QuestionsConstants.map(({ answer, title }) => (
					<QuestionItem key={title.split(' ')} answer={answer} title={title} />
				))}
			</div>
		</section>
	);
};

export default QuestionsBar;
