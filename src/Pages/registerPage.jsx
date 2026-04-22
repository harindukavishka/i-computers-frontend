import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGripLines } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const navigate = useNavigate()


    async function signUp(){

        if(password === confirmPassword){

            try {
                await axios.post(import.meta.env.VITE_API_URL+"/users/",{
                    email:email,
                    firstName:firstName,
                    lastName:lastName,
                    password:password
                })
                toast.success("You Sign Up Sucessfully!")
                navigate("/login")
            } catch (error) {
                toast.error(error?.response?.data?.message || "Login Failed")
            }
        }else{
            toast.error("Password and Confirm Password must be same")
        }
    }


    return (
        <div className="w-full h-full bg-[url('../public/LogoBG.png')] bg-cover bg-no-repeat flex justify-center items-center">
            <div className="hidden w-[350px] h-[580px] p-5 border border-text bg-accent/95 lg:flex flex-col justify-center shadow-2xl shadow-bgLight rounded-l-[40px] overflow-hidden relative ">
                <img src="../public/logo.png" alt="Logo" className="w-[150px] h-[150px] absolute top-0 " />
                <p className="fontMuted text-xl mt-7 ">
                    Welcome to GoBasket ...
                </p>
                <p className="text-sm fontMuted mt-3">
                    GoBasket is a dynamic and innovative e-commerce platform crafted to deliver a seamless and enjoyable online shopping experience. With a clean design and intuitive interface, users can effortlessly explore a wide variety of products, discover great deals, and shop with confidence anytime, anywhere.
                </p>
                {/* <p className="text-sm fontMuted">
                    Built with modern web technologies, GoBasket ensures fast performance, smooth navigation, and reliable functionality across all devices. From browsing products to completing purchases, every step is designed to be simple, secure, and user-friendly.
                </p> */}
                <p className="text-sm fontMuted">
                    GoBasket is more than just an online store — it’s a smart shopping destination that combines convenience, style, and efficiency to meet the needs of today’s digital customers.
                </p>
                <p className="mt-5 font-bold">Already have an Account ? </p>
                <Link to="/login" className=" mt-3 border border-text w-[300px] h-[50px] hover:bg-text/40 hover:[&_.icon]:ml-3 text accent transition-all duration-200 rounded-xl flex justify-center text-text items-center gap-5 ">Click Here to Sign In <FaArrowRightLong className="icon transition-all duration-200" /></Link>
                            
            </div>
            <div className="h-full w-full lg:h-[580px] lg:w-[450px] lg:border border-text bg-bgLight/95 flex flex-col justify-center items-center lg:rounded-r-[40px] gap-5 transition-all duration-600">
                <img src="../public/logo.png" alt="Logo" className="lg:hidden flex w-[150px] h-[150px] fixed top-5 mb-3" />
                <h1 className="mb-3 lg:mb-0 mt-20 lg:mt-0 fontHeader text-5xl font-bold  left-3">
                Sign Up
                </h1>
                <div className="flex justify-center items-center gap-2 w-[380px] m-2">
                    <input onChange={
                        (e)=>{
                            setFirstName(e.target.value)
                        }
                        } type="text" placeholder="First Name" className=" bg-accent/25 border-accent border w-[50%] h-[50px] p-3  rounded-xl outline-none focus:shadow-2xl" 
                    />
                    <input onChange={
                        (e)=>{
                            setLastName(e.target.value)
                        }
                        } type="text" placeholder="Last Name" className=" bg-accent/25 border-accent border w-[50%] h-[50px] p-3  rounded-xl outline-none focus:shadow-2xl" 
                    />
                </div>
                <input onChange={
                    (e)=>{
                        setEmail(e.target.value)
                    }
                    } type="email" placeholder="Email" className=" bg-accent/25 border-accent border w-[380px] h-[50px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" 
                />
                <input onChange={
                    (e)=>{
                        setPassword(e.target.value)
                    }
                    } type="password" placeholder="Password" className=" bg-accent/25 border-accent border w-[380px] h-[50px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" 
                />
                <input onChange={
                    (e)=>{
                        setConfirmPassword(e.target.value)
                    }
                    } type="password" placeholder="Confirm Password" className=" bg-accent/25 border-accent border w-[380px] h-[50px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" 
                />
                <button onClick={signUp} className="border border-accent w-[380px] h-[50px] hover:bg-accent/40 text accent transition-all duration-200 rounded-xl flex justify-center text-accent items-center tracking-[5px] uppercase">Sign Up</button>
                    
                <button className=" border border-accent w-[380px] h-[50px] hover:bg-accent/40 text accent transition-all duration-200 rounded-xl flex justify-center text-accent items-center gap-5">Sign Up with Google <FcGoogle /></button>

                <div className="lg:hidden flex flex-col justify-center items-center">
                    <p className="mt-5 font-bold">Already have an Account ? </p>
                    <Link to="/login" className=" mt-3 border border-text w-[380px] h-[50px] hover:bg-text/40 hover:[&_.icon]:ml-3 text accent transition-all duration-200 rounded-xl flex justify-center text-text items-center gap-5 ">Click Here to Sign In <FaArrowRightLong className="icon transition-all duration-200" /></Link>
                </div>

            </div>
        
        </div>
    )
}