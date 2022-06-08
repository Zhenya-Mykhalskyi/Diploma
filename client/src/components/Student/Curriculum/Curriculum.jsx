import React from "react";
import'./Curriculum.scss';

const Curriculum = (props) => {
    return (
        <section className="curriculum-section">
        <div className="curriculum">
            <div className="curriculum-title">Карта студента на 4 роки</div>
            <div className="curriculum-underline">
                <hr/>
            </div>
            <div className="curriculum-image">
                <img src="Images\Student_img\Group.png" alt="" width="770px" className="big-img"/>
                <img src="Images\Student_img\Group2.png" alt="" width="302px" className="small-img"/>
            </div>
        </div>
    </section>
    )
}

export default Curriculum;