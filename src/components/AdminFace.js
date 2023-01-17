import { Container } from "react-bootstrap";

export function AdminFace() {
    return (
        <Container className="d-flex flex-column align-items-center mt-5">
            <h1>HOME</h1>
            <img
                src="windo.jpg"
                alt="windo"
                width="371px"
                height="700px"
                className="border border-5 border-dark"
            />
        </Container>
    );
}
