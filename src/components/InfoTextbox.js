import React from "react";
import { Row, Col } from 'react-bootstrap';

const BlueprintInfoTextbox = (props) => {
    return (
        <Row className="info-row" style={{ marginTop: "2em", marginBottom: "2em" }}>
            <Col md={8} mdOffset={2}>
                <h2>See How Much You Can Save...</h2>
                <br/>
                <p>When you invest $25,000 in an average big bank mutual fund you pay $550 - $625 per year in fees.
                If you were to invest that same $25,000 with us, you'd pay between $175 - $250 per year in fees depending on portfolio.
                Fees have a big impact on your investment portfolio, consider an investor with a $100,000 portfolio. 
                A typical mutual fund charges 2.2%, while a Blueprint client would pay an annual management fee of 0.50% plus (depending on portfolio) 0.25% in ETF management fees. What will you do with all that extra money?</p>
                <h2>Get Started</h2>
                <br/>
                <p>Invest in RRSPs, TFSAs, RESPs and more all online thru blueprint, whether you have $1000 or $100,000!
                <br/>
                Open an Account today! It takes under 10 minutes!  Have Questions? Chat with a Financial Advisor
                </p>
                <a>Have Questions? Chat with a Financial Advisor</a>
                <br/>
                <br/>
                <ul style={{ listStyleType: 'none' }}>
                    <li>Step 1: Help us get to know you by telling us about your goals</li>
                    <li>Step 2: We recommend you an investment portfolio based on your goals and help you open your accounts</li>
                    <li>Step 3: We take care of the rest! You can track your progress online via the web or mobile app anytime, anywhere</li>
                </ul>
            </Col>
        </Row>
    );
};

export default BlueprintInfoTextbox;
