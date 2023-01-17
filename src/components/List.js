import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../components/style.css";

export function AdminList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleKeyUp(e) {
        if (e.code === "Enter") {
            handleClose();
        }
    }

    return (
        <Container className="d-flex flex-column align-items-center ">
            <div className="d-flex w-50 mt-5 mb-5 justify-content-between">
                <h1 className="angilal">Ангилал</h1>
                <Button
                    variant="primary"
                    onClick={handleShow}
                    style={{ marginRight: "16px" }}
                    className="btn-light btn-outline-primary align-items-center shadow"
                >
                    Шинэ
                </Button>
            </div>
            {/* __________________________Cards________________________________ */}
            <div className="card w-50 shadow">
                <div className="card-body d-flex align-items-center">
                    Улс Төр
                    <button
                        type="button"
                        className="btn btn-white ms-auto d-flex "
                    >
                        Засах
                    </button>
                </div>
            </div>
            <br />
            {/* ____________________________Cards_____________________________ */}
            <div className="card w-50 shadow">
                <div className="card-body d-flex align-items-center">
                    Нийгэм
                    <button
                        type="button"
                        className="btn btn-white ms-auto d-flex"
                    >
                        Засах
                    </button>
                </div>
            </div>
            <br />
            {/* ___________________________Cards______________________________ */}
            <div className="card w-50 shadow">
                <div className="card-body d-flex align-items-center">
                    Спорт
                    <button
                        type="button"
                        className="btn btn-white ms-auto d-flex"
                    >
                        Засах
                    </button>
                </div>
            </div>
            <br />
            {/* _________________________Modal___________________________ */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="fs-3">Ангилал Нэмэх</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Нэр:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ангилалын Нэр"
                            autoFocus
                            onClick={() => handleKeyUp()}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <Button
                        variant="light"
                        className="btn-outline-danger"
                        onClick={handleClose}
                    >
                        Устгах
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Хадгалах
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
