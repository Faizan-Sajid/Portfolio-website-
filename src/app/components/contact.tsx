// pages/contact.tsx
"use client";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-teal-600 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We’d love to hear from you! Please fill out the form below to get in touch.
        </p>
        
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
