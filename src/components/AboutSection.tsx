
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-1 mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            I'm a passionate MERN stack developer and UI/UX designer with a keen eye for creating beautiful and functional web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-glow">My Journey</h3>
            <p className="text-foreground/80 mb-4">
              With over 5 years of experience in web development, I've worked on a wide range of projects from small business websites to complex enterprise applications. My passion for clean code and beautiful designs drives me to create exceptional digital experiences.
            </p>
            <p className="text-foreground/80">
              I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have a strong foundation in UI/UX design principles. I believe that great design combined with solid development creates the best user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold mb-4 text-glow">Education & Experience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-semibold">Senior MERN Developer</h4>
                <p className="text-sm text-foreground/60">2021 - Present</p>
                <p className="text-foreground/80 mt-1">Leading development of complex web applications using the MERN stack.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-semibold">UI/UX Designer</h4>
                <p className="text-sm text-foreground/60">2019 - 2021</p>
                <p className="text-foreground/80 mt-1">Designed user interfaces for web and mobile applications.</p>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <h4 className="font-semibold">BSc in Computer Science</h4>
                <p className="text-sm text-foreground/60">2015 - 2019</p>
                <p className="text-foreground/80 mt-1">University with focus on web technologies and design.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-12 text-glow">What I Do</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover:shadow-accent/10 transition-all duration-300 group"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-foreground/70 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
