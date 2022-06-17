
import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className = "headerWrapper">
        <div className="container">
            <div className="wrapper">
                <div className="offer">
                    <h1 className="header-title">Комп'ютерні науки</h1>
                    <p className="intro">Спеціальність, яка дозволить тобі здобути професію мрії. Вступай у ВСП «ТФК ТНТУ» та розкривай свій потенціал!
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