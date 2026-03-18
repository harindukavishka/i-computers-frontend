import axios from "axios";
import { useEffect, useState } from "react";
import LoadingAnimation from "../../components/loadingAnimation";
import priceFormatted from "../../Utility/priceFormated";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import toast from "react-hot-toast";
import ViewOrderInfoModal from "../../components/viewOrderInfoModal";

export default function AdminOrdersPage() {

    const[orders, setOrders] = useState([]);
    const[pageNumber, setPageNumber] = useState(1);
    const[pageSize, setPageSize] = useState(10);
    const[totalPages, setTotalPages] = useState(0);
    const[isLoaded, setIsLoaded] = useState(false);


    useEffect(()=>{
        if(!isLoaded){

            const token = localStorage.getItem("token");

            axios.get(import.meta.env.VITE_API_URL+"/orders/"+pageSize+"/"+pageNumber,{
                headers:{
                    Authorization: "Bearer "+token
                }
            })
            .then((response)=>{
                setOrders(response.data.orders);
                setTotalPages(response.data.totalPages);
                setIsLoaded(true);
            })

        }
    },[isLoaded])

    return (
        <div className="w-full h-full overflow-hidden relative">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-text">Orders</h1>
                <p className="text-sm text-textMuted">Manage all orders in catalog</p>
            </div>
            {!isLoaded?<div className="min-w-full min-h-full flex justify-center items-center overflow-hidden bg-transparent"><LoadingAnimation/></div>
            :
            <div className="max-h-[535px] bg-bgDark rounded-2xl shadow-xl overflow-y-auto hide-scroll-track">
            <table className="w-full text-sm">
                <thead className="uppercase tracking-wide text-left bg-bgDark text-accent sticky top-0 z-10">
                <tr>
                    <th className="px-5 py-4 font-semibold">Order ID</th>
                    <th className="px-5 py-4 font-semibold">Customer Name</th>
                    <th className="px-5 py-4 font-semibold">Email</th>
                    <th className="px-5 py-4 font-semibold">Date</th>
                    <th className="px-5 py-4 font-semibold">Total Amount</th>
                    <th className="px-5 py-4 font-semibold">Status</th>
                    <th className="px-5 py-4 font-semibold text-center">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-bgDark/40">
                {orders.map((order, index) => (
                    <tr
                    key={order.orderId}
                    className={`transition-colors
                        ${index % 2 === 0 ? "bg-bg" : "bg-bgLight"}
                        hover:bg-accent/5`}
                    >
                    <td className="px-5 py-4 font-medium text-text whitespace-nowrap">
                        {order.orderId}
                    </td>

                    <td className="px-5 py-4 text-text whitespace-nowrap">
                        {order.firstName+" "+order.lastName}
                    </td>
                    
                    <td className="px-5 py-4 text-text">
                        {order.email}
                    </td>

                    <td className="px-5 py-4 text-text">
                        {new Date(order.date).toLocaleDateString()}
                    </td>

                    <td className="px-5 py-4 text-text">
                        {priceFormatted(order.total)}
                    </td>

                    <td className="px-5 py-4 text-text">
                        {order.status}
                    </td>

                    <td className="px-5 py-4  text-center">
                        <ViewOrderInfoModal order={order} />
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            }
            <div className="w-full h-[60px] absolute bottom-1 left-0 flex justify-center items-center">
                <div className="w-[575px] h-[40px] bg-bg rounded-full shadow-2xl flex flex-row justify-center items-center">
                    <button onClick={
                        ()=>{
                            if(pageNumber>1){
                                setPageNumber(pageNumber-1)
                                setIsLoaded(false)
                            }else{
                                toast.success("You are in First Page")
                            }
                        }
                    } className="text-[18px] tracking-[3px] w-[150px] h-[40px] flex items-center justify-center rounded-full gap-2 cursor-pointer text-accent border pl-5 border-accent bg-accent/20 hover:bg-text/30 hover:border hover:border-text hover:text-text hover:pl-1 transition-all duration-200"><MdSkipPrevious className="text-[30px]" />Prev</button>
                    <span className="w-[120px] h-[40px] font-bold text-accent text-[15px] flex items-center justify-center">
                        page {pageNumber} of {totalPages}
                    </span>
                    <button onClick={
                        ()=>{
                            if(pageNumber<totalPages){
                                setPageNumber(pageNumber+1)
                                setIsLoaded(false)
                            }else{
                                toast.success("You are in Last page")
                            }
                        }
                    } className="text-[18px] tracking-[3px] w-[150px] h-[40px] flex items-center justify-center rounded-full gap-2 cursor-pointer text-accent border pr-5 border-accent bg-accent/20 hover:bg-text/30 hover:border hover:border-text hover:text-text hover:pr-1 transition-all duration-200">Next<MdSkipNext className="text-[30px]" /></button>
                    <select value={pageSize} onChange={
                        (e)=>{
                            setPageSize(parseInt(e.target.value));
                            setIsLoaded(false)
                        }
                    } className="w-[135px] h-[40px] font-bold ml-5 px-3 bg-accent/30 text-accent border border-accent rounded-full outline-none">
                        <option value={7}>7 Per Page</option>
                        <option value={10}>10 Per Page</option>
                        <option value={20}>20 Per Page</option>
                        <option value={30}>30 Per Page</option>
                    </select>
                </div>
            </div>
        </div>
    );
} 