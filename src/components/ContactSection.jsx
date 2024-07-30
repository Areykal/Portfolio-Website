import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm text-slate-300 bg-slate-700 border-slate-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm text-slate-300 bg-slate-700 border-slate-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm text-slate-300 bg-slate-700 border-slate-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="flex justify-center w-full px-4 py-2 text-sm font-medium bg-blue-400 border border-transparent rounded-md shadow-sm text-slate-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

const ContactSection = () => {
  return (
    <div
      id="contact-section"
      className="py-16 bg-slate-800"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-4xl font-bold text-center text-blue-400">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="mb-8 text-slate-300">
              I'm always open to new opportunities, collaborations, or just a
              friendly chat about technology. Feel free to reach out using the
              form or through any of the contact methods listed below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-slate-300">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-3 text-blue-400"
                />
                <span>areykalkh@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-3 text-blue-400"
                />
                <span>+855 86 794 230</span>
              </div>
              <div className="flex items-center text-slate-300">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-3 text-blue-400"
                />
                <span>Phnom Penh, Cambodia</span>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
