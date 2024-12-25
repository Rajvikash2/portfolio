import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
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
          console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
          console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
          console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

          toast.error("Failed to Send Message.", {
            position: "top-center",
            autoClose: 3000,
          });
          setIsSending(false);
        }
      );
  };

  return (
    <div className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto rounded-xl shadow-lg p-8 bg-black">
        <h1 className="font-bold text-pink-600 text-4xl mb-12">Contact Me</h1>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-200">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-2 px-4 rounded-md transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isSending
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};
