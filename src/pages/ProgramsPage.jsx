import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Download, Video, Users, Clock, ArrowRight, FileText, Globe, Award, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProgramsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [expandedPublication, setExpandedPublication] = useState(null);
  
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };
  
  const publications = [
    {
      id: 1,
      title: "Vedantic Perspectives on Consciousness in Modern Neuroscience",
      author: "Dr. Anjali Sharma",
      journal: "Journal of Consciousness Studies",
      year: 2024,
      abstract: "This paper explores the parallels between ancient Vedantic conceptions of consciousness and contemporary theories in neuroscience, highlighting how these traditions might inform each other.",
      tags: ["Vedanta", "Neuroscience", "Consciousness"],
      pdfLink: "#"
    },
    {
      id: 2,
      title: "Textual Analysis of the Bhagavad Gita's Impact on Modern Environmental Ethics",
      author: "Dr. Vikram Acharya",
      journal: "Environmental Philosophy",
      year: 2024,
      abstract: "Through close textual analysis, this paper examines how the Bhagavad Gita's teachings on dharma and interconnectedness offer valuable frameworks for contemporary environmental ethics.",
      tags: ["Bhagavad Gita", "Environmental Ethics", "Dharma"],
      pdfLink: "#"
    },
    {
      id: 3,
      title: "Deconstructing Colonial Narratives in Early Indology: A Critical Reassessment",
      author: "Prof. Maya Desai & Dr. Robert Chen",
      journal: "Journal of Postcolonial Studies",
      year: 2023,
      abstract: "This collaborative study examines the implicit biases in early Western Indological studies and proposes methodological corrections for contemporary scholarship.",
      tags: ["Indology", "Postcolonial", "Methodology"],
      pdfLink: "#"
    },
    {
      id: 4,
      title: "The Mathematics of Sulba Sutras: Historical Contributions to Geometry",
      author: "Dr. Sanjay Kumar",
      journal: "History of Mathematics",
      year: 2023,
      abstract: "This research presents new insights into the mathematical achievements found in the Sulba Sutras, particularly focusing on their geometric innovations and their place in the global history of mathematics.",
      tags: ["Sulba Sutras", "Mathematics", "Ancient Science"],
      pdfLink: "#"
    },
  ];
  
  const upcomingEvents = [
    {
      id: 1,
      title: "International Conference on Hindu Aesthetics and Modern Art",
      date: "May 15-17, 2025",
      location: "Virtual & Boston, MA",
      description: "A three-day conference bringing together artists, scholars, and philosophers to explore the influence of Hindu aesthetic theories on contemporary artistic expression.",
      image: "/api/placeholder/400/240",
      type: "Conference",
      registration: "#"
    },
    {
      id: 2,
      title: "Workshop: Sanskrit Poetics and Literary Theory",
      date: "April 3, 2025",
      location: "Cambridge, MA",
      description: "An intensive workshop on the principles of Sanskrit poetics (Kavyashastra) and their applications in literary criticism.",
      image: "/api/placeholder/400/240",
      type: "Workshop",
      registration: "#"
    },
    {
      id: 3,
      title: "Webinar Series: Understanding Dharmashastra in Contemporary Context",
      date: "Weekly from March 20, 2025",
      location: "Online",
      description: "A six-part webinar series examining how the principles of Dharmashastra can inform modern approaches to ethics, law, and social responsibility.",
      image: "/api/placeholder/400/240",
      type: "Webinar",
      registration: "#"
    }
  ];
  
  const pastEvents = [
    {
      id: 1,
      title: "Symposium on Hindu Cosmology and Modern Physics",
      date: "February 10-12, 2025",
      location: "Princeton, NJ",
      description: "A groundbreaking symposium that explored parallels between concepts in Hindu cosmology and contemporary theoretical physics.",
      image: "/api/placeholder/400/240",
      type: "Symposium",
      recordings: "#"
    },
    {
      id: 2,
      title: "Heritage Walk: Sacred Geography of Ancient Hindu Temples",
      date: "January 25, 2025",
      location: "Virtual Tour",
      description: "A virtual exploration of the architectural and astronomical principles embodied in the design and location of major Hindu temples.",
      image: "/api/placeholder/400/240",
      type: "Virtual Tour",
      recordings: "#"
    },
    {
      id: 3,
      title: "Workshop: Manuscript Preservation and Digital Archiving",
      date: "December 8-9, 2024",
      location: "New York, NY",
      description: "A hands-on workshop on techniques for preserving ancient manuscripts and creating accessible digital archives.",
      image: "/api/placeholder/400/240",
      type: "Workshop",
      recordings: "#"
    }
  ];
  
  const downloadableResources = [
    {
      id: 1,
      title: "Quarterly Journal of Hindu Studies (Latest Issue)",
      description: "Our peer-reviewed academic journal featuring original research on Hindu philosophy, art, literature, and history.",
      type: "Journal",
      fileSize: "4.2 MB",
      link: "#"
    },
    {
      id: 2,
      title: "Dictionary of Sanskrit Philosophical Terms",
      description: "A comprehensive reference work defining key technical terms from the Sanskrit philosophical tradition.",
      type: "Reference Book",
      fileSize: "8.7 MB",
      link: "#"
    },
    {
      id: 3,
      title: "Teaching Guide: Hindu Epics in the Classroom",
      description: "Resources for educators teaching the Ramayana and Mahabharata at various educational levels.",
      type: "Educational Resource",
      fileSize: "3.1 MB",
      link: "#"
    },
    {
      id: 4,
      title: "Report: State of Hindu Studies in American Universities",
      description: "Our latest research report on the current status of Hindu Studies programs across American higher education.",
      type: "Research Report",
      fileSize: "2.8 MB",
      link: "#"
    }
  ];
  
  const upcomingWebinars = [
    {
      id: 1,
      title: "The Relevance of Advaita Vedanta in Modern Psychology",
      date: "March 28, 2025",
      time: "10:00 AM EST",
      speaker: "Dr. Ravi Gupta",
      description: "Exploring how non-dualistic philosophy can inform contemporary approaches to mental health and well-being."
    },
    {
      id: 2,
      title: "Decoding Ancient Indian Medical Texts: Ayurveda in the 21st Century",
      date: "April 15, 2025",
      time: "2:00 PM EST",
      speaker: "Dr. Meena Patel",
      description: "Examining the scientific principles in classical Ayurvedic texts and their potential applications in modern healthcare."
    },
    {
      id: 3,
      title: "Sanskrit Computational Linguistics: Preserving Ancient Knowledge in the Digital Age",
      date: "May 5, 2025",
      time: "11:00 AM EST",
      speaker: "Prof. Rajesh Sharma",
      description: "Discussing innovative approaches to digitizing and analyzing Sanskrit texts using modern NLP techniques."
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
        <Navbar/>
      {/* Hero Section with Mandala-inspired background */}
      <section className="relative py-16 px-6 overflow-hidden ">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Decorative Elements - Mandala-inspired pattern */}
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full border-8 border-orange-500 opacity-10"
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 180, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ top: '-150px', right: '-150px' }}
          />
          
          <motion.div 
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-4 border-orange-600 opacity-10"
            animate={{ 
              rotate: -360,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 150, repeat: Infinity, ease: "linear" },
              scale: { duration: 12, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ bottom: '-150px', left: '-150px' }}
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 mt-10"
              {...fadeIn}
              transition={{ duration: 0.8 }}
            >
              <span className="text-orange-500">Programs</span> & <span className="text-orange-500">Research</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl"
              {...fadeIn}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Exploring the depth of Hindu knowledge traditions through academic research, publications, and cultural programs
            </motion.p>
            <motion.div 
              className="h-1 w-24 bg-orange-500 mt-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
          
          {/* Om Symbol as decorative element */}
          <motion.div 
            className="absolute opacity-5 text-orange-500 select-none pointer-events-none"
            style={{ fontSize: '400px', top: '50%', right: '5%', transform: 'translateY(-50%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2 }}
          >
            ॐ
          </motion.div>
        </div>
      </section>
      
      {/* Research & Publications Section */}
      <motion.section 
        className="py-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 mb-2"
              >
                <BookOpen className="text-orange-500 h-6 w-6" />
                <h2 className="text-3xl font-bold text-white">Research & Publications</h2>
              </motion.div>
              <motion.p 
                className="text-gray-300 max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our scholars produce cutting-edge research that bridges ancient Hindu knowledge systems with contemporary academic discourse
              </motion.p>
            </div>
            <motion.a 
              href="#" 
              className="inline-flex items-center mt-4 md:mt-0 text-orange-400 hover:text-orange-300 transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              View all publications <ArrowRight className="ml-2 h-4 w-4" />
            </motion.a>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {publications.map((pub) => (
              <motion.div 
                key={pub.id}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500/30 transition-colors duration-300"
                variants={itemVariant}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{pub.title}</h3>
                  <motion.button
                    onClick={() => setExpandedPublication(expandedPublication === pub.id ? null : pub.id)}
                    className="text-gray-400 hover:text-orange-500"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedPublication === pub.id ? 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    }
                  </motion.button>
                </div>
                
                <p className="text-gray-300 mb-3">{pub.author} • {pub.journal} • {pub.year}</p>
                
                {expandedPublication === pub.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-400 mb-4">{pub.abstract}</p>
                  </motion.div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium bg-orange-500 bg-opacity-20 text-orange-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={pub.pdfLink} 
                  className="inline-flex items-center text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors duration-300"
                >
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Downloadable Resources Section */}
      <motion.section 
        className="py-16 px-6 bg-orange-900 bg-opacity-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-2"
          >
            <FileText className="text-orange-500 h-6 w-6" />
            <h2 className="text-3xl font-bold text-white">Downloadable Resources</h2>
          </motion.div>
          <motion.p 
            className="text-gray-300 max-w-2xl mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Access our collection of journals, books, and educational materials to deepen your understanding of Hindu knowledge traditions
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {downloadableResources.map((resource) => (
              <motion.div 
                key={resource.id}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 flex flex-col h-full"
                variants={itemVariant}
                whileHover={{ y: -5, borderColor: 'rgba(249, 115, 22, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-orange-500 bg-opacity-10 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Download className="text-orange-500 h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-orange-400 mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">{resource.description}</p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-gray-400 text-sm mb-3">
                    <span>{resource.type}</span>
                    <span>{resource.fileSize}</span>
                  </div>
                  <motion.a 
                    href={resource.link} 
                    className="inline-flex items-center justify-center w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Download
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Events Section */}
      <motion.section 
        className="py-16 px-6 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-2"
          >
            <Calendar className="text-orange-500 h-6 w-6" />
            <h2 className="text-3xl font-bold text-white">Events & Programs</h2>
          </motion.div>
          <motion.p 
            className="text-gray-300 max-w-2xl mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Engage with our community through conferences, workshops, and cultural programs that celebrate and advance Hindu knowledge traditions
          </motion.p>
          
          {/* Event Tabs */}
          <div className="mb-10">
            <div className="border-b border-gray-700 flex">
              <button
                className={`py-3 px-6 font-medium relative ${activeTab === 'upcoming' ? 'text-orange-500' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
                {activeTab === 'upcoming' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-orange-500 w-full" 
                    layoutId="activeTab"
                  />
                )}
              </button>
              <button
                className={`py-3 px-6 font-medium relative ${activeTab === 'past' ? 'text-orange-500' : 'text-gray-400 hover:text-gray-300'}`}
                onClick={() => setActiveTab('past')}
              >
                Past Events
                {activeTab === 'past' && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-orange-500 w-full" 
                    layoutId="activeTab"
                  />
                )}
              </button>
            </div>
          </div>
          
          {/* Events Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            key={activeTab}
          >
            {(activeTab === 'upcoming' ? upcomingEvents : pastEvents).map((event) => (
              <motion.div 
                key={event.id}
                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 group"
                variants={itemVariant}
                whileHover={{ y: -5, borderColor: 'rgba(249, 115, 22, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-6">{event.description}</p>
                  
                  {activeTab === 'upcoming' ? (
                    <motion.a 
                      href={event.registration} 
                      className="inline-flex items-center justify-center w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Register Now
                    </motion.a>
                  ) : (
                    <motion.a 
                      href={event.recordings} 
                      className="inline-flex items-center justify-center w-full py-2 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white rounded-md transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Recordings
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Webinars & Programs Section */}
      <motion.section 
        className="py-16 px-6 bg-gradient-to-t from-gray-900 to-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-2"
          >
            <Video className="text-orange-500 h-6 w-6" />
            <h2 className="text-3xl font-bold text-white">Knowledge Programs</h2>
          </motion.div>
          <motion.p 
            className="text-gray-300 max-w-2xl mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our diverse range of webinars, workshops, and cultural programs designed to promote deeper understanding of Hindu heritage and knowledge systems
          </motion.p>
          
          {/* Featured programs */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="col-span-full md:col-span-1 row-span-2 bg-orange-900 bg-opacity-30 rounded-lg p-8 relative overflow-hidden border border-orange-500 border-opacity-30"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500 opacity-10 rounded-full" />
              
              <div className="relative z-10">
                <div className="bg-orange-500 bg-opacity-20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                  <Award className="text-orange-500 h-7 w-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Featured Program</h3>
                <h4 className="text-xl font-bold text-white mb-2">Sanskrit Language Immersion</h4>
                <p className="text-gray-300 mb-6">A comprehensive six-month online program designed to develop practical Sanskrit reading, writing, and speaking skills with a focus on accessing classical texts.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <h5 className="font-medium text-white">Duration</h5>
                      <p className="text-gray-300 text-sm">26 weeks, 2 sessions per week</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <h5 className="font-medium text-white">Participants</h5>
                      <p className="text-gray-300 text-sm">Limited to 30 students per cohort</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <h5 className="font-medium text-white">Format</h5>
                      <p className="text-gray-300 text-sm">Live online classes with interactive exercises</p>
                    </div>
                  </div>
                </div>
                
                <motion.a 
                  href="#"
                  className="inline-flex items-center justify-center w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply for Next Cohort
                </motion.a>
              </div>
            </motion.div>
            
            {/* Upcoming webinars list */}
            <motion.div 
              className="col-span-full md:col-span-2 grid gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {upcomingWebinars.map((webinar) => (
                <motion.div 
                  key={webinar.id}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500/30 transition-colors duration-300"
                  variants={itemVariant}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-orange-400 mb-1">{webinar.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">Presented by {webinar.speaker}</p>
                      <p className="text-gray-300 text-sm">{webinar.description}</p>
                    </div>
                    <div className="md:text-right">
                      <div className="bg-orange-500 bg-opacity-10 rounded-lg p-3 inline-block mb-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-orange-500" />
                          <span className="text-orange-300 text-sm font-medium">{webinar.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span className="text-orange-300 text-sm font-medium">{webinar.time}</span>
                        </div>
                      </div>
                      <motion.a 
                        href="#" 
                        className="inline-flex items-center justify-center px-4 py-2 border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white rounded-md transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Register Now
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.a 
                href="#" 
                className="inline-flex items-center justify-center py-4 bg-gray-800 hover:bg-gray-700 text-orange-400 rounded-md transition-colors duration-300 border border-gray-700 hover:border-orange-500/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                View All Programs <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Call to Action */}
      {/* <motion.section 
        className="py-16 px-6 bg-orange-900 bg-opacity-30 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      > */}
        {/* Decorative elements */}
        {/* <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-8 border-orange-500 opacity-10" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full border-4 border-orange-600 opacity-10" /> */}
        
        {/* <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join Our Scholarly Community
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Subscribe to receive updates about our latest publications, upcoming events, and exclusive scholarly resources
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent min-w-[300px]"
            />
            <motion.button 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div> */}
      {/* </motion.section> */}
    <Footer/>
    </div>
  );
};

export default ProgramsPage;