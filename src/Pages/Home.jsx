import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductPageContent from "./ProductPageContent";
import Overview from "./overView";

export default function HomePage() {
    return (
        <div className="w-full h-full">
            <Header>

            </Header>
            <Routes>
                <Route path="/" element={<div>Home Page Content</div>} />
                <Route path="/about" element={<div>About Page Content</div>} />
                <Route path="/contact" element={<div>Contact Page Content</div>} />
                <Route path="/Products" element={<ProductPageContent />} />
                <Route path="/overview/:productId" element={<Overview />} />
                <Route path="/*" element={<div>404 Not Found!</div>} />
            </Routes>
        </div>
    )
}