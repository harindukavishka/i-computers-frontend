import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGripLines } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()


    async function login(){


        try {
            const response = await axios.post(import.meta.env.VITE_API_URL+"/users/login",{
                email:email,
                password:password
            })
            console.log(response)
            toast.success("Login Sucessfully!")

            localStorage.setItem("token", response.data.token)

            if(response.data.role === "admin"){
                // redirect to admin page "/admin" -> windows.location.href("/admin")
                navigate("/admin/")
            }else{
                // redirect to home page "/"
                navigate("/")
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Login Failed")
        }
    }


    return (
        <div className="w-full h-full bg-[url('../public/LogoBG.png')] bg-cover bg-no-repeat flex justify-center items-center"> 
            <div className="hidden w-[350px] h-[580px] px-5 border border-text bg-accent/95 lg:flex flex-col justify-center shadow-2xl shadow-bgLight rounded-l-[40px] overflow-hidden relative ">
                <img src="../public/logo.png" alt="Logo" className="w-[150px] h-[150px] absolute top-0 " />
                <p className="fontMuted text-xl mt-3 ">
                    Welcome back to GoBasket ...
                </p>
                <p className="text-sm fontMuted mt-5">
                    Step into a smarter, faster, and more personalized shopping experience with GoBasket. Creating an account gives you full access to a world of products, exclusive deals, and features designed to make your life easier.
                </p>
                {/* <p className="text-sm fontMuted">
                    With your GoBasket account, you can save your favorite items, manage your orders effortlessly, and enjoy a secure and smooth checkout every time. Stay updated with the latest offers, discounts, and new arrivals—all tailored to your interests.
                </p> */}
                <p className="text-sm fontMuted">
                    Signing up is quick, simple, and completely free. Join our growing community today and experience online shopping the way it should be—easy, reliable, and enjoyable.
                </p>
                <p className="mt-7 font-bold">Don't have an Account ? </p>
                <Link to="/register" className=" mt-3 border border-text w-[300px] h-[50px] hover:bg-text/40 hover:[&_.icon]:ml-3 text accent transition-all duration-200 rounded-xl flex justify-center text-text items-center gap-5 ">Click Here to Sign Up <FaArrowRightLong className="icon transition-all duration-200" /></Link>
                
            </div>
            <div className="w-full h-full lg:h-[580px] lg:w-[450px] lg:border border-text bg-bgLight/95 flex flex-col justify-center items-center lg:rounded-r-[40px] gap-5 transition-all duration-600">
                <img src="../public/logo.png" alt="Logo" className="flex lg:hidden w-[150px] h-[150px] fixed top-5 " />
                <h1 className="fontHeader text-5xl font-bold  left-3">
                Sign In
                </h1>
                <input onChange={
                    (e)=>{
                         setEmail(e.target.value)
                    }
                    } type="text" placeholder="Email" className=" bg-accent/25 border-accent border w-[380px] h-[50px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" 
                />
                <input onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                    } type="password" placeholder="Password" className="bg-accent/25 border-accent border w-[380px] h-[50px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" 
                />
                <p>Forgot Password ? <Link to="/forgot-password" className="text-accent ">Click Here...</Link></p>
                <button onClick={login} className="border border-accent w-[380px] h-[50px] hover:bg-accent/40 transition-all duration-200 rounded-xl flex justify-center text-accent items-center tracking-[5px] uppercase">Sign In</button>
                    
                <button className=" mb-7 border border-accent w-[380px] h-[50px] hover:bg-accent/40 text accent transition-all duration-200 rounded-xl flex justify-center text-accent items-center gap-5">Login with Google <FcGoogle /></button>

                <div className="lg:hidden flex flex-col justify-center items-center">
                    <p className="mt-5 font-bold">Already have an Account ? </p>
                    <Link to="/register" className=" mt-3 border border-text w-[380px] h-[50px] hover:bg-text/40 hover:[&_.icon]:ml-3 text accent transition-all duration-200 rounded-xl flex justify-center text-text items-center gap-5 ">Click Here to Sign In <FaArrowRightLong className="icon transition-all duration-200" /></Link>
                </div>
            </div>  
        </div>
    )
}