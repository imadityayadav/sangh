import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('vision');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  
  // Founding Members Data (Updated)
  const foundingMembers = [
    {
      id: 1,
      name: "Er. Alok K. Singh",
      title: "Chairperson",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      bio: "Er. Alok K. Singh is a dedicated advocate for Hindu intellectual traditions with extensive experience in developing platforms that bridge ancient wisdom with contemporary challenges.",
      specialization: "Hindu Philosophy, Cultural Heritage"
    },
    {
      id: 2,
      name: "Dr. Mrityunjay Rao",
      title: "Secretary",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Dr. Rao has contributed significantly to the documentation and preservation of Hindu knowledge systems. His research focuses on making traditional wisdom accessible to modern audiences.",
      specialization: "Vedic Studies, Knowledge Preservation"
    },
    {
      id: 3,
      name: "Dr. Raghvendra Singh",
      title: "Vice-chairperson",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "With a background in both academic research and cultural advocacy, Dr. Singh provides strategic direction to SHANKH's initiatives for preserving Hindu intellectual heritage.",
      specialization: "Cultural Research, Strategic Planning"
    },
    {
      id: 4,
      name: "Mr. Abhinav Mishra",
      title: "Joint-secretary",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      bio: "Mr. Mishra brings extensive experience in community engagement and program development, helping SHANKH create impactful outreach initiatives across diverse communities.",
      specialization: "Community Outreach, Program Development"
    },
    {
      id: 5,
      name: "Dr. Udit Kumar",
      title: "Member",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Dr. Kumar's research combines traditional Hindu knowledge systems with contemporary scientific approaches, creating innovative frameworks for addressing modern challenges.",
      specialization: "Interdisciplinary Research, Knowledge Integration"
    },
    {
      id: 6,
      name: "Dr. Vidhi Singh",
      title: "Member",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      bio: "An expert in Hindu textual traditions, Dr. Singh leads initiatives to make ancient texts accessible and relevant to contemporary audiences through innovative educational programs.",
      specialization: "Textual Studies, Educational Innovation"
    },
    {
      id: 7,
      name: "Dr. Kunwar Shekhar",
      title: "Member",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      bio: "Dr. Shekhar specializes in documenting and preserving traditional knowledge systems, focusing particularly on indigenous practices that offer sustainable solutions to modern problems.",
      specialization: "Traditional Knowledge Systems, Sustainability"
    }
  ];
  
  // Current Members Data
  const currentMembers = [
    {
      id: 1,
      name: "Dr. Priya Nayak",
      title: "Environmental Initiatives Lead",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      specialization: "Ecological Conservation, Vedic Environmentalism"
    },
    {
      id: 2,
      name: "Prof. Sunil Mehta",
      title: "Academic Publications Head",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      specialization: "Hindu Philosophy, Darshana Studies"
    },
    {
      id: 3,
      name: "Dr. Lakshmi Venkatesh",
      title: "Youth Programs Coordinator",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      specialization: "Education, Cultural Pedagogy"
    },
    {
      id: 4,
      name: "Shri Arjun Deshmukh",
      title: "Arts & Performance Director",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      specialization: "Classical Arts, Performance Traditions"
    },
    {
      id: 5,
      name: "Dr. Harish Iyer",
      title: "Technology & Innovation Head",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      specialization: "Digital Archives, Knowledge Preservation"
    },
    {
      id: 6,
      name: "Ms. Sunita Patel",
      title: "International Relations Coordinator",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      specialization: "Cross-Cultural Exchange, Diaspora Relations"
    },
    {
      id: 7,
      name: "Prof. Ramesh Kumar",
      title: "Historical Research Lead",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      specialization: "Medieval Hindu History, Archaeological Studies"
    },
    {
      id: 8,
      name: "Dr. Sheela Gopal",
      title: "Women's Studies Director",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      specialization: "Women in Hindu Traditions, Gender Studies"
    }
  ];
  
  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      quote: "SHANKH has been instrumental in reviving interest in Vedic mathematics among young scholars. Their workshops have opened new pathways for my research.",
      author: "Dr. Amit Sharma",
      title: "Professor of Mathematics, IIT Delhi",
      image: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      id: 2,
      quote: "The dedication SHANKH shows to preserving authentic Hindu traditions while making them accessible to modern audiences is truly commendable. Their work bridges important generational gaps.",
      author: "Ms. Radha Krishnan",
      title: "Cultural Heritage Advocate",
      image: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 3,
      quote: "As a researcher in comparative religion, I've found SHANKH's publications to be meticulously researched and intellectually stimulating. They maintain academic rigor while honoring traditional perspectives.",
      author: "Prof. Jonathan Miller",
      title: "Department of Religious Studies, Oxford University",
      image: "https://randomuser.me/api/portraits/men/9.jpg"
    }
  ];

  // SHANKH Objectives
  const objectives = [
    {
      id: 1,
      title: "Forum for Hindu and Bharatiya Intellectual Exchange",
      description: "Organizing discussions, dialogues, lectures, workshops, seminars, symposiums, exhibitions, quizzes, literature festivals, and other events to foster intellectual idea exchanges rooted in Hindu philosophy and Bharatiya thought, contributing to the welfare of the Hindu and Bharatiya learning community.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Contribution to Hindu and Bharatiya Intellectual Heritage",
      description: "Publishing books, journals, and allied literature on Hinduism and Bharat's intellectual traditions, utilizing both traditional and technological mediums to promote the resurgence of Hindu and Bharatiya knowledge systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Promotion of Hindu and Bharatiya Culture",
      description: "Safeguarding and promoting the holistic culture of Bharat, including Sanatan Dharma, ancient history, Vedic and classical literature, traditional arts, music, biodiversity, and the spiritual-ecological wealth that embodies Bharat's Hindu identity and cultural legacy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Development of Hindu Society and Bharat",
      description: "Working for the upliftment of education, health, general awareness, and environmental consciousness in both rural and urban Hindu communities across Bharat, aiming to restore and strengthen Hindu values and the overall well-being of the nation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];
  
  return (
    <div className="bg-orange-50 min-h-screen">
      {/* Hero Section */}
      <Navbar/>
      <div
        className="relative bg-cover bg-center text-white py-20 min-h-screen flex items-center"
        style={{ backgroundImage: "url('1.jpg')" }}
      >
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 opacity-10"></div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 text-orange-200">About SHANKH</h1>
            <div className="w-24 h-1 bg-orange-300 mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto">
              Society for Hindu Academics, Narrative (De) Construction, Knowledge, and Heritage
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Vision & Mission Tabs - Improved Style */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('vision')}
              className={`px-8 py-3 rounded-l-lg font-medium border-2 ${
                activeTab === 'vision' 
                  ? 'bg-orange-600 text-white border-orange-600' 
                  : 'bg-transparent text-orange-800 border-orange-400 hover:bg-orange-100'
              }`}
            >
              Our Vision
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('mission')}
              className={`px-8 py-3 rounded-r-lg font-medium border-2 ${
                activeTab === 'mission' 
                  ? 'bg-orange-600 text-white border-orange-600' 
                  : 'bg-transparent text-orange-800 border-orange-400 hover:bg-orange-100'
              }`}
            >
              Our Mission
            </motion.button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-500 relative overflow-hidden"
          >
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-100 rounded-full -ml-24 -mb-24 opacity-50"></div>
            
            <div className="relative z-10">
              {activeTab === 'vision' ? (
                <div>
                  <h2 className="text-3xl font-bold text-orange-800 mb-6 flex items-center">
                    <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </span>
                    Vision of SHANKH
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed ml-16 border-l-4 border-orange-200 pl-6">
                    To be a leading platform that revitalizes and disseminates Hindu and Bharatiya intellectual 
                    traditions, fostering a resurgence of cultural heritage and knowledge systems that contribute 
                    to the holistic development of society, while preserving the spiritual and ecological wealth 
                    of Bharat for future generations.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-orange-800 mb-6 flex items-center">
                    <span className="bg-orange-100 text-orange-600 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </span>
                    Mission of SHANKH
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed ml-16 border-l-4 border-orange-200 pl-6">
                    Our mission is to create a dynamic space for intellectual exchanges rooted in Hindu philosophy 
                    and Bharatiya thought, through organized events, publications, and collaborative platforms. 
                    We are dedicated to safeguarding and promoting the cultural, spiritual, and intellectual legacy 
                    of Bharat, while actively contributing to the development and upliftment of Hindu society, with 
                    a strong emphasis on education, health, awareness, and environmental consciousness.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
        
        {/* Objectives Section - New Addition */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Our Objectives</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              SHANKH is committed to these core objectives that guide our work in preserving and promoting 
              Hindu and Bharatiya intellectual and cultural heritage.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective) => (
              <motion.div
                key={objective.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-orange-500"
              >
                <div className="flex items-start">
                  <div className="text-orange-600 mr-4 mt-1">
                    {objective.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-orange-800 mb-3">{objective.title}</h3>
                    <p className="text-gray-700">{objective.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Founding Members Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Founding Members</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our organization was established by visionary scholars and practitioners dedicated to preserving and 
              promoting Hindu intellectual and cultural traditions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foundingMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-orange-400"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-orange-800">{member.name}</h3>
                      <p className="text-orange-600">{member.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="bg-orange-100 rounded-lg p-3">
                    <span className="text-sm font-medium text-orange-800">Specialization:</span> {member.specialization}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Current Members Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              SHANKH is powered by dedicated academics, researchers, and cultural advocates who bring diverse 
              expertise to our mission.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow p-4 text-center"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-orange-400"
                />
                <h3 className="text-lg font-bold text-orange-800">{member.name}</h3>
                <p className="text-orange-600 mb-2">{member.title}</p>
                <p className="text-sm text-gray-600">{member.specialization}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Testimonials Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">Testimonials</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from scholars, community members, and partners who have collaborated with SHANKH.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-orange-100 to-white rounded-lg shadow-lg p-6 relative"
              >
                <div className="absolute top-0 left-6 transform -translate-y-1/2 bg-orange-600 rounded-full p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 10C6.5 8.34 7.84 7 9.5 7H10.5V4C10.5 3.45 10.05 3 9.5 3H7C4.79 3 3 4.79 3 7V13C3 14.66 4.34 16 6 16H9C10.66 16 12 14.66 12 13V10H9.5C7.84 10 6.5 8.66 6.5 7V10Z" fill="white"/>
                    <path d="M18 16H21C22.66 16 24 14.66 24 13V7C24 4.79 22.21 3 20 3H17.5C16.95 3 16.5 3.45 16.5 4V7H17.5C19.16 7 20.5 8.34 20.5 10V7C20.5 8.66 19.16 10 17.5 10H15V13C15 14.66 16.34 16 18 16Z" fill="white"/>
                  </svg>
                </div>
                <div className="pt-6">
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-400"
                    />
                    <div>
                      <h4 className="font-bold text-orange-800">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg shadow-xl mt-20 p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Become a part of SHANKH's community of scholars, practitioners, and enthusiasts dedicated to 
            preserving and promoting Hindu intellectual and cultural heritage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-shadow"
            >
              Become a Member
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-800 text-white px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-shadow"
            >
              Support Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;