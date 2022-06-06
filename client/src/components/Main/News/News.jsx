
import React from 'react';
import './News.scss';


const News = (props) => {
    return (

        <section class="news">
            <div class="news-content">
                <div class="news-heading">Новини</div>
                <div class="news-underline"><hr/></div>

                <div class="news-item news-item1 wow bounceInLeft" data-wow-duration="2s">
                    <div class="news-block">
                        <div class="news-item-title">День відкритих дверей</div>
                        <div class="news-item-image">
                            <img src="Images\NewsImg/News1.png" alt=""/>
                        </div>
                        <div class="news-item-under-title">07.07.2021 у ВСП “ТК ТНТУ” відбудеться день відкритих дверей</div>
                        <a href="#">Дізнатись більше</a>
                    </div>
                </div>

                <div class="news-item news-item2 wow bounceInUp" data-wow-duration="2s">
                    <div class="news-block">
                        <div class="news-item-title">День відкритих дверей</div>
                        <div class="news-item-image">
                            <img src="Images\NewsImg/News1.png" alt=""/>
                        </div>
                        <div class="news-item-under-title">07.07.2021 у ВСП “ТК ТНТУ” відбудеться день відкритих дверей</div>
                        <a href="#">Дізнатись більше</a>
                    </div>
                </div>

                <div class="news-item news-item3 wow bounceInRight" data-wow-duration="2s">
                    <div class="news-block">
                        <div class="news-item-title">День відкритих дверей</div>
                        <div class="news-item-image">
                            <img src="Images\NewsImg/News1.png" alt=""/>
                        </div>
                        <div class="news-item-under-title">07.07.2021 у ВСП “ТК ТНТУ” відбудеться день відкритих дверей</div>
                        <a href="#">Дізнатись більше</a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default News;




