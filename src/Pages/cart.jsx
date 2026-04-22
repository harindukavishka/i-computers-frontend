import { useState } from "react"
import { addToCart, cartTotalPrice, getCart } from "../Utility/cart"
import { IoClose } from "react-icons/io5"
import { MdOutlineShoppingCart } from "react-icons/md"
import { FaMinus, FaPlus } from "react-icons/fa"
import priceFormatted from "../Utility/priceFormated"
import { Link } from "react-router-dom"

export default function Cart(){
    const [cart,setCart] = useState(getCart())
    const [isVisible,setIsVisible] = useState(false)

        // useEffect(() => {

        //     if (isVisible) {
        //         document.body.style.overflow = "hidden"
        //     } else {
        //         document.body.style.overflow = "auto"
        //     }

        //     return () => {
        //         document.body.style.overflow = "auto"
        //     }
        // }, [isVisible])

        return(
            <div>
                <div onClick={()=>{setIsVisible(true); setCart(getCart())}} className=" w-[65px] h-[65px] hidden lg:flex justify-center items-center fixed bottom-7 right-7 p-[20px]  rounded-full bg-accent text-[40px] font-bold cursor-pointer" >
                    <MdOutlineShoppingCart />
                </div>
                <div onClick={()=>{setIsVisible(true); setCart(getCart())}} className="text-xl mb-5 lg:hidden flex hover:ml-3 hover:text-accent font-bold cursor-pointer transition-all duration-300" >
                    Cart
                </div>
                
                    <div className={`fixed top-0 left-0 z-[100] w-screen h-screen flex flex-row justify-center items-center transition-all duration-300 ${
                        isVisible 
                        ? "translate-x-0 opacity-100 pointer-events-auto" 
                        : "translate-x-full opacity-0 pointer-events-none"
                    }`}>
                        <div className="w-full lg:w-[630px] h-screen fixed top-0 right-0 lg:rounded-l-[40px] bg-gradient-to-b from-bgDark to-bgLight overflow-y-scroll hide-scroll-track">
                            <div className="w-full h-[100px] border-b-2 border-b-accent rounded-tl-[40px] pl-3 pb-3 bg-bgDark hover:bg-accent sticky top-0 left-0 transition-all duration-300">
                                <button onClick={()=>{setIsVisible(false)}} className="flex justify-center items-center w-[40px] h-[40px] rounded-bl-[20px] text-text text-[25px] bg-accent font-bold absolute cursor-pointer right-0 hover:bg-text hover:text-accent taransition-all duration-300"><IoClose /></button>
                                <div className="flex flex-row items-center gap-4">
                                    <h1 className="fontHeader text-[40px]  font-bold text-text">Cart</h1><MdOutlineShoppingCart className="text-[40px] font-bold text-text" />
                                </div>
                                <p className="fontMuted text-textMuted text-sm ">You can manage your Cart simply in here...</p>
                                
                            </div>
                            {
                                cart.map(
                                    (cartItem,index)=>{
                                        return (
                                            <div className="flex justify-center items-center flex-col mt-3 mb-3 lg:mt-5 lg:mb-5 ">
                                                <div key={index} className="w-[400px] lg:w-[600px] h-[120px] bg-bgDark flex flex-row  rounded-lg shadow-[130px]">
                                                    <img className="p-2 lg:p-0 h-[80px] lg:h-[120px] aspect-square" src={cartItem.product.images} alt={cartItem.product.name} />
                                                    <div className="w-[280px] h-full p-3 ml-5 flex flex-col justify-between ">
                                                        <span className="text-xs text-textMuted">{cartItem.product.productId}</span>
                                                        <h1 className="text-lg lg:text-2xl">{cartItem.product.name}</h1>
                                                        <div className="w-[110px] lg:w-[150px] h-[25px] rounded-full flex ">
                                                            <button onClick={
                                                                ()=>{
                                                                    addToCart(cartItem.product,-1)
                                                                    setCart(getCart())
                                                                }
                                                            } className="w-[50px] h-[20px] lg:h-full rounded-l-full flex justify-center items-center text-[12px] lg:text-[15px]  text-red cursor-pointer border border-red hover:bg-red/30 hover:border-none transition-all duration-300"><FaMinus /></button>
                                                            <span className="w-[50px] h-full text-sm lg:text-[20px]  flex justify-center items-center">{cartItem.qty}</span>
                                                            <button onClick={
                                                                ()=>{
                                                                    addToCart(cartItem.product,1)
                                                                    setCart(getCart())
                                                                }
                                                            } className="w-[50px] h-[20px] lg:h-full rounded-r-full flex justify-center items-center text-[12px] lg:text-[15px] cursor-pointer text-green border border-green hover:bg-green/30 hover:border-none transition-all duration-300"><FaPlus /></button>
                                                        </div>
                                                    </div>
                                                    <div className="w-[200px] h-full flex flex-col mb-7 lg:mb-0 justify-center items-end pr-2">
                                                        { cartItem.product.labledPrice > cartItem.product.price &&
                                                            <span className="text-sm lg:text-[15px] text-red line-through">{priceFormatted(cartItem.product.labledPrice)}</span>
                                                        }
                                                        <span className="text-sm lg:text-[15px] text-textMuted">{priceFormatted(cartItem.product.price)}</span>
                                                        <span className="text-[17px] lg:text-[22px] text-text">{priceFormatted(cartItem.product.price*cartItem.qty)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        <div className="w-full h-[100px] sticky bottom-0 flex flex-row items-center gap-4 border-t-2 border-t-accent bg-bg lg:rounded-bl-[40px]">
                            <Link state={cart} to={"/checkOut"} onClick={()=>{setIsVisible(false)}} className="w-[170px] lg:w-[200px] h-[50px] flex justify-center items-center absolute left-5 rounded-full text-yellow border border-yellow hover:border-none hover:bg-yellow/30 uppercase tracking-[5px] transition-all duration-300">Check Out</Link>
                            <span className="text-xl lg:text-2xl font-bold absolute right-5 ">{priceFormatted(cartTotalPrice(cart))}</span>
                        </div>
                        </div>
                        <div onClick={()=>{setIsVisible(false)}} className="w-[calc(200vw-550px)] h-full "></div>
                    </div>
                
            </div>
        )
        // meka responsive karanna oni
}
