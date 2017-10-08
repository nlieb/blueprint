import React from "react";
import { Row, Col, Button } from 'react-bootstrap';

const darkBlue = "rgba(0, 56, 158, 0.86)";
const transparent = "rgba(0,0,0,0)";

const BuildWealthBox = (props) => {
    return (
        <Row style={{ backgroundColor: darkBlue }}>
            <Col>
                <h2 style={{ textAlign: 'center', color: "#fff" }}>Build Wealth | Protect yourself & family | Save on Mortgage costs</h2>
                <h4 style={{ textAlign: 'center', color: "#fff" }}>
                    <br/>
                    It’s all in your blueprint<br/><br/>
                    We build you a plan for life-long financial security<br/><br/>
                </h4>
                <div style={{textAlign: 'center'}}>
                    <Button bsStyle="primary" bsSize="large" style={{backgroundColor: transparent, marginBottom: "1em", borderColor: "#fff"}}>Learn more about blueprint</Button>
                </div>
            </Col>
        </Row>
    );
};

export default BuildWealthBox;
