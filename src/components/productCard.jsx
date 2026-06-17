import { Link } from "react-router-dom"
import priceFormatted from "../Utility/priceFormated"

export default function ProductCard(props){

    const product = props.product

    return(
        
        <Link to={"/overview/"+product.productId} className="w-[170px] h-[250px] lg:w-[250px] lg:h-[350px]  rounded-2xl lg:m-3 m-2 lg:p-3 p-2 flex-row justify-center items-center shadow-2xl bg-bgDark relative hover:[&_.main-img]:top-0 hover:[&_.fun]:w-[230px] hover:[&_.fun]:h-[230px] hover:[&_.yep]:opacity-100 hover:[&_.yep]:bottom-5">
            
            <div className="w-30 h-[140px] lg:w-40 lg:h-[180px]  rounded-bl-full bg-accent absolute top-0 right-0 overflow-hidden fun tarnsition-all duration-1000"><p className="text-textMuted/40 text-4xl lg:text-6xl font-bold absolute top-[40px]">GoBasket</p></div>
            <p className="text-textMuted text-xl lg:text-4xl font-bold absolute top-[100px] lg:top-[170px]">{product.brand}</p>
            <div className="main-img absolute top-15 tarnsition-all duration-1000">
                <img src={product.images[1]} alt={product.name} className="h-[120px] w-[140px] lg:h-[200px] lg:w-[220px]" />
                <h1 className="text-[13px]  lg:text-lg text-text font-bold m-3">{product.name}</h1>
            </div>
            <div className="flex-col items-center w-full m-3 yep opacity-0 absolute bottom-0 tarnsition-all duration-1000">
                <span className="text-[11px] lg:text-xs text-textMuted">{product.productId}</span>
                {
                    product.labledPrice > product.price &&
                    <p className="text-[13px] lg:text-sm text-red-600 line-through">{priceFormatted(product.labledPrice)}</p> 
                }
                <p className=" lg:text-xl font-bold text-text">{priceFormatted(product.price)}</p>
            </div>
            
        </Link>
        
    )
}