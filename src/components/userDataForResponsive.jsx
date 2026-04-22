import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserDataForResponsive() {
    const[user,setUser] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{

        const token = localStorage.getItem("token")

        if(token != null){
            axios.get(import.meta.env.VITE_API_URL+"/users/profile",{
                headers:{
                    authorization: `Bearer ${token}`
                }
            })
            .then((res)=>{
                setUser(res.data)
            })
            .catch(
                ()=>{
                localStorage.removeItem("token")
                window.location.href = "/login"
            })
        }


    },[])

    return (
        <div className="flex justify-center items-center">
            {
                (user.firstName==null?
                <div className="flex flex-col justify-center items-center gap-5">
                    <Link to="/login" className="w-[200px] h-[50px] text-accent text-center tracking-[5px] uppercase rounded-full p-3 cursor-pointer border border-accent  hover:bg-accent/60  transition-all duration-300">Sign In</Link>
                    <Link to="/register" className="w-[200px] h-[50px] text-accent text-center tracking-[5px] uppercase rounded-full p-3 cursor-pointer border border-accent  hover:bg-accent/60  transition-all duration-300">Sign Up</Link>
                </div>
                :
                <div className="flex flex-col justify-center items-start gap-5">
                    <div className="flex flex-row items-center justify-center gap-3 my-5">
                        <img src={user.image} alt="user" className="w-[40px] h-[40px]  object-fill rounded-full" />
                        <h1 className="text-xl font-bold">Hi, {user.firstName}!</h1>
                    </div>
                    <p onClick={() => navigate("/my-orders")} className=" text-xl mb-5 hover:ml-3 hover:text-accent font-bold transition-all duration-300 cursor-pointer">
                        My Orders
                    </p>

                    <p onClick={() => navigate("/settings")} className=" text-xl mb-5 hover:ml-3 hover:text-accent font-bold transition-all duration-300 cursor-pointer">
                        Settings
                    </p>

                    <button 
                        onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/login")
                        }} 
                        className="w-[200px] h-[50px] border border-accent tracking-[5px] uppercase text-accent p-3 rounded-full hover:bg-accent/60"
                    >
                        Logout
                    </button>
 {/* //settings responsive karanna thiyenawa */}
                </div>)
            }
        </div>
    )
}