import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import ProductCard from "../components/productCard"
import LoadingAnimation from "../components/loadingAnimation"

export default function ProductPageContent() {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{

        if(loading){
            axios.get(import.meta.env.VITE_API_URL+"/product")
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
        
        <div className="bg-gradient-to-b from-secondary/50 to-secondary/5 flex justify-center items-center flex-wrap">

            {loading && <LoadingAnimation />}
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

