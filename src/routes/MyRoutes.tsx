import { Route, Routes } from "react-router-dom";
import App from "../App";
import { CartPage } from "./CartPage";
import { ProductsPage } from "./ProductsPage";
import { SavedPage } from "./SavedPage";

export const MyRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<ProductsPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="saved" element={<SavedPage />} />
            </Route>
        </Routes>
    );
};
