import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
            <Navbar className="navbar navbar-expand-lg navbar-light " >
                <a class="navbar-brand logo" tag={Link} to="/" href="#homepage"><img src="https://www.udla.edu.ec/clubes/wp-content/uploads/2021/07/udla_logo_blanco.png" width="180px" alt="" /></a>
               
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                            <NavLink className="text-white" to="/">QUE ES TOBII EYE TRACKER?</NavLink>
              </NavItem>
              <NavItem>
                            <NavLink  className="text-white" to="/counter">OBJETIVO DEL PROYECTO</NavLink>
              </NavItem>
              <NavItem>
                            <NavLink  className="text-white" to="/fetch-data">INGRESE URL A EVALUAR</NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
