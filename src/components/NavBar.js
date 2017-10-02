/**
 * Created by James on 2017-10-01.
 */
import React from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const BlueprintNavBar = (props) => {
    return (
        <Navbar inverse collapseOnSelect
            style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Blueprint</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight style={{ paddingRight: 20 }}>
                    <NavDropdown eventKey={1} title="Why Blueprint?" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1}>Overview</MenuItem>
                        <MenuItem eventKey={1.2}>Smart Investing</MenuItem>
                        <MenuItem eventKey={1.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.3}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={2} title="Portfolio" id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1}>Action</MenuItem>
                        <MenuItem eventKey={2.2}>Another action</MenuItem>
                        <MenuItem eventKey={2.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={2.3}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={3} href="#">FAQ's</NavItem>
                    <NavItem eventKey={4} href="#">Login</NavItem>
                    <NavItem eventKey={5} href="#">Start Investing</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default BlueprintNavBar;
