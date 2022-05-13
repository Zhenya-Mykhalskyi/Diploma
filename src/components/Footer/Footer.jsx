import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.scss';


const Footer =(props) => {
    return (
        <div class="footer-section">
        <div class="footer">
            <div class="footer-item footer-item-displayd footer-item-refs footer-item-1">
                <a href="#">Новини</a>
                <a href="#">Про нас</a>
                {/* <a href="applicant.html">Абітуріенту</a> */}
                {/* <NavLink to='/applicant'>Profile</NavLink> */}
            </div>
            <div class="footer-item footer-item-2">
                <a href="https://www.facebook.com/tktntu/">
                    <img src="Images\Section6Footer\Facebook.png" alt="" width="38px" height="38px"/>
                </a>
                <a href="https://www.instagram.com/tk_tnty_ternopil/">
                    <img src="Images\Section6Footer\Instagram.png" alt="" width="38px" height="38px"/>
                </a>
            </div>
            <div class="footer-item footer-item-displayd footer-item-refs footer-item-3">
                <a href="applicant.html">Відгуки</a>
                <a href="">Контакти</a>
                <a href="">Ми на карті</a>
            </div>
            <div class="footer-item footer-item-label footer-item-4">
                <label for="">2022 ВСП "ТФК ТНТУ»</label>
            </div>
            <div class="footer-item footer-item-5">
                <a href="index.html"><img src="Images\menu\navlogo.png" alt=""/></a>
            </div>
            <div class="footer-item footer-item-label footer-item-6">
                <label for="">© Designed and implemented by Yevhenii Mykhalskyi</label>
            </div>
        </div>
    </div>
    )
}

export default Footer;