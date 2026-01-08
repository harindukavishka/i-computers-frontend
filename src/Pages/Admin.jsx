import { Link, Route, Routes } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
import { BiBox } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineReviews } from "react-icons/md";
import AdminProductPage from "./Admin/AdminProductPage";
import AdminAddProductPage from "./Admin/AdminAddProduct";

export default function AdminPage() {
    return (
        <div className="w-full h-full flex bg-accent">
            <div className="w-[200px] h-full bg-accent flex flex-col text-xl">
                <h1 className="text-2xl border-b-4 m-3 p-3 font-bold">Admin Panel</h1>
                <Link className="flex flex-row items-center w-full p-[10px] gap-3 hover:bg-secondary hover:text-accent transition-colors duration-300" to="/admin/"><FaRegListAlt />Orders</Link>
                <Link className="flex flex-row items-center w-full p-[10px] gap-3 hover:bg-secondary hover:text-accent transition-colors duration-300" to="/admin/products"><BiBox />Products</Link>
                <Link className="flex flex-row items-center w-full p-[10px] gap-3 hover:bg-secondary hover:text-accent transition-colors duration-300" to="/admin/users"><HiOutlineUsers />Users</Link>
                <Link className="flex flex-row items-center w-full p-[10px] gap-3 hover:bg-secondary hover:text-accent transition-colors duration-300" to="/admin/reviews"><MdOutlineReviews />Reviews</Link>
                
            </div>
            <div className="w-[calc(100%-200px)] h-full bg-primary border-accent border-8 rounded-2xl text-400 p-5">
                <Routes>
                    <Route path="/" element={<h1>hi Admin</h1>} />
                    <Route path="/products" element={<AdminProductPage />} />
                    <Route path="/users" element={<h1>users</h1>} />
                    <Route path="/reviews" element={<h1>Reviews</h1>} />
                    <Route path="/addProduct" element={<AdminAddProductPage />} />
                </Routes> 
            </div>
        </div>
    )
}