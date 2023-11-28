import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { getProduct } from "../../hooks/useProducts";

const ItemDetailContainer = ({ cartCounter, setCartCounter, itemCounter, setItemCounter }) => {
    const [product, setProduct] = useState(null);
    const params = useParams();

    useEffect(() => {
        getProduct(params.id).then((e) => setProduct(e));
    }, []);

    const handleCounter = (action) => {
        if (action == "down" && itemCounter >= 1) {
            setItemCounter(itemCounter - 1);
        }
        if (action == "up") {
            setItemCounter(itemCounter + 1);
        }
    };

    const handleAddToCart = () => {
        if (itemCounter > 0) {
            setCartCounter(cartCounter + itemCounter);
            setItemCounter(1);
        }
    };

    if (!product) {
        return (
            <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

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
                style={{
                    border: "5px solid black",
                    width: "350px",
                    margin: 20,
                    height: "700px",
                    backgroundColor: "black",
                    color: "white",
                    alignItems: "center"
                }}
            >
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title style={{ marginTop: "30px", fontSize: "25px", bond: "700" }}>
                        {product.nombre}
                    </Card.Title>
                    <Card.Text>{product.descripcion}</Card.Text>
                    <Card.Text style={{ fontSize: "25px", bond: "700" }}>
                        {`$${product.precio}`}
                    </Card.Text>
                </Card.Body>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",

                }}>
                    <div style={{ background: "#911f27", border: "white 2px solid", borderRadius: "50px", padding: "5px" }} onClick={() => handleCounter("down")}>{"-"}</div>
                    <div style={{ padding: "10px" }}>{itemCounter}</div>
                    <div style={{ background: "#911f27", border: "white 2px solid", borderRadius: "50px", padding: "5px" }} onClick={() => handleCounter("up")}>{"+"}</div>
                </div>

                <div style={{ border: "white 2px solid", borderRadius: "50px", padding: "20px", marginBottom: "30px" }} onClick={() => handleAddToCart()}>Agregar al carro</div>
            </Card>
        </div>
    );
};

export default ItemDetailContainer;
