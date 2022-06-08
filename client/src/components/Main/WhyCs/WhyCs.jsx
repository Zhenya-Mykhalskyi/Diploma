import React from "react";
import'./WhyCs.scss';

const WhyCs = (props) => {
    return (
        <section className="why-cs">
        <div className="prof-of-cs">
            <h1 className="title-why">Чому обирають <br/> "Комп'ютерні науки"</h1>

            <div className="first-block wow fadeInLeftBig">
                <div className="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div className="item-text">Професія майбутнього</div>
                </div>
                <div className="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div className="item-text">Попит на ринку праці</div>
                </div>
                <div className="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div className="item-text">Постійний розвиток</div>
                </div>
                <div className="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div className="item-text">Гнучкий графік робити</div>
                </div>
                <div className="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div className="item-text">Хороший соцпакет</div>
                </div> 
            </div>
            <div className="second-block wow fadeInRightBig">
                <div className="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div className="item-text">Висока заробітня плата</div>
                </div> 
                <div className="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div className="item-text">Кар'єрне зростання</div>
                </div> 
                <div className="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div className="item-text">Можливість працювати віддалено</div>
                </div> 
                <div className="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div className="item-text">Спілкування англійською</div>
                </div> 
                <div className="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div className="item-text">Можливість роботи за кордоном</div>
                </div> 
            </div>
        </div>
    </section>
    )
}

export default WhyCs;