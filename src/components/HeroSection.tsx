
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Code, Database, Globe, Layers } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-20 flex flex-col justify-center items-center lg:items-start z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 w-full text-center lg:text-left"
        >
          <span className="text-accent text-lg md:text-xl font-medium">
            Innovative Software Solutions
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow text-center lg:text-left"
        >
          <motion.span 
            className="block"
            whileHover={{ scale: 1.02, color: "#9b87f5", transition: { duration: 0.3 } }}
          >
            We Build Powerful
          </motion.span>
          <motion.span 
            className="block mt-2"
            whileHover={{ scale: 1.02, color: "#06d6a0", transition: { duration: 0.3 } }}
          >
            Digital Solutions
          </motion.span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          <p className="text-xl text-foreground/80 mb-8">
            Delivering cutting-edge software development and intuitive UX/UI design 
            to transform your business in the digital landscape.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center lg:justify-start"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, backgroundColor: "#33a8b5" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-medium shadow-lg hover:shadow-accent/20 transition-all flex items-center justify-center gap-2"
          >
            Our Services
            <ChevronRight size={18} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mx-auto lg:mx-0 mt-8"
        >
          {[
            { icon: <Code className="text-accent" size={24} />, label: "Custom Software" },
            { icon: <Globe className="text-accent" size={24} />, label: "Web Development" },
            { icon: <Layers className="text-accent" size={24} />, label: "UI/UX Design" },
            { icon: <Database className="text-accent" size={24} />, label: "Cloud Solutions" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
              className="glass-card flex flex-col items-center p-4 rounded-lg"
            >
              {item.icon}
              <span className="text-sm mt-2 text-foreground/80">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0.5, 1],
            y: [0, 10, 0, 10],
            transition: { 
              opacity: { repeat: Infinity, duration: 2 },
              y: { repeat: Infinity, duration: 2 }
            }
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-accent" size={24} />
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
