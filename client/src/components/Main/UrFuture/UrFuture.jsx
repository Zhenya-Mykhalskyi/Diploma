import React from "react";
import "./UrFuture.scss";

const UrFuture = (props) => {
    return (
        <section className="ur-future">
        <div className="ur-future-content">
            <div className="ur-future-title">
                <h1>Твоє майбутнє</h1>
                <div className="ur-under-title">Ви зможете знайти роботу як в Україні,<br/>так і за її межами. Зможете продовжити навчання у ВНЗ</div>
            </div>
            <div className="ur-future-item ur-future-item1 wow fadeInLeft">
                <img src="Images\Section3\job1WebDesign 1.png" alt="" width="114px" height="112px"/>
                <div className="urf-item-content">
                    <div className="urf-item-content-title">Веб-дизайн</div>
                    <div className="urf-item-content-under-title">
                        Проектування, розробка сайтів та веб-застосунків
                    </div>
                </div>
            </div>
            <div className="ur-future-item ur-future-item2 wow fadeInDown">
                <img src="Images\Section3\job2Modem 1.png" alt="" width="114px" height="112px"/>
                <div className="urf-item-content">
                    <div className="urf-item-content-title">Сервіс</div>
                    <div className="urf-item-content-under-title">
                        Сервісне обслуговування домашніх користувачів,
                        провайдери послуг 
                    </div>
                </div>
            </div>
            <div className="ur-future-item ur-future-item3 wow fadeInLeft">
                <img src="Images\Section3\job3Coding 1.png" alt="" width="114px" height="112px"/>
                <div className="urf-item-content">
                    <div className="urf-item-content-title">Програмування</div>
                    <div className="urf-item-content-under-title">
                        Розробка різноманітного програмного забезпечення
                    </div>
                </div>
            </div>
            <div className="ur-future-item ur-future-item4 wow fadeInLeft">
                <img src="Images\Section3\job4Smartphone 1.png" alt="" width="114px" height="112px"/>
                <div className="urf-item-content">
                    <div className="urf-item-content-title">Мобілізація</div>
                    <div className="urf-item-content-under-title">
                        Розробка програмного забезпечення для мобільних систем
                    </div>
                </div>
            </div>
            <div className="ur-future-item ur-future-item5 wow fadeInUp">
                <img src="Images\Section3\job5ystemAdmin 1.png" alt="" width="114px" height="112px"/>
                <div className="urf-item-content">
                    <div className="urf-item-content-title">Сисадмін</div>
                    <div className="urf-item-content-under-title">
                        Налаштування комп'ютерного та мережевого обладнання
                    </div>
                </div>
            </div>
            <div className="ur-future-item ur-future-item6 wow fadeInRight">
                <img src="Images\Section3\job6SmartHouse 1.png" alt="" width="114px" height="112px"/>
                <div className="urf-item-content">
                    <div className="urf-item-content-title">Розумний дім</div>
                    <div className="urf-item-content-under-title">
                        Розробка та обслуговування систем розумних будинків
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default UrFuture;


