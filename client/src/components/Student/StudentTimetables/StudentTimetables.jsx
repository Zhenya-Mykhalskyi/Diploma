import React from "react";
import'./StudentTimetables.scss';

const StudentTimetables = (props) => {
    return (
        <div className="student-timetables">
        <div className="timetables-refs">
            <a href="Files\rozklad_computer_science.xlsx" target="_blank" className="refs-item">Розклад занять</a>
            <a href="Files\сall_schedule.pdf" target="_blank" className="refs-item">Розклад дзвінків</a>
            <a href="Files\rates.pdf" target="_blank" className="refs-item">Рейтинги студентів</a>
        </div>
    </div>
    )
}

export default StudentTimetables;