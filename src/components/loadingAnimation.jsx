export default function LoadingAnimation(){
    return(
        
        <div className="mt-10 flex flex-col justify-center items-center overflow-hidden">
            <div className="w-[300px] h-[150px] relative pt-12 pl-3">
                <div className="w-[20px] h-[60px] rounded-full bg-linear-to-b from-bgLight to-accent absolute top-5 left-8 animate-pulse"></div>
                <div className="w-[20px] h-[60px] rounded-full bg-linear-to-b from-bgLight to-accent absolute top-7 left-16 animate-pulse"></div>
                <div className="w-[20px] h-[60px] rounded-full bg-linear-to-b from-bgLight to-accent absolute top-9 left-24 animate-pulse"></div>
                <div className="w-[20px] h-[20px] rounded-full bg-accent absolute top-25 left-32 animate-ping"></div>
                <div className="w-[20px] h-[60px] rounded-full bg-linear-to-b from-bgLight to-accent absolute top-9 left-40 animate-pulse"></div>
                <div className="w-[20px] h-[60px] rounded-full bg-linear-to-b from-bgLight to-accent absolute top-7 left-48 animate-pulse"></div>
                <div className="w-[20px] h-[60px] rounded-full bg-linear-to-b from-bgLight to-accent absolute top-5 left-56 animate-pulse"></div>
                
            </div>
            <div className=" w-[300px] h-[150px] relative">
                <h1 className="font-extrabold text-center animate-pulse text-accent text-6xl absolute left-0">GoBasket</h1>
            </div>
        </div>
    )
}