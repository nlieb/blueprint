/**
 * Created by James on 2017-10-08.
 */

import React from "react";
import { Row, Col, Button } from 'react-bootstrap';

const strAchieve = "Achieve your goals";

const lightBlue = "rgba(43, 132, 234, 0.67)";
const darkBlue = "rgba(18, 107, 209, 0.86)";
const transparent = "rgba(0,0,0,0)";

const AchieveGoalsBox = (props) => {
    return (
        <Row className="info-row" style={{ marginTop: 64, padding: "4em 0" }}>
            <Col xs={12} md={8}>
                <Row style={{ marginBottom: "10%"}}>
                    <h1 style={{color: "#fff", fontSize: "4em" }}>{strAchieve}</h1>
                    <h4 style={{color: "#fff", fontStyle: "italic" }}>It starts with a financial plan</h4>
                </Row>
                <Row>
                    <Col md={6}>
                        <Button bsStyle="primary" bsSize="large" style={{backgroundColor: transparent, borderColor: "#fff"}} block>Join Our Waitlist</Button>
                    </Col>
                    <Col md={6}>
                        <div>
                            <Button bsStyle="primary" bsSize="large" style={{backgroundColor: transparent, borderColor: "#fff" }} block>Watch Video</Button>
                            <p style={{ color: "#fff", width: "100%", fontSize: "0.9em", textAlign: "center", fontStyle: "italic" }}>To learn more about our fiduciary standard</p>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} md={2} mdOffset={2} style={{ paddingTop: 10, paddingBottom: 10 }}>
                <img width="151" height="263" src={require("../assets/piggy_bank.png")} alt="Piggy Bank" />
            </Col>
        </Row>
    );
};

export default AchieveGoalsBox;