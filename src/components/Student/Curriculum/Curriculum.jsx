import React from "react";
import'./Curriculum.scss';

const Curriculum = (props) => {
    return (
        <section class="curriculum-section">
        <div class="curriculum">
            <div class="curriculum-title">Карта студента на 4 роки</div>
            <div class="curriculum-underline">
                <hr/>
            </div>
            <div class="curriculum-image">
                <img src="Images\Student_img\Group.png" alt="" width="770px" class="big-img"/>
                <img src="Images\Student_img\Group2.png" alt="" width="302px" class="small-img"/>
            </div>
        </div>
    </section>
    )
}

export default Curriculum;