import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../emailjs-config";

const ContactForm = ({ inView }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.USER_ID
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className={`max-w-lg mx-auto space-y-6 transition-all duration-1000 delay-300 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
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
            className="block w-full px-3 py-2 mt-1 transition-all duration-300 border rounded-md shadow-sm text-slate-300 bg-slate-700 border-slate-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400"
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
            className="block w-full px-3 py-2 mt-1 transition-all duration-300 border rounded-md shadow-sm text-slate-300 bg-slate-700 border-slate-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400"
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
          className="block w-full px-3 py-2 mt-1 transition-all duration-300 border rounded-md shadow-sm text-slate-300 bg-slate-700 border-slate-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex justify-center w-full px-4 py-2 text-sm font-medium transition-all duration-300 transform bg-blue-400 border border-transparent rounded-md shadow-sm text-slate-900 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 hover:-translate-y-1 hover:shadow-lg"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
      {submitStatus === "success" && (
        <div className="text-green-400 animate-fadeIn">
          Message sent successfully!
        </div>
      )}
      {submitStatus === "error" && (
        <div className="text-red-400 animate-fadeIn">
          Error sending message. Please try again later.
        </div>
      )}
    </form>
  );
};

const ContactSection = () => {
  const [inView, setInView] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div
      id="contact-section"
      ref={contactRef}
      className="py-16 bg-slate-800"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2
          className={`mb-8 text-4xl font-bold text-center text-blue-400 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          Contact Me
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div
            className={`transition-all duration-1000 delay-150 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
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
            <ContactForm inView={inView} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
