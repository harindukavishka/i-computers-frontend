import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserData() {
    const[change,setChange] = useState("profile")
    const[user,setUser] = useState({})

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
                <div className="flex justify-center items-center">
                    <Link to="/login" className="w-[80px] h-[35px] text-center rounded-full text-text mx-1 hover:text-bgDark hover:border-b-2  transition-all duration-300">Login</Link>
                    <span className="h-[35px]">|</span>
                    <Link to="/register" className="w-[80px] h-[35px] text-center rounded-full text-text mx-1 hover:text-bgDark hover:border-b-2  transition-all duration-300">Register</Link>
                </div>
                :
                <div className="flex justify-center items-center gap-5">
                    <img referrerPolicy="no-referrer" src={user.image} alt="user" className="w-[35px] h-[35px] object-fill rounded-full" />
                    <select value={change} onChange={
                        (e)=>{

                            setChange(e.target.value)

                            if(e.target.value=="orders"){
                                window.location.href="/my-orders"
                            }
                            if(e.target.value=="settings"){
                                window.location.href="/settings"
                            }
                            if(e.target.value=="logOut"){
                                localStorage.removeItem("token")
                                window.location.href="/login"
                            }

                            setChange("profile")
                        }
                    } className="w-[250px] h-full rounded-full bg-bg p-3" >
                        <option value="profile">Hi, {user.firstName}!</option>
                        <option value="orders">My Orders</option>
                        <option value="settings">Settings</option>
                        <option value="logOut">Logout</option>
                    </select>
                </div>)
            }
        </div>
    )
}