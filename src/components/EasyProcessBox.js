import React from "react";
import { Row, Col, Button } from 'react-bootstrap';

const EasyProcessBox = (props) => {
    return (
        <Row className="info-row" style={{ marginBottom: "2em" }}>
            <Col md={8} mdOffset={2}>
                <h2 style={{ textAlign: 'center', color: '#000' }}>Easy Process</h2>
                <h3 style={{ color: '#000' }}>1.    Help us get to know you</h3>
                <p>Take 3 minutes answer questions that will help us develop your financial plan</p>

                <h3 style={{ color: '#000' }}>2.    Review your blueprint</h3>
                <p>We tell you exactly what to do to achieve your goals</p>

                <h3 style={{ color: '#000' }}>3.    Implement your blueprint</h3>
                <p>We guide you through every step, ensuring the highest quality, lowest cost products saving you money</p>
                <br/>
                <Button bsStyle="primary" bsSize="large" style={{backgroundColor: "#2B84EA"}} block>Get your free financial blueprint today</Button>

            </Col>
        </Row>
    );
};

export default EasyProcessBox;
