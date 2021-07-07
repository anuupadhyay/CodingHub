import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Navbar, Nav, NavDropdown, Container, Row} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {logout} from '../actions/userActions'

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

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
                    <LinkContainer to="/courses">
                            <Nav.Link> Courses</Nav.Link>
                    </LinkContainer>
                   {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/my-courses'>
                                    <NavDropdown.Item>My Courses</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/edit-profile'>
                                    <NavDropdown.Item>Go Premium</NavDropdown.Item>
                                </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                    ) : (
                        <LinkContainer to="/login">
                            <Nav.Link><i className="fas fa-user"></i> Login</Nav.Link>
                        </LinkContainer>
                    )}
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
