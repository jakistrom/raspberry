import React, { Component } from "react";
import "./Header.css";
import NavItem from "./NavItem/NavItem";
import { Spin } from "react-burgers";
import logo from "../assets/logo.png";

class Header extends Component {
  state = {
    active: false
  };

  HamburgerClick = event => {
    let navbar = document.querySelector(".Header__Navbar");

    navbar.classList.remove("fadeInRight");
    navbar.classList.remove("fadeOutLeft");
    navbar.classList.add("fadeInRight");

    if (this.state.active === false) {
      this.setState({
        active: true
      });
    } else {
      this.setState({
        active: false
      });
      navbar.classList.add("fadeOutLeft");
    }
  };
  render() {

    const navItems = [
      {key: '1', name: 'about', NavItem: '#'},
      {key: '2', name: 'offer', NavItem: '#'},
      {key: '3', name: 'gallery', NavItem: '#'},
      {key: '4', name: 'contract', NavItem: '#'}
    ]

    return (
      <header className="Header">
        <img className="Header__logo" src={logo} alt="raspberry logo" />
        <div className="Header__Navbar">
          <ul>
            {navItems.map(item =>{
              return <NavItem link={item.link} name={item.name} key={item.key}/>
            })}
          </ul>
        </div>
        <div className="Header__Menu">
          <ul>
          {navItems.map(item =>{
              return <NavItem link={item.link} name={item.name} key={item.key}/>
            })}
             <li><img href="#" className="Menu__logo" src={logo} alt="raspberry logo" /></li>
          </ul>
        </div>
        <Spin
          onClick={this.HamburgerClick}
          color="#fff"
          lineHeight={3}
          borderRadius={10}
          active={this.state.active}
        />
      </header>
    );
  }
}

export default Header;
