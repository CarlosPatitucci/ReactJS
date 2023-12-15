import React from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'

export const AddItemButton = ({ label = "Agregar al carrito", quantity, handleResetQuantity }) => {

    const { itemCount, setItemCount } = React.useContext(CartContext);

    const handleAddCart = () => {
        setItemCount(itemCount + quantity);
        handleResetQuantity();
    }

    return (
        <Button onClick={handleAddCart} style={{ backgroundColor: "#911f27", border: "solid 1px white",  margin: '30px 0', fontSize: '20px' }}>{label}</Button>
    )
}