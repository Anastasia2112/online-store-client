import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import image from '../assets/iphone-12-pro.png';
import star96 from '../assets/star96.png';
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";

const DevicePage = () => {

    const [device, setDevice] = useState({info: []});
    const {id} = useParams();
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    // const device = {id: 1, name: 'IPhone 12 PRO', price: 150000, rating: 5, img: '../assets/iphone-12-pro.png'}
    // const description = [
    //     {id: 1, title: 'Оперативная память', desc: '5 ГБ'},
    //     {id: 2, title: 'Камера', desc: '12 МП'},
    //     {id: 3, title: 'Процессор', desc: 'Пентиум 3'},
    //     {id: 4, title: 'Кол-во ядер', desc: '2'},
    //     {id: 5, title: 'Аккумулятор', desc: '4000'},
    // ]

    return (
        <Container className="mt-4">
            <h2>{device.name}</h2>
            <Row  className="mt-4">
                <Col md={4}>
                    <Image width={300} src={process.env.REACT_APP_API_URL + device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${star96}) no-repeat center center`, width: 96, height: 96, backgroundSize: 'cover', fontSize: 32}}
                        >
                            {device.rating}
                        </div>
                        <Card style={{width: 300, height: 180}} className="mt-4">
                            <Card.Body className="d-flex flex-column justify-content-sm-around align-items-center">
                                <h3>$ {device.price}</h3>
                                <Button variant="dark">В КОРЗИНУ</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
                <Col md={4}>
                    <h4>Характеристики:</h4>
                    <ListGroup variant="flush" className="mt-4">
                        {device.info.map(item =>
                            <ListGroup.Item key={item.id} action variant="light">
                                {item.title}: {item.desc}
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;