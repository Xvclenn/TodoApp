import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid className="mx-5">
                <Navbar.Brand to="/admin" as={Link}>
                    Админ
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link to="/admin/todo" as={Link}>
                            Todos
                        </Nav.Link>
                        {/* <Nav.Link href="#">Ангилал</Nav.Link> */}
                        {/* <NavDropdown title="Мэдээ" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">
                                Мэдээ
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Сэтгэгдэл
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Шинэ Мэдээ
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Link to="/admin/list" as={Link}>
                            Ангилал
                        </Nav.Link>
                    </Nav>
                    <Button variant="light">Гарах</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
