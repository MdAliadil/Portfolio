"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const formItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export default function Contact() {
  // Container variant that staggers the appearance of its children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  // Function to handle form submission using Web3 Forms API
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Append the access key provided by Web3 Forms
    formData.append("access_key", "ec3744c4-af5f-4986-92f3-6a6c2f18a5a1");

    // Convert the form data to JSON
    const data = Object.fromEntries(formData.entries());
    const json = JSON.stringify(data);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const res = await response.json();
      if (res.success) {
        alert("Form submitted successfully!");
        // Optionally reset the form after submission
        event.target.reset();
      } else {
        alert("Error submitting form. Please try again.");
        console.error("Submission error:", res);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <>
      <motion.section
        id="contact"
        className="py-16 bg-black text-white px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            className="w-full md:w-1/2"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100 },
              },
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Feel free to reach out! I’m open to discussing projects,
              freelance opportunities, or just chatting about tech.
            </p>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <FiPhone className="text-indigo-400" size={20} />
                <span className="text-gray-200 text-sm sm:text-base">
                  +91 9151611141
                </span>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <FiMail className="text-indigo-400" size={20} />
                <span className="text-gray-200 text-sm sm:text-base">
                adilali0226@gmail.com
                </span>
              </div>
              {/* Location */}
              <div className="flex items-center gap-3">
                <FiMapPin className="text-indigo-400" size={20} />
                <span className="text-gray-200 text-sm sm:text-base">
                  Lucknow, Uttar Pradesh, India
                </span>
              </div>
            </div>
          </motion.div>

        
        </motion.div>
      </motion.section>

      {/* Footer Section */}
      <motion.footer
        className="bg-neutral-900 text-gray-400 py-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-between gap-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Adil. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Powered by React, Tailwind CSS, and ♥
          </p>
        </div>
      </motion.footer>
    </>
  );
}
