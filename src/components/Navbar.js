import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../shared/logo.svg';
import CloseIcon from '../shared/icon-close.svg';
import HamburgerIcon from '../shared/icon-hamburger.svg';
import './Navbar.scss';

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
                    <ul className={"nav-links " + (this.state.toggleMenu ? 'mobile-links' : 'hide-links')}>
                        <li>
                            <NavLink to="/home" exact activeClassName='active' className='link' >
                                <span className='nav-count'>00 </span>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/destination" exact activeClassName='active' className='link' >
                                <span className='nav-count'>01 </span>Destination
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/crew" exact activeClassName='active' className='link' >
                                <span className='nav-count'>02 </span>Crew
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/technology" exact activeClassName='active' className='link' >
                                <span className='nav-count'>03 </span>Technology
                            </NavLink>
                        </li>
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
