import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import TextAnimation from "@/components/TextAnimation";
import TextMaskAnimation from "@/components/TextMaskAnimation";
import { motion } from "motion/react";
import Head from "next/head";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    message: "",
    isError: false,
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus({ loading: true, message: "", isError: false });

      try {
        const response = await fetch("/send-email.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus({
            loading: false,
            message: "Thank you for your message!",
            isError: false,
          });
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error(data.message || "Failed to send message");
        }
      } catch (error) {
        setSubmitStatus({
          loading: false,
          message: error.message || "Failed to send message. Please try again.",
          isError: true,
        });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Graphly - Let&apos;s Bring Your Vision to Life</title>
        <meta
          name="description"
          content="Get in touch with Graphly for expert branding, web design, and digital marketing services. Let's collaborate!"
        />
        <meta
          name="keywords"
          content="Graphly Contact, Get in Touch, Digital Agency, Branding Services"
        />
        <meta
          property="og:title"
          content="Contact Graphly - Let's Bring Your Vision to Life"
        />
        <meta
          property="og:description"
          content="Reach out to Graphly for branding, design, and marketing services. Let’s discuss your next project!"
        />
        <meta property="og:image" content="/og-contact.jpg" />
        <meta property="og:url" content="https://graphlyco.com/contact" />
        <link rel="canonical" href="https://graphlyco.com/contact" />
      </Head>

      <PageTransition>
        <div className="bg-zinc-100">
          <Header />
          <section className="grid sm:grid-cols-2 py-section pt-[30vh] px-mediumSection gap-base">
            <div className="flex justify-between flex-col">
              <h2 className="text-desc uppercase text-zinc-900 font-medium">
                <TextAnimation text="Need a fresh" once />
                <TextAnimation text="Perspective?" once />
              </h2>
              <p className="text-zinc-900 text-[1.2em] font-medium mt-5 sm:mt-0">
                <TextMaskAnimation
                  phrases={[
                    "We engage in projects of varying scales – from helping startups to",
                    "global brands. Get in touch to see how we can help you.",
                  ]}
                />
              </p>
            </div>
            <motion.div
              className="mt-10 sm:mt-0"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: [0.83, 0, 0.17, 1],
              }}>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col text-zinc-900 font-medium">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`mt-3 bg-transparent border-b outline-none py-3 placeholder:text-2xl transition-colors duration-200 ${
                    errors.name ? "border-red-500" : "border-zinc-400"
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </span>
                )}

                <label htmlFor="email" className="mt-10">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`mt-3 bg-transparent outline-none border-b py-3 placeholder:text-2xl transition-colors duration-200 ${
                    errors.email ? "border-red-500" : "border-zinc-400"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </span>
                )}

                <label htmlFor="message" className="mt-10">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-3 bg-transparent outline-none border-b py-3 transition-colors duration-200 ${
                    errors.message ? "border-red-500" : "border-zinc-400"
                  }`}
                  rows={3}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </span>
                )}

                <button
                  type="submit"
                  className="mt-10 w-36 text-zinc-100"
                  disabled={submitStatus.loading}>
                  <Button isButton>
                    {submitStatus.loading ? "SENDING..." : "SEND FORM"}
                  </Button>
                </button>

                {submitStatus.message && (
                  <div
                    className={`mt-4 text-sm ${
                      submitStatus.isError ? "text-red-500" : "text-green-500"
                    }`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </motion.div>
          </section>
          <Footer />
        </div>
      </PageTransition>
    </>
  );
};

export default Contact;
