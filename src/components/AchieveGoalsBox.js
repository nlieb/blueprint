/**
 * Created by James on 2017-10-08.
 */

import React from "react";
import { Row, Col, Button } from 'react-bootstrap';

const strAchieve = "\"Achieve your goals\"";

const lightBlue = "rgba(43,132,234, 0.67)";
const darkBlue = "rgba(0, 56, 158, 0.86)";
const transparent = "rgba(0,0,0,0)";

const AchieveGoalsBox = (props) => {
    return (
        <Row className="info-row" style={{ marginTop: "calc(64px + 2em)", marginBottom: "2em", padding: "1em 4em", backgroundColor: darkBlue }}>
            <Col xs={12} md={8}>
                <Row style={{ marginBottom: "6%"}}>
                    <h1 style={{color: "#fff",  fontStyle: "italic" }}>{strAchieve}</h1>
                </Row>
                <Row>
                    <Col md={6}>
                        <Button bsStyle="primary" bsSize="large" style={{backgroundColor: transparent, borderColor: "#fff"}} block>Join Our Waitlist</Button>
                    </Col>
                    <Col md={6}>
                        <div>
                            <Button bsStyle="primary" bsSize="large" style={{backgroundColor: transparent, borderColor: "#fff" }} block>Watch Video</Button><br/>
                            <p style={{ color: "#fff", width: "100%", textAlign: "center", fontStyle: "italic"}}>To learn more about our fiduciary standard</p>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col xs={0} md={2} mdOffset={2} style={{ paddingTop: 10, paddingBottom: 10 }}>
                <img width="101" height="175" src={require("../assets/piggy_bank.png")} alt="Piggy Bank" />
            </Col>
        </Row>
    );
};

export default AchieveGoalsBox;