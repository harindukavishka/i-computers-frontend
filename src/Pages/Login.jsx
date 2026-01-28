import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    // function login(){
    //     axios.post("http://localhost:3000/users/login",{
    //         email:email,
    //         password:password
    //     }
    //     ).then(
    //         (response)=>{
    //             console.log("Login Success")
    //             console.log(response)
    //         }
    //     ).catch(
    //         (err)=>{
    //             console.log("Login Failed")
    //             console.log(err)
    //         }
    //     )
    // }

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
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Login Failed")
        }
    }


    return (
        <div className="w-full h-full bg-[url('/background4.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className="w-[50%] h-full flex justify-center items-center">
                <img src="/logo.png" alt="Logo" className="w-[600px] " />
            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[450px] h-[600px] backdrop-blur-md shadow-3xl rounded-lg flex flex-col justify-center">
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
                    <p className="w-full text-right pr-5">Forgot your password?<Link to="/forgot-password" className="text-accent">Reset</Link></p>
                    <button onClick={login} className="m-5 p-3 w-[90%] h-[50px] rounded-md bg-accent text-white font-bold">Login</button>
                    <button className="m-5 p-3 w-[90%] h-[50px] rounded-md border border-accent text-white font-bold">Login with Google</button>
                    <p className="w-full text-right pr-5">Don't have an account? <Link to="/register" className="text-accent">Register</Link></p>
                </div>
            </div>
            
        </div>
    )
}