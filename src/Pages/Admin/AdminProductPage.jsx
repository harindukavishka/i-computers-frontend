import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProductPage(){
    return(
        <div className="w-full h-full overflow-y-scroll">
            <h1>Products</h1>

            <Link to="/admin/addProduct" className=" bg-accent w-[50px] h-[50px] flex justify-center items-center text-2xl rounded-[20px] hover:rounded-full hover:bg-secondary hover:text-accent transition-all duration-400 fixed bottom-12 right-16"><FaPlus /></Link>

        </div>
    )
}