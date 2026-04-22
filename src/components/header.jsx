import { MdOutlineAlignHorizontalLeft, MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import UserData from "./userData";
import { FaAnglesLeft } from "react-icons/fa6";
import { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import UserDataForResponsive from "./userDataForResponsive";
import { IoHome } from "react-icons/io5";
import Cart from "../Pages/cart";

export default function Header(){

    const [isOpen, setIsOpen] = useState(false)

    return(
        <header className="backdrop-blur-xl w-full h-[100px] flex justify-center items-center rounded-b-3xl border-b-2 border-b-accent sticky top-0 z-50 hover:bg-accent transition-all duration-200">
            <MdOutlineAlignHorizontalLeft className="absolute left-5 flex lg:hidden text-2xl hover:text-accent transition-all duration-200" onClick={()=>{setIsOpen(true)}} />
            <img src="logo.png" alt="logo" className="h-[90px] w-[110px] lg:absolute lg:left-5 "/>
            <div className="h-full hidden  lg:flex justify-center items-center">
                <Link to="/" className="w-[80px] h-[35px] py-1 text-center rounded-full text-text mx-4 hover:text-bgDark hover:border-b-2  transition-all duration-300">Home</Link>
                <Link to="/products" className="w-[80px] h-[35px] py-1 text-center rounded-full text-text mx-4 hover:text-bgDark hover:border-b-2 transition-all duration-200">Products</Link>
                <Link to="/about" className="w-[80px] h-[35px] py-1 text-center rounded-full text-text mx-4 hover:text-bgDark hover:border-b-2 transition-all duration-200">About     </Link>
                <Link to="/contact" className="w-[80px] h-[35px] py-1 text-center rounded-full text-text mx-4 hover:text-bgDark hover:border-b-2  transition-all duration-200">Contact</Link>
            </div>
            <div className="w-[300px] h-full absolute right-5 hidden lg:flex justify-center items-center">
                <UserData/>
            </div>

            {isOpen && <div className="fixed top-0 left-0 flex lg:hidden bg-bgDark/60 w-full h-screen z-50">
                <div className="w-[300px] h-screen flex flex-col items-start justify-between bg-bgLight rounded-r-[40px] p-5">
                    <div className="flex items-center justify-between h-[115px] w-full border-b border-accent">
                        <img src="logo.png" alt="logo" className="h-[110px] w-[110px] "/>
                        <FaAnglesLeft className="text-2xl hover:text-accent transition-all duration-200" onClick={()=>{setIsOpen(false)}} />
                    </div>
                    <div className="mt-5 flex flex-col items-start justify-center gap-3">
                        <a href="/" className=" text-xl mb-5 hover:ml-3 hover:text-accent font-bold cursor-pointer transition-all duration-300"> Home</a>
                        <a href="/products" className="text-xl mb-5 hover:ml-3 hover:text-accent font-bold cursor-pointer transition-all duration-300">Products</a>
                        <a href="/about" className="text-xl mb-5 hover:ml-3 hover:text-accent font-bold cursor-pointer transition-all duration-300">About </a>
                        <a href="/contact" className="text-xl mb-5 hover:ml-3 hover:text-accent font-bold cursor-pointer transition-all duration-300">Contact</a>
                        <Cart/>
                    </div>
                    <div className="flex flex-col items-start justify-center w-[250px] h-[300px] border-t border-accent">
                        <UserDataForResponsive className="mt-5"/>
                    </div>
                </div>
            </div>}
        </header>
    ) 
}