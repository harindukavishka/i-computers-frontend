import { useParams } from "react-router-dom"

export default function Overview() {

    const params = useParams()

    return (
        <div className="w-full h-full flex justify-center text-white items-center">
            <h1>Overview Page of {params.productId}</h1>
        </div>
    )
}