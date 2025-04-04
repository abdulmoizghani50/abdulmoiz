
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type SkillCategory = {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Redux", level: 80 },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "Socket.IO", level: 70 },
    ]
  },
  {
    name: "Design",
    skills: [
      { name: "UI/UX Design", level: 88 },
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Responsive Design", level: 92 },
      { name: "Prototyping", level: 85 },
      { name: "Design Systems", level: 78 },
    ]
  },
  {
    name: "Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Docker", level: 65 },
      { name: "Jest", level: 75 },
      { name: "Agile/Scrum", level: 85 },
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
            My Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-1 mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            A comprehensive overview of my technical skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-6 inline-block relative">
                {category.name}
                <span className="absolute left-0 bottom-0 w-12 h-1 bg-accent"></span>
              </h3>
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
                          categoryIndex === 1 ? "bg-glow-teal" :
                          categoryIndex === 2 ? "bg-glow-purple" :
                          "bg-glow-pink"
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
          className="mt-16 glass-card rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-bold mb-6">Technologies & Tools I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Node.js", "Express", "MongoDB", "JavaScript", 
              "TypeScript", "Redux", "Tailwind CSS", "Git", "Figma", 
              "Adobe XD", "Webpack", "Jest", "GraphQL", "Next.js", 
              "Socket.IO", "AWS", "Docker", "PostgreSQL"
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
      </div>
    </section>
  );
};

export default SkillsSection;
