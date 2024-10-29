import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Home = () => {
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
    { number: "12+", text: "Years Experience" },
    { number: "120+", text: "Projects Completed" },
    { number: "50+", text: "Happy Clients" },
    { number: "10+", text: "Awards Won" }
  ];

  return (
    <motion.main 
      className="max-w-6xl mx-auto pt-20 md:pt-32 px-6 md:px-8 lg:px-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants} className="order-2 lg:order-1">
          <div className="space-y-6">
            <motion.p 
              className="text-[#64ffda] font-mono text-lg"
              variants={itemVariants}
            >
              Hi there! I'm
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-200 leading-tight"
              variants={itemVariants}
            >
              LikHon Das
              <span className="text-[#64ffda]">.</span>
            </motion.h1>

            <motion.div 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400"
              variants={itemVariants}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
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
              className="text-lg text-slate-400 max-w-xl leading-relaxed"
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
                className="px-8 py-4 bg-[#64ffda] text-[#0a192f] rounded-lg font-semibold hover:bg-[#64ffda]/90 transition-colors"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] rounded-lg font-semibold hover:bg-[#64ffda]/10 transition-colors"
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
          <div className="relative w-full max-w-md">
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-square bg-[#64ffda]/10 p-2">
              <img
                src="https://img.freepik.com/premium-photo/web-developer-digital-avatar-generative-ai_934475-9048.jpg"
                alt="LikHon Das"
                className="w-full h-full object-cover rounded-xl transition-all duration-500 
                  filter grayscale hover:grayscale-0 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#64ffda]/10 mix-blend-multiply rounded-xl"></div>
            </div>
            <div className="absolute inset-0 border-2 border-[#64ffda] rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-24 md:mt-32"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[#112240] p-6 rounded-lg text-center group hover:bg-[#64ffda]/5 transition-colors duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.span
                className="block text-4xl md:text-5xl font-bold text-[#64ffda] font-mono mb-2"
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
        className="mt-24 md:mt-32 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-8">
          Featured Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'].map((tech, index) => (
            <motion.span
              key={index}
              className="px-6 py-3 bg-[#112240] text-[#64ffda] rounded-full font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Home;