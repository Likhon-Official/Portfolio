import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const links = [
    { icon: "github", href: "https://github.com/Axtillar", label: "GitHub" },
    { icon: "instagram", href: "https://www.instagram.com/axtillar", label: "Instagram" },
    { icon: "twitter", href: "https://x.com/Axtillar", label: "Twitter" },
    { icon: "linkedin", href: "https://www.linkedin.com/in/axtillar", label: "LinkedIn" },
    { icon: "dribbble", href: "https://dribbble.com/Axtillar", label: "Dribbble" }
  ];

  const footerLinks = [
    { text: "About", href: "/about" },
    { text: "Work", href: "/work" },
    { text: "Contact", href: "/contact" },
    { text: "Resume", href: "/resume" }
  ];

  return (
    <footer className="relative pt-24 pb-12">
      {location.pathname !== '/contact' && (
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#64ffda] font-mono mb-4 text-lg">What's Next?</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6">Get In Touch</h3>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hello, I'll get back to you as soon as possible!
          </p>
          <Link to="/contact">
            <motion.button 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-mono text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">Say Hello</span>
              <i className="ri-send-plane-line relative z-10 transition-transform duration-300 group-hover:translate-x-2"></i>
              <div className="absolute inset-0 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center gap-2 text-[#0a192f] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Say Hello</span>
                <i className="ri-send-plane-line"></i>
              </span>
            </motion.button>
          </Link>
        </motion.div>
      )}

      {/* Shop Section */}
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-20 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-[#64ffda] font-mono mb-4 text-lg">Discover My Shop</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-200 mb-6">Exclusive Digital Products</h3>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Explore my collection of premium digital assets, templates, and tools designed to elevate your projects.
        </p>
        <a 
          href="https://shop.axtillar.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <motion.button 
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded-lg font-mono text-lg overflow-hidden"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Visit Shop</span>
            <i className="ri-shopping-bag-line relative z-10"></i>
            <div className="absolute inset-0 bg-[#0a192f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center gap-2 text-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Visit Shop</span>
              <i className="ri-shopping-bag-line"></i>
            </span>
          </motion.button>
        </a>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block">
              <motion.div 
                className="w-12 h-12 border-2 border-[#64ffda] text-[#64ffda] flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-2xl font-bold">A</span>
              </motion.div>
            </Link>
            <p className="text-slate-400 max-w-sm">
              Building digital experiences that make a difference. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-slate-200 font-mono mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
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
          <div className="text-center md:text-right">
            <h4 className="text-slate-200 font-mono mb-4">Contact</h4>
            <div className="space-y-2 text-slate-400">
              <p>Cumilla, Bangladesh</p>
              <p>LikhonOfficial@Hotmail.com</p>
              <p>+880 9611-530351</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800 pt-8">
          <ul className="flex justify-center space-x-6 mb-8">
            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  aria-label={link.label}
                  className="text-slate-400 hover:text-[#64ffda] transition-all duration-300"
                >
                  <motion.i 
                    className={`ri-${link.icon}-line text-xl`}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="text-center">
            <motion.p 
              className="text-slate-400 font-mono text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-[#64ffda]">&copy; {currentYear}</span> Built with 
              <motion.i 
                className="ri-heart-fill mx-1 text-[#64ffda]"
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
              by <span className="text-[#64ffda]">Lik Ho N!</span>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
