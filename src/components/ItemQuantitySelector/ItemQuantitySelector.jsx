import React from "react";
import { Button } from "react-bootstrap";
import { AddItemButton } from "../AddItemButton";

export const ItemQuantitySelector = () => {

    const [quantity, setQuantity] = React.useState(1);

    const arr = [
        1, 2
    ]

    const handleAddProduct = () => {
        setQuantity(quantity + 1);
    }

    const handleSubstractProduct = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleResetQuantity = () => {
        setQuantity(1);
    }

    return (
        <div>
            <Button style={{backgroundColor: "#911f27", border: "solid 1px white", margin: '5px'}} onClick={handleSubstractProduct}>-</Button>
            <input style={{textAlign: 'center', color: '#911f27', backgroundColor: 'white'}} type="number" value={quantity} disabled />
            <Button style={{backgroundColor: "#911f27", border: "solid 1px white", margin: '5px'}} onClick={handleAddProduct}>+</Button>
            <AddItemButton quantity={quantity} handleResetQuantity={handleResetQuantity} />
        </div>
    );
};