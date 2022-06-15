import React from "react";
import'./StudentForm.scss';
import { NavLink } from "react-router-dom";

const StudentForm = (props) => {
    return (
        <section className="student-form-section">
        <div className="form-of-diploma-works">
            <div className="form-title">База тем дипломних робіт</div>
            <form action="#" className="forma">
                <input type="text" className="form-input" placeholder="ПІБ"/>
                <input type="text" className="form-input" placeholder="Грyпа"/>
                <input type="number" className="form-input" placeholder="Рік захисту"/>
                <input type="text" className="form-input" placeholder="Тема диплому"/>
                <input type="text" className="form-input" placeholder="Керівник диплому"/>
                <div className="check-the-policy">
                    <input type="checkbox" name="" id="" className="" required/>
                    <div>Я погоджуюсь з умовами<NavLink to='/privacypolicy' target="_blank">політики конфіденційності.</NavLink></div>
                </div>
                <input type="submit" value="Відправити" className="submit-button"/>
            </form>
            <div className="our-contacts">
                <div className="our-contacts-title">Контакти:</div>
                <div className="our-contacts-text">
                    <div className="contacts-text-item">
                        <img src="Images\Student_img\call1.png" alt="" width="23px" height="18px"/>
                        <div>+38 0352 28 19 66</div>
                    </div>
                    <div className="contacts-text-item">
                        <img src="Images\Student_img\call1.png" alt="" width="23px" height="18px"/>
                        <div>0352 281 811</div>
                    </div>
                    <div className="contacts-text-item">
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