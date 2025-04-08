
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server, Smartphone, Globe, Cloud, Braces, PenTool, LineChart, Lock, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6 text-accent" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business challenges and optimization needs."
    },
    {
      icon: <Globe className="w-6 h-6 text-accent" />,
      title: "Web Application Development",
      description: "Responsive, scalable web applications built with modern frameworks and technologies for optimal performance."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless experiences across all devices."
    },
    {
      icon: <Layout className="w-6 h-6 text-accent" />,
      title: "UI/UX Design",
      description: "User-centered design that emphasizes aesthetics, usability, and maximum user engagement."
    },
    {
      icon: <Cloud className="w-6 h-6 text-accent" />,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services to optimize your operational efficiency."
    },
    {
      icon: <Database className="w-6 h-6 text-accent" />,
      title: "Database Management",
      description: "Comprehensive database design, implementation, and optimization for maximum data integrity and performance."
    },
    {
      icon: <Server className="w-6 h-6 text-accent" />,
      title: "DevOps Services",
      description: "Streamlined development operations with continuous integration and deployment pipelines for faster releases."
    },
    {
      icon: <Lock className="w-6 h-6 text-accent" />,
      title: "Cybersecurity Solutions",
      description: "Robust security measures to protect your applications and data from external threats and vulnerabilities."
    },
    {
      icon: <Braces className="w-6 h-6 text-accent" />,
      title: "API Development & Integration",
      description: "Custom API development and third-party integrations to connect your systems and enhance functionality."
    },
    {
      icon: <PenTool className="w-6 h-6 text-accent" />,
      title: "Product Design",
      description: "End-to-end product design including wireframing, prototyping, and user testing for optimal product-market fit."
    },
    {
      icon: <LineChart className="w-6 h-6 text-accent" />,
      title: "Data Analytics",
      description: "Extract actionable insights from your data with custom analytics solutions and visualization tools."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Performance Optimization",
      description: "Enhance the speed and efficiency of your existing applications through expert optimization techniques."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block text-gradient">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-1 mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            We provide comprehensive software development and design services to help your business thrive in the digital era.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="glass-card rounded-xl p-6 shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-foreground/70 text-sm text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-medium shadow-lg hover:shadow-accent/20 transition-all flex items-center"
          >
            Discuss Your Project With Us
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute top-1/2 -right-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default ServicesSection;
