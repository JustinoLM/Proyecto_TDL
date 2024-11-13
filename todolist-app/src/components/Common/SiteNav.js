import { Amplify } from 'aws-amplify';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';


function SiteNav(props) {
    const handleLogout = () =>{
        props.logOut();
    }
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><Nav.Link href="/">To-Do List</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-md-auto">
                        <Nav.Link onClick={handleLogout}>Cerrar Sesion</Nav.Link> 

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
)
}

export default SiteNav;