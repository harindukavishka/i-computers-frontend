import { useState } from "react"
import priceFormatted from "../Utility/priceFormated"
import { cartTotalPrice } from "../Utility/cart"
import { useLocation, useNavigate } from "react-router-dom"
import { FaMinus, FaPlus } from "react-icons/fa"
// import axios from "axios"
import CheckOutDetailsModal from "../components/chechoutDetailsModal"

export default function CheckOut() {

    const location = useLocation()
    const [cart,setCart] = useState(location.state || [])
    const navigate = useNavigate()


    if(location.state==null){
        navigate("/products")
    }


    return (
        <div className="w-screen h-[calc(100vh-100px)] overflow-y-scroll hide-scroll-track ">
            <div className="flex flex-col justify-center items-center ">
                {
                    cart.map(
                        (cartItem,index)=>{
                            return (
                                <div className="flex justify-center items-center flex-col mt-5 mb-5 ">
                                    <div key={index} className="w-[410px] lg:w-[600px] h-[120px] bg-bgDark flex flex-row  rounded-lg shadow-[130px]">
                                        <img className="h-[90px] lg:h-[120px] aspect-square" src={cartItem.product.images} alt={cartItem.product.name} />
                                        <div className="w-[180px] lg:w-[280px] h-full p-3 ml-5 flex flex-col justify-between ">
                                            <span className="text-xs text-textMuted">{cartItem.product.productId}</span>
                                            <h1 className="text-lg lg:text-2xl">{cartItem.product.name}</h1>
                                            <div className="w-[150px] h-[25px] rounded-full flex ">
                                                <button onClick={
                                                    ()=>{
                                                        const newCart = [...cart]
                                                        newCart[index].qty=newCart[index].qty-1
                                                        if(newCart[index].qty<=0){
                                                            newCart.splice(index,1)   
                                                        }
                                                        setCart(newCart)
                                                    }
                                                } className="w-[45px] lg:w-[50px] h-full rounded-l-full flex justify-center items-center text-[15px]  text-red cursor-pointer border border-red hover:bg-red/30 hover:border-none transition-all duration-300"><FaMinus /></button>
                                                <span className="w-[50px] h-full text-[20px]  flex justify-center items-center">{cartItem.qty}</span>
                                                <button onClick={
                                                    ()=>{
                                                        const newCart = [...cart]
                                                        newCart[index].qty = newCart[index].qty+1
                                                        setCart(newCart)
                                                    }
                                                } className="w-[45px] lg:w-[50px] h-full rounded-r-full flex justify-center items-center text-[15px] cursor-pointer text-green border border-green hover:bg-green/30 hover:border-none transition-all duration-300"><FaPlus /></button>
                                            </div>
                                        </div>
                                        <div className="w-[140px] lg:w-[200px] h-full flex flex-col justify-center items-end pr-2">
                                            { cartItem.product.labledPrice > cartItem.product.price &&
                                                <span className="text-[12px] lg:text-[15px] text-red line-through">{priceFormatted(cartItem.product.labledPrice)}</span>
                                            }
                                            <span className="text-[12px] lg:text-[15px] text-textMuted">{priceFormatted(cartItem.product.price)}</span>
                                            <span className="text-[17px] lg:text-[22px] text-text">{priceFormatted(cartItem.product.price*cartItem.qty)}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
                <div className="w-[410px] lg:w-[600px] h-[100px] sticky bottom-0 flex flex-row items-center gap-4 border-t-2 border-t-accent bg-bg rounded-lg">
                    <CheckOutDetailsModal cart={cart} />
                    <span className="text-lg lg:text-2xl font-bold absolute right-5 ">{priceFormatted(cartTotalPrice(cart))}</span>
                </div>
            </div>
        </div>
    )
}
