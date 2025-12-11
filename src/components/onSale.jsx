import ProductCard from "./productCard";

export default function OnSale() {
    return (
        <div>

            <h1>On Sale</h1>

           <ProductCard 
      
                name="Macbook Air"
                price="$699"
                img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-spacegray-202110_GEO_US?wid=5120&hei=2880&fmt=jpeg&qlt=95&.v=1634655056000"

            />

      
            <ProductCard 
            
                name="i-phone xs"
                price="$399"
                img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=95&.v=1634655054000"

            />
        </div>
    )
}