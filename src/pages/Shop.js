import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import BrandBar2 from "../components/BrandBar2";

const Shop = () => {
    return (
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar />
                    <BrandBar2 />
                </Col>
                <Col md={9}>
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;