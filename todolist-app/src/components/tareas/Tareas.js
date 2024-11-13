import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Datos de ejemplo de tareas
const tasks = [
    {
        title: 'Reunión con cliente',
        user: 'Juan Pérez',
        dueDate: '2024-11-15',
        image: '/img/contact_1.png', // Imagen representativa
    },
    {
        title: 'Revisión de código',
        user: 'Ana Gómez',
        dueDate: '2024-11-16',
        image: '', // Sin imagen
    },
    {
        title: 'Presentación final',
        user: 'Luis Martínez',
        dueDate: '2024-11-20',
        image: '/img/contact_2.png', // Imagen representativa
    },
];

function Tareas() {
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Tareas</h1></Col>
            </Row>
            <Row>
                {
                    tasks.map((task, indx) => {
                        return (
                            <Col className="px-2 my-2" key={indx}>
                                <Card style={{ width: '18rem' }}>
                                    {/* Mostrar imagen solo si existe */}
                                    {task.image ? (
                                        <Card.Img 
                                            src={task.image} 
                                            variant="top" />
                                    ) : (
                                        <div className="card-img-placeholder" style={{ height: '150px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span>No image</span>
                                        </div>
                                    )}
                                    <Card.Body>
                                        <Card.Title>{task.title}</Card.Title>
                                        <Card.Text>
                                            <strong>Asignado por:</strong> {task.user}
                                            <br />
                                            <strong>Fecha límite:</strong> {task.dueDate}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default Tareas;
