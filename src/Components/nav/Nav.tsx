import React from 'react';
import "./Nav.scss"
import { NavLink } from 'react-router-dom'


 const Nav = () => {
    return (
        <div className='nav'>
            <NavLink className='appName' to='/dashboard'>
                <h2>DEVPREP</h2>
            </NavLink>
            <NavLink className='flashcards-button nav-button' to='/flashcards'>
                <button>Flashcards</button>
            </NavLink>
            <NavLink className='home-button nav-button' to='/dashboard'>
                <button>Home</button>
            </NavLink>
            <NavLink className='signout-button nav-button' to='/login'>
                <button>Signout</button>
            </NavLink>

        </div>

    );
}

export default Nav;
