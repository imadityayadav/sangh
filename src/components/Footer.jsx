import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-r from-orange-800 to-orange-900 text-orange-50">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Organization Info */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center mb-4">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="mr-3"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FED7AA" strokeWidth="2" />
                  <path d="M12 6V12L16 14" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold text-orange-100">SHANKH.org</h2>
                <p className="text-orange-200 text-sm">Society for Hindu Academics, Narrative (De) Construction, Knowledge, and Heritage</p>
              </div>
            </div>
            <p className="text-orange-200 mb-4">
              SHANKH is dedicated to advancing scholarly research, preserving cultural heritage, 
              and promoting nuanced understanding of Hindu traditions through academic discourse and community engagement.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-orange-200 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-orange-200 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-orange-200 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-orange-200 hover:text-white transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-lg font-semibold text-orange-100 mb-4 border-b border-orange-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#" 
                  className="text-orange-200 hover:text-white transition-colors block"
                  whileHover={{ x: 5 }}
                >
                  About SHANKH
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-orange-200 hover:text-white transition-colors block"
                  whileHover={{ x: 5 }}
                >
                  Research Initiatives
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-orange-200 hover:text-white transition-colors block"
                  whileHover={{ x: 5 }}
                >
                  Academic Resources
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-orange-200 hover:text-white transition-colors block"
                  whileHover={{ x: 5 }}
                >
                  Heritage Preservation
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-orange-200 hover:text-white transition-colors block"
                  whileHover={{ x: 5 }}
                >
                  Upcoming Events
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="text-orange-200 hover:text-white transition-colors block"
                  whileHover={{ x: 5 }}
                >
                  Contact Us
                </motion.a>
              </li>
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-lg font-semibold text-orange-100 mb-4 border-b border-orange-700 pb-2">Stay Connected</h3>
            <p className="text-orange-200 mb-4">Subscribe to our newsletter for updates on research, events, and publications.</p>
            <form className="space-y-2">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-orange-950 border border-orange-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-orange-400"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white py-2 px-4 rounded-md font-medium transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-orange-950 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-orange-300 text-sm">
          <div className="mb-2 md:mb-0">
            &copy; {currentYear} SHANKH.org - Society for Hindu Academics, Narrative (De) Construction, Knowledge, and Heritage
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;