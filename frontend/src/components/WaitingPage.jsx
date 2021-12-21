import React, { Component } from "react";
import Header from './Header';
import { Container, Row, Col } from "react-bootstrap";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import '../styles/WaitingPage.css'

class WaitingPage extends Component {
    render() {
        return (
            <Container className="fluid" fluid >
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col>
                        <h1 className="mainTittleH1"> Waiting page </h1>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <p className="mainTittleP">
                            A web admin we will grant you access soon to this amazing web. 
                        </p>
                    </Col>
                </Row>

                <Row className="buttonDivContainer">
                    <Col>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Button style={{textTransform: 'capitalize', fontSize: '18px'}} variant="contained" size="large">
                                Back
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default WaitingPage;