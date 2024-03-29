import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup, ListGroupItem} from "react-bootstrap";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            <ListGroupItem disabled={true} className="fw-light">Тип:</ListGroupItem>
            {device.types.map(type =>
                <ListGroup.Item action variant="light"
                    style={{cursor: "pointer"}}
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;