// import { ProductsData } from "../data/productsData";

// export const getProduct = (id) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(ProductsData.find((e) => e.id == id));
//         }, 1000);
//     });
// };

// export const getAllProducts = () => {
//     const db = getFirestore();
//     const name = "";
//     const collectionName = collection(db, name);

//     export const getAllProducts = async () => {
//       const q = query(collectionName);
//       try {
//         const res = await getDocs(q);
//         if (res.size > 0) {
//           const a = res.docs.map((e) => ({
//             ...e.data(),
//             id: e.id,
//           }));
//           return a;
//         }
//       } catch (err) {
//         console.log("err:", err);
//       }
//     };
// };

// export const getFilteredProducts = (categoryId) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(ProductsData.filter((product) => product.categoria === categoryId));
//         }, 1000);
//     });
// };
import { ProductsData } from "../data/productsData";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

const db = getFirestore();
const name = "products";
const collectionName = collection(db, name);

export const getAllProducts = async () => {
    
    const q = query(collectionName);
    try {
        const res = await getDocs(q);
        if (res.size > 0) {
            const a = res.docs.map((e) => ({
                ...e.data(),
                id: e.id,
            }));
            return a;
        }
    } catch (err) {
        console.log("err:", err);
    }
};

export const getProduct = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(ProductsData.find((e) => e.id == id));
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