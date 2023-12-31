import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Category from "../pages/Category";
import Item from "../pages/Item";
import { useState } from "react";

const MainRoutes = () => {
    const [cartCounter, setCartCounter] = useState(0);

    return (
        <Router>
            <NavBarComponent cartCounter={cartCounter} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:categoryId" element={<Category />} />
                <Route path="/item/:id" element={<Item cartCounter={cartCounter}  setCartCounter={setCartCounter} />}  />
            </Routes>
        </Router>
    );
};

export default MainRoutes;