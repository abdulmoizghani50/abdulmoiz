
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-6 md:mb-0"
            >
              <h3 className="text-2xl font-bold text-gradient">
                Portfolio<span className="text-accent">.</span>
              </h3>
              <p className="text-foreground/60 text-sm mt-2">
                Building beautiful web experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col md:flex-row items-center gap-4 md:gap-8"
            >
              <nav className="flex gap-4 md:gap-8">
                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-foreground/60 text-sm flex items-center">
              &copy; {currentYear} | Made with <Heart className="mx-1 text-accent" size={14} /> by Your Name
            </p>
            <div className="flex gap-4">
              {['github', 'linkedin', 'twitter', 'dribbble'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-foreground/60 hover:text-accent transition-colors"
                  aria-label={social}
                >
                  <img src={`/${social}.svg`} alt={social} className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
