export default function priceFormatted(price) {

    if(price == null){
        return "N/A";
    }

    const priceInNUmber = Number(price);

    if(isNaN(priceInNUmber)){
        return "N/A";
    }else{
        return "LKR " + priceInNUmber.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

}