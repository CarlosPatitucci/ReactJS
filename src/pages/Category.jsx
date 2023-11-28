import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import { getFilteredProducts } from "../hooks/useProducts";

const Category = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const params = useParams()

    useEffect(() => {
        getFilteredProducts(params.categoryId).then((e) => setFilteredProducts(e));
    }, [params.categoryId]);

    if (filteredProducts.length == 0) {
        return (
            <LoaderComponent />
        )
    }

    return <ItemListContainer products={filteredProducts} />;
};

export default Category;