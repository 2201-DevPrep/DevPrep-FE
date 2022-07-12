import React from 'react';
import "./Nav.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from 'react-router-dom'


 const Nav = () => {
    return (
        <div className='nav'>
            <NavLink className='appName' to='/dashboard'>
                <h2>DEVPREP</h2>
            </NavLink>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/behavioral">Behavioral</Dropdown.Item>
                <Dropdown.Item href="#/technical-fe">Technical FE</Dropdown.Item>
                <Dropdown.Item href="#/technical-be">Technical BE</Dropdown.Item>
            </DropdownButton>
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
