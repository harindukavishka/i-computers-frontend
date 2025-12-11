export default function ProductCard(props){
    return(
        <div>
            <h1>ProductCard</h1>
            <h3>{props.name}</h3>
            <img src="{props.img}" alt="macbook" />
            <p>{props.price}</p>
            <button>Buy Now</button>
        </div>
    )

}