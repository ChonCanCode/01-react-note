import { Form, Stack, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function NoteForm () {
    return (
    <Form>
        <Stack gap={3}>
            <Row>
                <Col>
                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId='tags'>
                        <Form.Label>Tags</Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Col>
            </Row>
        </Stack>
    </Form>
    )
}
