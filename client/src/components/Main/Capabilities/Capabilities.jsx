import React from "react";
import'./Capabilities.scss';

const Capabilities = (props) => {
    return (
        <section class="capabilities">
        <div class="container">
            <div class="capabilities-content">
                <div class="capabilities-title-intro">
                    <h1 class="capabilities-title">Додаткові можливості</h1>
                    <p class="capabilities-intro">Коледж - це не тільки одностороннє навчання.<br/>
                        Ви також зможете розвиватися в наступних напрямках:</p>
                </div>
                <div class="goals">
                    <div class="goal wow fadeInLeftBig">
                        <h3 class="goaltitle">Вокал та хор</h3>
                        <img class="goal-img" src="Images/Section4/Hobby1Vocal 1.png" alt=""/>
                    
                    </div>
                    <div class="goal goal-pong wow fadeInDownBig">
                        <h3 class="goaltitle">Гуртки</h3>
                       <img class="goal-img" src="Images/Section4/Hobby2Pong 1.png" alt=""/ > 
                    </div>
                    <div class="goal goal-travel wow fadeInRightBig">
                        <h3 class="goaltitle">Дозвілля</h3>
                        <img class="goal-img" src="Images/Section4/Hobby3Vocation 1.png"  alt=""/>
                     </div>
                    </div>
                </div>
            </div> 
     </section>
    )
}

export default Capabilities;