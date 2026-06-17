import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [sentOTP, setSentOTP] = useState(false);
    const [otp, setOTP] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate()

    async function sendOTP(){
        setSentOTP(true)
        try{

            await axios.post(import.meta.env.VITE_API_URL+"/users/sent-otp",{email:email})
            toast.success("OTP Sent Successfully.Please Check Your Email")

        }catch(error){
            toast.error(error?.response?.data?.message||"Faild to send OTP.Try Again")
            setSentOTP(false)
        }
    }

    async function resetPassword(){
        if(newPassword !== confirmPassword){
            toast.error("confirm Password do not match. Please try again")
            return
        }
        try{

            await axios.post(import.meta.env.VITE_API_URL+"/users/verify-OTP",{
                email:email,
                otp:otp,
                newPassword:newPassword
            })
            toast.success("Password Reset Successfully")
            navigate("/login")

        }catch(err){
            toast.error(err?.response?.data?.message||"Faild to Reset Password.Try Again")
        }
    }

    return (
        <div className="w-full h-full bg-[url('../public/LogoBG.png')] bg-cover bg-no-repeat flex justify-center items-center">
            {!sentOTP&&<div className="p-5 flex flex-col items-center justify-center bg-bgDark/95 w-[500px] h-[400px] rounded-[40px] border border-text gap-10">
                <h1 className="fontHeader text-4xl font-bold ">Forgot Password</h1>
                <div className="flex flex-col items-center justify-center gap-7 ">
                    <input onChange={
                        (e)=>{
                            setEmail(e.target.value)
                        }
                        } type="text" placeholder="Enter your Email" className=" bg-accent/25 border-accent border w-[380px] h-[50px] p-3  rounded-xl outline-none focus:shadow-2xl" 
                    />
                    <button onClick={sendOTP} className="border border-accent w-[380px] h-[50px] hover:bg-accent/40 transition-all duration-200 rounded-xl flex justify-center text-accent items-center tracking-[5px] uppercase">Send OTP</button>
                </div>

            </div>}
            {sentOTP&&
                <div className="p-5 flex flex-col items-center justify-center bg-bgDark/95 w-[500px] h-[500px] rounded-[40px] border border-text gap-10">
                    <h1 className="fontHeader text-4xl font-bold ">Reset Password</h1>
                    <div className="flex flex-col items-center justify-center gap-7 ">
                        <input onChange={
                            (e)=>{
                                setOTP(e.target.value)
                            }
                            } type="text" placeholder="Enter your OTP" className=" bg-accent/25 border-accent border w-[380px] h-[50px] p-3  rounded-xl outline-none focus:shadow-2xl" 
                        />
                        <input onChange={
                            (e)=>{
                                setNewPassword(e.target.value)
                            }
                            } type="password" placeholder="Enter your New Password" className=" bg-accent/25 border-accent border w-[380px] h-[50px] p-3  rounded-xl outline-none focus:shadow-2xl" 
                        />
                        <input onChange={
                            (e)=>{
                                setConfirmPassword(e.target.value)
                            }
                            } type="password" placeholder="Confirm Password" className=" bg-accent/25 border-accent border w-[380px] h-[50px] p-3  rounded-xl outline-none focus:shadow-2xl" 
                        />
                        <button onClick={resetPassword} className="border border-accent w-[380px] h-[50px] hover:bg-accent/40 transition-all duration-200 rounded-xl flex justify-center text-accent items-center tracking-[5px] uppercase">Reset Password</button>
                    </div>
                </div>
                //1.00.06
            }
        </div>
    )
}