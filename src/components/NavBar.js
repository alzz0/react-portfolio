import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/alim.png"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar
          color="light"
          light
          expand="md"
          style={{ paddingTop: "15px", paddingBottom: "15px"}}
        >
          <NavbarBrand>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "gray",
                fontSize: "35px"
              }}
            >
              <img src={logo}/>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link
                    onClick={this.toggle}
                    to={"/about"}
                    style={{
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "20px"
                    }}
                  >
                    About Me
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    onClick={this.toggle}
                    to={"/contact"}
                    style={{
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "20px"
                    }}
                  >
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar style={{ fontSize: "20px" }}>
                <DropdownToggle nav caret>
                  My Work
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink>
                      <Link
                        onClick={this.toggle}
                        to={"/client"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        Client Side
                      </Link>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink>
                      <Link
                        onClick={this.toggle}
                        to={"/server"}
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        Server Side
                      </Link>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="https://github.com/alzz0" target="_blank">
                      GitHub
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
