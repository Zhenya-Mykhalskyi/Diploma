
import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header class = "headerWrapper">
        <div class="container">
            <div class="wrapper">
                <div class="offer">
                    <h1 class="title">Комп'ютерні науки</h1>
                    <p class="intro">Спеціальність, яка дозволить тобі здобути професію мрії. Вступай у ВСП «ТФК ТНТУ» та розкривай свій потенціал!
                    </p>
                    <NavLink to='/abiturient' className="btn">Детальніше</NavLink>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header;

// style="background: url('../Images/header/desktopback.png') no-repeat; background-size: cover"