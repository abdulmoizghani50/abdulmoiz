
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A full-stack MERN application with real-time analytics, inventory management, and payment processing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "MongoDB", "Express", "Node.js", "Redux"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Social Media Platform",
    description: "A responsive social media application with real-time chat, post sharing, and user authentication.",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2080&auto=format&fit=crop",
    tags: ["React", "Socket.IO", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A beautiful and intuitive task management tool with drag-and-drop functionality and team collaboration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Travel Booking Platform",
    description: "A comprehensive travel booking website with destination search, booking management, and payment integration.",
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop",
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block text-gradient">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-1 mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            Here are some of my latest projects showcasing my skills in MERN stack development and UI/UX design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setActiveProject(project)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden h-60">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500"
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-xl font-bold mb-1 text-white">{project.title}</h3>
                  <motion.div 
                    className="flex flex-wrap gap-2 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span 
                        key={tag} 
                        className="text-xs px-2 py-1 rounded-full bg-accent/20 text-white/90"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * tagIndex }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <motion.span 
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/90"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        +{project.tags.length - 3}
                      </motion.span>
                    )}
                  </motion.div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <motion.a 
                      href={project.githubUrl} 
                      className="text-foreground/60 hover:text-accent transition-colors"
                      aria-label="GitHub repository"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a 
                      href={project.liveUrl} 
                      className="text-foreground/60 hover:text-accent transition-colors"
                      aria-label="Live project"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                  <motion.button 
                    className="text-sm text-accent hover:underline transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div 
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ 
                  type: "spring", 
                  damping: 20, 
                  stiffness: 300 
                }}
                className="max-w-3xl w-full bg-card rounded-xl p-6 md:p-8 max-h-[90vh] overflow-y-auto neo-border relative"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="absolute top-4 right-4 z-10 bg-background/50 backdrop-blur-sm rounded-full p-2"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveProject(null)}
                >
                  <X className="text-white" size={20} />
                </motion.button>

                <motion.div 
                  className="rounded-lg overflow-hidden mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {activeProject.title}
                </motion.h3>
                
                <motion.p 
                  className="text-foreground/80 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {activeProject.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {activeProject.tags.map((tag, index) => (
                    <motion.span 
                      key={tag} 
                      className="text-xs px-3 py-1 rounded-full bg-accent/20 text-white/90"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex space-x-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a 
                    href={activeProject.liveUrl} 
                    className="px-5 py-2 rounded-lg bg-accent text-accent-foreground font-medium shadow-lg hover:shadow-accent/20 transition-all"
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: "#33a8b5" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a 
                    href={activeProject.githubUrl} 
                    className="px-5 py-2 rounded-lg bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2"
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} /> View Code
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
