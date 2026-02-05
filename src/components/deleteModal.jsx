import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiTrash } from "react-icons/ci";

export default function DeleteModal(props){

    const [isVissible, setIsVissible] = useState(false)


    const product = props.product
    const setLoading = props.setLoading

    return(
        <div>
            <CiTrash onClick={()=>{setIsVissible(true)}} className="text-red-600 text-xl cursor-pointer" />
            {isVissible && (
                <div className="fixed top-0 left-0 z-100 w-screen h-screen  bg-black/50 flex justify-center items-center">
                    <div className="bg-white w-[400px] h-[400px] relative">
                        <button onClick={()=>{setIsVissible(false)}} className="w-[30px] h-[30px] text-red-600 font-bold absolute cursor-pointer right-0 hover:bg-red-600 hover:text-white">X</button>
                        <h1 className="text-lg p-3 text-center mt-30">Are you sure, you want to delete product with id {product.productId} ?</h1>
                        <div className="flex justify-center items-center gap-4">
                            <button onClick={()=>{

                                const token = localStorage.getItem("token")
                                axios.delete(import.meta.env.VITE_API_URL+"/product/"+product.productId, {
                                    headers : {
                                        "Authorization" : "Bearer "+ token
                                    },
                                }).then(()=>{
                                    toast.success("Product Deleted Successfully")
                                    setIsVissible(false)
                                    setLoading(true)
                                }).catch((err)=>{
                                    toast.error(err?.response?.data?.message || "Product Deletion Failed")
                                    setIsVissible(false)
                                    setLoading(true)
                                });

                            }} className="bg-red-600 text-white font-bold mt-15 rounded-xl w-[90px] h-[40px]">Delete</button>
                            <button onClick={()=>{setIsVissible(false)}} className="bg-gray-500 text-white font-bold mt-15 rounded-xl w-[90px] h-[40px]">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

//1.45.36