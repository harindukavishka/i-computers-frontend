import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Link, useParams } from "react-router-dom"
import LoadingAnimation from "../components/loadingAnimation"
import SlideShow from "../components/imageSlideShow"
import { MdVerified } from "react-icons/md"
import priceFormatted from "../Utility/priceFormated"
import { addToCart } from "../Utility/cart"

export default function Overview() {

    const params = useParams()
    const [product,setProduct] = useState(null)

    useEffect(
        ()=>{
        axios.get(import.meta.env.VITE_API_URL+"/product/"+params.productId

        ).then(
            (response)=>{
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
        <div className="w-full h-[calc(100vh-100px)] backdrop-blur-sm flex justify-center items-center text-white">
            
            {
                product==null?<LoadingAnimation/>:
                <div className="w-full h-full flex lg:flex-row flex-col justify-center items-center">
                    <div className="mt-5 lg:mt-0 w-full lg:w-[50%] h-full"><SlideShow price={product.price} labledPrice={product.labledPrice} images={product.images}/></div>
                    <div className=" w-full lg:w-[50%] flex flex-col justify-center h-full p-5">
                        <div className="flex flex-row gap-2">
                            <h1 className="text-2xl lg:text-4xl font-bold">{product.name}</h1>
                            <MdVerified className="text-accent text-2xl mt-1"/>
                        
                        </div>
                        <div className="flex flex-row w-full">
                            {
                                product.altNames.map((altNames,index)=>{
                                    return(
                                        <span key={index} className="fontMuted text-lg lg:text-3xl mb-2 text-textMuted font-medium">| {altNames} </span>
                                    )
                                })
                            }
                        </div>
                        <p className="text-textMuted text-[10px] lg:text-sm">{product.productId}</p>
                        
                        
                        <p className="text-md lg:text-lg font-medium text-textMuted mt-5 ">
                            <span>{product.brand || ""}</span>
                            <span>{product.model || ""}</span>
                        </p>
                        <p className="text-sm lg:text-[17px] mt-5">{product.description}</p>
                        <h1 className="text-2xl lg:text-4xl font-bold mt-5">{priceFormatted(product.price)}</h1>
                        {   product.labledPrice > product.price &&
                            <h2 className="text-xl lg:text-3xl line-through font-bold text-accent ">{priceFormatted(product.labledPrice)}</h2>
                        }
                        <div className="w-full h-[100px] mt-5 flex items-center justify-center lg:justify-start gap-4">
                            <button onClick={
                                ()=>{
                                    addToCart(product,1)
                                    toast.success("Product added to cart")
                                }
                            } className="w-[170px] h-[50px] rounded-full text-[15px] font-semibold cursor-pointer text-yellow border border-yellow hover:bg-yellow/50 hover:border-none transition-all duration-200">Add to cart</button>
                            <Link to="/checkout" state={[{
                                product:{
                                        productId:product.productId,
                                        name:product.name,
                                        price:product.price,
                                        labledPrice:product.labledPrice,
                                        images:product.images[1]
                                    },
                                qty:1
                            }]} className="w-[170px] h-[50px] text-[15px] flex justify-center items-center font-semibold rounded-full cursor-pointer text-green border border-green hover:bg-green/50 hover:border-none transition-all duration-200">Buy now</Link>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}