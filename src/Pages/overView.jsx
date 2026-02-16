import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import LoadingAnimation from "../components/loadingAnimation"
import SlideShow from "../components/imageSlideShow"

export default function Overview() {

    const params = useParams()
    const [product,setProduct] = useState(null)

    useEffect(
        ()=>{
        axios.get(import.meta.env.VITE_API_URL+"/product/"+params.productId

        ).then(
            (response)=>{
                console.log(response.data)
                setProduct(response.data)
            }
        ).catch(
            (err)=>{
                console.log(err)
                toast.error("Faild to fetch product details")
            }
        )
        
    },[])

    return (
        <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center text-white">
            
            {
                product==null?<LoadingAnimation/>:
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[50%] h-full"><SlideShow images={product.images}/></div>
                    <div className="w-[50%] h-full"></div>
                </div>
            }

        </div>
    )
}