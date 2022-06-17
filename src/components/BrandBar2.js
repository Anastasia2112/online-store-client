import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup className="mt-4">
            <ListGroupItem disabled={true} className="fw-light">Бренд:</ListGroupItem>
            {device.brands.map(brand =>
                <ListGroup.Item action variant="light"  //1:39
                    style={{cursor: "pointer"}}
                    active={brand.id === device.selectedBrand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                >
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default BrandBar;