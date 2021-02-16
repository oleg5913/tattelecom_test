import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navBar">
            <div className="navBarMyCard">
                <img src="./img/myAva.png" />
                <p className="myCardName">Порошин О.</p>
                <p className="myCardSpec">Web Dev.</p>
                <p className="myCardStatus">Статус: заходил 5 минут назад</p>
            </div>
            <NavLink to='/profile'>
                <div className= 'navBarItem'>
                    <p>Профиль</p>
                </div>
            </NavLink>
            <NavLink to='/news'>
                <div className='navBarItem'>
                    <p>Новости</p>
                </div>
            </NavLink>
            <NavLink to='/gallery'>
                <div className='navBarItem'>
                    <p>Фотографии</p>
                </div>
            </NavLink>
            <NavLink to='/wall'>
                <div className='navBarItem'>
                    <p>Стена</p>
                </div>
            </NavLink>
            <NavLink to='/users'>
                <div className='navBarItem'>
                    <p>Все пользователи</p>
                </div>
            </NavLink>
        </nav>
    )
}

export default Navbar