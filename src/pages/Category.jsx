import React from "react";
import { useParams } from "react-router-dom";
import { getFilteredProducts } from "../hooks/useProducts";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Category = () => {
    const { categoryId } = useParams();
    const { products } = getFilteredProducts("products", categoryId, "categoria");

    if (!products) {
        return (
            <LoaderComponent />
        )
    }

    return <ItemListContainer products={products} />;
};

export default Category;