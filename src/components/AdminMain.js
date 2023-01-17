import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export function AdminMain() {
    return (
        <Container className='d-flex flex-column align-items-center'>
            <div className='d-flex w-50 mt-5 mb-5 justify-content-between'>
                <h1>Ангилал</h1>
                <Button
                    style={{ marginRight: '16px' }}
                    className='btn-light btn-outline-primary align-items-center'
                >
                    Шинэ
                </Button>
            </div>
        </Container>
    );
}
