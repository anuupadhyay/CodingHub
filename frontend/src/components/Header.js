import React from 'react';
import {Navbar, Nav, NavDropdown, Container, Row} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant= "dark" expand="lg" collapseOnSelect>
            <Container>
            <LinkContainer to='/'>
                <Navbar.Brand>GeeksForGeeks</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Tutorial" id="basic-nav-dropdown">
                <LinkContainer to='action/3.1'>
                    <NavDropdown.Item>Action</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='action/3.1'>
                    <NavDropdown.Item>Another action</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='action/3.1'>
                    <NavDropdown.Item>Something</NavDropdown.Item>
                </LinkContainer>
                </NavDropdown>
                <NavDropdown title="Students" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Jobs" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                    <Nav.Link href="#home">Courses</Nav.Link>
                    <Nav.Link href="/login"><i className="fas fa-user"></i> Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
