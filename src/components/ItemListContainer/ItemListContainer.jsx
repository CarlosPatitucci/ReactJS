import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemListContainer = ({ products }) => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100vw",
                justifyContent: "space-around",
            }}
        >
            {products.map((product) => {
                return (
                    <Card
                        key={product.id}
                        style={{border: "5px solid black", width: "350px", margin: 20, height: "550px" , backgroundColor: "black", color: "white"}}
                        >
                        <Link to={`/item/${product.id}`}>
                            <Card.Img variant="top" src={product.img}/>
                        </Link>
                        <Card.Body>
                            <Card.Title style={{ fontSize: "25px", bond: "700"}}>{product.nombre}</Card.Title>
                            <Card.Text>{product.descripcion}</Card.Text>
                            <Card.Text style={{ fontSize: "25px", bond: "700"}}>{`$${product.precio}`}</Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default ItemListContainer;