import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
      className="my-3"
      color="info"{...args}>
        <NavbarBrand href="/">
         <img
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_gfvqE5bcRBBg4GYcPgbLMSOTH8cSarzmA&usqp=CAU"
          style={{
            height: 50,
            width: 50
          }}
          /> Kody Ocean Landscapes
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/gallery/">
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="aboutMe">
                About Me
              </NavLink>
            </NavItem> 
            <NavItem>
              <NavLink href="contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>   
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;