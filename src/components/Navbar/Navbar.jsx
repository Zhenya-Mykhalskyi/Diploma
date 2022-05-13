import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return <section class="nav-section">
    <nav class="nav">
        <div class="nav-logo">
           <a href="index.html"><img src="Images\menu\navlogo.png" alt="" srcset="" /></a> 
        </div>
        <div class="nav-lang">
            <div class="ukr">UK</div>
            <div class="eng">ENG</div>
        </div>
        <div class="nav-contacts">
            <img src="Images\menu\call1.png" alt="" srcset="" width="15px" height="12.5px"/>
            <div class="contact-number">+38 0352 28 19 66</div>
        </div>
        <div class="nav-menu">
            <div class="menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>
    <div class="menu">
            <li><a href="index.html"><img src="Images\menu\navlogo-big.png" alt="" srcset=""/></a></li>
            <li><a href="#">Головна</a></li>
            <li><a href="#">Новини</a></li>
            <li><a href="applicant.html">Абітурієнту</a></li>
            <li><a href="student.html">Студенту</a></li>
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Контакти</a></li>
    </div>
</section>
}



export default Navbar;