import React from "react";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  // Services/activities data
  const activities = [
    {
      id: 1,
      title: "Spiritual Practices",
      description: "Guided meditation, yoga classes, and spiritual discourses by experienced gurus focusing on ancient Vedic traditions.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Cultural Education",
      description: "Classes on Sanskrit, classical dance forms, music, and Hindu philosophy for all age groups to preserve and spread cultural knowledge.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 20C3 16.6863 7.02944 14 12 14C16.9706 14 21 16.6863 21 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 8C15 8 16 7 18 7C20 7 21 8 21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 8C9 8 8 7 6 7C4 7 3 8 3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Festival Celebrations",
      description: "Organizing authentic celebrations for major Hindu festivals including Diwali, Holi, Navratri, and Janmashtami with traditional rituals.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.36 6.36L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.36 18.36L17.64 17.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.36 17.64L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.36 5.64L17.64 6.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Community Service",
      description: "Seva initiatives including food drives, educational support for underprivileged children, and assistance for the elderly in our community.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Ayurvedic Wellness",
      description: "Traditional Ayurvedic consultations, workshops on holistic health practices, and natural remedies based on ancient Hindu medicinal knowledge.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 22L12 13L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.36 17.43L2 12L12 2L22 12L17.64 17.43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Temple Services",
      description: "Daily pujas, special ceremonial rituals, religious counseling, and traditional Hindu wedding ceremonies conducted by our experienced priests.",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 21V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 7V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Decorative Om symbol
  const OmSymbol = () => (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,15c-19.33,0-35,15.67-35,35s15.67,35,35,35s35-15.67,35-35S69.33,15,50,15z M68.92,62.39
        c-1.05,1.89-2.5,3.45-4.33,4.68c-1.83,1.23-3.94,1.85-6.33,1.85c-2.45,0-4.7-0.62-6.76-1.85c-2.06-1.23-3.69-2.95-4.9-5.15
        c-1.21-2.2-1.81-4.68-1.81-7.43c0-2.75,0.6-5.25,1.81-7.48c1.21-2.23,2.81-3.98,4.81-5.25c2-1.26,4.18-1.9,6.53-1.9
        c2.39,0,4.6,0.64,6.62,1.91c2.02,1.27,3.66,3.05,4.92,5.32c1.26,2.27,1.89,4.87,1.89,7.79C70.36,57.81,69.88,60.5,68.92,62.39z
        M42.5,36.5c0,0-8-0.5-14,10c0,0-4,8-1,15c0,0,3,6,11,6c0,0-12-2-12-16S42.5,36.5,42.5,36.5z M70,35c0,0-9-17-30-12
        c0,0-26,7-15,32c0,0-8-19,11-25C36,30,54,25,70,35z M64,68c0,0-7,7-17,2c0,0,14,10,22-2L64,68z"/>
    </svg>
  );

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 -ml-12 -mt-12 text-orange-200 opacity-20">
        <OmSymbol />
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 -mr-12 -mb-12 text-orange-200 opacity-20">
        <OmSymbol />
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6 relative inline-block">
            What We Do
            <motion.div 
              className="absolute -bottom-3 left-0 right-0 h-1 bg-orange-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Preserving and promoting Hindu culture through a range of spiritual, educational, and community services that enrich the mind, body, and soul.
          </p>
        </motion.div>

        {/* Activities grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Decorative corner */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-100 rounded-full transition-all duration-300 group-hover:bg-orange-200" />
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    {activity.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-orange-800 group-hover:text-orange-600 transition-colors duration-300">
                    {activity.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-18">
                  {activity.description}
                </p>
                <motion.div 
                  className="mt-4 ml-18 inline-flex items-center font-medium text-orange-600 group-hover:text-orange-700"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Learn more
                  <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="max-w-3xl mx-auto px-6 py-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl shadow-lg text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mt-10 -mr-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -mb-10 -ml-10" />
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Cultural Community</h3>
            <p className="mb-6 text-orange-100">
              Become a part of our vibrant community and experience the rich traditions and spiritual practices of Hindu culture.
            </p>
            <motion.button 
              className="px-8 py-3 bg-white text-orange-600 font-bold rounded-lg shadow-md hover:bg-orange-50 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become A Member
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;