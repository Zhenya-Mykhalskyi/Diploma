import React from "react";
import './Contacts.scss';


const Contacts = (props) => {
    return (
            <section className="contacts">
        <div className="container">
            <div className="contacts-title">
                <p className="contacts-intro">Контакти</p>
                <hr/>
            </div>
            <div className="InformationAndMap">
                <div className="InformationAndMapWrapper">
                    <div className="contacts-Information">
                        <p className="contacts-Information-title">Адреса навчального закладу:</p>
                        <div className="contacts-Information-intros">
                            <div className="firstintro">
                                Поштовий індекс: 46016 <br/>
                                <span>м. Тернопіль, вул. Л. Курбаса, 13;</span>  <br/>
                                (факультет інженерної механіки - ФІМ, фікультет електронних апаратів - ФЕА, факультет комерційного навчання - ФКН); <br/>
                                <span className="phones-info">+380-352-28-19-66; 28-18-11; 28-19-36</span> <br/>
                                cs@tk.te.ua
                            </div>
                            <div className="secondintro">
                                Поштовий індекс: 46024 <br/>
                                <span>м. Тернопіль, вул. Тарнавського, 7;</span><br/>
                                (факультет професійної підготовки - ФПП);<br/>
                                <span className="phones-info"> 26-95-34;   26-91-32;   26-90-39</span>
                            </div>
                        </div>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321
                            2.9821802386155!2d25.64311662791393!3d49.574395437464254!2m3!1f0!2f0!3f0!3m2!1i1024!
                            2i768!4f13.1!3m3!1m2!1s0x47303162a63761ab%3A0xe42c067aa6eb73cb!2z0KLQtdGF0L3RltGH0L3Q
                            uNC5INC60L7Qu9C10LTQtiDQotCd0KLQoyDRltC8LiDQhi4g0J_Rg9C70Y7Rjw!5e0!3m2!1suk!2sua!4v162
                            3604949972!5m2!1suk!2sua"  allowfullscreen="" 
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
      </section>

    )
}

export default Contacts;