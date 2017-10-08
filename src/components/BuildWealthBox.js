import React from "react";
import { Row, Col, Button } from 'react-bootstrap';

const BuildWealthBox = (props) => {
    return (
        <Row className="info-row" style={{ backgroundColor: "#2B84EA"}}>
            <Col>
                <h2 style={{ textAlign: 'center', color: "#fff" }}>Build Wealth | Protect yourself & family | Save on Mortgage costs</h2>
                <h4 style={{ textAlign: 'center', color: "#fff" }}>
                    <br/>
                    It’s all in your blueprint<br/><br/>
                    We build you a plan for life-long financial security<br/><br/>
                </h4>
                <div style={{textAlign: 'center'}}>
                    <Button bsStyle="primary" bsSize="large" style={{backgroundColor: "#2B84EA", marginBottom: "1em", borderColor: "#fff"}}>Learn more about blueprint</Button>
                </div>
            </Col>
        </Row>
    );
};

export default BuildWealthBox;
