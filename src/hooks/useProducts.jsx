import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc, getFirestore, query, where } from "firebase/firestore";



export const getAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const name = "products";
    const db = getFirestore();
    const collectionName = collection(db, name);

    useEffect(() => {
        getDocs(collectionName)
            .then((res) => {
                const data = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(data);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, []);

    return { products, loading, error };
};



export const getProduct = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const name = "products";
        const db = getFirestore();
        const docRef = doc(db, name, id);

        getDoc(docRef)
            .then((res) => {
                setProduct({ id: res.id, ...res.data() });
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));

    }, []);

    return { product, loading, error };
};


export const getFilteredProducts = (collectionName, categoryId, fieldToFilter) => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const db = getFirestore();
        const collectionRef = collection(db, collectionName);

        const categoryQuery = query(collectionRef, where(fieldToFilter, "==", categoryId))

        getDocs(categoryQuery)
            .then((res) => {
                const data = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProducts(data);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));

    }, [categoryId]);

    return { products, loading, error };
};
