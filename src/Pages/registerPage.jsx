import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
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
        <div className="w-full h-full bg-[url('/background4.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-[50%] h-full flex justify-center items-center">
                <img src="/logo.png" alt="Logo" className="w-[600px] " />
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[450px] h-[600px] backdrop-blur-md shadow-3xl rounded-lg flex flex-col justify-center">
                    <div className="flex justify-center items-center">
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            className="m-5 p-3 w-[40%] h-[50px] rounded-md border text-primary border-secondary outline-none"
                            onChange={
                                (e)=>{
                                    setFirstName(e.target.value)
                                }
                            } 
                        />
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            className="m-5 p-3 w-[40%] h-[50px] rounded-md border text-primary border-secondary outline-none"
                            onChange={
                                (e)=>{
                                    setLastName(e.target.value)
                                }
                            } 
                        />
                    </div>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="m-5 p-3 w-[90%] h-[50px] rounded-md border text-primary border-secondary outline-none"
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }
                        } 
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="m-5 p-3 w-[90%] h-[50px] rounded-md border text-primary border-secondary outline-none"
                        onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        }
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        className="m-5 p-3 w-[90%] h-[50px] rounded-md border text-primary border-secondary outline-none"
                        onChange={
                            (e)=>{
                                setConfirmPassword(e.target.value)
                            }
                        }
                    />
                    <button onClick={signUp} className="m-5 p-3 w-[90%] h-[50px] rounded-md bg-accent text-white font-bold">Sign Up</button>
                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-md border border-accent text-white font-bold">Sign Up with Google</button>
                    <p className="w-full text-right pr-5">Already have an account? <Link to="/login" className="text-accent">Login</Link></p>
                </div>
            </div>
            
        </div>
    )//1.46.05
}