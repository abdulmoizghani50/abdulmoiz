
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Alexander Wright",
    role: "CEO / Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    bio: "With over 15 years in software development and business leadership, Alex founded the company with a vision to create transformative digital solutions.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "mailto:alex@example.com"
    }
  },
  {
    id: 2,
    name: "Sophia Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "Leading our technical strategy and innovation, Sophia brings extensive experience in cloud architecture and enterprise software development.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "mailto:sophia@example.com"
    }
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Lead UI/UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    bio: "With a passion for creating beautiful, usable interfaces, Marcus oversees all aspects of user experience and interface design.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "mailto:marcus@example.com"
    }
  },
  {
    id: 4,
    name: "Alicia Rodriguez",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    bio: "Alicia specializes in full-stack development with the MERN stack and leads our development team with expertise and innovation.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "mailto:alicia@example.com"
    }
  },
  {
    id: 5,
    name: "David Kim",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "David ensures our development and deployment processes are streamlined, efficient, and secure across all client projects.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "mailto:david@example.com"
    }
  },
  {
    id: 6,
    name: "Emma Wilson",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=2070&auto=format&fit=crop",
    bio: "Emma excels at coordinating complex projects, ensuring they're delivered on time and exceed client expectations.",
    socialLinks: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "mailto:emma@example.com"
    }
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block text-gradient">
            Our Team
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-1 mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            Meet the talented professionals behind our innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-accent text-sm">{member.role}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-foreground/70 mb-4 text-sm">{member.bio}</p>
                
                <div className="flex space-x-3">
                  {Object.entries(member.socialLinks).map(([platform, link]) => {
                    const IconComponent = {
                      linkedin: Linkedin, 
                      twitter: Twitter, 
                      github: Github, 
                      email: Mail
                    }[platform];
                    
                    return (
                      <motion.a 
                        key={platform}
                        href={link} 
                        className="text-foreground/60 hover:text-accent transition-colors"
                        aria-label={`${platform} profile for ${member.name}`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <IconComponent size={18} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
