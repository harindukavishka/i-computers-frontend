import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { IoClose } from "react-icons/io5"

export default function CheckOutDetailsModal(props){

    const [isVisible,setIsVisible] = useState(false)
    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")
    const[addressLine1,setAddressLine1] = useState("")
    const[addressLine2,setAddressLine2] = useState("")
    const[city,setCity] = useState("")
    const[zipCode,setZipCode] = useState("")
    const[phoneNo,setPhoneNo] = useState("")

    const cart = props.cart

     async function placeOrder(){

        const token = localStorage.getItem("token")

        if(token==null){
            toast.error("You must be Login first")
            window.location.href = "/login"
            return
        }


        const order = {
            firstName:firstName,
            lastName:lastName,
            addressLine1:addressLine1,
            addressLine2:addressLine2,
            city:city,
            zipCode:zipCode,
            country:"Sri Lanka",
            phoneNo:phoneNo,
            items:[]
            
        }



        cart.forEach((item)=>{
            order.items.push({
                qty:item.qty,
                productId:item.product.productId
            })
        })

        console.log(order)

        try{
            await axios.post(import.meta.env.VITE_API_URL+"/orders",order,{
                headers:{
                    authorization: `Bearer ${token}`
                }
            })
            toast.success("Order Placed Successfully")
            window.location.href="/"

        }catch(err){
            toast.error(err?.response?.data?.message || "Order Placing Failed")
            return
        }
    }

    return(
        <>
        <button onClick={()=>{setIsVisible(true)}} className="w-[200px] h-[50px] flex justify-center items-center absolute left-5 rounded-full text-yellow border border-yellow hover:border-none hover:bg-yellow/30 uppercase tracking-[5px] transition-all duration-300">Place Order</button>
        { isVisible && <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-bgDark/70 z-100">

            <div className="mt-[110px] h-[580px] mb-[10px] w-[900px] bg-bg rounded-[40px]">
                <div>
                    <div className="w-full h-[100px]  rounded-tl-[40px] pl-3 pb-3 border-b-2 border-b-accent bg-bgDark hover:bg-accent sticky top-0 left-0 transition-all duration-300">
                        <button onClick={()=>{setIsVisible(false)}} className="flex justify-center items-center w-[40px] h-[40px] rounded-bl-[20px] text-text text-[25px] bg-accent font-bold absolute cursor-pointer right-0 hover:bg-text hover:text-accent taransition-all duration-300"><IoClose /></button>
                        <div className="flex flex-row items-center gap-4">
                            <h1 className="text-[40px]  font-bold text-text">Checkout Form</h1>
                        </div>
                        <p className="text-textMuted text-sm ">You must add delivery information...</p> 
                                                    
                    </div>
                    <div className="flex flex-wrap m-2">
                        <div className=" w-[50%] h-[100px] flex flex-col">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">First Name </label>
                            <input value={firstName} onChange={
                                (e)=>{
                                        setFirstName(e.target.value)
                                }
                            } type="text" placeholder="ex:- Jhon" className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                        <div className=" w-[50%] h-[100px] flex flex-col">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">Last Name </label>
                            <input value={lastName} onChange={
                                (e)=>{
                                        setLastName(e.target.value)
                                }
                            } type="text" placeholder="ex:- Doe" className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                        <div className=" w-[50%] h-[100px] flex flex-col">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">Address Line 1 </label>
                            <input value={addressLine1} onChange={
                                (e)=>{
                                        setAddressLine1(e.target.value)
                                }
                            } type="text" placeholder="ex:- No/114" className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                         <div className=" w-[50%] h-[100px] flex flex-col">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">Address Line 2 </label>
                            <input value={addressLine2} onChange={
                                (e)=>{
                                        setAddressLine2(e.target.value)
                                }
                            } type="text" placeholder="ex:- Kaluwella" className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                         <div className=" w-[50%] h-[100px] flex flex-col">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">City </label>
                            <input value={city} onChange={
                                (e)=>{
                                        setCity(e.target.value)
                                }
                            } type="text" placeholder="ex:- Galle" className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                         <div className=" w-[50%] h-[100px] flex flex-col">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">zip Code </label>
                            <input value={zipCode} onChange={
                                (e)=>{
                                        setZipCode(e.target.value)
                                }
                            } type="text" placeholder="ex:- 9090" className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                        <div className=" w-[100%] h-[100px] flex flex-col">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">Phone No </label>
                            <input value={phoneNo} onChange={
                                (e)=>{
                                        setPhoneNo(e.target.value)
                                }
                            } type="text" placeholder="ex:- 07******" className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                        
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={placeOrder} className="w-[250px] h-[50px] flex justify-center items-center  rounded-full text-yellow border border-yellow hover:border-none hover:bg-yellow/30 uppercase tracking-[5px] transition-all duration-300">
                            Confirm order
                        </button>
                    </div>
                </div>

            </div>

        </div>}
        </>
    )
}