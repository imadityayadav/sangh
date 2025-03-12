import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PublicationSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Publications' },
    { id: 'books', name: 'Books' },
    { id: 'articles', name: 'Articles' },
    { id: 'research', name: 'Research Papers' },
    { id: 'magazines', name: 'Magazines' }
  ];
  
  const publications = [
    {
      id: 1,
      title: 'The Essence of Bhagavad Gita',
      author: 'Dr. Rani Sharma',
      description: 'An insightful exploration of the timeless wisdom contained in the Bhagavad Gita and its relevance in modern life.',
      category: 'books',
      coverImage: 'https://i.pinimg.com/736x/40/21/da/4021da9d8383e3d9d2b70330de87c28e.jpg',
      date: 'February 15, 2025'
    },
    {
      id: 2,
      title: 'Understanding Hindu Festivals',
      author: 'Vikram Patel',
      description: 'A comprehensive guide to the cultural and spiritual significance of major Hindu festivals celebrated worldwide.',
      category: 'books',
      coverImage: 'https://i.pinimg.com/736x/40/21/da/4021da9d8383e3d9d2b70330de87c28e.jpg',
      date: 'January 10, 2025'
    },
    {
      id: 3,
      title: 'The Symbolism of Hindu Deities',
      author: 'Anjali Desai, Ph.D.',
      description: 'Exploring the profound symbolism behind various Hindu deities and their significance in spiritual practice.',
      category: 'articles',
      coverImage: 'https://i.pinimg.com/736x/40/21/da/4021da9d8383e3d9d2b70330de87c28e.jpg',
      date: 'March 5, 2025'
    },
    {
      id: 4,
      title: 'Meditation Techniques in Hinduism',
      author: 'Raj Mehta',
      description: 'An in-depth analysis of various meditation techniques rooted in Hindu traditions and their benefits.',
      category: 'research',
      coverImage: 'https://i.pinimg.com/736x/40/21/da/4021da9d8383e3d9d2b70330de87c28e.jpg',
      date: 'February 28, 2025'
    },
    {
      id: 5,
      title: 'Contemporary Hindu Spirituality',
      author: 'Sadhguru Press',
      description: 'A quarterly magazine exploring modern applications of Hindu philosophy and spirituality.',
      category: 'magazines',
      coverImage: 'https://i.pinimg.com/736x/40/21/da/4021da9d8383e3d9d2b70330de87c28e.jpg',
      date: 'March 1, 2025'
    },
    {
      id: 6,
      title: 'Sacred Geometry in Hindu Temples',
      author: 'Prof. Arjun Nair',
      description: 'Research on the mathematical principles and sacred geometry used in Hindu temple architecture.',
      category: 'research',
      coverImage: 'https://i.pinimg.com/736x/40/21/da/4021da9d8383e3d9d2b70330de87c28e.jpg',
      date: 'January 22, 2025'
    }
  ];
  
  const filteredPublications = activeCategory === 'all' 
    ? publications 
    : publications.filter(pub => pub.category === activeCategory);
  
  return (
    <div className="bg-orange-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Our Publications</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto">
            Explore our collection of books, articles, research papers, and magazines 
            that celebrate and illuminate the rich tapestry of Hindu culture and spirituality.
          </p>
        </motion.div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`m-2 px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id 
                  ? 'bg-orange-600 text-white shadow-lg' 
                  : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* Publications Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPublications.map((publication) => (
            <motion.div
              key={publication.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img 
                  src={publication.coverImage} 
                  alt={publication.title} 
                  className="w-full object-cover"
                  style={{ height: publication.category === 'books' || publication.category === 'magazines' ? '360px' : '360px' }}
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs uppercase font-bold px-3 py-1 rounded-full">
                  {categories.find(cat => cat.id === publication.category)?.name.slice(0, -1)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-2">{publication.title}</h3>
                <p className="text-orange-600 mb-3">By {publication.author}</p>
                <p className="text-gray-600 mb-4">{publication.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-orange-700">{publication.date}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-100 hover:bg-orange-200 text-orange-700 px-4 py-2 rounded font-medium"
                  >
                    Read More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View More Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg"
          >
            View All Publications
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PublicationSection;