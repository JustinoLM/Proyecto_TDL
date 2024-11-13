import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import awsExport from '../../aws-exports.js'
Amplify.configure(awsExport);

const client = generateClient();

// Datos de ejemplo de tareas
const initialTasks = [
    {
        title: 'Reunión con cliente',
        user: 'Juan Pérez',
        dueDate: '2024-11-15',
    },
    {
        title: 'Revisión de código',
        user: 'Ana Gómez',
        dueDate: '2024-11-16',
    },
    {
        title: 'Presentación final',
        user: 'Luis Martínez',
        dueDate: '2024-11-20',
    },
];

function Tareas() {
    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState({
        title: '',
        user: '',
        dueDate: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask((prevTask) => ({
            ...prevTask,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.title && newTask.user && newTask.dueDate) {
            setTasks((prevTasks) => [
                ...prevTasks,
                {
                    title: newTask.title,
                    user: newTask.user,
                    dueDate: newTask.dueDate,
                },
            ]);
            setNewTask({ title: '', user: '', dueDate: '' }); // Limpiar formulario después de enviar
        }
    };

    const handleDeleteTask = (taskIndex) => {
        setTasks((prevTasks) => prevTasks.filter((_, index) => index !== taskIndex));
    };

    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Tareas</h1></Col>
            </Row>

            {/* Formulario para agregar nueva tarea */}
            <Row>
                <Col className="px-2 my-2">
                    <h3>Agregar nueva tarea</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUser">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                name="user"
                                value={newTask.user}
                                onChange={handleInputChange}
                                placeholder="Nombre del usuario"
                            />
                        </Form.Group>

                        <Form.Group controlId="formTitle">
                            <Form.Label>Título de la tarea</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={newTask.title}
                                onChange={handleInputChange}
                                placeholder="Título de la tarea"
                            />
                        </Form.Group>

                        <Form.Group controlId="formDueDate">
                            <Form.Label>Fecha límite</Form.Label>
                            <Form.Control
                                type="date"
                                name="dueDate"
                                value={newTask.dueDate}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Guardar tarea
                        </Button>
                    </Form>
                </Col>
            </Row>

            {/* Mostrar las tareas */}
            <Row>
                {tasks.map((task, indx) => (
                    <Col className="px-2 my-2" key={indx}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{task.title}</Card.Title>
                                <Card.Text>
                                    <strong>Asignado por:</strong> {task.user}
                                    <br />
                                    <strong>Fecha límite:</strong> {task.dueDate}
                                </Card.Text>
                                {/* Botón para borrar tarea */}
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleDeleteTask(indx)}>
                                    Borrar tarea
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Tareas;
