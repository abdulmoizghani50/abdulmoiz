
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ChevronRight, Code, Database, Globe, Layers, Smartphone, Server, Shield } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const headlines = [
    "Enterprise Solutions That Drive Growth",
    "Innovative Software For Modern Business",
    "Technology Partners For Digital Success"
  ];

  const descriptions = [
    "Delivering cutting-edge software development and intuitive UX/UI design to transform your business in the digital landscape.",
    "Custom software solutions designed to help your business grow, scale, and succeed in today's competitive market.",
    "Our expert team turns complex challenges into elegant, efficient, and powerful digital solutions."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % headlines.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: <Code className="text-accent" size={24} />, label: "Custom Software", delay: 0.3 },
    { icon: <Globe className="text-accent" size={24} />, label: "Web Development", delay: 0.4 },
    { icon: <Smartphone className="text-accent" size={24} />, label: "Mobile Apps", delay: 0.5 },
    { icon: <Server className="text-accent" size={24} />, label: "Cloud Solutions", delay: 0.6 },
    { icon: <Shield className="text-accent" size={24} />, label: "Cybersecurity", delay: 0.7 },
    { icon: <Layers className="text-accent" size={24} />, label: "UI/UX Design", delay: 0.8 }
  ];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-accent/10 animate-pulse-glow"></div>
        
        {/* Animated geometric shapes */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container relative mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <motion.span 
            className="text-accent text-lg md:text-xl font-medium inline-block"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Innovation. Excellence. Results.
          </motion.span>
        </motion.div>
        
        <div className="h-[120px] md:h-[150px] mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-glow max-w-5xl"
              >
                <motion.span 
                  className="block"
                  whileHover={{ scale: 1.02, color: "#9b87f5", transition: { duration: 0.3 } }}
                >
                  {headlines[currentSlide]}
                </motion.span>
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
        
        <div className="h-[80px] md:h-[60px] mb-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto"
              >
                {descriptions[currentSlide]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 mb-16 justify-center"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, backgroundColor: "#33a8b5" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-accent text-accent-foreground font-medium shadow-lg hover:shadow-accent/20 transition-all flex items-center justify-center gap-2"
          >
            Our Services
            <ChevronRight size={18} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 w-full max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 20px rgba(161, 99, 247, 0.3)",
                backgroundColor: "rgba(255,255,255,0.1)" 
              }}
              className={cn(
                "glass-card flex flex-col items-center p-4 md:p-5 rounded-lg transition-all duration-300",
                "cursor-pointer hover:border-accent/30"
              )}
            >
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {service.icon}
              </motion.div>
              <span className="text-xs md:text-sm font-medium mt-2 text-foreground/80">{service.label}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0.5, 1],
            y: [0, 10, 0, 10],
          }}
          transition={{ 
            opacity: { repeat: Infinity, duration: 2 },
            y: { repeat: Infinity, duration: 2 }
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#services" aria-label="Scroll down" className="flex flex-col items-center">
            <span className="text-accent mb-2 text-sm">Discover More</span>
            <ArrowDown className="text-accent" size={24} />
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
