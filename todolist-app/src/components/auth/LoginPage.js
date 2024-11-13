import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function LoginPage(){
    return(
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Inicio de Sesion</h1></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" minLength="8" placeholder="Enter Password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">Login &gt;&gt;</Button>&nbsp;                        
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage