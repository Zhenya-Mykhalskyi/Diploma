import React from 'react';

const QuestionItem = ({ title, answer }) => {
	return (
		<div class='question-item'>
			<div class='q-title' id='q-title-1'>
				{title}
			</div>
			<div class='q-answer' id='q-answer-1'>
				{answer}
			</div>
		</div>
	);
};

export default QuestionItem;
