import { useState } from "react"
import { IoClose } from "react-icons/io5"
import priceFormatted from "../Utility/priceFormated"

export default function ViewOrderInfoModal(props){

    const [isVisible,setIsVisible] = useState(false)

    const order = props.order

    return(
        <>
            <div>
                <button onClick={()=>{setIsVisible(true)}} className="px-4 py-1 cursor-pointer text-green border border-green rounded-full hover:bg-green/40 hover:border-none transition-all duration-300">View Order</button>
            </div>
            {
                isVisible &&(
                    <div className="fixed z-100 top-0 left-0 min-w-full min-h-full bg-bgDark/80 flex justify-center items-center">
                        <div className="w-[450px] h-[650px] bg-bg rounded-[40px] overflow-hidden">
                            <div className="w-full h-[300px] bg-accent rounded-[40px] border-b border-b-text relative">
                                <button onClick={()=>{setIsVisible(false)}} className="flex justify-center items-center w-[40px] h-[40px] rounded-bl-[20px] text-text text-[25px] bg-accent font-bold absolute cursor-pointer right-0 hover:bg-text hover:text-accent taransition-all duration-300"><IoClose /></button>
                                <div className="w-[230px] h-[100px] ml-[110px] flex flex-col justify-center items-center ">
                                    <h1 className="text-2xl font-bold">{order.firstName+" "+order.lastName}</h1>
                                    <span className="text-textMuted">{order.email}</span>
                                    <p className="text-textMuted">{order.phoneNo}</p>
                                </div>
                                
                                <div className="mt-2 px-3 flex justify-between">
                                    <div className="left-3 flex flex-col items-center text-[12px] ">
                                        <h1 className=" font-bold">Shipping Address</h1>
                                        <p className="text-textMuted">{order.addressLine1}</p>
                                        <p className="text-textMuted">{order.addressLine2},{order.city}.</p>
                                        <p className="text-textMuted"></p>
                                        <p className="text-textMuted">{order.zipCode}</p>
                                        <p className="text-textMuted">{order.country}</p>
                                        <p className="text-text">{new Date(order.date).toLocaleDateString()}</p>
                                        <p className="text-text">{new Date(order.date).toLocaleTimeString()}</p>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <p className="font-bold text-[20px]">{order.status}</p>
                                        <h1 className="font-bold text-[18px]">Total: {priceFormatted(order.total)}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[350px] flex flex-col overflow-y-scroll hide-scroll-track overflow-hidden">
                                {
                                    order.items.map((item,index)=>(
                                        <div key={index} className=" p-2 w-full h-[100px] flex flex-row bg-bgLight gap-2 justify-between items-center my-2">
                                            <img src={item.Image} alt="img" className="w-[92px] h-[92px]" />
                                            <div className=" w-[200px] h-full flex flex-col justify-between items-center">
                                                <span className="text-xs text-textMuted">{item.productId}</span>
                                                <h1 className="text-lg">{item.name}</h1>
                                                <p className="text-lg ">Quantity : {item.qty}</p>
                                            </div>
                                            <div className="w-[130px] h-full flex flex-col justify-between items-center">
                                                <p className="line-through text-accent text-[12px]">{priceFormatted(item.labledPrice)}</p>
                                                <p className=" text-lg">{priceFormatted(item.price)}</p>
                                            </div>
                                        </div>
                                    )
                                    )
                                }
                            </div>

                        </div>  
                    </div>
                ) 
            }
        </>
    )
}