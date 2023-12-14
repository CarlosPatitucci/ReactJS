import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProduct } from "../../hooks/useProducts";
import { LoaderComponent } from "../LoaderComponent/LoaderComponent";
import { ItemQuantitySelector } from "../ItemQuantitySelector/ItemQuantitySelector";



const ItemDetailContainer = () => {
    
    const params = useParams();
    const { product, loading, error } =  getProduct(params.id);
    
    if (!product) {
        return (
            <LoaderComponent />
        )
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
                <ItemQuantitySelector />
            </Card>
        </div>
    );
};

export default ItemDetailContainer;