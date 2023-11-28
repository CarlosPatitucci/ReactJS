import React, { useState } from "react";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { ProductsData } from "../data/productsData";

const Item = ({setCartCounter, cartCounter}) => {
    const [itemCounter, setItemCounter] = useState(1);
    const { id } = useParams();

    const productFiltered = ProductsData.filter(
        (product) => product.id === parseInt(id)
    );

    return <ItemDetailContainer product={productFiltered[0]} cartCounter={cartCounter} setCartCounter={setCartCounter} itemCounter={itemCounter} setItemCounter={setItemCounter} />;
};

export default Item;