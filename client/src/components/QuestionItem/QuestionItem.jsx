import React, { useState } from 'react';
import './QuestionItem.scss';

const QuestionItem = ({ title, answer }) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(prev => !prev);
		console.log('STATE ---> ', open);
	};

	return (
		<div className='question-item' onClick={handleClick}>
			<div className='q-title' id='q-title-1'>
				{title}
			</div>
			<div className={`q-answer ${open ? 'display_answer' : 'hide_answer'}`} id='q-answer-1'>
				{answer}
			</div>
		</div>
	);
};

export default QuestionItem;
