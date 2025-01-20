import { motion } from 'framer-motion';

function About() {
  const skills = [
    { name: "JavaScript", level: 90, color: "#F7DF1E" },
    { name: "React", level: 85, color: "#61DAFB" },
    { name: "Node.js", level: 80, color: "#339933" },
    { name: "TypeScript", level: 75, color: "#3178C6" },
    { name: "Python", level: 70, color: "#3776AB" },
    { name: "AWS", level: 65, color: "#FF9900" }
  ];

  const interests = [
    { 
      icon: "code-box-line", 
      title: "Programming",
      description: "Building elegant solutions to complex problems",
      color: "#64ffda"
    },
    { 
      icon: "terminal-box-line", 
      title: "Open Source",
      description: "Contributing to the developer community",
      color: "#FF6B6B"
    },
    { 
      icon: "gamepad-line", 
      title: "Gaming",
      description: "Strategy and RPG games enthusiast",
      color: "#4ECDC4"
    },
    { 
      icon: "book-line", 
      title: "Reading",
      description: "Tech blogs and sci-fi novels",
      color: "#96F7D2"
    }
  ];

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto pt-32 pb-24"
    >
      <header className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[#64ffda] font-mono mb-4">04. About Me</h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6">
            Know Who I Am
          </h2>
        </motion.div>
      </header>

      {/* Story Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-12 items-center mb-24"
      >
        <motion.div variants={itemVariants} className="order-2 md:order-1">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-400 mb-6">
              Hello! I'm LikHon, a passionate software developer based in San Francisco, CA. 
              I enjoy creating things that live on the internet, whether that be websites, 
              applications, or anything in between.
            </p>
            <p className="text-lg text-slate-400 mb-6">
              My journey in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught 
              me a lot about HTML & CSS!
            </p>
            <p className="text-lg text-slate-400">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, 
              a start-up, a huge corporation, and a student-led design studio. My main focus these 
              days is building accessible, inclusive products and digital experiences.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="order-1 md:order-2">
          <div className="relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden bg-[#64ffda]/10 p-2">
              <img
                src="https://i.postimg.cc/HxYf1Kx9/Picsart-25-01-16-23-20-18-818-5.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-xl transition-all duration-500 
                  filter grayscale hover:grayscale-0 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#64ffda]/10 mix-blend-multiply rounded-xl"></div>
            </div>
            <div className="absolute inset-0 border-2 border-[#64ffda] rounded-2xl -z-10 translate-x-4 translate-y-4 
              transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-24"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-slate-200 mb-8 text-center">
          Skills & Expertise
        </motion.h2>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#112240] p-6 rounded-lg hover:shadow-lg transition-all duration-300 group"
              style={{
                background: `linear-gradient(135deg, ${skill.color}10, #112240)`
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl text-slate-200">{skill.name}</h3>
                <span className="text-[#64ffda] font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-[#0a192f] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Interests Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-slate-200 mb-8 text-center">
          Interests & Hobbies
        </motion.h2>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#112240] p-6 rounded-lg text-center group hover:shadow-lg transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${interest.color}10, #112240)`
              }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${interest.color}20` }}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <i className={`ri-${interest.icon} text-3xl`} style={{ color: interest.color }}></i>
              </motion.div>
              <h3 className="text-xl text-slate-200 mb-2">{interest.title}</h3>
              <p className="text-slate-400">{interest.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default About;
