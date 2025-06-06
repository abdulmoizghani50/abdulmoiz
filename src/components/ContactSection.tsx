
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form handling with react-hook-form
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Using FormSpree for email handling
      const response = await fetch('https://formspree.io/f/mpzgpyqe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _replyto: data.email,
          _subject: `Contact Form: ${data.subject}`,
          email_to: 'babamoiz289@gmail.com'
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block text-gradient">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-1 mb-6"></div>
          <p className="text-foreground/80 max-w-3xl mx-auto text-lg">
            Feel free to reach out if you want to work together or just say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-glow">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground/90">Location</h4>
                    <p className="text-foreground/70 text-sm">New York, NY, USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground/90">Email</h4>
                    <p className="text-foreground/70 text-sm">babamoiz289@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground/90">Phone</h4>
                    <p className="text-foreground/70 text-sm">+1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-glow">Follow Me</h3>
              <p className="text-foreground/70 text-sm mb-4">
                Connect with me on these platforms for updates on my latest projects.
              </p>
              <div className="flex gap-4">
                {["github", "linkedin", "twitter", "dribbble"].map((social) => (
                  <a 
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent/20 transition-colors"
                    aria-label={`Follow on ${social}`}
                  >
                    <img src={`/${social}.svg`} alt={social} className="w-5 h-5 opacity-70" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-glow">Send Me a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-foreground/70 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors text-foreground"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-foreground/70 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors text-foreground"
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm text-foreground/70 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors text-foreground"
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-foreground/70 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", { required: "Message is required" })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors text-foreground resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-medium shadow-lg hover:shadow-accent/20 transition-all flex items-center justify-center gap-2 w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white/90 rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
