import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../shared/logo.svg';
import CloseIcon from '../shared/icon-close.svg';
import HamburgerIcon from '../shared/icon-hamburger.svg';
import './Navbar.scss';
import data from '../data.json';
export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false,
        };
    }

    render() {
        return (
            <header>
                <nav className='main-nav'>
                    <Link className='logo' to='#'>
                        <img src={Logo} alt='logo' />
                    </Link>
                    <ul className={"nav-links " + (!this.state.toggleMenu ? 'hide-links' : '')}>
                        {Object.keys(data).map((key, index) => {
                            return (
                                <NavLink to={`/${key}`} className='link' >
                                    <span className='nav-count'>0{index} </span>{key}
                                </NavLink>
                            );
                        })}
                    </ul>
                    <div className='hamburger'>
                        <img
                            src={this.state.toggleMenu ? CloseIcon : HamburgerIcon}
                            alt="icon"
                            onClick={() => this.setState({ toggleMenu: !this.state.toggleMenu })}
                        />
                    </div>
                </nav>
            </header>
        );
    }
}
