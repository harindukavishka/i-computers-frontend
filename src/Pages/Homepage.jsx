import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useEffect, useState  } from "react";
import toast from "react-hot-toast";
import { CiDeliveryTruck, CiLocationArrow1 } from "react-icons/ci";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import LoadingAnimation from "../components/loadingAnimation";
import { Link } from "react-router-dom";
import priceFormatted from "../Utility/priceFormated";
import { TbAt, TbBrandFacebook, TbBrandGoogle, TbBrandGoogleHome, TbBrandInstagram, TbBrandLinkedin, TbBrandPinterest, TbBrandTiktok, TbBrandTwitter, TbBrandYoutube, TbClock24, TbMoneybag, TbPhone, TbStar, TbTruckDelivery } from "react-icons/tb";

export default function HomePageContent() {

    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_URL + "/product")
            .then((response) => {
                setProducts(response.data);
            })
            .catch(() => {
                toast.error("Failed to fetch Products. Try again");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1024,
            settings: { slidesToShow: 3 }
            },
            {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
            },
            {
            breakpoint: 480,
            settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <>
        <div className="w-full h-[calc(100vh-80px)] p-3 relative bg-[url('herobg1.png')] bg-no-repeat bg-cover">
            <div className="">
                <h1 className="text-accent fontHero text-[150px] tracking-[5px] flex justify-start items-center absolute top-70 z-10">
                    Welcome to 
                </h1>
                <h1 className="fontMuted text-[200px] left-110 absolute bottom-0 z-10">
                    GoBasket 
                </h1>

                <h2 className="text-2xl absolute top-5 fontHeader">
                    your smart and convenient online shopping destination<br/>
                    for everyday essentials and best products.<br/>
                    We provide a fast, secure, user-friendly<br/>
                    e-commerce experience with quality <br/>
                    products at affordable prices.
                </h2>

                <button className="absolute p-3 top-55 w-[130px] h-[50px] text-accent rounded-full border border-accent hover:bg-accent/30 transision-all duration-300 flex items-center justify-between">Shop now<FaArrowUpRightFromSquare /></button>
            </div>
            
        </div>
        <div className="bg-bgLight w-full h-[550px]  p-3">
            <h1 className="text-center text-[40px] fontMuted ">Best Offers</h1>
                <div className="m-5 w-[1465px] h-[500px] "> 
                    {loading ? (
                    <LoadingAnimation />
                    ) : (
                    <Slider {...settings}>
                        {products.map((item) => (
                            <Link to={"/overview/"+item.productId} key={item.productId} className="h-[400px] p-3 bg-accent rounded-[20px] flex flex-col items-center justify-center gap-5 relative overflow-hidden">
                                <img src={item.images[1]} alt={item.name} className="h-[100px] w-[120px] lg:h-[200px] lg:w-[220px] mt-5" />
                                <div className="fontMuted tracking-[1px] absolute right-3 top-3 text-[18px] font-bold">
                                    <h1>{item.category}</h1>
                                </div>
                                <div className="absolute bottom-[-80px] right-[-15px] bg-text w-[250px] h-[250px] rounded-full">
                                    <div className="fontHeader tracking-[1px] absolute left-5 top-16 text-[22px] text-bgDark font-bold">
                                        <h1>{item.name}</h1>
                                    </div>
                                    <div className="fontHeader tracking-[1px] absolute left-5 top-24 text-[20px] text-accent line-through font-bold">
                                        <h1>{priceFormatted(item.labledPrice)}</h1>
                                    </div>
                                    <div className="fontHeader tracking-[1px] absolute left-5 top-32 text-[22px] text-bgDark font-bold">
                                        <h1>{priceFormatted(item.price)}</h1>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                    )}
                </div>    
        </div>
        <div className="bg-bgDark w-full h-[550px]  p-3">
             <h1 className="text-center text-[40px] fontMuted ">Features</h1>
             <div className="flex items-center justify-center flex-row w-full h-[400px] mt-3">
                <div className="flex flex-col items-start justify-center w-[40%] h-[450px] p-3 pl-20 mt-3">
                    <p className="text-2xl fontHero"><TbTruckDelivery className="text-accent font-bold text-4xl"/>Fast Delivery</p>
                    <span className="text-sm ">Quick and reliable delivery to your doorstep.</span>
                    <p className="text-2xl fontHero"><TbMoneybag className="text-accent font-bold text-4xl mt-5"/> Best Prices</p>
                    <span className="text-sm ">Great products at affordable prices.</span>
                    <p className="text-2xl fontHero"><TbStar className="text-accent font-bold text-4xl mt-5"/>Quality Products</p>
                    <span className="text-sm ">Carefully selected products you can trust.</span>
                    <p className="text-2xl fontHero"><TbClock24 className="text-accent font-bold text-4xl mt-5"/>24/7 Support</p>
                    <span className="text-sm ">Always here to help whenever you need us.</span>
                </div>
                <div className="flex flex-col items-center justify-center w-[60%] h-[450px] mt-3 ">
                    <img src="/Features.png" alt=""  className="object-left w-[650px] h-[350px] mt-5 rounded-[40px] bg-amber-300"/>
                </div>
             </div>
        </div>
        <div className="bg-bgDark w-full h-[560px] overflow-hidden text-bgDark">
            <div className="w-full flex relative">
                <h1 className="text-accent text-[466px] fontHero tracking-[10px] absolute top-[-150px]">GoBasket</h1>
                <div className="p-3 w-full h-[360px] flex justify-between items-center absolute top-70 bg-accent overflow-hidden gap-3">
                    <div className="mt-5 w-[470px] h-[350px] flex flex-col justify-start">
                        <p className="fontHeader text-[20px]">Our platform connects customers with the best products at the</p>
                        <p className="fontHeader text-[20px]">best prices, supported by secure payments, easy returns,</p>
                        <p className="fontHeader text-[20px]">and dedicated customer service.</p>
                        <Link to="/products" className="w-[250px] h-[50px] border-2 rounded-full p-2 text-center mt-5 font-bold hover:bg-bgDark/40 hover:pl-5 transition-all duration-500">Shop Now →</Link>
                        <div className="h-[50px] w-full flex flex-row  items-center gap-4 mt-5 text-2xl">
                            <TbBrandInstagram  className="hover:text-text transition-all duration-500"/>
                            <TbBrandFacebook className="hover:text-text transition-all duration-500"/>
                            <TbBrandTwitter className="hover:text-text transition-all duration-500"/>
                            <TbBrandLinkedin className="hover:text-text transition-all duration-500"/>
                            <TbBrandYoutube className="hover:text-text transition-all duration-500"/>
                            <TbBrandGoogle className="hover:text-text transition-all duration-500"/>
                            <TbBrandTiktok className="hover:text-text transition-all duration-500"/>
                            <TbBrandPinterest className="hover:text-text transition-all duration-500"/>

                        </div>   
                        <p className="font-bold text-sm">© 2026 GoBasket. All rights reserved</p> 
                    </div>
                    <div className="flex items-center flex-col  h-[350px] w-[230px] p-2 group text-bgDark">
                        <h1 className="fontMuted text-[30px]">About</h1>
                        <div className="w-[50px] h-[3px] bg-text rounded-full group-hover:w-[70px] transition-all duration-400"></div>
                        <div className="flex flex-col justify-center items-center text-sm">
                            <p>GoBasket is a modern</p>
                            <p> e-commerce platform</p>
                            <p>designed to make</p>
                            <p>online shopping</p>
                            <p>fast, easy, and reliable.</p>
                            <p>Our goal is</p>
                            <p>to provide a smooth</p>
                            <p>and enjoyable shopping</p>
                            <p>experience</p>
                            <p>for every customer.</p>
                        </div>
                    </div>
                    <div className="flex items-center flex-col h-[350px] w-[200px] p-2 group text-bgDark">
                        <h1 className="fontMuted text-[30px]">Contact</h1>
                        <div className="w-[50px] h-[3px] bg-text rounded-full group-hover:w-[70px] transition-all duration-400"></div>
                        <div className="flex flex-row justify-center items-center gap-3 text-sm mt-2">
                            <TbPhone />
                            <p>+1 234 567 890</p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 text-sm mt-2">
                            <TbBrandGoogleHome />
                            <p>No:123,Colombo 3</p>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 text-sm mt-2">
                            <TbAt />
                            <p>go.basket@email.com</p>
                        </div>
                    </div>
                    <div className="flex items-center flex-col h-[350px] w-[300px] p-2 group text-bgDark">
                        <h1 className="fontMuted text-[30px]">Quick Links</h1>
                        <div className="w-[50px] h-[3px] bg-text rounded-full group-hover:w-[70px] transition-all duration-400"></div>
                        <Link to="/products">Products</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/SignIn">Login</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}