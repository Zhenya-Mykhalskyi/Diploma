import React from 'react';
import './Student.scss';
import Curriculum from './Curriculum/Curriculum';
import RequestSection from './RequestSection/RequestSection';
import StudentForm from './StudentForm/StudentForm';
import StudentTimetables from './StudentTimetables/StudentTimetables';

const Student = props => {
	return (
		<div>
			<StudentTimetables />
			<Curriculum />
			<StudentForm />
			<RequestSection />
		</div>
	)
	
};

export default Student;
