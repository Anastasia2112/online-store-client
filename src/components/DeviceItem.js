import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import image from '../assets/iphone-12-pro.png';
import star from '../assets/star.png'
import {useNavigate} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {

    const navigate = useNavigate()

    return (
        <Col
            md={3}
            onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
            style={{cursor: 'pointer'}}
        >
            <Card  className="mb-2">
                <Card.Body>
                    <Card.Img variant="top" src={image} style={{width: '80%', margin: '10%'}}/>
                    <div className="d-flex justify-content-between align-items-center text-black-50">
                        <div>
                            <Card.Text>Brand</Card.Text>
                        </div>
                        <div className="d-flex justify-content-end align-items-center">
                            <Image width={20} height={20} src={star} style={{marginRight: '5px'}}/>
                            <div>{device.rating}</div>
                        </div>
                    </div>
                    <Card.Title
                        style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
                    >
                        {device.name}
                    </Card.Title>
                    <div  className="d-flex justify-content-end align-items-center">
                        <Card.Title>$ {device.price}</Card.Title>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DeviceItem;