import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
import logo from "../images/alim.png";

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

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar
        id="navbar"
        color="light"
        light
        expand="md"
        style={{ paddingTop: "15px", paddingBottom: "15px" }}
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
            <img src={logo} alt="logo" />
          </Link>
        </NavbarBrand>
        <NavbarToggler
          type="submit"
          role="button"
          aria-hidden="true"
          onClick={toggle}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link
                  onClick={toggle}
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
                  onClick={toggle}
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
                      onClick={toggle}
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
                      onClick={toggle}
                      to={"/server"}
                      style={{ textDecoration: "none", color: "gray" }}
                    >
                      Server Side
                    </Link>
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink
                    href="https://github.com/alzz0"
                    target="_blank"
                    rel="noopener"
                  >
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

export default NavBar;
