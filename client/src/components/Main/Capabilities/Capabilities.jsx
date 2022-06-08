import React from "react";
import'./Capabilities.scss';

const Capabilities = (props) => {
    return (
        <section className="capabilities">
        <div className="container">
            <div className="capabilities-content">
                <div className="capabilities-title-intro">
                    <h1 className="capabilities-title">Додаткові можливості</h1>
                    <p className="capabilities-intro">Коледж - це не тільки одностороннє навчання.<br/>
                        Ви також зможете розвиватися в наступних напрямках:</p>
                </div>
                <div className="goals">
                    <div className="goal wow fadeInLeftBig">
                        <h3 className="goaltitle">Вокал та хор</h3>
                        <img className="goal-img" src="Images/Section4/Hobby1Vocal 1.png" alt=""/>
                    
                    </div>
                    <div className="goal goal-pong wow fadeInDownBig">
                        <h3 className="goaltitle">Гуртки</h3>
                       <img className="goal-img" src="Images/Section4/Hobby2Pong 1.png" alt=""/ > 
                    </div>
                    <div className="goal goal-travel wow fadeInRightBig">
                        <h3 className="goaltitle">Дозвілля</h3>
                        <img className="goal-img" src="Images/Section4/Hobby3Vocation 1.png"  alt=""/>
                     </div>
                    </div>
                </div>
            </div> 
     </section>
    )
}

export default Capabilities;