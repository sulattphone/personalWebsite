import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import '../index.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

    }

    openMenu() {
        this.setState({menuOpen: true});
    }

    closeMenu() {
        this.setState({menuOpen: false});
    }

    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen});
    }

    toggleMenu() {
        this.setState({menuOpen: !this.state.menuOpen});
    }

    render() {
        return(
            <Menu right
             width={'40%'}
             customBurgerIcon={<img src="https://drive.google.com/uc?/export=view&id=1sT_ohwdyDLJdwQg47FqHo7IduNnBcLua" />}
             customCrossIcon={<img src="https://drive.google.com/uc?/export=view&id=1TidVblJz2GepZ7DdqPeqkA8sZBdfuP6L" /> }
             isOpen={this.state.menuOpen}
             onStateChange={(state)=>this.handleStateChange(state)}
             >
                <NavLink to='/' id="home" className="menu-item" onClick={this.closeMenu}>Home</NavLink>
                <NavLink to='/about' id="about" className="menu-item" onClick={this.closeMenu}>About Me</NavLink>
                <NavLink to='/experiences' id="experiences" className="menu-item" onClick={this.closeMenu}>Experience</NavLink>
                <NavLink to='/projects' id="projects" className="menu-item" onClick={this.closeMenu}>Personal Projects</NavLink>
                <NavLink to='/achievements' id="achievements" className="menu-item" onClick={this.closeMenu}>Achievements</NavLink>
                <NavLink to='/blog' id="blog" className="menu-item" onClick={this.closeMenu}>Personal Blog</NavLink>
                
            </Menu>
        );
        
    }
}

export default Navigation;