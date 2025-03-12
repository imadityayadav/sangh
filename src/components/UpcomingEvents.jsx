import React, { useState } from "react";
import { motion } from "framer-motion";

const UpcomingEvents = () => {
  // Sample upcoming events data - replace with your actual events
  const events = [
    {
      id: 1,
      title: "Diwali Celebration",
      date: "November 12, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Community Center Hall",
      description: "Join us for a beautiful celebration of Diwali with traditional lamps, rangoli, music, and authentic Indian cuisine.",
      image: "https://w0.peakpx.com/wallpaper/900/574/HD-wallpaper-god-ganesh-at-diwali-festival.jpg"
    },
    {
      id: 2,
      title: "Holi Festival of Colors",
      date: "March 14, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Riverside Park",
      description: "Experience the joy of Holi with organic colors, traditional sweets, bhang, and cultural performances.",
      image: "https://c4.wallpaperflare.com/wallpaper/506/490/538/people-event-india-wallpaper-preview.jpg"
    },
    {
      id: 3,
      title: "Yoga & Meditation Retreat",
      date: "April 18-20, 2025",
      time: "All Day",
      location: "Himalayan Ashram",
      description: "A three-day immersive retreat focusing on traditional yoga practices, meditation, and Ayurvedic principles.",
      image: "https://c0.wallpaperflare.com/preview/56/956/1001/yoga-zen-meditating-pose.jpg"
    },
    {
      id: 4,
      title: "Navratri Garba Night",
      date: "October 7, 2025",
      time: "7:00 PM - 12:00 AM",
      location: "Cultural Center",
      description: "Join us for a night of traditional Garba and Dandiya dance celebrating the divine feminine energy.",
      image: "https://media.istockphoto.com/id/1433772589/photo/female-garba-dancers-in-ahmedabad-gujarat-october-2019.jpg?s=612x612&w=0&k=20&c=emaywMP992TO2sOmG5DDA4tVPM4JUXWc4X4RPX8jOgU="
    }
  ];

  const [hoveredEvent, setHoveredEvent] = useState(null);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Card animation variants
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Decoration element (mandala pattern)
  const Mandala = () => (
    <div className="absolute -right-16 -top-16 w-64 h-64 text-orange-100 opacity-20 z-0">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M100,10 A90,90,0,1,1,10,100 A90,90,0,1,1,100,10 Z M100,30 A70,70,0,1,0,30,100 A70,70,0,1,0,100,30 Z" />
        <path fill="currentColor" d="M100,0 L100,200 M0,100 L200,100 M29.3,29.3 L170.7,170.7 M29.3,170.7 L170.7,29.3" strokeWidth="2" />
        <path fill="currentColor" d="M100,40 A60,60,0,1,1,40,100 A60,60,0,1,1,100,40 Z M100,60 A40,40,0,1,0,60,100 A40,40,0,1,0,100,60 Z" />
      </svg>
    </div>
  );

  return (
    <section className="relative py-16 bg-gradient-to-br from-orange-50 to-amber-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 opacity-10 rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 opacity-10 rounded-full -ml-32 -mb-32" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading with decorative elements */}
        <div className="flex items-center justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-1 w-full bg-orange-300"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-orange-600 text-white px-8 py-3 rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Upcoming Events</h2>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Events grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg relative"
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredEvent === event.id ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-orange-300 font-medium">{event.date}</div>
                    <div className="text-sm opacity-75">{event.time}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-orange-800 mb-2">{event.title}</h3>
                <div className="flex items-center mb-3 text-gray-600">
                  <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm truncate">{event.location}</span>
                </div>
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">{event.description}</p>
                <motion.button 
                  className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition duration-300 shadow-md"
                  whileTap={{ scale: 0.97 }}
                >
                  Register Now
                </motion.button>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute transform rotate-45 bg-orange-500 text-white font-bold py-1 right-[-35px] top-[10px] w-[120px] text-center text-xs">
                  Featured
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all events button */}
        <div className="text-center mt-12">
          <motion.button
            className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Events
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Traditional decoration */}
      <div className="absolute right-0 top-0 opacity-10">
        <Mandala />
      </div>
    </section>
  );
};

export default UpcomingEvents;