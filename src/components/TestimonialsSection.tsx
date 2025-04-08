
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "CTO, TechVision Inc",
    content: "Working with this team has been an exceptional experience. Their technical expertise and dedication to our project delivered results that exceeded our expectations. The custom CRM system they built has streamlined our operations significantly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Product Manager, InnovateTech",
    content: "Their UI/UX design approach transformed our application completely. User engagement increased by 45% within just two months of launch. They truly understand how to create intuitive and beautiful digital experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Founder, FinSecure Solutions",
    content: "Their expertise in financial software development is unparalleled. They built a secure, compliant solution that perfectly addressed our regulatory requirements while maintaining excellent user experience.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Amanda Rodriguez",
    role: "Marketing Director, EcomGrowth",
    content: "The e-commerce platform they developed for us has been a game-changer. Sales conversion rates increased by 60%, and the integration with our marketing tools works flawlessly. Highly recommended for any e-commerce project!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Robert Thompson",
    role: "CEO, HealthTech Solutions",
    content: "Their understanding of healthcare software requirements was impressive. The patient management system they built for us is HIPAA-compliant, user-friendly, and has significantly improved our operational efficiency.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block text-gradient">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-1 mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            Hear what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="flex justify-between items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-white/5 p-3 rounded-full border border-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <motion.div
              className="flex items-center space-x-4 overflow-hidden"
            >
              {testimonials.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === index ? "w-8 bg-accent" : "w-2 bg-white/20"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </motion.div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-white/5 p-3 rounded-full border border-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
          
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8 md:p-12 shadow-lg"
            >
              <Quote className="text-accent/30 w-16 h-16 mb-6" />
              
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-foreground/90 italic">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-foreground/60 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-medium shadow-lg hover:shadow-accent/20 transition-all"
          >
            Work With Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
