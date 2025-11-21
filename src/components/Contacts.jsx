import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS service
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PRIMARY_ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const formControls = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-blue-400">Touch</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                variants={formControls}
                initial="hidden"
                whileInView="visible"
                custom={1}
              >
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div
                variants={formControls}
                initial="hidden"
                whileInView="visible"
                custom={2}
              >
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              <motion.div
                variants={formControls}
                initial="hidden"
                whileInView="visible"
                custom={3}
              >
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></motion.textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Send Message
              </motion.button>
            </form>
            <AnimatePresence>
              {status && (
                <motion.div
                  className="text-center text-white mt-4 p-4 bg-gray-700 rounded-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{status}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
