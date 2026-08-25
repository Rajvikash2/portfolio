import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import profile from "../components/profile.jpg";
import ElectricBorder from "../components/reactbits/ElectricBorder";

export const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to Send Message.", {
            position: "top-center",
            autoClose: 3000,
          });
          setIsSending(false);
        },
      );
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0d0d0d] to-black flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h1
          className="font-bold text-4xl sm:text-5xl mb-12 text-center md:text-center"
          style={{ color: "#89F336" }}
        >
          Contact Me
        </h1>

        <ElectricBorder
          color="#89F336"
          speed={1}
          chaos={0.12}
          thickness={2}
          style={{ borderRadius: 16 }}
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left: form */}
            <div className="flex-1 p-8 md:p-10">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full text-white bg-white/5 px-4 py-2 border border-[#89F336]/20 rounded-md focus:ring-2 focus:ring-[#89F336]/60 focus:border-[#89F336] outline-none transition-colors placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full text-white bg-white/5 px-4 py-2 border border-[#89F336]/20 rounded-md focus:ring-2 focus:ring-[#89F336]/60 focus:border-[#89F336] outline-none transition-colors placeholder:text-gray-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full text-white bg-white/5 px-4 py-2 border border-[#89F336]/20 rounded-md focus:ring-2 focus:ring-[#89F336]/60 focus:border-[#89F336] outline-none transition-colors resize-none placeholder:text-gray-500"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3 px-4 rounded-md transition-all duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
                    isSending
                      ? "bg-gray-600 cursor-not-allowed text-gray-300"
                      : "bg-[#89F336] hover:shadow-[0_0_20px_rgba(137,243,54,0.5)] text-black focus:ring-[#89F336]"
                  }`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Right: photo */}
            <div className="md:w-[280px] lg:w-[320px] relative flex-shrink-0">
              <img
                src={profile}
                alt="Rajvikash"
                className="w-full h-64 md:h-full object-cover"
                style={{ borderRadius: "0 24px 24px 0" }}
              />
              <div
                className="absolute inset-0 md:hidden"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6), transparent 40%)",
                }}
              />
            </div>
          </div>
        </ElectricBorder>
      </div>
    </div>
  );
};
