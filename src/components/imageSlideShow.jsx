import { useState } from "react"

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
    <div className="w-[500px] h-[570px] flex flex-col">
        <img src={images[activeImage]} alt="" className="h-[490] w-full object-cover" />
        <div className="w-full h-[80px] flex flex-row justify-center px-4 gap-4">
            {
                images.map((image, index) => (
                    <img onClick={
                        ()=>{setActiveImage(index)}
                    } src={image} alt="" className={getClass(index)} key={index} />
                ))
            }
        </div>
    </div>
)
}
//1.34.19