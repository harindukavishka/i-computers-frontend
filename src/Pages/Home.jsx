import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPageContent from "./ProductPageContent";
import Overview from "./overView";
import Cart from "./cart";
import CheckOut from "./checkOut";
import MyOrdersPage from "./myOrder";
import Settings from "./settings";
import HomePageContent from "./Homepage";
import AboutPage from "./About";
import ContactPage from "./Contact";

export default function HomePage() {
    
    return (
        <div className="w-full h-full relative overflow-x-hidden overflow-y-scroll hide-scroll-track">
            <Header>

            </Header>
            <Routes>
                <Route path="/" element={<HomePageContent />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/Products" element={<ProductPageContent />} />
                <Route path="/checkOut" element={<CheckOut />} />
                <Route path="/my-orders" element={<MyOrdersPage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/overview/:productId" element={<Overview />} />
                <Route path="/*" element={<div>404 Not Found!</div>} />
            </Routes>
            <div className="hidden lg:flex">
                <Cart />
            </div>
        </div>
    )
}