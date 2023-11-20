import React from "react";
import { Card } from "react-bootstrap";

const ItemDetailContainer = ({ product }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100vw",
                justifyContent: "space-around",
            }}
        >
            <Card
                key={product.id}
                style={{border: "5px solid black", width: "350px", margin: 20, height: "550px" , backgroundColor: "black", color: "white"}}
            >
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title style={{ fontSize: "25px", bond: "700"}}>{product.nombre}</Card.Title>
                    <Card.Text>{product.descripcion}</Card.Text>
                    <Card.Text style={{ fontSize: "25px", bond: "700"}}>{product.precio}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetailContainer;