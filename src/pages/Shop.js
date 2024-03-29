import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import BrandBar2 from "../components/BrandBar2";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import data from "bootstrap/js/src/dom/data";

const Shop = observer(() => {

    const {device} = useContext(Context);
    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [])

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
});

export default Shop;