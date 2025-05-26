import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6">
              <img 
                src="/lovable-uploads/6851ffca-d3b0-4cd3-9735-e653946b97cb.png" 
                alt="Dev Spark Logo" 
                className="h-12" 
              />
            </div>
            <p className="text-foreground/60 text-sm mb-4">
              We create innovative digital solutions that transform businesses and enhance user experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href="#"
                className="text-foreground/60 hover:text-accent transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href="#"
                className="text-foreground/60 hover:text-accent transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href="#"
                className="text-foreground/60 hover:text-accent transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href="#"
                className="text-foreground/60 hover:text-accent transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href="#"
                className="text-foreground/60 hover:text-accent transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {['About', 'Services', 'Projects', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground/60 hover:text-accent transition-colors text-sm flex items-center"
                  >
                    <ArrowRight className="mr-2" size={12} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              {[
                'Web Development', 
                'Mobile Applications', 
                'UI/UX Design', 
                'Custom Software', 
                'Cloud Solutions', 
                'DevOps'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-foreground/60 hover:text-accent transition-colors text-sm flex items-center"
                  >
                    <ArrowRight className="mr-2" size={12} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-accent" size={18} />
                <span className="text-foreground/60 text-sm">
                  123 Innovation Street, Tech Park<br />
                  New York, NY 10001, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-accent" size={18} />
                <a href="tel:+1234567890" className="text-foreground/60 text-sm hover:text-accent">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-accent" size={18} />
                <a href="mailto:info@example.com" className="text-foreground/60 text-sm hover:text-accent">
                  info@example.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/40 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Dev Spark. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/40 hover:text-accent text-sm">Privacy Policy</a>
              <a href="#" className="text-foreground/40 hover:text-accent text-sm">Terms of Service</a>
              <a href="#" className="text-foreground/40 hover:text-accent text-sm">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
