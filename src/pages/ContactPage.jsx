import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, PhoneCall, MapPin, Mail, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Form submission logic would go here
  };
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with decorative element */}
     <Navbar/>
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-16 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto pt-10">
          <div className="mb-12 max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              {...fadeIn}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-500">Connect</span> with SHANKH
            </motion.h1>
            <motion.p 
              className="text-gray-300 text-lg md:text-xl"
              {...fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Society for Hindu Academics, Narrative (De)Construction, Knowledge, and Heritage
            </motion.p>
            <motion.div 
              className="h-1 w-24 bg-orange-500 mt-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-gray-800 p-8 rounded-lg shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 opacity-10 rounded-bl-full transform -translate-y-12 translate-x-12" />
              
              <h2 className="text-2xl font-bold mb-6 text-orange-400">Get in Touch</h2>
              
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        required
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition duration-300 mt-2"
                    >
                      <span>Send Message</span>
                      <Send className="ml-2 h-4 w-4" />
                    </motion.button>
                  </div>
                </form>
              ) : (
                <motion.div 
                  className="py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-orange-500 bg-opacity-20 mb-6">
                    <Send className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-orange-400">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for reaching out. We will get back to you shortly.</p>
                </motion.div>
              )}
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 text-orange-400">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  Connect with us to learn more about our academic research, cultural initiatives, and upcoming events.
                </p>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-800 border border-gray-700 text-orange-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Visit Us</h3>
                    <p className="text-gray-300 mt-1">123 Academic Boulevard<br />Cambridge, MA 02138</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-800 border border-gray-700 text-orange-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email Us</h3>
                    <p className="text-gray-300 mt-1">contact@shankh.org<br />research@shankh.org</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-800 border border-gray-700 text-orange-500">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Call Us</h3>
                    <p className="text-gray-300 mt-1">(555) 123-4567<br />(555) 765-4321</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gray-800 border border-gray-700 text-orange-500">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Office Hours</h3>
                    <p className="text-gray-300 mt-1">Monday-Friday: 9am to 5pm<br />Saturday: 10am to 2pm</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="bg-gray-800 p-6 rounded-lg mt-8 border border-gray-700"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-bold mb-3 text-orange-400">Subscribe to Our Newsletter</h3>
                <p className="text-gray-300 text-sm mb-4">Stay updated with our latest research, events, and cultural initiatives.</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default ContactPage;