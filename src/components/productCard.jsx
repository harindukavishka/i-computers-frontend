import { Link } from "react-router-dom"
import priceFormatted from "../Utility/priceFormated"

export default function ProductCard(props){

    const product = props.product

    return(
        
        <Link to={"/overview/"+product.productId} className="w-[250px] h-[350px]  rounded-2xl m-5 p-3 flex-row justify-center items-center shadow-2xl bg-secondary/60 relative hover:[&_.main-img]:top-0 hover:[&_.fun]:w-[230px] hover:[&_.fun]:h-[230px] hover:[&_.yep]:opacity-100 hover:[&_.yep]:bottom-5">
            
            <div className="w-40 h-[180px]  rounded-bl-full bg-accent absolute top-0 right-0 overflow-hidden fun tarnsition-all duration-1000"><p className="text-white/30 text-6xl font-bold absolute top-[40px]">GoBasket</p></div>
            <p className="text-white/30 text-4xl font-bold absolute top-[170px]">{product.brand}</p>
            <div className="main-img absolute top-15 tarnsition-all duration-1000">
                <img src={product.images[1]} alt={product.name} className=" h-[200px] w-[220px]" />
                <h1 className="text-lg text-white font-bold m-3">{product.name}</h1>
            </div>
            <div className="flex-col items-center w-full m-3 yep opacity-0 absolute bottom-0 tarnsition-all duration-1000">
                <span className="text-xs text-white/25">{product.productId}</span>
                {
                    product.labledPrice > product.price &&
                    <p className="text-sm text-red-600 line-through">{priceFormatted(product.labledPrice)}</p> 
                }
                <p className="text-xl font-bold text-white">{priceFormatted(product.price)}</p>
            </div>
            
        </Link>
        
    )
}