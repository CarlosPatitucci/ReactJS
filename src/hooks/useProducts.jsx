import { ProductsData } from "../data/productsData";

export const getProduct = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(ProductsData.find((e) => e.id == id));
        }, 1000);
    });
};

export const getAllProducts = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(ProductsData);
        }, 1000);
    });
};

export const getFilteredProducts = (categoryId) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(ProductsData.filter((product) => product.categoria === categoryId));
        }, 1000);
    });
};
