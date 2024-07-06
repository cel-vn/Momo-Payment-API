import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={3} sm={6}>
                        {
                            /* Column 1 content */
                            <h2>PAYMENT SOLUTIONS</h2>
                        }
                    </Col>
                    <Col md={3} sm={6}>
                        {/* Column 2 content */}
                    </Col>
                    <Col md={3} sm={6}>
                        {/* Column 3 content */}
                    </Col>
                    <Col md={3} sm={6}>
                        {/* Column 4 content */}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
