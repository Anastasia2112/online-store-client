import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import image from '../assets/iphone-12-pro.png';
import star from '../assets/star.png'
import {useNavigate} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";
import cl from './DeviceItem.module.css';

const DeviceItem = ({device}) => {

    const navigate = useNavigate()

    return (
        <Col
            md={3}
            onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
            style={{cursor: 'pointer'}}
        >
            <Card  className="mb-2">
                <Card.Body className="mt-4">
                    <Card.Img variant="top" width={200} height={150} src={process.env.REACT_APP_API_URL + device.img} style={{margin: 'auto'}}/>
                    <div className="d-flex justify-content-between align-items-center text-black-50 mt-4">
                        <div>
                            <Card.Text>Brand</Card.Text>
                        </div>
                        <div className="d-flex justify-content-end align-items-center">
                            <Image width={20} height={20} src={star} style={{marginRight: '5px'}}/>
                            <div>{device.rating}</div>
                        </div>
                    </div>
                    <Card.Title
                        className={cl.cardTitle}
                        // style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
                    >
                        {device.name}
                    </Card.Title>
                    <div  className="d-flex justify-content-end align-items-center">
                        <Card.Title>{device.price} ₽</Card.Title>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DeviceItem;