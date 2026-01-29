import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import priceFormatted from "../../Utility/priceFormated";

const sampleProducts = [
  {
    productId: "PRD001",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with adjustable DPI",
    altNames: ["Mouse Wireless", "Cordless Mouse"],
    price: 2500,
    labledPrice: 3000,
    category: "Electronics",
    images: [
      "/images/mouse-1.png",
      "/images/mouse-2.png"
    ],
    isVisible: true,
    brand: "Logitech",
    model: "M185"
  },
  {
    productId: "PRD002",
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with blue switches",
    altNames: ["Gaming Keyboard", "RGB Keyboard"],
    price: 12500,
    labledPrice: 15000,
    category: "Electronics",
    images: [
      "/images/keyboard-1.png",
      "/images/keyboard-2.png"
    ],
    isVisible: true,
    brand: "Redragon",
    model: "K552"
  },
  {
    productId: "PRD003",
    name: "USB-C Charger",
    description: "Fast charging USB-C wall charger 25W",
    altNames: ["Type-C Charger", "Fast Charger"],
    price: 3500,
    labledPrice: 4000,
    category: "Accessories",
    images: [
      "/images/charger-1.png"
    ],
    isVisible: true,
    brand: "Samsung",
    model: "EP-TA800"
  },
  {
    productId: "PRD004",
    name: "Laptop Backpack",
    description: "Water-resistant backpack for 15.6 inch laptops",
    altNames: ["Notebook Bag", "Laptop Bag"],
    price: 6500,
    labledPrice: 7500,
    category: "Bags",
    images: [
      "/images/bag-1.png",
      "/images/bag-2.png"
    ],
    isVisible: true,
    brand: "Targus",
    model: "CitySmart"
  },
  {
    productId: "PRD005",
    name: "Bluetooth Headphones",
    description: "Over-ear wireless headphones with noise isolation",
    altNames: ["Wireless Headset", "Bluetooth Headset"],
    price: 18000,
    labledPrice: 20000,
    category: "Audio",
    images: [
      "/images/headphones-1.png"
    ],
    isVisible: false,
    brand: "Sony",
    model: "WH-1000XM4"
  },
  {
  productId: "PRD006",
  name: "Smart LED Bulb",
  description: "WiFi enabled smart LED bulb with mobile app control",
  altNames: ["Smart Bulb", "WiFi LED Light"],
  price: 4200,
  labledPrice: 5000,
  category: "Electronics",
  images: [
    "/images/bulb-1.png",
    "/images/bulb-2.png"
  ],
  isVisible: true,
  brand: "Philips",
  model: "Hue White"
},
{
  productId: "PRD007",
  name: "External Hard Drive",
  description: "Portable 1TB USB 3.0 external hard drive",
  altNames: ["Portable HDD", "External Storage"],
  price: 18500,
  labledPrice: 21000,
  category: "Storage",
  images: [
    "/images/hdd-1.png"
  ],
  isVisible: true,
  brand: "Seagate",
  model: "Expansion 1TB"
},
{
  productId: "PRD008",
  name: "Webcam HD",
  description: "Full HD 1080p webcam with built-in microphone",
  altNames: ["HD Webcam", "USB Camera"],
  price: 7200,
  labledPrice: 8500,
  category: "Accessories",
  images: [
    "/images/webcam-1.png"
  ],
  isVisible: true,
  brand: "Logitech",
  model: "C920"
}

];


export default function AdminProductPage() {
  const [products, setProducts] = useState(sampleProducts);

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
        <div className="max-h-[525px] bg-white rounded-2xl shadow-xl overflow-y-auto">
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
            </table>
        </div>
    </div>
  );
}
