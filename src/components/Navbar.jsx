import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { number: '01.', text: 'Home', path: '/' },
    { number: '02.', text: 'Services', path: '/services' },
    { number: '03.', text: 'Resume', path: '/resume' },
    { number: '04.', text: 'About', path: '/about' },
    { number: '05.', text: 'Work', path: '/work' },
    { number: '06.', text: 'Blog', path: '/blog' }
  ];

  return (
    <>
      <motion.nav 
        className={`fixed w-full px-4 md:px-12 lg:px-24 py-4 bg-[#0a192f] z-50 transition-all duration-300 ${
          scrolled ? 'shadow-lg bg-opacity-90 backdrop-blur-sm' : 'bg-opacity-100'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-slate-200 hover:text-[#64ffda] transition-colors font-mono text-sm group relative whitespace-nowrap ${
                  location.pathname === item.path ? 'text-[#64ffda]' : ''
                }`}
              >
                <span className="text-[#64ffda]">{item.number}</span> {item.text}
                <span className={`absolute left-0 bottom-0 w-0 h-[1px] bg-[#64ffda] transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : 'w-0'
                }`}></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-5 py-2.5 bg-[#64ffda] text-[#0a192f] rounded-md font-mono text-sm font-semibold hover:bg-[#64ffda]/90 transition-all duration-300 transform hover:-translate-y-0.5 ${
                location.pathname === '/contact' ? 'shadow-lg' : ''
              }`}
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <div className="relative w-6 h-6">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="absolute top-0 left-0 w-6 h-0.5 bg-[#64ffda] block transition-transform origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                className="absolute top-[10px] left-0 w-6 h-0.5 bg-[#64ffda] block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#64ffda] block transition-transform origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-[min(75vw,400px)] bg-[#112240] md:hidden z-40 shadow-2xl overflow-y-auto"
            >
              <div className="flex flex-col items-center justify-center min-h-full py-20 px-6">
                <div className="space-y-8 md:space-y-12 text-center">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="block"
                    >
                      <Link
                        to={item.path}
                        className={`text-slate-200 hover:text-[#64ffda] transition-colors font-mono text-base md:text-lg inline-block ${
                          location.pathname === item.path ? 'text-[#64ffda]' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-[#64ffda] block text-sm mb-1">{item.number}</span>
                        {item.text}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      to="/contact"
                      className="px-8 py-3 bg-[#64ffda] text-[#0a192f] rounded-md font-mono text-base font-semibold inline-block hover:bg-[#64ffda]/90 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Hire Me
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
