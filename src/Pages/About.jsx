import React from "react";
import { Link } from "react-router-dom";
import {
  TbTruckDelivery,
  TbShieldCheck,
  TbClock24,
  TbStar,
  TbUsers,
  TbSparkles,
  TbArrowRight,
} from "react-icons/tb";

export default function AboutPage() {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "500+", label: "Products Delivered" },
    { number: "24/7", label: "Support" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      icon: TbTruckDelivery,
      title: "Fast Delivery",
      text: "We focus on getting your products to your doorstep quickly and safely.",
    },
    {
      icon: TbShieldCheck,
      title: "Trusted Service",
      text: "A secure and reliable shopping experience from start to finish.",
    },
    {
      icon: TbStar,
      title: "Quality First",
      text: "We select products carefully so customers always get good value.",
    },
    {
      icon: TbClock24,
      title: "Always Available",
      text: "Our support and shopping experience are built to stay active anytime.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-bgDark text-text overflow-hidden">
      {/* Hero */}
      <section className="relative w-full min-h-[90vh] flex items-center px-6 lg:px-16 py-20 bg-[url('herobg1.png')] bg-no-repeat bg-cover ">
        <div className="absolute inset-0 bg-bgDark/70"></div>

        <div className="relative z-10 max-w-4xl">
          <p className="fontMuted text-accent text-xl md:text-2xl mb-3 animate-pulse">
            ABOUT GOBASKET
          </p>

          <h1 className="fontHero text-5xl md:text-7xl lg:text-8xl leading-none tracking-[3px] text-text">
            We Make Shopping
            <span className="block text-accent mt-2">Simple, Fast & Smart</span>
          </h1>

          <p className="fontHeader text-base md:text-lg text-textMuted max-w-2xl mt-6 leading-8">
            GoBasket is a modern e-commerce platform built to make everyday shopping easier.
            We bring together great products, affordable prices, and a smooth user experience
            so customers can shop with confidence and comfort.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent text-accent hover:bg-accent hover:text-text transition-all duration-300 hover:scale-105"
            >
              Shop Now <TbArrowRight className="text-xl" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-textMuted text-textMuted hover:border-text hover:text-text transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
 
      </section>

      {/* Story */}
      <section className="w-full px-6 lg:px-16 py-20 bg-bg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="fontMuted text-4xl md:text-5xl text-text">
              Why <span className="text-accent">GoBasket</span>?
            </h2>

            <p className="fontHeader text-lg text-textMuted leading-8">
              We are not just another online store. GoBasket is built for people who want
              convenience, speed, and trustworthy service in one place. From daily essentials
              to trending products, we aim to create a shopping experience that feels easy and enjoyable.
            </p>

            <p className="fontHeader text-lg text-textMuted leading-8">
              Our platform is designed with a modern UI, secure transactions, and customer-friendly
              support so every visit feels smooth from browsing to checkout.
            </p>

            <div className="flex items-center gap-3 text-accent fontHeader text-xl">
              <TbUsers className="text-3xl" />
              Built for real people, real needs, and real convenience.
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-bgLight border border-white/5 rounded-[24px] p-6 hover:-translate-y-2 hover:border-accent/40 transition-all duration-500 shadow-lg shadow-black/20"
              >
                <h3 className="fontHero text-4xl text-accent">{item.number}</h3>
                <p className="fontHeader text-textMuted mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full px-6 lg:px-16 py-20 bg-bgDark">
        <div className="text-center mb-12">
          <h2 className="fontMuted text-4xl md:text-5xl text-text">
            Our <span className="text-accent">Core Values</span>
          </h2>
          <p className="fontHeader text-textMuted mt-4 max-w-2xl mx-auto">
            Simple ideas, strong execution, and a sharp customer focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-bgLight rounded-[24px] p-6 border border-white/5 hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-accent text-3xl" />
                </div>
                <h3 className="fontHero text-2xl text-text mb-3">{item.title}</h3>
                <p className="fontHeader text-textMuted leading-7">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-6 lg:px-16 py-20 bg-accent text-bgDark">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="fontHero text-5xl md:text-7xl tracking-[2px]">
            Ready to Shop?
          </h2>
          <p className="fontHeader text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-8">
            Explore products, enjoy simple checkout, and experience a modern online store built
            to make your shopping faster and easier.
          </p>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-bgDark text-text hover:bg-bgDark/90 transition-all duration-300 hover:scale-105"
          >
            Start Shopping <TbArrowRight className="text-xl" />
          </Link>
        </div>
      </section>
    </div>
  );
}