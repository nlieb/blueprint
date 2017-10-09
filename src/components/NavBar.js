/**
 * Created by James on 2017-10-01.
 */
import React from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const titleStyle = {
    fontSize: 36,
    color: '#2B84EA',
    fontWeight: 'bold',
};

const startInvestingStyle = {
    color: '#2B84EA',
};

const BlueprintNavBar = (props) => {
    return (
        <Navbar collapseOnSelect fixedTop
            style={{ backgroundColor: 'white', paddingTop: 10, paddingBottom: 10 }}>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/blueprint" style={titleStyle}>
                        blueprint
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavDropdown eventKey={1} title="Why Blueprint?" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1}>Overview</MenuItem>
                        <MenuItem eventKey={1.2}>Smart Investing</MenuItem>
                        <MenuItem eventKey={1.3}>Account Security</MenuItem>
                        <MenuItem eventKey={1.3}>Our Team</MenuItem>
                        <MenuItem eventKey={1.3}>Our Mission</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.3}>Fee Calculator</MenuItem>
                        <MenuItem eventKey={1.3}>Compounding Calculator</MenuItem>
                    </NavDropdown>
                    <NavDropdown eventKey={2} title="Portfolio" id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1}>Our Portfolios</MenuItem>
                        <MenuItem eventKey={2.2}>Pricing</MenuItem>
                        <MenuItem eventKey={2.3}>Our Investment Approach</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={3} href="#">FAQ's</NavItem>
                    <NavItem eventKey={4} href="#">Login</NavItem>
                    <NavItem eventKey={5} href="#" style={startInvestingStyle}>Get Started</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default BlueprintNavBar;
