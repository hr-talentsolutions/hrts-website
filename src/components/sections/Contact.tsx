"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  requirement: Yup.string().required("Please select a service"),
  message: Yup.string().min(10, "Tell us a bit more...").required("Required"),
});

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      requirement: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form Values:", values);
      setIsSubmitted(true);
      setSubmitting(false);
      resetForm();
      setTimeout(() => setIsSubmitted(false), 5000);
    },
  });

  return (
    <section id="contact" className="py-20 lg:py-24 px-6 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Info Side */}
          <div>
            <h2 className="text-[10px] lg:text-xs font-bold text-secondary tracking-widest uppercase mb-4 opacity-100">Contact Us</h2>
            <h3 className="text-2xl lg:text-4xl font-display font-black text-primary mb-6 tracking-tight uppercase leading-[1.1]">
              Let’s Build Your <br /> <span className="text-secondary">Workforce Strategy</span>
            </h3>
            <p className="text-base lg:text-lg text-text-sub mb-10 max-w-md font-medium opacity-80 leading-relaxed">
              Tell us your hiring needs — our experts will connect within 24 hours to help you scale faster.
            </p>

            <div className="space-y-8 mb-12">
              {[
                { icon: Mail, label: "Email Us", value: "info@hrtalentsolutions.com", href: "mailto:info@hrtalentsolutions.com" },
                { icon: Phone, label: "Call Us", value: "+91 7569067002", href: "tel:+917569067002" },
                { icon: MapPin, label: "Visit Us", value: "Hyderabad, Telangana", href: "#" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a key={i} href={item.href} className="flex gap-6 items-start group/contact">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover/contact:bg-primary group-hover/contact:text-white transition-all duration-300">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-[10px] lg:text-xs font-bold text-secondary mb-1 uppercase tracking-wider">{item.label}</h4>
                      <p className="text-base lg:text-lg text-text-main font-bold group-hover/contact:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/917569067002" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-black text-base shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all duration-300 group"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.589.945 3.554 1.443 5.548 1.444 5.454 0 9.893-4.438 9.895-9.892.001-2.641-1.026-5.124-2.894-6.992s-4.352-2.895-6.994-2.895c-5.454 0-9.891 4.438-9.893 9.893a9.851 9.851 0 001.484 5.214l-.969 3.537 3.622-.95zm11.366-4.39 c-.327-.164-1.938-.956-2.239-1.066-.301-.11-.52-.164-.739.164-.219.328-.847 1.066-1.039 1.284-.191.219-.382.246-.709.082-.327-.164-1.381-.509-2.631-1.623-.974-.869-1.631-1.942-1.822-2.269-.191-.328-.021-.505.143-.668.148-.146.327-.382.491-.574.164-.191.219-.328.327-.546.109-.219.055-.41-.027-.574-.082-.164-.739-1.776-1.011-2.433-.266-.641-.536-.554-.739-.564-.189-.01-.406-.011-.624-.011-.219 0-.575.082-.876.41-.301.328-1.149 1.121-1.149 2.733s1.176 3.172 1.34 3.39c.164.219 2.314 3.535 5.603 4.953.782.337 1.393.538 1.868.689.786.25 1.501.214 2.067.13.63-.094 1.938-.792 2.212-1.558.273-.765.273-1.42.191-1.558-.082-.137-.301-.219-.628-.383z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="p-8 lg:p-10 rounded-[40px] shadow-2xl border border-primary/10 bg-[#FFFAF3]/50 backdrop-blur-sm relative z-10 transition-all">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-primary mb-4">Message Sent!</h4>
                    <p className="text-text-sub">Thank you for reaching out. Our team will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={formik.handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-sm font-bold text-primary mb-2">Full Name</label>
                        <input
                          type="text"
                          name="fullName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.fullName}
                          className={`w-full bg-[#FFFAF3] border rounded-2xl px-5 py-2.5 outline-none transition-all text-sm ${
                            formik.touched.fullName && formik.errors.fullName 
                              ? "ring-2 ring-accent border-accent" 
                              : "border-primary/20 focus:ring-2 focus:ring-primary"
                          }`}
                          placeholder="John Doe"
                        />
                        {formik.touched.fullName && formik.errors.fullName && (
                          <p className="mt-1 text-xs text-accent font-medium">{formik.errors.fullName}</p>
                        )}
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-bold text-primary mb-2">Work Email</label>
                        <input
                          type="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          className={`w-full bg-[#FFFAF3] border rounded-2xl px-5 py-2.5 outline-none transition-all text-sm ${
                            formik.touched.email && formik.errors.email 
                              ? "ring-2 ring-accent border-accent" 
                              : "border-primary/20 focus:ring-2 focus:ring-primary"
                          }`}
                          placeholder="john@company.com"
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="mt-1 text-xs text-accent font-medium">{formik.errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Requirement</label>
                      <select 
                        name="requirement"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.requirement}
                        className={`w-full bg-[#FFFAF3] border rounded-2xl px-5 py-2.5 outline-none transition-all appearance-none cursor-pointer text-sm ${
                          formik.touched.requirement && formik.errors.requirement
                            ? "ring-2 ring-accent border-accent"
                            : "border-primary/20 focus:ring-2 focus:ring-primary"
                        }`}
                      >
                        <option value="">Select a service</option>
                        <option value="talent-acquisition">Talent Acquisition</option>
                        <option value="rpo">RPO (Recruitment Process Outsourcing)</option>
                        <option value="temporary-staffing">Temporary Staffing</option>
                        <option value="payroll">Payroll Management</option>
                        <option value="compliance">Statutory Compliance</option>
                        <option value="workforce">Workforce Management</option>
                      </select>
                      {formik.touched.requirement && formik.errors.requirement && (
                        <p className="mt-1 text-xs text-accent font-medium">{formik.errors.requirement}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Message</label>
                      <textarea
                        name="message"
                        rows={4}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                        className={`w-full bg-[#FFFAF3] border rounded-2xl px-5 py-2.5 outline-none transition-all text-sm resize-none ${
                          formik.touched.message && formik.errors.message
                            ? "ring-2 ring-accent border-accent"
                            : "border-primary/20 focus:ring-2 focus:ring-primary"
                        }`}
                        placeholder="How can we help your business?"
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <p className="mt-1 text-xs text-accent font-medium">{formik.errors.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit"
                      disabled={formik.isSubmitting}
                      className="w-full group py-4 rounded-xl shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 text-white font-bold h-12 text-base transition-all active:scale-[0.98] disabled:opacity-70"
                    >
                      {formik.isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
