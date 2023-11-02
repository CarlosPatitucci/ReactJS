import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/logo-roulette.png'
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {

    return (
        <Navbar expand="lg" className="fondo">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="75"
                        height="75"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#link">Lo Nuevo</Nav.Link>
                        <Nav.Link href="#link">Calzado</Nav.Link>
                        <Nav.Link href="#link">Indumentaria</Nav.Link>
                        <NavDropdown title="Nuestras Marcas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Abibas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Nique
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Puna</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Busca un Producto"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button className='bg-success' type="submit">Buscar</Button>
                            </Col>
                        </Row>
                    </Form>
                    <CartWidgetComponent />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;