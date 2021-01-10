import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import navIconImg from '../images/navIcon.png';
import crossIconImg from '../images/crossIcon.png';
import '../index.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

    }

    openMenu() {
        var side = document.getElementById("sideBar");
        side.classList.remove("sideNavHide");
        this.setState({menuOpen: true});
    }

    closeMenu() {
        var side = document.getElementById("sideBar");
        side.classList.add("sideNavHide");
        this.setState({menuOpen: false});
    }

    toggleMenu() {
        this.setState({menuOpen: !this.state.menuOpen});
    }

    render() {
        return(
            <div>
                <img className="navIcon" src={navIconImg} onClick={this.openMenu} />
                <div className="sideNav sideNavHide" id="sideBar">
                    <img className="navCloseIcon" src={crossIconImg} onClick={this.closeMenu} />
                    <div className="navItemsDiv">
                        <ul className="navItemsList">
                            <li className="menu-item">
                                <NavLink to='/' className="menu-item" onClick={this.closeMenu}>Home</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to='/about' className="menu-item" onClick={this.closeMenu}>About Me</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to='/experiences' className="menu-item" onClick={this.closeMenu}>Experiences</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to='/projects' className="menu-item" onClick={this.closeMenu}>Personal Projects</NavLink>
                            </li>
                            <li className="menu-item">
                                <NavLink to='/blog' className="menu-item" onClick={this.closeMenu}>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
        
    }
}

export default Navigation;