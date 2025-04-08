
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const services = [
    {
      icon: <Code2 className="w-6 h-6 text-accent" />,
      title: "Web Development",
      description: "Building responsive and performant web applications using React, Node.js, Express, and MongoDB."
    },
    {
      icon: <Layout className="w-6 h-6 text-accent" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with attention to user experience."
    },
    {
      icon: <Server className="w-6 h-6 text-accent" />,
      title: "Backend Development",
      description: "Developing robust backend systems and APIs using Node.js, Express and MongoDB."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-accent" />,
      title: "Interactive Animations",
      description: "Adding life to websites with smooth animations and interactive elements."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block text-gradient">
            About Our Company
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-1 mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            We're a leading software development company delivering innovative solutions to businesses worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-glow">Our Mission</h3>
            <p className="text-foreground/80 mb-4">
              With over a decade of experience in software development, we've built a reputation for delivering high-quality, scalable solutions that drive business growth and innovation.
            </p>
            <p className="text-foreground/80">
              Our mission is to transform businesses through technology, creating customized software solutions that solve complex challenges and create new opportunities for our clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-glow">Our Expertise</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-semibold">Full-Stack Development</h4>
                <p className="text-foreground/80 mt-1">End-to-end development solutions using cutting-edge technologies.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-semibold">Enterprise Solutions</h4>
                <p className="text-foreground/80 mt-1">Scalable systems for large organizations and growing businesses.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-semibold">Digital Transformation</h4>
                <p className="text-foreground/80 mt-1">Guiding companies through technological advancement and innovation.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
