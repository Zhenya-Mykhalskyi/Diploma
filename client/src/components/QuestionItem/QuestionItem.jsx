import React, { useState } from 'react';
import './QuestionItem.scss';

const QuestionItem = ({ title, answer }) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(prev => !prev);
		console.log('STATE ---> ', open);
	};

	return (
		<div class='question-item' onClick={handleClick}>
			<div class='q-title' id='q-title-1'>
				{title}
			</div>
			<div class={`q-answer ${open ? 'display_answer' : 'hide_answer'}`} id='q-answer-1'>
				{answer}
			</div>
		</div>
	);
};

export default QuestionItem;
