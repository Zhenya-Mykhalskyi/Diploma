import React from "react";
import'./RequestSection.scss';

const RequestSection = (props) => {
    return (
        <section class="request-topics-section">
        <form action="" class="form">
            <div class="this-title">
                Щоб отримати список тем дипломних робіт вкажіть бажаний рік
            </div>
            <div class="input-year">
                <input type="number" name="" id="" class="form-input" placeholder="Рік захисту"/>
            </div>
            <input type="submit" value="Отримати" class="submit-btn"/>
        </form>
    </section>
    )
}

export default RequestSection;