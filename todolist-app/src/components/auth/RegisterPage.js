import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function RegisterPage(){
    return(
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Registrarse</h1></Col>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={6}>
                    <Form>
                    <Form.Group className="mb-3" controlId="CustomUsername">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese usuario" />
                            <Form.Text className='text-muted'>
                                Tu usuario es el nombre visible para los demas en la pagina!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese email" />
                            <Form.Text className='text-muted'>
                                Tu email no se comparte!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password"  minLength="8" placeholder="Enter Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formConfirm">
                            <Form.Label>Confirmar contraseña</Form.Label>
                            <Form.Control type="password"  minLength="8" placeholder="Confirm Password" />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">Registrarse &gt;&gt;</Button>&nbsp;
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage