import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add API integration here
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-16 px-6 md:px-20 lg:px-40 text-white"
    >
      <div
        className="max-w-xl w-full relative p-1"
        style={{ perspective: "1000px" }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8245ec] via-[#2c5364] to-[#232526] animate-gradient-move blur-md opacity-60"></div>
        <div className="relative bg-[#232526]/80 rounded-2xl shadow-2xl p-8 text-left backdrop-blur-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#8245ec] inline-block relative">
            Contact Me
            <span className="block h-1 w-16 mt-2 bg-gradient-to-r from-[#8245ec] via-[#2c5364] to-[#8245ec] rounded-full animate-pulse"></span>
          </h2>
          {submitted ? (
            <p className="text-lg text-white/90 mb-6">
              Thank you for reaching out! I'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Manyatha M"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-[#2c5364]/60 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
              />
              <input
                type="email"
                name="email"
                placeholder="mailtomanyatha@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-[#2c5364]/60 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 rounded-lg bg-[#2c5364]/60 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#8245ec] via-[#2c5364] to-[#8245ec] text-white font-bold hover:scale-105 transition-transform"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
