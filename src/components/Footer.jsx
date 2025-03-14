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
          className="max-w-7xl mx-auto mb-32 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Get in Touch Section */}
            <div className="relative">
              <motion.div 
                className="absolute -top-10 left-0 text-[120px] font-bold text-[#64ffda]/5 select-none pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Contact
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6">
                Let's Work <span className="text-[#64ffda]">Together</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-xl">
                Have a project in mind? Let's discuss how we can bring your ideas to life. 
                I'm always open to new opportunities and collaborations.
              </p>
              <Link to="/contact">
                <motion.button 
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded-lg font-semibold overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Get in Touch</span>
                  <motion.i 
                    className="ri-arrow-right-line relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="absolute inset-0 bg-[#0a192f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <span className="absolute inset-0 flex items-center justify-center gap-3 text-[#64ffda] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Get in Touch</span>
                    <i className="ri-arrow-right-line" />
                  </span>
                </motion.button>
              </Link>
            </div>

            {/* Shop Section */}
            <div className="relative bg-[#112240] p-8 rounded-2xl">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#64ffda]/10 rounded-full blur-2xl" />
              <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-[#64ffda]/10 rounded-full blur-2xl" />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-16 h-16 bg-[#64ffda]/10 rounded-xl flex items-center justify-center mb-6"
              >
                <i className="ri-store-2-line text-3xl text-[#64ffda]" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-200 mb-4">
                Premium <span className="text-[#64ffda]">Products</span>
              </h2>
              <p className="text-slate-400 mb-8">
                Explore my exclusive collection of premium products. Each item is crafted with attention 
                to detail and designed to provide exceptional value.
              </p>
              <a 
                href="https://axtillar.myspreadshop.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.button 
                  className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-semibold overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Visit Shop</span>
                  <motion.i 
                    className="ri-shopping-bag-line relative z-10"
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="absolute inset-0 bg-[#64ffda] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <span className="absolute inset-0 flex items-center justify-center gap-3 text-[#0a192f] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Visit Shop</span>
                    <i className="ri-shopping-bag-line" />
                  </span>
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      )}

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
                  target="_blank"
                  rel="noopener noreferrer"
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
