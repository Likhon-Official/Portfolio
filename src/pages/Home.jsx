import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BlogSection from '../components/BlogSection';

const Home = () => {
  const [imageColor, setImageColor] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { number: "05+", text: "Years Experience" },
    { number: "120+", text: "Projects Completed" },
    { number: "50+", text: "Happy Clients" },
    { number: "10+", text: "Awards Won" }
  ];

  return (
    <>
      <motion.main 
        className="container mx-auto pt-16 md:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <motion.p 
                className="text-[#64ffda] font-mono text-base md:text-lg"
                variants={itemVariants}
              >
                Hi there! I'm [ Axtillar.]
              </motion.p>
              
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-200 leading-tight"
                variants={itemVariants}
              >
                LikHon Das
                <span className="text-[#64ffda]">.</span>
              </motion.h1>

              <motion.div 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-400"
                variants={itemVariants}
              >
                <TypeAnimation
                  sequence={[
                    'Web Developer',
                    2000,
                    'UI/UX Designer',
                    2000,
                    'Tech Enthusiast',
                    2000,
                    'Problem Solver',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="inline-block"
                  repeat={Infinity}
                />
              </motion.div>

              <motion.p 
                className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed"
                variants={itemVariants}
              >
                I craft exceptional digital experiences that live on the internet. 
                Specializing in building (and occasionally designing) remarkable 
                digital experiences that put user needs first.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <Link
                  to="/work"
                  className="px-6 py-3 md:px-8 md:py-4 bg-[#64ffda] text-[#0a192f] rounded-lg font-semibold hover:bg-[#64ffda]/90 transition-colors text-sm md:text-base"
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 md:px-8 md:py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-semibold hover:bg-[#64ffda]/10 transition-colors text-sm md:text-base"
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div 
                className="relative z-10 rounded-2xl overflow-hidden aspect-square bg-[#64ffda]/10 p-2 cursor-pointer"
                onClick={() => setImageColor(!imageColor)}
              >
                <motion.img
                  src="https://i.ibb.co.com/mV1527PQ/20250312-113125.jpg"
                  alt="LikHon Das"
                  className={`w-full h-full object-cover rounded-xl transition-all duration-1000 ease-in-out
                    ${imageColor? '' : 'grayscale'} hover:scale-105`}
                  initial={{ filter: "grayscale(100%)" }}
                  animate={{ filter: imageColor ? "grayscale(0%)" : "grayscale(100%)" }}
                  transition={{ duration: 1 }}
                />
                <div className={`absolute inset-0 bg-[#64ffda]/10 mix-blend-multiply rounded-xl transition-opacity duration-1000 ${imageColor ? 'opacity-0' : 'opacity-100'}`}></div>
              </div>
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 md:mt-24 lg:mt-32"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#112240] p-6 rounded-lg text-center group hover:bg-[#64ffda]/5 transition-colors duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="block text-2xl md:text-3xl lg:text-4xl font-bold text-[#64ffda] font-mono mb-2"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.number}
                </motion.span>
                <span className="text-sm md:text-base text-slate-400 font-mono">
                  {stat.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 md:mt-24 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-6">
            Featured Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 md:px-6 md:py-3 bg-[#112240] text-[#64ffda] rounded-full font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.main>

      {/* Blog Section */}
      <BlogSection />
    </>
  );
};

export default Home;
