import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="backdrop-blur-xl w-full h-[100px] flex justify-center items-center rounded-b-3xl border-b-2 border-b-accent sticky top-0 z-100 hover:bg-accent transition-all duration-200">
            <img src="WriteLogoWhite.png" alt="logo" className="h-[170px] absolute left-5"/>
            <div className="h-full flex justify-center items-center">
                <Link to="/" className="w-[80px] h-[35px] py-1 text-center rounded-full text-white mx-4 hover:bg-accent/25 hover:text-secondary hover:border-b-2  transition-all duration-300">Home</Link>
                <Link to="/products" className="w-[80px] h-[35px] py-1 text-center rounded-full text-white mx-4 hover:text-secondary hover:border-b-2 transition-all duration-200">Products</Link>
                <Link to="/about" className="w-[80px] h-[35px] py-1 text-center rounded-full text-white mx-4 hover:text-secondary hover:border-b-2 transition-all duration-200">About     </Link>
                <Link to="/contact" className="w-[80px] h-[35px] py-1 text-center rounded-full text-white mx-4 hover:text-secondary hover:border-b-2  transition-all duration-200">Contact</Link>
            </div>
        </header>
    ) 
}