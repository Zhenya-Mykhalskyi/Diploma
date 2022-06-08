import React from "react";
import { NavLink } from "react-router-dom";
import './FormSection.scss';

const FormSection = (props) => {
    return (
        <section className="form-section">
            <div className="container">
                <div className="formtitle ">
                    <p className="form-intro">Для отримання повідомлення  про день відкритих дверей введіть, будь ласка, дані.</p>
                </div>

                <div className="formWrapper">
                    <form action="#" className="form">
                        <input className="input" type="text" placeholder="ПІБ" required />
                        <input className="input" type="email" placeholder="E-mail" required />
                        <input className="input" type="tel" placeholder="Телефон" required />
                        <div className="cheackbox-div">
                            <input type="checkbox" className="checkbox" required />
                            <label className="checkbox-label">Я погоджуюсь з умовами <NavLink to='/privacypolicy' target="_blank">політики конфіденційності.</NavLink></label>
                        </div>
                        <button type="submit" className="form-button">Відправити</button>
                    </form>

                    <div className="address-contacts">
                        <div className="form-address ">
                            <h3 className="contact-title">Наша адреса:</h3>
                            <p className="contact-intro">Вулиця Леся Курбаса, 13, Тернопіль, Тернопільська область, 46016</p>
                        </div>

                        <div className="form-contacts">
                            <h3 className="contact-title">Контакти:</h3>
                            <div className="contact">
                                <p className=" contacttext"> <img src="Images/Section5/whitephone.png" alt="phone" className="form-img" />+38 0352 28 19 66</p>
                            </div>
                            <div className="contact">
                                <p className="contacttext"><img src="Images/Section5/whitephone.png" alt="phone" className="form-img" />0352 281 811</p>
                            </div>
                            <div className="contact">
                                <p className="contacttext"><img src="Images/Section5/mail.png" alt="phone" className="form-img mail-img" />cs@tk.te.ua</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}


export default FormSection;