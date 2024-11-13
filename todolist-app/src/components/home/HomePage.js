import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

function Homepage(){
    return (
        <Container>
            <Container>
             <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image 
                        src="/img/logo.png" 
                        fluid  />
                </Col>
                <Col sm={6}>
                    <h1 className="font-weight-light">To-Do List</h1>
                    <p className="mt-4">
                        To-Do List App
                        <br /><br />
                        Su página colaborativa favorita para realizar trabajos en grupo en línea.
                        Organice sus tareas de manera sencilla, asignando responsabilidades y estableciendo fechas límite.<br></br>
                        Mantenga a su equipo sincronizado con notificaciones en tiempo real y una visualización clara del progreso. 
                        ¡Nunca más perderá de vista una tarea importante! Colabore, priorice y gestione proyectos con facilidad desde cualquier lugar.
    <br /><br />                    </p>
                    <Button variant="outline-primary">Ver tareas &gt;&gt;</Button>

                </Col>
             </Row>
        </Container>

        </Container>
    )
}
export default Homepage