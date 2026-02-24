import { useState } from "react"
import priceFormatted from "../Utility/priceFormated"
import { cartTotalPrice } from "../Utility/cart"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaMinus, FaPlus } from "react-icons/fa"

export default function CheckOut() {

    const location = useLocation()
    const [cart,setCart] = useState(location.state || [])
    const navigate = useNavigate()

    if(location.state.cart==null){
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
                                    <div key={index} className="w-[600px] h-[120px] bg-bgDark flex flex-row  rounded-lg shadow-[130px]">
                                        <img className="h-[120px] aspect-square" src={cartItem.product.images} alt={cartItem.product.name} />
                                        <div className="w-[280px] h-full p-3 ml-5 flex flex-col justify-between ">
                                            <span className="text-xs text-textMuted">{cartItem.product.productId}</span>
                                            <h1 className="text-2xl">{cartItem.product.name}</h1>
                                            <div className="w-[150px] h-[25px] rounded-full flex ">
                                                <button onClick={
                                                    ()=>{
                                                        const newCart = [...cart]
                                                        cartItem.qty=cartItem.qty-1
                                                        if(newCart[index].qty<=0){
                                                            newCart.splice(index,1)   
                                                        }
                                                        setCart([...cart])
                                                    }
                                                } className="w-[50px] h-full rounded-l-full flex justify-center items-center text-[15px]  text-red cursor-pointer border border-red hover:bg-red/30 hover:border-none transition-all duration-300"><FaMinus /></button>
                                                <span className="w-[50px] h-full text-[20px]  flex justify-center items-center">{cartItem.qty}</span>
                                                <button onClick={
                                                    ()=>{
                                                        const newCart = [...cart]
                                                        newCart[index]= newCart[index].qty+1
                                                        setCart(newCart)
                                                    }
                                                } className="w-[50px] h-full rounded-r-full flex justify-center items-center text-[15px] cursor-pointer text-green border border-green hover:bg-green/30 hover:border-none transition-all duration-300"><FaPlus /></button>
                                            </div>
                                        </div>
                                        <div className="w-[200px] h-full flex flex-col justify-center items-end pr-2">
                                            { cartItem.product.labledPrice > cartItem.product.price &&
                                                <span className="text-[15px] text-red line-through">{priceFormatted(cartItem.product.labledPrice)}</span>
                                            }
                                            <span className="text-[15px] text-textMuted">{priceFormatted(cartItem.product.price)}</span>
                                            <span className="text-[22px] text-text">{priceFormatted(cartItem.product.price*cartItem.qty)}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
                <div className="w-[600px] h-[100px] sticky bottom-0 flex flex-row items-center gap-4 border-t-2 border-t-accent bg-bg rounded-lg">
                    <Link state={cart} to="/checkOut" className="w-[200px] h-[50px] flex justify-center items-center absolute left-5 rounded-full text-yellow border border-yellow hover:border-none hover:bg-yellow/30 uppercase tracking-[5px] transition-all duration-300">Buy Now</Link>
                    <span className=" text-2xl font-bold absolute right-5 ">{priceFormatted(cartTotalPrice(cart))}</span>
                </div>
            </div>
        </div>
    )
}