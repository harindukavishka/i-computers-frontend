import { useState } from "react"
import discountPrice from "../Utility/discountPrice"

export default function SlideShow(props){

    const [activeImage,setActiveImage] = useState(0)

    const images = props.images

    function getClass(index){
        if(index==activeImage){
            return "w-[80px] h-[80px] rounded-2xl border-2 cursor-pointer border-accent object-cover"
        }else{
            return "w-[80px] h-[80px] rounded-2xl border-2 cursor-pointer border-bgLight object-cover"
        }
    }

    return(
    <div className="w-[770px] h-[550px] flex flex-row justify-center items-cente  relative">

        <div className="w-[70px] h-[70px] flex flex-col justify-center items-center rounded-full bg-accent absolute top-10 right-15">
            <p className="text-[25px] font-bold">{discountPrice(props.price,props.labledPrice)}%</p>
            <p className="text-[18px] font-semibold">OFF</p>
        </div>
        
        <div className="w-[100px] h-full flex flex-col justify-center items-center absolute left-1 gap-4">
            {
                images.map((image, index) => (
                    <img onClick={
                        ()=>{setActiveImage(index)}
                    } src={image} alt="" className={getClass(index)} key={index} />
                ))
            }
        </div>
        <img src={images[activeImage]} alt="" className="h-[500px]  object-cover ml-10" />
    </div>
)
}
//1.34.19