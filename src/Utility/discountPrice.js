export default function discountPrice(price, labledPrice) {
   let discount;
   let discountedPrices;
   if (labledPrice > price) {
     discountedPrices = (labledPrice - price);
     discount = discountedPrices / labledPrice * 100;
   }
   return( Math.round(discount))
}