import React from "react";
import'./StudentForm.scss';
import { NavLink } from "react-router-dom";

const StudentForm = (props) => {
    return (
        <section class="student-form-section">
        <div class="form-of-diploma-works">
            <div class="form-title">База тем дипломних робіт</div>
            <form action="#" class="forma">
                <input type="text" class="form-input" placeholder="ПІБ"/>
                <input type="text" class="form-input" placeholder="Грyпа"/>
                <input type="number" class="form-input" placeholder="Рік захисту"/>
                <input type="text" class="form-input" placeholder="Тема диплому"/>
                <input type="text" class="form-input" placeholder="Керівник диплому"/>
                <div class="check-the-policy">
                    <input type="checkbox" name="" id="" class=""/>
                    <div>Я погоджуюсь з умовами<NavLink to='/privacypolicy' target="_blank">політики конфіденційності</NavLink></div>
                </div>
                <input type="submit" value="Відправити" class="submit-button"/>
            </form>
            <div class="our-contacts">
                <div class="our-contacts-title">Контакти:</div>
                <div class="our-contacts-text">
                    <div class="contacts-text-item">
                        <img src="Images\Student_img\call1.png" alt="" width="23px" height="18px"/>
                        <div>+38 0352 28 19 66</div>
                    </div>
                    <div class="contacts-text-item">
                        <img src="Images\Student_img\call1.png" alt="" width="23px" height="18px"/>
                        <div>0352 281 811</div>
                    </div>
                    <div class="contacts-text-item">
                        <img src="Images\Student_img\email1.png" alt="" width="23px" height="18px"/> 
                        <div>cs@tk.te.ua</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default StudentForm;