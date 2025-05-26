
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="#home" className="flex items-center">
            <img 
              src="/lovable-uploads/d64fa4fa-0c32-4192-bd95-a9bb1bf81b05.png" 
              alt="Dev Spark Logo" 
              className="h-16 md:h-20 w-auto" 
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex space-x-8 items-center"
        >
          {[
            'home',
            'about',
            'services',
            'projects',
            'testimonials',
            'contact'
          ].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="text-devspark-text hover:text-devspark-orange1 transition-colors relative group font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <span className="capitalize">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-devspark-orange1 to-devspark-orange2 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-devspark-orange1 to-devspark-orange2 text-white shadow-lg hover:shadow-xl hover:shadow-devspark-orange1/20 transition-all font-medium"
          >
            Get Started
          </motion.a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden text-devspark-text"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-devspark-dark2/95 backdrop-blur-md py-4 shadow-lg md:hidden border-t border-white/10"
          >
            <nav className="flex flex-col space-y-4 px-6">
              {[
                'home', 
                'about', 
                'services', 
                'projects', 
                'testimonials',
                'contact'
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-devspark-text hover:text-devspark-orange1 py-2 transition-colors capitalize font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-devspark-orange1 to-devspark-orange2 text-white shadow-md font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
