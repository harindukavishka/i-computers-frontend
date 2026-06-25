import { Link, Route, Routes } from "react-router-dom";
import { FaRegListAlt } from "react-icons/fa";
import { BiBox } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineReviews } from "react-icons/md";
import AdminProductPage from "./Admin/AdminProductPage";
import AdminAddProductPage from "./Admin/AdminAddProduct";
import AdminUpdateProductPage from "./Admin/AdminUpdateProducts";
import AdminOrdersPage from "./Admin/AdminOrdersPage";
import AdminUsersPage from "./Admin/AdminUsersPage";

export default function AdminPage() {
    return (
        <div className="w-full h-full flex text-text bg-bgDark">
            <div className="w-[230px] h-full bg-bgDark flex flex-col text-xl">
                <div className="flex flex-col items-center justify-center mb-5">
                    <img src="../public/logo.png" alt="Logo" className=" w-[150px] h-[120px] object-fill " />
                    <p className="mb-5 uppercase tracking-[5px] text-textMuted text-[10px]">-Admin Dashboad-</p>
                </div>
                <Link className="text-[16px] flex flex-row items-center w-[200px] p-[10px] m-2  gap-3 rounded-full hover:bg-accent/40 hover:border-2 hover:border-accent transition-all duration-200" to="/admin/"><FaRegListAlt />Orders</Link>
                <Link className="text-[16px] flex flex-row items-center w-[200px] p-[10px] m-2  gap-3 rounded-full hover:bg-accent/40 hover:border-2 hover:border-accent transition-all duration-200" to="/admin/products"><BiBox />Products</Link>
                <Link className="text-[16px] flex flex-row items-center w-[200px] p-[10px] m-2  gap-3 rounded-full hover:bg-accent/40 hover:border-2 hover:border-accent transition-all duration-200" to="/admin/users"><HiOutlineUsers />Users</Link>
                <Link className="text-[16px] flex flex-row items-center w-[200px] p-[10px] m-2  gap-3 rounded-full hover:bg-accent/40 hover:border-2 hover:border-accent transition-all duration-200" to="/admin/reviews"><MdOutlineReviews />Reviews</Link>
                
            </div>
            <div className="w-[calc(100%-200px)] h-full bg-linear-to-b from-bg to-bgDark border-bgDark border-8 rounded-2xl text-400 p-5">
                <Routes>
                    <Route path="/" element={<AdminOrdersPage />} />
                    <Route path="/products" element={<AdminProductPage />} />
                    <Route path="/users" element={<AdminUsersPage />} />
                    <Route path="/reviews" element={<h1>Reviews</h1>} />
                    <Route path="/addProduct" element={<AdminAddProductPage />} />
                    <Route path="/updateProduct" element={<AdminUpdateProductPage />} />
                </Routes> 
            </div>
        </div>
    )
}