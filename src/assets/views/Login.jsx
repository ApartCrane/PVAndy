import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Lógica de inicio de sesión...

        // Verifica si el inicio de sesión es exitoso
        if (username === 'user' && password === 'root') {
            // Si es exitoso, redirige a la otra vista
            navigate('/tabventa');
        } else {
            // Si falla, muestra un mensaje de error
            setUsernameError('Usuario incorrecto');
            setPasswordError('Contraseña incorrecta');
        }
    };

    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Col lg={4}>
                    <h3 style={{ color: '#3B5C92', textAlign: 'center', marginBottom: '40px' }}>INICIO SESIÓN</h3>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Form.Text className="text-danger">{usernameError}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Text className="text-danger">{passwordError}</Form.Text>
                        </Form.Group>
                        <div className="d-grid">
                            <Button
                                variant="primary"
                                onClick={handleLogin}
                            >
                                ACCEDER
                            </Button>
                        </div>
                    </Form>
                </Col>
                <Col lg={4} className="d-none d-lg-flex justify-content-center align-items-center" style={{ backgroundColor: '#3B5C92', height: '100vh' }}>
                    <img src="/img/iconic.png" alt="Iconic Management" style={{ height: '200px', width: '200px' }} />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
