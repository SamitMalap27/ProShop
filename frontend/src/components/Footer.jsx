import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
    const currectYear = new Date().getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col className="text-center py-3">
                    <p>ProShop &copy; {currectYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer