import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import ProductCard from "../components/productCard"
import LoadingAnimation from "../components/loadingAnimation"

export default function ProductPageContent() {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [searchQuery,setSearchQuery] = useState("")

    useEffect(()=>{

        if(loading){

            let url = import.meta.env.VITE_API_URL+"/product";

            if(searchQuery!=""){
                url = import.meta.env.VITE_API_URL+"/product/search/"+searchQuery
            }

            axios.get(url)
            .then(
                (response)=>{
                    setProducts(response.data)
                    setLoading(false)
                }
            ).catch(
                ()=>{
                toast.error("Faild to fetch Products. Try again")
                setLoading(false)
                }
            )
        }

    },[loading])

    return (
        
        <div className="w-full h-full flex justify-center items-center relative flex-wrap mt-[50px] ">

            {loading && <LoadingAnimation />}

            <div className="flex items-center justify-center w-[650px] h-[60px] fixed top-20 z-99 backdrop-blur-lg rounded-full p-2 gap-3">
                <input type="text" placeholder="Search products in here..." className="w-[400px] h-[50px] rounded-full  outline-none border border-text p-5 text-text" 
                onChange={(e)=>{
                    setSearchQuery(e.target.value);
                    setLoading(true)
                    }}
                />
                <button className="border border-accent w-[150px] h-[50px] text-accent rounded-full cursor-pointer hover:bg-accent/45 hover:text-accent transition-all duration-500 "
                onClick={
                    ()=>{
                        setSearchQuery("")
                        setLoading(true)
                    }
                }>
                    Get all products
                </button>
            </div>

            {
                products.map(
                    (item)=>{
                        return(
                        <ProductCard key={item.productId} product={item} />
                        )
                    }
                )
            }
        </div>
    )
}

