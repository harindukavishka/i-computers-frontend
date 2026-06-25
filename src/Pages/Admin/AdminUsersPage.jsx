import axios from "axios";
import { useEffect, useState } from "react";
import LoadingAnimation from "../../components/loadingAnimation";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import toast from "react-hot-toast";
import ViewOrderInfoModal from "../../components/viewOrderInfoModal";

export default function AdminUsersPage() {

    const[users, setUsers] = useState([]);
    const[pageNumber, setPageNumber] = useState(1);
    const[pageSize, setPageSize] = useState(7);
    const[totalPages, setTotalPages] = useState(0);
    const[isLoaded, setIsLoaded] = useState(false);


    useEffect(()=>{
        if(!isLoaded){

            const token = localStorage.getItem("token");

            axios.get(import.meta.env.VITE_API_URL+"/users/all/"+pageSize+"/"+pageNumber,{
                headers:{
                    Authorization: "Bearer "+token
                }
            })
            .then((response)=>{
                setUsers(response.data.users);
                setTotalPages(response.data.totalPages);
                setIsLoaded(true);
            })

        }
    },[isLoaded])

    return (
        <div className="w-full h-full overflow-hidden relative">
            <div className="mb-6">
                <h1 className="fontHeader text-3xl font-bold text-text">Users</h1>
                <p className="fontMuted text-sm text-textMuted">Manage all Users in catalog</p>
            </div>
            {!isLoaded?<div className="min-w-full min-h-full flex justify-center items-center overflow-hidden bg-transparent"><LoadingAnimation/></div>
            :
            <div className="max-h-[535px] bg-bgDark rounded-2xl shadow-xl overflow-y-auto hide-scroll-track">
            <table className="w-full text-sm">
                <thead className="uppercase tracking-wide text-left bg-bgDark text-accent sticky top-0 z-10">
                <tr>
                    <th className="px-5 py-4 font-semibold"></th>
                    <th className="px-5 py-4 font-semibold">Email</th>
                    <th className="px-5 py-4 font-semibold">First Name</th>
                    <th className="px-5 py-4 font-semibold">Last Name</th>
                    <th className="px-5 py-4 font-semibold ">Role</th>
                    <th className="px-5 py-4 font-semibold text-center">Email Verification</th>
                    <th className="px-5 py-4 font-semibold text-center">Account Status</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody className="divide-y divide-bgDark/40">
                {users.map((user, index) => (
                    <tr
                    key={index}
                    className={`transition-colors
                        ${index % 2 === 0 ? "bg-bg" : "bg-bgLight"}
                        hover:bg-accent/5`}
                    >
                        <td className="px-5 py-4">
                        <img
                            referrerPolicy="no-referrer"
                            src={user.image}
                            alt={user.firstName}
                            className="w-12 h-12 object-cover rounded-xl border border-bgDark"
                        />
                        </td>

                        {/* Email */}
                        <td className="px-5 py-4">
                            <div className="font-medium text-text">
                                {user.email}
                            </div>
                        </td>

                        {/* First Name */}
                        <td className="px-5 py-4 text-text">
                            {user.firstName}
                        </td>

                        {/* Last Name */}
                        <td className="px-5 py-4 text-text">
                            {user.lastName}
                        </td>

                        {/* Role */}
                        <td className="px-5 py-4">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold
                                ${
                                    user.role === "admin"
                                        ? "border border-yellow text-yellow"
                                        : "border border-green text-green"
                                }`}
                            >
                                {user.role}
                            </span>
                        </td>

                        {/* Email Verification */}
                        <td className="px-5 py-4 text-center">
                            {user.isEmailVerified ? (
                                <span className="flex items-center justify-center gap-2 text-sm px-2 py-1 font-semibold text-green border border-green rounded-full">
                                    <span className="w-2 h-2 rounded-full bg-green"></span>
                                    Verified
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2 text-sm px-2 py-1 font-semibold text-red-700 border border-red-700 rounded-full">
                                    <span className="w-2 h-2 rounded-full bg-red-700"></span>
                                    Not Verified
                                </span>
                            )}
                        </td>

                        {/* Account Status */}
                        <td className="px-5 py-4 text-center">
                            {user.isBlocked ? (
                                <span className="flex items-center justify-center gap-2 text-sm px-2 py-1 font-semibold text-green border border-green rounded-full">
                                    <span className="w-2 h-2 rounded-full bg-green"></span>
                                    Active
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2 text-sm px-2 py-1 font-semibold text-red-700 border border-red-700 rounded-full">
                                    <span className="w-2 h-2 rounded-full bg-red-700"></span>
                                    Inactive
                                </span>
                            )}
                        </td>
                        <td className="px-5 py-4 text-center">
                            <button
                                className="px-3 py-1 text-xs rounded-full border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-300"
                            onClick={
                                ()=>{
                                    axios.post(import.meta.env.VITE_API_URL+"/users/toggle-block",{
                                        email : user.email
                                    },{
                                        headers:{
                                            Authorization: "Bearer "+localStorage.getItem("token")
                                        }
                                    }).then((res)=>{
                                        toast.success(res.data.message)
                                        setIsLoaded(false)
                                    }).catch((err)=>{
                                        toast.error(err.response.data.message)
                                    })
                                }
                            }>
                                {user.isBlocked ? "Unblock" : "Block"}
                            </button>
                        </td>
                        <td className="px-5 py-4 text-center">
                            <button
                                className="px-3 py-1 text-xs rounded-full border border-yellow text-yellow hover:bg-yellow hover:text-bgDark transition-all duration-300"
                                onClick={
                                    ()=>{
                                        axios.post(import.meta.env.VITE_API_URL+"/users/change-role",{
                                            email : user.email
                                        },{
                                            headers:{
                                                Authorization: "Bearer "+localStorage.getItem("token")
                                            }
                                        }).then((res)=>{
                                            toast.success(res.data.message)
                                            setIsLoaded(false)
                                        }).catch((err)=>{
                                            toast.error(err.response.data.message)
                                        })
                                    }
                            }>
                                {user.role == "admin" ? "Make User" : "Make Admin"}
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            }
            <div className="w-full h-[60px] absolute bottom-0 left-0 flex justify-center items-center">
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
