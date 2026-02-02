import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import priceFormatted from "../../Utility/priceFormated";
import axios from "axios";


export default function AdminProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const token = localStorage.getItem("token");
    axios.get(import.meta.env.VITE_API_URL+"/product", {
      headers : {
        "Authorization" : "Bearer "+ token
      },
    }).then((response)=>{
      setProducts(response.data)
    });}
  ,[])

  return (
    <div className="w-full h-full  bg-primary/30 p-1 relative ">

      {/* Floating Add Button */}
      <Link
        to="/admin/addProduct"
        className="fixed bottom-5 right-5 z-50
                   w-14 h-14 rounded-2xl bg-accent text-white
                   flex items-center justify-center text-xl
                   shadow-lg hover:shadow-2xl
                   hover:rounded-full hover:bg-secondary
                   transition-all duration-300"
      >
        <FaPlus />
      </Link>

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-secondary">
          Products
        </h1>
        <p className="text-sm text-secondary/70">
          Manage your product catalog
        </p>
      </div>

      {/* Table Container */}
        <div className="max-h-[535px] bg-white rounded-2xl shadow-xl overflow-y-auto hide-scroll-track">
            <table className="w-full text-sm">
                {/* Table Head */}
                <thead className="uppercase tracking-wide text-left bg-secondary text-primary sticky top-0 z-10">
                <tr>
                    <th className="px-5 py-4 font-semibold">ID</th>
                    <th className="px-5 py-4 font-semibold">Product</th>
                    <th className="px-5 py-4 font-semibold">Image</th>
                    <th className="px-5 py-4 font-semibold">Category</th>
                    <th className="px-5 py-4 font-semibold">Brand</th>
                    <th className="px-5 py-4 font-semibold">Model</th>
                    <th className="px-5 py-4 font-semibold">Price</th>
                    <th className="px-5 py-4 font-semibold">Label Price</th>
                    <th className="px-5 py-4 font-semibold">Status</th>
                </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-100">
                {products.map((product, index) => (
                    <tr
                    key={product.productId}
                    className={`transition-colors
                        ${index % 2 === 0 ? "bg-white" : "bg-primary/20"}
                        hover:bg-accent/5`}
                    >
                    <td className="px-5 py-4 font-medium text-secondary whitespace-nowrap">
                        {product.productId}
                    </td>

                    <td className="px-5 py-4">
                        <div className="font-semibold text-secondary">
                        {product.name}
                        </div>
                        <div className="text-xs text-secondary/60">
                        {product.category || "Others"}
                        </div>
                    </td>

                    <td className="px-5 py-4">
                        <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-xl border"
                        />
                    </td>

                    <td className="px-5 py-4 text-secondary">
                        {product.category || "Others"}
                    </td>

                    <td className="px-5 py-4 text-secondary">
                        {product.brand}
                    </td>

                    <td className="px-5 py-4 text-secondary">
                        {product.model}
                    </td>

                    <td className="px-5 py-4 text-left font-semibold text-secondary">
                        {priceFormatted(product.price)}
                    </td>

                    <td className="px-5 py-4 text-left text-secondary/70 line-through">
                        {priceFormatted(product.labledPrice)}
                    </td>

                    <td className="px-5 py-4 text-center">
                        {product.isVisible ? (
                            <span className="flex items-center justify-center text-sm px-2 py-1 gap-2 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"><span className="w-2 h-2 rounded-full bg-green-600"/> Visible</span>
                        ) : ( <span className="flex items-center justify-center text-sm px-2 py-1 gap-2 font-semibold leading-tight text-red-700 bg-red-100 rounded-full"><span className="w-2 h-2 rounded-full bg-red-600"/>Hidden</span>)}
                    </td>
                    </tr>
                ))}
                </tbody>
                <tfoot className="sticky bottom-0 z-10">
                  <tr className="flex  h-[30px] bg-white   py-2 px-4">
                    <td className="text-[9px] font-bold text-secondary/70 ">Tip : Scroll please</td>
                  </tr>
                </tfoot>
            </table>
        </div>
    </div>
  );
}
