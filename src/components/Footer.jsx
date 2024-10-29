import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const links = [
    { icon: "github", href: "#", label: "GitHub" },
    { icon: "instagram", href: "#", label: "Instagram" },
    { icon: "twitter", href: "#", label: "Twitter" },
    { icon: "linkedin", href: "#", label: "LinkedIn" },
    { icon: "codepen", href: "#", label: "CodePen" },
  ];

  return (
    <footer className="py-12 md:py-16 mt-16 md:mt-24 px-4 md:px-0">
      {location.pathname !== '/contact' && (
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#64ffda] font-mono mb-4 text-base md:text-lg">What's Next!</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6">Get In Touch</h3>
          <p className="text-base md:text-lg text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto break-words">
            Although I'm not currently looking for any new opportunities, my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <Link to="/contact">
            <motion.button 
              className="inline-block border-2 border-[#64ffda] text-[#64ffda] px-6 md:px-8 py-3 md:py-4 rounded font-mono text-base md:text-lg hover:bg-[#64ffda]/10 transition-colors"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              Say Hello
            </motion.button>
          </Link>
        </motion.div>
      )}

      <ul className="flex justify-center space-x-6 mb-6">
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
              className="text-slate-400 hover:text-[#64ffda] transition-all duration-200 block"
            >
              <i className={`ri-${link.icon}-line text-xl`}></i>
            </a>
          </motion.li>
        ))}
      </ul>
      
      <motion.p 
        className="text-center text-slate-400 font-mono text-xs md:text-sm break-words"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Designed and built by Axtillar
      </motion.p>
    </footer>
  );
};

export default Footer;