import React, { useState } from "react";
import {
  TbPhone,
  TbAt,
  TbMapPin,
  TbClock24,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandYoutube,
  TbSend,
} from "react-icons/tb";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactItems = [
    {
      icon: TbPhone,
      title: "Phone",
      text: "+1 234 567 890",
    },
    {
      icon: TbAt,
      title: "Email",
      text: "go.basket@email.com",
    },
    {
      icon: TbMapPin,
      title: "Address",
      text: "No: 123, Colombo 3",
    },
    {
      icon: TbClock24,
      title: "Hours",
      text: "24/7 Support Available",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-bgDark text-text overflow-hidden">
      {/* Hero */}
      <section className="relative w-full min-h-[60vh] flex items-center px-6 lg:px-16 py-20 bg-[url('herobg1.png')] bg-no-repeat bg-cover ">
        <div className="absolute inset-0 bg-bgDark/75"></div>

        <div className="relative z-10 max-w-4xl">
          <p className="fontMuted text-accent text-xl md:text-2xl mb-3 animate-pulse">
            CONTACT GOBASKET
          </p>

          <h1 className="fontHero text-5xl md:text-7xl lg:text-8xl leading-none tracking-[3px]">
            Let’s Talk
            <span className="block text-accent mt-2">We Are Here For You</span>
          </h1>

          <p className="fontHeader text-base md:text-lg text-textMuted max-w-2xl mt-6 leading-8">
            Got a question, need help, or want to work with us? Reach out anytime.
            We’re always ready to support you.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="w-full px-6 lg:px-16 py-16 bg-bg">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-bgLight rounded-[24px] p-6 border border-white/5 hover:border-accent/50 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <Icon className="text-accent text-3xl" />
                </div>
                <h3 className="fontHero text-2xl text-text">{item.title}</h3>
                <p className="fontHeader text-textMuted mt-2">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + social */}
      <section className="w-full px-6 lg:px-16 py-20 bg-bgDark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="fontMuted text-4xl md:text-5xl text-text">
              Send Us a <span className="text-accent">Message</span>
            </h2>

            <p className="fontHeader text-textMuted leading-8 max-w-xl">
              Fill out the form and our team will get back to you as soon as possible.
              We keep things simple, quick, and friendly.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-bgDark transition-all duration-300 hover:scale-110"
              >
                <TbBrandFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-bgDark transition-all duration-300 hover:scale-110"
              >
                <TbBrandInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-bgDark transition-all duration-300 hover:scale-110"
              >
                <TbBrandTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-bgDark transition-all duration-300 hover:scale-110"
              >
                <TbBrandYoutube className="text-xl" />
              </a>
            </div>
          </div>

          <div className="bg-bgLight border border-white/5 rounded-[28px] p-6 md:p-8 shadow-lg shadow-black/20">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block fontHeader text-sm text-textMuted mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-bgDark border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-all duration-300 text-text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block fontHeader text-sm text-textMuted mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-bgDark border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-all duration-300 text-text"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block fontHeader text-sm text-textMuted mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-bgDark border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-all duration-300 text-text"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block fontHeader text-sm text-textMuted mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-bgDark border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-accent transition-all duration-300 text-text resize-none"
                  placeholder="Write your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-text hover:bg-accent/90 transition-all duration-300 hover:scale-105"
              >
                Send Message <TbSend className="text-xl" />
              </button>

              {submitted && (
                <div className="mt-4 text-green-400 fontHeader animate-pulse">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer-style bottom banner */}
      <section className="w-full px-6 lg:px-16 py-14 bg-accent text-bgDark">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="fontHero text-4xl md:text-6xl">We’d Love To Hear From You</h2>
          <p className="fontHeader text-lg mt-4">
            Questions, support, feedback, or partnership ideas — just drop a message.
          </p>
        </div>
      </section>
    </div>
  );
}