import { useEffect, useState } from "react"
import { getCart } from "../Utility/cart"
import { IoClose } from "react-icons/io5"
import { MdOutlineShoppingCart } from "react-icons/md"
import { TiMinusOutline } from "react-icons/ti"
import { FiMinusCircle } from "react-icons/fi"
import { FaMinus, FaPlus } from "react-icons/fa"

export default function Cart(){
    const [cart,setCart] = useState(getCart())
    const [isVisible,setIsVisible] = useState(false)

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isVisible])

        return(
            <div>
                <div onClick={()=>{setIsVisible(true)}} className=" w-[65px] h-[65px] flex justify-center items-center fixed bottom-7 right-7 p-[20px]  rounded-full bg-accent text-[40px] font-bold cursor-pointer" >
                    <MdOutlineShoppingCart />
                </div>
                { 
                    <div className={`fixed top-0 left-0 z-[100] w-screen h-screen flex flex-row justify-center items-center transform transition-transform duration-400 ease-in-out ${
                            isVisible ? "translate-x-0" : "translate-x-full"
                        }`}>
                        <div className=" w-[630px] h-screen fixed top-0 right-0 rounded-l-[40px] bg-gradient-to-b from-bgDark to-bgLight overflow-y-scroll hide-scroll-track">
                            <div className="w-full h-[100px] border-b-2 border-b-accent rounded-tl-[40px] pl-3 pb-3 bg-bgDark hover:bg-accent sticky top-0 left-0 transition-all duration-300 relative">
                                <button onClick={()=>{setIsVisible(false)}} className="flex justify-center items-center w-[40px] h-[40px] rounded-bl-[20px] text-text text-[25px] bg-accent font-bold absolute cursor-pointer right-0 hover:bg-text hover:text-accent taransition-all duration-300"><IoClose /></button>
                                <img className="absolute top-0 left-2 h-[90px] w-[110px] " src="WriteLogoWhite.png" alt="logo" />
                                {/* <h1 className="text-[40px] pt-2 font-bold text-text ml-[120px] absolute bottom-3">Cart</h1> */}
                                <p className="text-textMuted text-sm ml-[120px] absolute bottom-1">You can manage your Cart simply in here...</p>
                            </div>
                            {
                                cart.map(
                                    (cartItem,index)=>{
                                        return (
                                            <div className="flex justify-center items-center flex-col ">
                                                <div key={index} className="w-[570px] h-[120px] bg-bg flex flex-row mt-5 rounded-lg shadow-2xl">
                                                    <img className="h-[130px] aspect-square" src={cartItem.product.images} alt={cartItem.product.name} />
                                                    <div className="w-[290px] h-full p-3 ml-5 flex flex-col justify-between ">
                                                        <span className="text-xs text-textMuted">{cartItem.product.productId}</span>
                                                        <h1 className="text-2xl">{cartItem.product.name}</h1>
                                                        <div className="w-[150px] h-[25px] rounded-full flex ">
                                                            <button className="w-[50px] h-full rounded-l-full flex justify-center items-center text-[15px]  text-red cursor-pointer border border-red hover:bg-red/30 hover:border-none transition-all duration-300"><FaMinus /></button>
                                                            <span className="w-[50px] h-full text-[20px]  flex justify-center items-center">{cartItem.qty}</span>
                                                            <button className="w-[50px] h-full rounded-r-full flex justify-center items-center text-[15px] cursor-pointer text-green border border-green hover:bg-green/30 hover:border-none transition-all duration-300"><FaPlus /></button>
                                                        </div>
                                                    </div>
                                                    <div className="w-[130px] h-full flex flex-col justify-center">

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div onClick={()=>{setIsVisible(false)}} className="w-[calc(200vw-550px)] h-full "></div>
                    </div>
                }
            </div>
        )
}