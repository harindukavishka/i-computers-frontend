import { useState } from "react";

export default function Test() {
   const [count,setCount] = useState(0);
   const [isVisible,setIsVisible] = useState(true);


    return (
        <div className="w-full h-full bg-amber-200 flex justify-center items-center">
            <div className="w-[500px] h-[500px] relative flex flex-col justify-center items-center bg-white rounded-2xl">
                <button onClick={
                    ()=>{
                        setIsVisible(!isVisible)
                    }
                } className="w-[50px] h-[50px] absolute top-5 right-5 rounded-md bg-red-500 text-white ">{isVisible?"X":"O"}</button>
                {isVisible && <div className="w-[500px] h-[500px] flex flex-col items-center justify-center ">
                    <h1 className="text-5xl mb-5">{count}</h1>
                    <div className="w-full h-[50px] flex justify-center items-center gap-5 mt-5">
                        <button onClick={
                            ()=>{
                                setCount(count-1)
                            }
                        } className="p-3 rounded-md w-[150px] text-white bg-red-500">Decrement</button>
                        <button onClick={
                            ()=>{
                                setCount(count+1)
                            }
                        } className="p-3 rounded-md w-[150px] text-white bg-green-500">Increment</button>
                    </div>
                </div>}
            </div>  
        </div>
    )
}