import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPageContent from "./ProductPageContent";
import Overview from "./overView";
import Cart from "./cart";
import CheckOut from "./checkOut";
import MyOrdersPage from "./myOrder";
import Settings from "./settings";

export default function HomePage() {
    return (
        <div className="w-full h-full relative">
            <Header>

            </Header>
            <Routes>
                <Route path="/" element={<div>Home Page Content</div>} />
                <Route path="/about" element={<div>About Page Content</div>} />
                <Route path="/contact" element={<div>Contact Page Content</div>} />
                <Route path="/Products" element={<ProductPageContent />} />
                <Route path="/checkOut" element={<CheckOut />} />
                <Route path="/my-orders" element={<MyOrdersPage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/overview/:productId" element={<Overview />} />
                <Route path="/*" element={<div>404 Not Found!</div>} />
            </Routes>
            <Cart />
        </div>
    )
}