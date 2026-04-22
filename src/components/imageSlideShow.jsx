import { useState } from "react"
import discountPrice from "../Utility/discountPrice"

export default function SlideShow(props){

    const [activeImage,setActiveImage] = useState(0)

    const images = props.images

    function getClass(index){
        if(index==activeImage){
            return "w-[55px] h-[55px] lg:w-[80px] lg:h-[80px] rounded-2xl border-2 cursor-pointer border-accent object-cover"
        }else{
            return "w-[55px] h-[55px] lg:w-[80px] lg:h-[80px] rounded-2xl border-2 cursor-pointer border-bgLight object-cover"
        }
    }

    return(
    <div className="w-full h-[200px] lg:w-[770px] lg:h-[550px] flex flex-row justify-center items-center relative">

        <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] flex flex-col justify-center items-center rounded-full bg-accent absolute top-3 right-7 lg:top-10 lg:right-15">
            <p className="text-[20px] lg:text-[25px] font-bold">{discountPrice(props.price,props.labledPrice)}%</p>
            <p className="text-[12px] lg:text-[18px] font-semibold">OFF</p>
        </div>
        
        <div className=" w-full h-[65px] lg:w-[100px] lg:h-full flex lg:flex-col flex-row justify-center items-center absolute  lg:top-0 top-55 lg:left-1 gap-4">
            {
                images.map((image, index) => (
                    <img onClick={
                        ()=>{setActiveImage(index)}
                    } src={image} alt="" className={getClass(index)} key={index} />
                ))
            }
        </div>
        <img src={images[activeImage]} alt="" className=" w-[200px] h-[200px] lg:h-[550px] lg:w-[600px] object-fill  lg:ml-10" />
    </div>
)
}
//1.34.19