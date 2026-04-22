import axios from "axios";
import { useEffect, useState } from "react";
import uploadFile from "../Utility/mediaUpload";
import toast from "react-hot-toast";

export default function Settings() {
   
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [file,setFile] = useState(null)
    const [existingImageUrl,setExistingImageUrl] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    useEffect(()=>{

        const token = localStorage.getItem("token")

        if(token != null){
            axios.get(import.meta.env.VITE_API_URL+"/users/profile",{
                headers:{
                    authorization: `Bearer ${token}`
                }
            })
            .then((res)=>{
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setExistingImageUrl(res.data.imageUrl)
            })
            .catch(
                ()=>{
                localStorage.removeItem("token")
                window.location.href = "/login"
            })
        }else{
            window.location.href = "/login"
        }


    },[])

    async function updateProfile() {
        const token = localStorage.getItem("token")

        const updatedInfo = {
            firstName : firstName,
            lastName : lastName,
            image : existingImageUrl
        }

        if(file != null){
            updatedInfo.image = await uploadFile(file)
            console.log(updatedInfo.image)
        }

        axios.put(import.meta.env.VITE_API_URL+"/users/",updatedInfo,{
            headers:{authorization: `Bearer ${token}`}
        }).then((res)=>{
            localStorage.setItem("token",res.data.token)
            toast.success(res.data.message)
            window.location.reload()
        }).catch((err)=>{
            toast.error(err?.response?.data?.message)
        })
    }

    async function updatePassword() {
        const token = localStorage.getItem("token")

        if(password != confirmPassword){
            toast.error("Password and Confirm Password must be same")
            return
        }

        axios.post(import.meta.env.VITE_API_URL+"/users/update-password",{
            password : password
        },{
            headers:{authorization: `Bearer ${token}`}
        }).then((res)=>{
            toast.success(res.data.message)
            window.location.reload()
        }).catch((err)=>{
            toast.error(err?.response?.data?.message)
        })
    }


    return (
        <div className="flex justify-center items-center h-[calc(100vh-100px)] w-full">
            <div className="w-[400px] lg:w-[1000px] h-[800px] lg:h-[550px] bg-bg rounded-[40px] shadow-2xl flex-col items-center justify-center relative">
                <div className="w-full h-[80px] lg:h-[100px] border-b-2 border-b-accent rounded-t-[40px] pl-3 pb-3 bg-bgDark hover:bg-accent sticky top-0 left-0 transition-all duration-300">
                                               
                    <div className="flex flex-row items-center gap-4">
                        <h1 className="fontHeader text-[30px] lg:text-[40px]  font-bold text-text">Account Settings</h1>
                    </div>
                    <p className="fontMuted text-textMuted text-[12px] lg:text-sm ">You can manage your Profile simply in here...</p>
                                                
                </div>
                <div className="mt-5 gap-5 flex flex-col lg:flex-row justify-center items-center ">
                    <div className="w-[380px] lg:w-[450px] h-[380px] lg:h-[410px] rounded-[40px] bg-bgLight shadow-2xl flex flex-col justify-center items-center relative">

                        <div className=" w-full h-[100px] flex flex-col">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">First Name </label>
                            <input value={firstName} onChange={
                                (e)=>{
                                    setFirstName(e.target.value)
                                }
                            } type="text" placeholder="ex:- ID001" className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                        <div className=" w-full h-[100px] flex flex-col">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">Last Name </label>
                            <input value={lastName} onChange={
                                (e)=>{
                                    setLastName(e.target.value)
                                }
                            } type="text" placeholder="ex:- ID001" className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                        <div className=" w-full h-[100px] flex flex-col mb-2">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">Profile Picture </label>
                            <input onChange={
                                (e)=>{
                                    const selectedFile = e.target.files[0]
                                    setFile(selectedFile)
                                    console.log(e.target.value)
                                }
                            } type="file"  className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                        <button onClick={updateProfile} className="w-[220px] lg:text-md text-[12px] lg:w-[300px] h-[40px] lg:h-[50px] absolute bottom-3 flex justify-center items-center  rounded-full text-yellow border border-yellow hover:border-none hover:bg-yellow/30 uppercase tracking-[5px] transition-all duration-300">Update Profile</button>

                    </div>

                    <div className="w-[380px] lg:w-[450px] h-[300px] lg:h-[410px] rounded-[40px] bg-bgLight shadow-2xl flex flex-col justify-center items-center relative">

                         <div className=" w-full h-[100px] flex flex-col">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">Change Password </label>
                            <input  onChange={
                                (e)=>{
                                    setPassword(e.target.value)
                                }
                            } type="password"  className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                        <div className=" w-full h-[100px] flex flex-col">
                            <label htmlFor="" className="text-text font-bold text-m ml-3">Confirm Password </label>
                            <input  onChange={
                                (e)=>{
                                    setConfirmPassword(e.target.value)
                                }
                            } type="password"  className="bg-accent/25 border-accent border h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
                        </div>
                        <button onClick={updatePassword} className="w-[220px] lg:text-md text-[12px] lg:w-[300px] h-[40px] lg:h-[50px] absolute bottom-3 flex justify-center items-center  rounded-full text-yellow border border-yellow hover:border-none hover:bg-yellow/30 uppercase tracking-[5px] transition-all duration-300">Update Password</button>
                    </div>
                </div>
            </div>
        </div>
    )

//2.06.50
}