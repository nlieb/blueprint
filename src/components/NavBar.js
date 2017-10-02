/**
 * Created by James on 2017-10-01.
 */
import React from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const BlueprintNavBar = (props) => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Blueprint</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavDropdown eventKey={3} title="Why Blueprint?" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Overview</MenuItem>
                        <MenuItem eventKey={3.2}>Smart Investing</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={3} title="Portfolio" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={1} href="#">FAQ's</NavItem>
                    <NavItem eventKey={2} href="#">Login</NavItem>
                    <NavItem eventKey={2} href="#">Start Investing</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default BlueprintNavBar;
