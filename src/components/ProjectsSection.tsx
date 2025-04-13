
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Layout, Code } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  type: "ui-ux" | "web-dev";
};

const projects: Project[] = [
  {
    id: 1,
    title: "Islami Zone - E-learning Quran",
    description: "Comprehensive online Quran learning platform with courses for adults and children. Designed responsive UI, implemented with MERN stack (MongoDB, Express, React, Node.js) and deployed to production.",
    image: "public/lovable-uploads/4f867752-09df-453f-b2ec-f461912fd7df.png",
    tags: ["React", "MongoDB", "Express", "Node.js", "Responsive Design", "UI/UX"],
    liveUrl: "https://islamizone.com",
    githubUrl: "#",
    type: "web-dev"
  },
  {
    id: 2,
    title: "Biova Surgicals - E-commerce",
    description: "A comprehensive e-commerce platform for healthcare products and medical equipment. Implemented with MERN stack and integrated product management and order tracking systems.",
    image: "public/lovable-uploads/e7c89d01-9bd7-454b-9ea1-1dda749c002c.png",
    tags: ["React", "MongoDB", "Express", "Node.js", "E-commerce"],
    liveUrl: "https://biovasurgicals.com",
    githubUrl: "#",
    type: "web-dev"
  },
  {
    id: 3,
    title: "Islami Zone - UI/UX Design",
    description: "Complete UI/UX design for an online Quran learning platform featuring Islamic aesthetics, intuitive navigation, and responsive layouts for desktop and mobile devices.",
    image: "public/lovable-uploads/23e160c7-01c5-44b7-b048-29f32846bf0e.png",
    tags: ["Figma", "UI/UX", "Wireframing", "User Research", "Islamic Design", "Responsive"],
    liveUrl: "https://islamizone.com",
    githubUrl: "#",
    type: "ui-ux"
  },
  {
    id: 4,
    title: "Tabbaru - Charity Donation",
    description: "Comprehensive UI/UX design for a charity donation platform with analytics dashboards, campaign management, and donor tracking features. Features an intuitive interface with data visualization and Islamic charity categories.",
    image: "public/lovable-uploads/e4a7d2b6-3f0b-4098-b5c8-cbe7d55e2250.png",
    tags: ["Figma", "UI/UX", "Dashboard Design", "Analytics", "Charity Platform", "Data Visualization"],
    liveUrl: "#",
    githubUrl: "#",
    type: "ui-ux"
  },
  {
    id: 5,
    title: "Biova Surgicals - UI/UX Design",
    description: "Complete UI/UX design for a medical equipment e-commerce platform. The design focuses on showcasing premium surgical instruments with clear categorization, product details, and an intuitive checkout process.",
    image: "public/lovable-uploads/e7c89d01-9bd7-454b-9ea1-1dda749c002c.png",
    tags: ["Figma", "UI/UX", "E-commerce Design", "Product Catalog", "Medical Interface", "Responsive Design"],
    liveUrl: "https://biovasurgicals.com",
    githubUrl: "#",
    type: "ui-ux"
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  // Filter projects based on selected tab
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.type === activeTab);

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
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-1 mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            Explore our portfolio showcasing our expertise in web development and UI/UX design solutions.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <Tabs 
            defaultValue="all" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full max-w-md"
          >
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="all" className="flex items-center gap-2">
                All Projects
              </TabsTrigger>
              <TabsTrigger value="ui-ux" className="flex items-center gap-2">
                <Layout size={16} />
                UI/UX Design
              </TabsTrigger>
              <TabsTrigger value="web-dev" className="flex items-center gap-2">
                <Code size={16} />
                Web Dev
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
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
                      <span 
                        className={`text-xs px-2 py-1 rounded-full ${
                          project.type === "ui-ux" 
                            ? "bg-pink-500/30 text-pink-100" 
                            : "bg-blue-500/30 text-blue-100"
                        }`}
                      >
                        {project.type === "ui-ux" ? "UI/UX Design" : "Web Development"}
                      </span>
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
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
                      {project.tags.length > 2 && (
                        <motion.span 
                          className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/90"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          +{project.tags.length - 2}
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
          </motion.div>
        </AnimatePresence>

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
                
                <div className="flex items-center gap-2 mb-3">
                  <motion.h3 
                    className="text-2xl font-bold"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {activeProject.title}
                  </motion.h3>
                  <motion.span
                    className={`text-xs px-3 py-1 rounded-full ${
                      activeProject.type === "ui-ux" 
                        ? "bg-pink-500/30 text-pink-100" 
                        : "bg-blue-500/30 text-blue-100"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {activeProject.type === "ui-ux" ? "UI/UX Design" : "Web Development"}
                  </motion.span>
                </div>
                
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
                    {activeProject.type === "ui-ux" ? "View Design" : "Live Demo"}
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
