import React from 'react';
import { Container, Nav, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBox, faClipboardList, faUsers, faMoneyBillAlt, faChartBar } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    return (
        <Container fluid>
            <div className="col">
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link href="#tabVenta" active>
                            <FontAwesomeIcon icon={faShoppingCart} /> Venta
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#tabProductos">
                            <FontAwesomeIcon icon={faBox} /> Productos
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#tabInventario">
                            <FontAwesomeIcon icon={faClipboardList} /> Inventario
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#tabProveedores">
                            <FontAwesomeIcon icon={faUsers} /> Proveedores
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#tabClientes">
                            <FontAwesomeIcon icon={faUsers} /> Clientes
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#tabCorte">
                            <FontAwesomeIcon icon={faMoneyBillAlt} /> Corte
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#tabReportes">
                            <FontAwesomeIcon icon={faChartBar} /> Reportes
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    {/* Contenido de las pestañas */}
                </Tab.Content>
            </div>
        </Container>
    );
};

export default App;
