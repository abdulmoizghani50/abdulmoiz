
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Code, Server, Layout, Globe, Database, Shield, Cpu, Cloud, GitBranch, BarChart, Bot, Sparkles, Brain, BrainCircuit } from 'lucide-react';
import { Badge } from './ui/badge';

type ExpertiseCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
};

const expertiseCategories: ExpertiseCategory[] = [
  {
    name: "Web Development",
    icon: <Globe className="w-6 h-6 text-accent" />,
    skills: [
      { name: "React", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Redux", level: 85 },
    ]
  },
  {
    name: "AI & Machine Learning",
    icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    skills: [
      { name: "Custom AI Chatbots", level: 92 },
      { name: "RAG Systems", level: 90 },
      { name: "LLM Fine-tuning", level: 85 },
      { name: "Agentic AI Development", level: 88 },
      { name: "Vector Databases", level: 87 },
      { name: "AI Integration", level: 90 },
    ]
  },
  {
    name: "Backend Services",
    icon: <Server className="w-6 h-6 text-accent" />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "RESTful APIs", level: 92 },
      { name: "GraphQL", level: 80 },
      { name: "Socket.IO", level: 78 },
    ]
  },
  {
    name: "Design & UI/UX",
    icon: <Layout className="w-6 h-6 text-accent" />,
    skills: [
      { name: "UI/UX Design", level: 88 },
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 82 },
      { name: "Responsive Design", level: 95 },
      { name: "Design Systems", level: 88 },
      { name: "Prototyping", level: 85 },
    ]
  },
  {
    name: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6 text-accent" />,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "CI/CD", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Docker", level: 78 },
      { name: "Kubernetes", level: 75 },
      { name: "Azure", level: 75 },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block text-gradient">
            Our Expertise
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-1 mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            We deliver cutting-edge solutions with industry-leading technologies and methodologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center mb-6 gap-3">
                {category.icon}
                <h3 className="text-xl font-bold relative">
                  {category.name}
                  <span className="absolute left-0 -bottom-2 w-12 h-1 bg-accent"></span>
                </h3>
              </div>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-foreground/90">{skill.name}</span>
                      <span className="text-sm text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + skillIndex * 0.1 }}
                        className={cn(
                          "h-full rounded-full",
                          categoryIndex === 0 ? "bg-glow-blue" :
                          categoryIndex === 1 ? "bg-glow-purple" :
                          categoryIndex === 2 ? "bg-glow-teal" :
                          categoryIndex === 3 ? "bg-glow-pink" :
                          "bg-glow-orange"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 glass-card rounded-xl p-8"
        >
          <div className="flex items-center justify-center mb-6">
            <GitBranch className="w-6 h-6 text-accent mr-3" />
            <h3 className="text-xl font-bold">Technologies We Work With</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Angular", "Vue.js", "Next.js", "Node.js", 
              "Express", "MongoDB", "PostgreSQL", "JavaScript", 
              "TypeScript", "Redux", "Tailwind CSS", "Git", "Figma", 
              "Adobe XD", "Webpack", "Jest", "GraphQL", "AWS", 
              "Docker", "Kubernetes", "CI/CD", "Azure", "Firebase",
              "OpenAI", "LangChain", "Pinecone", "Hugging Face", 
              "TensorFlow", "PyTorch", "Qdrant", "Chroma DB", "LlamaIndex"
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">AI & GenAI Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex justify-center mb-4">
                <Bot className="w-10 h-10 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-center">Custom AI Chatbots</h4>
              <p className="text-sm text-center text-foreground/70">
                Tailored AI assistants trained on your specific data, documentation, and knowledge base.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex justify-center mb-4">
                <Brain className="w-10 h-10 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-center">Agentic AI Systems</h4>
              <p className="text-sm text-center text-foreground/70">
                Autonomous AI agents that can perform complex tasks and make decisions with minimal human intervention.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex justify-center mb-4">
                <Sparkles className="w-10 h-10 text-accent" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-center">GenAI Integration</h4>
              <p className="text-sm text-center text-foreground/70">
                Seamless integration of generative AI capabilities into your existing products and workflows.
              </p>
            </motion.div>
          </div>
          
          <p className="text-foreground/70 max-w-2xl mx-auto">
            With a proven track record of successful AI implementations, our team consistently maintains high standards of quality and innovation in every solution we provide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
