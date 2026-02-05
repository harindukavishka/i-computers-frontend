import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"
import uploadFile from "../../Utility/mediaUpload"

export default function AdminUpdateProductPage() {

    const location = useLocation()
    const [productId,setProductId] = useState(location.state.productId)
    const [productName,setProductName] = useState(location.state.name)
    const [description,setDescription] = useState(location.state.description)
    const [altNames,setAltNames] = useState(location.state.altNames.join(","))
    const [price,setPrice] = useState(location.state.price)
    const [labledPrice,setLabledPrice] = useState(location.state.labledPrice)
    const [isvisible,setIsVisible] = useState(location.state.isVisible)
    const [category,setCategory] = useState(location.state.category)
    const [brand,setBrand] = useState(location.state.brand)
    const [model,setModel] = useState(location.state.model)
    const [files,setFiles] = useState([])
    const navigate = useNavigate()
    console.log(location.state)

    async function handleUpdateProduct(){

        try{

            const token = localStorage.getItem("token")
            
            if(token == null){
                toast.error("You must be loggin to update product")
                window.location.href = "/login"
                return;
            }

            const fileUploadPromises = []

            for(let i=0;i<files.length;i++){
                fileUploadPromises[i] = uploadFile(files[i])
            }

            let fileUrls = await Promise.all(fileUploadPromises)

            if(fileUrls.length === 0){
                fileUrls = location.state.images
            }

            await axios.put(import.meta.env.VITE_API_URL+"/product/"+productId,{
                name:productName,
                description:description,
                altNames: altNames.split(","),
                price:price,
                labledPrice:labledPrice,
                isVisible:isvisible,
                category:category,
                images:fileUrls,
                brand:brand,
                model:model
                },{
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            })

            toast.success("Product Updated Successfully")
            navigate("/admin/products")

        }catch(e){
            toast.error(e?.response?.data?.message || "Faild to update product")
            return;
        }
        
    }

    return (
        <div className="w-full max-h-full flex flex-wrap overflow-y-scroll hide-scroll-track">
            <h1 className="text-2xl font-bold w-full h-[70px] sticky top-0 bg-primary">UPDATE PRODUCT</h1>
            <div className=" w-[50%] h-[120px] flex flex-col">
                <label htmlFor="" className="font-bold text-m ml-3">Product ID : </label>
                <input disabled value={productId} onChange={
                    (e)=>{
                        setProductId(e.target.value)
                    }
                } type="text" placeholder="ex:- ID001" className="border-accent border-3 h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
            </div>
            <div className=" w-[50%] h-[120px] flex flex-col">
                <label htmlFor="" className="font-bold text-m ml-3">Product Name : </label>
                <input value={productName} onChange={
                    (e)=>{
                        setProductName(e.target.value)
                    }
                } type="text" placeholder="ex:- Laptop" className="border-accent border-3 h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
            </div>
            <div className=" w-[100%] h-[170px] flex flex-col">
                <label htmlFor="" className="font-bold text-m ml-3">Description : </label>
                <textarea value={description} onChange={
                    (e)=>{
                        setDescription(e.target.value)
                    }
                } type="text" placeholder="ex:- Laptop" className="border-accent border-3 h-[95px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
            </div>
            <div className=" w-[100%] h-[120px] flex flex-col">
                <label htmlFor="" className="font-bold text-m ml-3">Images : </label>
                <input onChange={(e)=>{setFiles(e.target.files)}} multiple type="file" className="border-accent border-3 h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
            </div>
            <div className=" w-[100%] h-[120px] flex flex-col">
                <label htmlFor="" className="font-bold text-m ml-3">Alternative Names (Comma Separated) : </label>
                <input value={altNames} onChange={
                    (e)=>{
                        setAltNames(e.target.value)
                    }
                } type="text" placeholder="ex:- Laptop,Portable devices..." className="border-accent border-3 h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
            </div>
            <div className=" w-[50%] h-[120px] flex flex-col">
                <label htmlFor="" className="font-bold text-m ml-3">Price : </label>
                <input value={price} onChange={
                    (e)=>{
                        setPrice(e.target.value)
                    }
                } type="text" placeholder="ex:-LKR 205000" className="border-accent border-3 h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
            </div>
            <div className=" w-[50%] h-[120px] flex flex-col">
                <label htmlFor="" className="font-bold text-m ml-3">Labled Price : </label>
                <input value={labledPrice} onChange={
                    (e)=>{
                        setLabledPrice(e.target.value)
                    }
                } type="text" placeholder="ex:-LKR 195000" className="border-accent border-3 h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
            </div>
            <div className=" w-[25%] h-[120px] flex flex-col">
                <label htmlFor="" className="font-bold text-m ml-3">Visibility : </label>
                <select value={isvisible} className="border-accent border-3 h-[45px] p-2 m-2 rounded-xl outline-none focus:shadow-2xl" onChange={(e)=>{setIsVisible(e.target.value)}}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <div className=" w-[25%] h-[120px] flex flex-col">
                <label htmlFor="" className="font-bold text-m ml-3">Category : </label>
                <select value={category} className="border-accent border-3 h-[45px] p-2 m-2 rounded-xl outline-none focus:shadow-2xl" onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="Others">Others</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Desktop">Desktop</option>
                    <option value="Components">Component</option>
                    <option value="Accessories">Accessories</option>
                </select>
            </div>
            <div className=" w-[25%] h-[120px] flex flex-col">
                <label htmlFor="" className="font-bold text-m ml-3">Barnd : </label>
                 <select value={brand} className="border-accent border-3 h-[45px] p-2 m-2 rounded-xl outline-none focus:shadow-2xl" onChange={(e)=>{setBrand(e.target.value)}}>
                    <option value="Standard">Standard</option>
                    <option value="Dell">Dell</option>
                    <option value="MSI">MSI</option>
                    <option value="Asus">Asus</option>
                    <option value="Lenovo">lenovo</option>
                    <option value="Asus">HP</option>
                </select>
            </div>
            <div className=" w-[25%] h-[120px] flex flex-col">
                <label htmlFor="" className="font-bold text-m ml-3">Model : </label>
                <input value={model} onChange={
                    (e)=>{
                        setModel(e.target.value)
                    }
                } type="text" placeholder="ex:-Thing" className="border-accent border-3 h-[45px] p-3 m-2 rounded-xl outline-none focus:shadow-2xl" />
            </div>
            <div className=" w-full h-[75px] flex items-center justify-end sticky bottom-0 bg-white rounded-b-xl p-3 text-white gap-4">
                <button onClick={handleUpdateProduct} className="w-[120px] h-[40px] bg-green-600 hover:bg-green-400 rounded-2xl shadow-2xl">Update Product</button>
                <button className="w-[120px] h-[40px] bg-gray-600 hover:bg-gray-400 rounded-2xl shadow-2xl">Cancle</button>
            </div>
        </div>
    )
}