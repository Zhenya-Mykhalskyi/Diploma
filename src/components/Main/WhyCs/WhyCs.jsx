import React from "react";
import'./WhyCs.scss';

const WhyCs = (props) => {
    return (
        <section class="why-cs">
        <div class="prof-of-cs">
            <h1 class="title-why">Чому обирають <br/> "Комп'ютерні науки"</h1>

            <div class="first-block wow fadeInLeftBig">
                <div class="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div class="item-text">Професія майбутнього</div>
                </div>
                <div class="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div class="item-text">Попит на ринку праці</div>
                </div>
                <div class="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div class="item-text">Постійний розвиток</div>
                </div>
                <div class="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div class="item-text">Гнучкий графік робити</div>
                </div>
                <div class="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div class="item-text">Хороший соцпакет</div>
                </div> 
            </div>
            <div class="second-block wow fadeInRightBig">
                <div class="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div class="item-text">Висока заробітня плата</div>
                </div> 
                <div class="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div class="item-text">Кар'єрне зростання</div>
                </div> 
                <div class="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div class="item-text">Можливість працювати віддалено</div>
                </div> 
                <div class="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div class="item-text">Спілкування англійською</div>
                </div> 
                <div class="why-cs-item">
                    <img src="Images\Section2\whitemark.png" alt=""/>
                    <div class="item-text">Можливість роботи за кордоном</div>
                </div> 
            </div>
        </div>
    </section>
    )
}

export default WhyCs;