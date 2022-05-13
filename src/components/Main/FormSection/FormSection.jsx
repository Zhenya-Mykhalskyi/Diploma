import React from "react";
import './FormSection.scss';

const FormSection = (props) => {
    return (
        <section class="form-section">
            <div class="container">
                <div class="formtitle ">
                    <p class="form-intro">Для отримання повідомлення  про день відкритих дверей введіть, будь ласка, дані.</p>
                </div>

                <div class="formWrapper">
                    <form action="#" class="form">
                        <input class="input" type="text" placeholder="ПІБ" required />
                        <input class="input" type="email" placeholder="E-mail" required />
                        <input class="input" type="tel" placeholder="Телефон" required />
                        <div class="cheackbox-div">
                            <input type="checkbox" class="checkbox" required />
                            <label class="checkbox-label">Я погоджуюсь з умовами <a href="Pages/privacy_policy.html" target="_blank">політики конфіденційності</a></label>
                        </div>
                        <button type="submit" class="form-button">Відправити</button>
                    </form>

                    <div class="address-contacts">
                        <div class="form-address ">
                            <h3 class="contact-title">Наша адреса:</h3>
                            <p class="contact-intro">Вулиця Леся Курбаса, 13, Тернопіль, Тернопільська область, 46016</p>
                        </div>

                        <div class="form-contacts">
                            <h3 class="contact-title">Контакти:</h3>
                            <div class="contact">
                                <p class=" contacttext"> <img src="Images/Section5/whitephone.png" alt="phone" class="form-img" />+38 0352 28 19 66</p>
                            </div>
                            <div class="contact">
                                <p class="contacttext"><img src="Images/Section5/whitephone.png" alt="phone" class="form-img" />0352 281 811</p>
                            </div>
                            <div class="contact">
                                <p class="contacttext"><img src="Images/Section5/mail.png" alt="phone" class="form-img mail-img" />cs@tk.te.ua</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}


export default FormSection;