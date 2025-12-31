import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-full flex">
            <div className="w-[200px] h-full bg-purple-400 flex flex-col">
                <Link to="/admin/">Home</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/users">Users</Link>
                
            </div>
            <div className="w-[calc(100%-200px)] h-full bg-yellow-400">
                <Routes>
                    <Route path="/" element={<h1>hi Admin</h1>} />
                    <Route path="/products" element={<h1>Products</h1>} />
                    <Route path="/users" element={<h1>users</h1>} />
                </Routes> 
            </div>
        </div>
    )
}