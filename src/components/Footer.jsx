import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "github", href: "#", label: "GitHub" },
    { icon: "instagram", href: "#", label: "Instagram" },
    { icon: "twitter", href: "#", label: "Twitter" },
    { icon: "linkedin", href: "#", label: "LinkedIn" },
    { icon: "dribbble", href: "#", label: "Dribbble" }
  ];

  const quickLinks = [
    { text: "About", href: "/about" },
    { text: "Work", href: "/work" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" }
  ];

  return (
    <footer className="relative pt-32 pb-8">
      {/* Get In Touch Section */}
      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center mb-24 px-6">
          <motion.h2 
            className="text-[#64ffda] font-mono mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What's Next?
          </motion.h2>
          <motion.h3 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get In Touch
          </motion.h3>
          <motion.p 
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Currently available for freelance work and collaborations. 
            Feel free to reach out if you have an exciting project in mind!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              to="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] 
                rounded-lg font-mono text-lg relative group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-[#0a192f] transition-colors duration-300">
                Say Hello
              </span>
              <div className="absolute inset-0 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 
                transition-transform duration-300 origin-left"></div>
            </Link>
          </motion.div>
        </div>
      </ScrollReveal>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <motion.div 
                  className="w-12 h-12 border-2 border-[#64ffda] text-[#64ffda] flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-2xl font-bold">A</span>
                </motion.div>
              </Link>
              <p className="text-slate-400 max-w-sm">
                Building digital experiences that make a difference. 
                Let's create something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-slate-200 font-mono mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link 
                      to={link.href}
                      className="text-slate-400 hover:text-[#64ffda] transition-colors"
                    >
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-slate-200 font-mono mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="text-slate-400">
                  <a href="mailto:LikhonOfficial@Hotmail.com" 
                    className="hover:text-[#64ffda] transition-colors">
                    LikhonOfficial@Hotmail.com
                  </a>
                </li>
                <li className="text-slate-400">San Francisco, CA</li>
                <li className="text-slate-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Social Links & Copyright */}
        <ScrollReveal delay={0.3}>
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-wrap justify-between items-center gap-6">
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="text-slate-400 hover:text-[#64ffda] transition-colors"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <i className={`ri-${link.icon}-line text-xl`}></i>
                  </motion.a>
                ))}
              </div>
              <p className="text-slate-400 font-mono text-sm">
                <span className="text-[#64ffda]">&copy; {currentYear}</span>
                {" "}Built with{" "}
                <motion.i 
                  className="ri-heart-fill mx-1 text-[#64ffda] inline-block"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
                {" "}by <span className="text-[#64ffda]">Axtillar</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
