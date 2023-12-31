import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import { getAllProducts } from "../hooks/useProducts";



const Home = () => {
    const { products, loading, error } =  getAllProducts();

    if (products.length == 0) {
        return (
            <LoaderComponent />
        )
    }
    return <ItemListContainer products={products} />;
};


export default Home;