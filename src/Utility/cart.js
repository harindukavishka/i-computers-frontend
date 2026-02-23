export function getCart(){
    const cartString = localStorage.getItem("cart");
    if(cartString == null){
        localStorage.setItem("cart","[]");
        return []
    }else{
        const cart = JSON.parse(cartString)
        return cart;
    }
}

export function addToCart(product, qty){
    const cart = getCart();
    
    const existingProductIndex = cart.findIndex(
        (item) => {
            return item.product.productId === product.productId
        }
    );
         
   if(existingProductIndex == -1){
    if(qty <= 0){
        console.error("Quntity cannot be 0 or minus")
        return
    }
        cart.push(
            {
               product:{
                productId:product.productId,
                name:product.name,
                price:product.price,
                labledPrice:product.labledPrice,
                image:product.images[1]
               },
               qty:qty
                
            }
        );
        localStorage.setItem("cart",JSON.stringify(cart));
   }else{

        const newQyt = cart[existingProductIndex].qty+qty
        if(newQyt <= 0){
            cart.splice(existingProductIndex, 1)
        }else{
            cart[existingProductIndex].qty = newQyt
        }

   }

   const cartInString = JSON.stringify(cart);
   localStorage.setItem("cart",cartInString)
}