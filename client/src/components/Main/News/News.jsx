
import React from 'react';
import './News.scss';


const News = (props) => {
    return (

        <section className="news">
            <div className="news-content">
                <div className="news-heading">Новини</div>
                <div className="news-underline"><hr/></div>

                <div className="news-item news-item1 wow bounceInLeft" data-wow-duration="2s">
                    <div className="news-block">
                        <div className="news-item-title">День відкритих дверей</div>
                        <div className="news-item-image">
                            <img src="Images\NewsImg/News1.png" alt=""/>
                        </div>
                        <div className="news-item-under-title">07.07.2021 у ВСП “ТК ТНТУ” відбудеться день відкритих дверей</div>
                        <a href="#">Дізнатись більше</a>
                    </div>
                </div>

                <div className="news-item news-item2 wow bounceInUp" data-wow-duration="2s">
                    <div className="news-block">
                        <div className="news-item-title">День відкритих дверей</div>
                        <div className="news-item-image">
                            <img src="Images\NewsImg/News1.png" alt=""/>
                        </div>
                        <div className="news-item-under-title">07.07.2021 у ВСП “ТК ТНТУ” відбудеться день відкритих дверей</div>
                        <a href="#">Дізнатись більше</a>
                    </div>
                </div>

                <div className="news-item news-item3 wow bounceInRight" data-wow-duration="2s">
                    <div className="news-block">
                        <div className="news-item-title">День відкритих дверей</div>
                        <div className="news-item-image">
                            <img src="Images\NewsImg/News1.png" alt=""/>
                        </div>
                        <div className="news-item-under-title">07.07.2021 у ВСП “ТК ТНТУ” відбудеться день відкритих дверей</div>
                        <a href="#">Дізнатись більше</a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default News;




