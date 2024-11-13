import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav() {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand><Nav.Link href="/">To-Do List</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-md-auto">
                        <Nav.Link href='/login'>Iniciar Sesion</Nav.Link> 
                        <Nav.Link href='/register'>Registrarse</Nav.Link> 

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
)
}

export default SiteNav;