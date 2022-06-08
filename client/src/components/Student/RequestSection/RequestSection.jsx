import React from "react";
import'./RequestSection.scss';

const RequestSection = (props) => {
    return (
        <section className="request-topics-section">
        <form action="" className="form">
            <div className="this-title">
                Щоб отримати список тем дипломних натисніть кнопку нижче
            </div>
            {/* <div className="input-year">
                <input type="number" name="" id="" className="form-input" placeholder="Рік захисту"/>
            </div> */}
            <input type="submit" value="Отримати" className="submit-btn"/>
        </form>
    </section>
    )
}

export default RequestSection;