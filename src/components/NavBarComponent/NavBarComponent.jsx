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


import { Link } from "react-router-dom";
import { ProductsData } from "../../data/productsData";

const NavBarComponent = () => {

    return (
        <Navbar expand="lg" className="fondo">
            <Container>
                <Navbar.Brand>
                    <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                        <img
                            src={logo}
                            width="75"
                            height="75"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            {ProductsData.map((product) => {
                                return (
                                    <NavDropdown.Item key={product.id}>
                                        <Link
                                            to={`/category/${product.categoria}`}
                                            style={{ textDecoration: "none", color: "black" }}
                                        >
                                            {product.categoria}
                                        </Link>
                                    </NavDropdown.Item>
                                );
                            })}
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